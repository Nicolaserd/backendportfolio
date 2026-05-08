# Reglas de Arquitectura y Desarrollo

## Objetivo

Este documento define reglas base para construir y mantener una aplicacion backend en **NestJS** con una arquitectura **generica, modular y escalable**, preparada para crecer con nuevas entidades, servicios y casos de uso sin introducir deuda tecnica innecesaria.

La base inicial del dominio contempla:

- `Comentario`
- `Persona`

Sin embargo, estas reglas deben aplicarse de forma general para cualquier entidad futura.

## Regla principal antes de implementar

Antes de escribir, modificar o generar cualquier codigo se debe analizar la arquitectura actual del proyecto:

- patrones usados
- estructura de carpetas
- dependencias existentes
- flujo de datos entre capas
- modulos, servicios, repositorios, DTOs y entidades ya implementadas

Ninguna implementacion debe hacerse asumiendo estructura o patrones sin validarlos primero en el proyecto real.

## Criterios obligatorios de evaluacion

Antes de desarrollar una funcionalidad, siempre evaluar si:

1. Puede resolverse reutilizando componentes, modulos o servicios existentes.
2. Requiere extender un componente ya implementado.
3. Realmente justifica crear un nuevo componente.

La prioridad debe ser:

1. Reutilizar
2. Extender
3. Crear

## Reglas de arquitectura

Toda implementacion debe:

- Respetar la arquitectura definida del proyecto.
- Mantener separacion clara de responsabilidades.
- Seguir principios SOLID.
- Favorecer modularidad por dominio o entidad.
- Evitar duplicacion de logica siguiendo DRY.
- Mantener consistencia con nombres, convenciones y estilo del proyecto.

Si una solucion rompe la arquitectura, acopla capas de forma incorrecta o introduce deuda tecnica, se debe proponer una alternativa mas alineada antes de implementar.

## Enfoque del sistema

La arquitectura debe estar orientada a **entidades de dominio**, no a soluciones rigidas para un unico caso.

La primera entidad principal sera `Comentario`, pero la estructura debe permitir incorporar facilmente nuevas entidades como:

- reacciones
- categorias
- publicaciones
- respuestas
- archivos adjuntos
- auditorias
- cualquier otra entidad futura

Por esta razon:

- las reglas no deben depender solo de `Comentario`
- los patrones elegidos deben ser reutilizables
- la estructura debe permitir crecimiento horizontal del dominio

## Entidades iniciales

### Comentario

Entidad principal inicial con atributos como:

- `id`
- `contenido`
- `descripcion`
- `cantidadLikes`
- `fecha`
- `nombrePersona`

Notas:

- Si `nombrePersona` existe solo como dato visual o historico, debe evaluarse si pertenece realmente a `Comentario` o si debe obtenerse desde la relacion con `Persona`.
- Se debe evitar duplicar informacion si ya existe una fuente de verdad en otra entidad.

### Persona

Entidad relacionada con `Comentario`, con atributos base:

- `id`
- `nombre`
- `correo` opcional

Notas:

- `Persona` debe modelarse como entidad reutilizable para futuras relaciones con otras entidades.
- El correo debe considerarse opcional solo si el caso de negocio lo permite.

## Relaciones entre entidades

Inicialmente, una `Persona` puede estar ligada a uno o varios `Comentario`.

La arquitectura debe permitir:

- agregar nuevas relaciones sin rehacer la base
- desacoplar logica de persistencia de la logica de negocio
- evolucionar reglas de negocio por entidad sin afectar otras capas innecesariamente

## Estructura recomendada en NestJS

La organizacion debe ser modular y orientada por dominio. Como guia general:

```text
src/
  modules/
    comentarios/
      comentarios.module.ts
      comentarios.controller.ts
      comentarios.service.ts
      dto/
      entities/
      application/
      domain/
      infrastructure/
      presentation/
    personas/
      personas.module.ts
      personas.controller.ts
      personas.service.ts
      dto/
      entities/
      application/
      domain/
      infrastructure/
      presentation/
```

Si el proyecto usa una estructura distinta, se debe respetar la estructura existente siempre que mantenga separacion clara de capas.

## Regla de estructura visible en NestJS

Aunque internamente se use una arquitectura por capas o por dominio, cada modulo debe exponer de forma visible una estructura reconocible de NestJS:

- `module`
- `controller`
- `service`
- `dto`
- `entity`

Esto significa que como minimo cada modulo debe dejar claros estos elementos:

- un archivo `*.module.ts` para registrar dependencias
- un archivo `*.controller.ts` para entrada HTTP
- un archivo `*.service.ts` para orquestacion de negocio del modulo
- una carpeta `dto/` para contratos de entrada y salida
- una carpeta `entities/` para entidades visibles del modulo

Si internamente existe una capa adicional como `application`, `domain`, `infrastructure` o `presentation`, se permite, pero no debe ocultar la estructura principal esperada en NestJS.

## Responsabilidad por capas

### `domain`

Contiene:

- entidades
- interfaces de repositorio
- reglas de negocio puras
- value objects si aplican

No debe depender de frameworks.

### `application`

Contiene:

- casos de uso
- servicios de aplicacion
- coordinacion entre dominio y persistencia
- DTOs internos de entrada y salida si el proyecto lo requiere

No debe contener detalles de framework innecesarios ni acceso directo acoplado a infraestructura.

### `infrastructure`

Contiene:

- implementaciones de repositorios
- integraciones externas
- ORM o adaptadores de base de datos
- mapeadores entre persistencia y dominio

### `presentation`

Contiene:

- controllers
- services expuestos al modulo si funcionan como fachada de NestJS
- DTOs de API
- validaciones de entrada
- contratos HTTP

No debe contener logica de negocio compleja.

## Reglas para nuevas entidades

Cada nueva entidad futura debe seguir estas reglas:

- tener responsabilidad clara
- pertenecer a un modulo o dominio identificable
- no mezclar logica de varias entidades en un mismo servicio sin necesidad
- usar contratos e interfaces cuando ayuden a desacoplar implementaciones
- compartir componentes solo cuando sean realmente genericos

Si una funcionalidad es transversal, debe abstraerse de forma reutilizable sin contaminar modulos de dominio.

## Reglas para servicios

Los servicios deben ser pequenos, claros y enfocados.

Se debe evitar:

- servicios gigantes con demasiadas responsabilidades
- logica de negocio en controllers
- acceso directo a persistencia desde capas que no correspondan
- duplicacion de validaciones o transformaciones

Cuando aparezcan nuevos servicios:

- validar primero si uno existente puede ampliarse
- crear uno nuevo solo si representa una responsabilidad distinta

## Reglas para comentarios en el codigo

Los comentarios deben ser minimos y utiles.

Solo se permiten comentarios cuando expliquen:

- funcionamiento importante
- decisiones no obvias
- reglas de negocio relevantes
- comportamiento general de funciones, componentes o bloques complejos

No agregar comentarios redundantes que describan lo obvio.

## Reglas de modelado

Al modelar entidades:

- definir atributos con sentido de negocio
- evitar campos duplicados si ya existe una relacion que los representa
- distinguir claramente entre modelos de dominio, DTOs y modelos de persistencia
- permitir crecimiento sin romper contratos existentes

Se recomienda evaluar desde el inicio:

- campos obligatorios y opcionales
- relaciones entre entidades
- restricciones de integridad
- posibilidad de auditoria futura
- escalabilidad para filtros, paginacion y ordenamiento

## Regla de coherencia tecnica

Antes de aceptar una implementacion, verificar:

- si reutiliza lo existente cuando corresponde
- si mantiene consistencia con el proyecto
- si evita deuda tecnica evitable
- si la nueva pieza encaja naturalmente en la arquitectura

Si no cumple esto, debe rediseñarse antes de codificar.

## Decision por defecto

Ante cualquier nueva funcionalidad:

1. Analizar la arquitectura actual.
2. Identificar si existe algo reutilizable.
3. Extender solo si la responsabilidad sigue siendo coherente.
4. Crear nuevos componentes solo cuando sea necesario.
5. Mantener la solucion orientada a entidades y crecimiento futuro.

## Nota de contexto actual

En el estado actual no se detecta una estructura implementada en esta carpeta, por lo que este documento funciona como **base arquitectonica inicial** para el proyecto. Cuando exista codigo real, estas reglas deben reinterpretarse a partir de la arquitectura efectivamente adoptada.

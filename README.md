# BackendPortfolio

Backend en NestJS para registrar y consultar comentarios con usuarios asociados, usando PostgreSQL en Supabase.

## Levantar el proyecto

```bash
npm install
npm run start:dev
```

El proyecto requiere un archivo `.env` valido para la conexion a base de datos.

Servidor por defecto:

```text
http://localhost:3000
```

## Endpoints HTTP

### `POST /comentarios`

Crea un usuario y su comentario asociado.

#### Body

```json
{
  "nombre_usuario": "Nicolas",
  "comentario": "Hola mundo",
  "correo": "nicolas@email.com"
}
```

#### Reglas

- `nombre_usuario` es obligatorio
- `comentario` es obligatorio
- `correo` es opcional
- no se permiten campos extra
- se bloquea contenido sospechoso tipo script
- `cantidadLikes` se guarda en `0`

#### Respuesta exitosa

```json
{
  "usuario": {
    "id": "5d3c0b09-48bb-4de1-970b-0c7e9d02ce77",
    "nombre": "Nicolas",
    "correo": "nicolas@email.com"
  },
  "comentario": {
    "id": "06c67d68-94e4-4d0f-a6c0-26dc0bfbc0e5",
    "contenido": "Hola mundo",
    "cantidadLikes": 0,
    "fechaCreacion": "2026-05-07 16:25:10"
  }
}
```

#### Ejemplo con `curl`

```bash
curl -X POST http://localhost:3000/comentarios \
  -H "Content-Type: application/json" \
  -d "{\"nombre_usuario\":\"Nicolas\",\"comentario\":\"Hola mundo\",\"correo\":\"nicolas@email.com\"}"
```

#### Posibles errores

```json
{
  "statusCode": 400,
  "error": "Request Error",
  "message": [
    "nombre_usuario es obligatorio."
  ],
  "timestamp": "2026-05-07T21:25:10.000Z"
}
```

### `GET /comentarios`

Lista comentarios paginados.

#### Query params

- `page`: numero de pagina, minimo `1`
- `itemsPorPagina`: cantidad por pagina, minimo `1`, maximo `10`

Si no se envian, por defecto:

- `page = 1`
- `itemsPorPagina = 10`

#### Ejemplo

```http
GET /comentarios?page=1&itemsPorPagina=10
```

#### Respuesta exitosa

```json
{
  "page": 1,
  "itemsPerPage": 10,
  "totalItems": 24,
  "totalPages": 3,
  "items": [
    {
      "idUsuario": "5d3c0b09-48bb-4de1-970b-0c7e9d02ce77",
      "idComentario": "06c67d68-94e4-4d0f-a6c0-26dc0bfbc0e5",
      "nombreUsuario": "Nicolas",
      "corazonesRecibidos": 0,
      "comentario": "Hola mundo"
    },
    {
      "idUsuario": "2c3a0f47-8ab5-4fd3-a2aa-6054aa0ab912",
      "idComentario": "507f6538-c1d7-4312-b7f2-39467d3aa021",
      "nombreUsuario": "Ana",
      "corazonesRecibidos": 5,
      "comentario": "Muy buen proyecto"
    }
  ]
}
```

#### Ejemplo con `curl`

```bash
curl "http://localhost:3000/comentarios?page=1&itemsPorPagina=10"
```

### `GET /comentarios/total`

Devuelve el numero total de comentarios registrados.

#### Ejemplo

```http
GET /comentarios/total
```

#### Respuesta exitosa

```json
{
  "totalComentarios": 3
}
```

#### Ejemplo con `curl`

```bash
curl "http://localhost:3000/comentarios/total"
```

### `POST /comentarios/corazones`

Suma `1` corazon a un comentario existente por cada llamada al endpoint.

#### Body

```json
{
  "comentario_id": "06c67d68-94e4-4d0f-a6c0-26dc0bfbc0e5"
}
```

#### Reglas

- `comentario_id` es obligatorio
- `comentario_id` debe ser un UUID valido
- si el comentario no existe, responde error
- cada llamada incrementa `cantidad_likes` en `1`

#### Respuesta exitosa

```json
{
  "comentarioId": "06c67d68-94e4-4d0f-a6c0-26dc0bfbc0e5",
  "corazonesRecibidos": 1
}
```

#### Ejemplo con `curl`

```bash
curl -X POST http://localhost:3000/comentarios/corazones \
  -H "Content-Type: application/json" \
  -d "{\"comentario_id\":\"06c67d68-94e4-4d0f-a6c0-26dc0bfbc0e5\"}"
```

#### Posibles errores

```json
{
  "statusCode": 404,
  "error": "Request Error",
  "message": "No existe un comentario con ese id.",
  "timestamp": "2026-05-07T21:25:10.000Z"
}
```

## Base de datos

El esquema SQL base esta en:

- [supabase-schema.sql](c:/Users/Nicolas/Desktop/Proyect/BackendPortfolio/supabase-schema.sql:1)

Incluye:

- tabla `usuarios`
- tabla `comentarios`
- relacion `comentarios.usuario_id -> usuarios.id`

## Notas

- La validacion global rechaza propiedades no permitidas.
- El endpoint de creacion usa una transaccion para guardar usuario y comentario de forma atomica.
- La fecha de creacion se maneja con referencia a `America/Bogota`.
# backendportfolio

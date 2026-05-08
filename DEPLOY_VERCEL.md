# Deploy en Vercel (Backend NestJS)

## 1. Requisitos

- Cuenta en Vercel
- Proyecto en GitHub/GitLab/Bitbucket (recomendado)
- Base de datos PostgreSQL activa (Supabase)

## 2. Variables de entorno

Debes cargar estas variables en Vercel:

- `DB_HOST`
- `DB_PORT`
- `DB_USERNAME`
- `DB_PASSWORD`
- `DB_NAME`

Referencia local: `.env.example`.

## 3. Configuracion incluida en este repo

- `vercel.json`: enruta todo a `api/index.ts`
- `api/index.ts`: adapta NestJS para runtime serverless de Vercel

## 4. Deploy desde dashboard de Vercel

1. Importa el repositorio en Vercel.
2. Entra a `Settings > Environment Variables`.
3. Registra las variables indicadas arriba.
4. Lanza el primer deploy.

## 5. Deploy por CLI (opcional)

```bash
npm i -g vercel
vercel login
vercel
```

Produccion:

```bash
vercel --prod
```

## 6. Verificacion post-deploy

Probar endpoint:

```bash
curl "https://TU_DOMINIO.vercel.app/comentarios/total"
```

Tambien puedes probar:

```bash
curl "https://TU_DOMINIO.vercel.app/comentarios?page=1&itemsPorPagina=10"
```

## 7. Solucion de problemas

- Error de conexion a base de datos:
  - Verifica `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_NAME`.
  - Revisa que la base permita conexiones externas.
- Error 500 en rutas:
  - Revisa logs en `Vercel > Project > Deployments > Functions Logs`.
- CORS:
  - Ya esta habilitado con `origin: true`; si quieres restringir dominios, ajusta la config de CORS.

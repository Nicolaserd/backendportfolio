create extension if not exists "pgcrypto";

create table if not exists usuarios (
  id uuid primary key default gen_random_uuid(),
  nombre varchar(120) not null,
  correo varchar(180) null,
  created_at timestamptz not null default timezone('America/Bogota', now())
);

create table if not exists comentarios (
  id uuid primary key default gen_random_uuid(),
  contenido text not null,
  cantidad_likes integer not null default 0,
  created_at timestamptz not null default timezone('America/Bogota', now()),
  usuario_id uuid not null references usuarios(id) on delete restrict
);

create index if not exists idx_comentarios_usuario_id on comentarios(usuario_id);

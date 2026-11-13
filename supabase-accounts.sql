create table if not exists public.perfiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  rol text not null default 'comprador' check (rol in ('comprador', 'restaurante')),
  restaurante_id text references public.restaurantes(id_restaurante) on delete set null,
  nombre_completo text not null default 'Usuario RapiYa',
  telefono text,
  terminos_aceptados_at timestamptz,
  terminos_version text,
  privacidad_leida_at timestamptz,
  privacidad_version text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint perfil_restaurante_asignado check (
    (rol = 'comprador' and restaurante_id is null)
    or (rol = 'restaurante' and restaurante_id is not null)
  ),
  constraint perfiles_nombre_completo_valido check (char_length(btrim(nombre_completo)) between 2 and 120),
  constraint perfiles_telefono_longitud_valida check (telefono is null or char_length(telefono) <= 30)
);

alter table public.perfiles
  add column if not exists nombre_completo text not null default 'Usuario RapiYa',
  add column if not exists telefono text,
  add column if not exists terminos_aceptados_at timestamptz,
  add column if not exists terminos_version text,
  add column if not exists privacidad_leida_at timestamptz,
  add column if not exists privacidad_version text,
  add column if not exists updated_at timestamptz not null default now();

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'perfiles_nombre_completo_valido'
      and conrelid = 'public.perfiles'::regclass
  ) then
    alter table public.perfiles
      add constraint perfiles_nombre_completo_valido
      check (char_length(btrim(nombre_completo)) between 2 and 120) not valid;
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'perfiles_telefono_longitud_valida'
      and conrelid = 'public.perfiles'::regclass
  ) then
    alter table public.perfiles
      add constraint perfiles_telefono_longitud_valida
      check (telefono is null or char_length(telefono) <= 30) not valid;
  end if;
end;
$$;

create or replace function public.crear_perfil_comprador()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_nombre text := nullif(btrim(coalesce(new.raw_user_meta_data ->> 'nombre_completo', '')), '');
  v_telefono text := nullif(btrim(coalesce(new.raw_user_meta_data ->> 'telefono', '')), '');
begin
  if v_nombre is null or char_length(v_nombre) < 2 or char_length(v_nombre) > 120 then
    raise exception 'Se requiere un nombre completo válido';
  end if;

  if coalesce((new.raw_user_meta_data ->> 'acepta_terminos')::boolean, false) is not true
    or coalesce((new.raw_user_meta_data ->> 'leyo_privacidad')::boolean, false) is not true then
    raise exception 'Se requiere aceptar los términos y confirmar la lectura del aviso de privacidad';
  end if;

  if v_telefono is not null and char_length(v_telefono) > 30 then
    raise exception 'El teléfono supera la longitud permitida';
  end if;

  insert into public.perfiles (
    user_id,
    rol,
    nombre_completo,
    telefono,
    terminos_aceptados_at,
    terminos_version,
    privacidad_leida_at,
    privacidad_version
  )
  values (new.id, 'comprador', v_nombre, v_telefono, now(), 'v1.0', now(), 'v1.0')
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists al_crear_usuario_crear_perfil on auth.users;
create trigger al_crear_usuario_crear_perfil
  after insert on auth.users
  for each row execute function public.crear_perfil_comprador();

create or replace function public.actualizar_perfil_updated_at()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists perfiles_actualizar_updated_at on public.perfiles;
create trigger perfiles_actualizar_updated_at
  before update on public.perfiles
  for each row execute function public.actualizar_perfil_updated_at();

alter table public.perfiles enable row level security;
revoke all on table public.perfiles from anon, authenticated;
grant select on table public.perfiles to authenticated;
grant update (nombre_completo, telefono) on table public.perfiles to authenticated;

drop policy if exists "Users can read own profile" on public.perfiles;
create policy "Users can read own profile"
  on public.perfiles for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "Users can update own contact profile" on public.perfiles;
create policy "Users can update own contact profile"
  on public.perfiles for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create table if not exists public.favoritos (
  user_id uuid not null references auth.users(id) on delete cascade,
  tipo text not null check (tipo in ('restaurante', 'producto')),
  target_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, tipo, target_id)
);

alter table public.favoritos enable row level security;
revoke all on table public.favoritos from anon, authenticated;
grant select, insert, delete on table public.favoritos to authenticated;

drop policy if exists "Users can read own favorites" on public.favoritos;
create policy "Users can read own favorites"
  on public.favoritos for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "Users can add own favorites" on public.favoritos;
create policy "Users can add own favorites"
  on public.favoritos for insert
  to authenticated
  with check (user_id = auth.uid());

drop policy if exists "Users can remove own favorites" on public.favoritos;
create policy "Users can remove own favorites"
  on public.favoritos for delete
  to authenticated
  using (user_id = auth.uid());

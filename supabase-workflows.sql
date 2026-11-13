-- Run after supabase-schema.sql and supabase-accounts.sql.
-- Adds secure merchant management, onboarding, ratings, and order checkout.

alter table public.restaurantes
  add column if not exists "Horario_Apertura" time,
  add column if not exists "Horario_Cierre" time,
  add column if not exists "Latitud" double precision,
  add column if not exists "Longitud" double precision,
  add column if not exists "Radio_Entrega_Km" double precision,
  add column if not exists "Pais" text,
  add column if not exists "Departamento" text,
  add column if not exists "Ciudad" text,
  add column if not exists "Direccion exacta" text,
  add column if not exists "Contacto" text,
  add column if not exists "Suma_Calif" integer not null default 0,
  add column if not exists "Total_Votos" integer not null default 0,
  add column if not exists "Promedio_Nuevo" numeric,
  add column if not exists "Fecha_Registro" date not null default current_date;

alter table public.menus
  add column if not exists "Disponible" boolean not null default true,
  add column if not exists "Descripcion" text,
  add column if not exists "Precio_Anterior" numeric,
  add column if not exists "Categoria_Plato" text,
  add column if not exists "Foto_URL" text,
  add column if not exists "Es_Top" boolean not null default false;

alter table public.perfiles drop constraint if exists perfiles_rol_check;
alter table public.perfiles
  add constraint perfiles_rol_check check (rol in ('comprador', 'restaurante', 'admin'));
alter table public.perfiles drop constraint if exists perfil_restaurante_asignado;
alter table public.perfiles
  add constraint perfil_restaurante_asignado check (
    (rol = 'restaurante' and restaurante_id is not null)
    or (rol in ('comprador', 'admin') and restaurante_id is null)
  );

create or replace function public.es_admin_rapiya()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.perfiles
    where user_id = auth.uid() and rol = 'admin'
  );
$$;

create or replace function public.es_dueno_restaurante(p_restaurante_id text)
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.perfiles
    where user_id = auth.uid()
      and rol = 'restaurante'
      and restaurante_id = p_restaurante_id
  );
$$;

revoke all on function public.es_admin_rapiya() from public, anon;
revoke all on function public.es_dueno_restaurante(text) from public, anon;
grant execute on function public.es_admin_rapiya() to authenticated;
grant execute on function public.es_dueno_restaurante(text) to authenticated;

create table if not exists public.restaurante_detalles (
  id_restaurante text primary key references public.restaurantes(id_restaurante) on delete cascade,
  contacto text not null default '',
  direccion text not null default '',
  pais text not null default '',
  departamento text not null default '',
  updated_at timestamptz not null default now()
);
alter table public.restaurante_detalles enable row level security;
revoke all on public.restaurante_detalles from anon, authenticated;
grant select on public.restaurante_detalles to authenticated;
drop policy if exists "Restaurant owners can read private store details" on public.restaurante_detalles;
create policy "Restaurant owners can read private store details"
  on public.restaurante_detalles for select
  to authenticated
  using (public.es_dueno_restaurante(id_restaurante) or public.es_admin_rapiya());
create or replace function public.actualizar_detalles_restaurante(
  p_restaurante_id text,
  p_contacto text,
  p_pais text,
  p_departamento text,
  p_direccion text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null or not public.es_dueno_restaurante(p_restaurante_id) then
    raise exception 'No tienes permiso para modificar este restaurante';
  end if;
  if length(btrim(coalesce(p_contacto, ''))) not between 2 and 120
    or length(btrim(coalesce(p_pais, ''))) not between 2 and 100
    or length(btrim(coalesce(p_departamento, ''))) not between 2 and 100
    or length(btrim(coalesce(p_direccion, ''))) not between 3 and 400 then
    raise exception 'Revisa el responsable, la zona y la dirección del restaurante';
  end if;
  insert into public.restaurante_detalles (
    id_restaurante, contacto, pais, departamento, direccion, updated_at
  )
  values (
    p_restaurante_id, btrim(p_contacto), btrim(p_pais),
    btrim(p_departamento), btrim(p_direccion), now()
  )
  on conflict (id_restaurante) do update
    set contacto = excluded.contacto,
        pais = excluded.pais,
        departamento = excluded.departamento,
        direccion = excluded.direccion,
        updated_at = now();
  update public.restaurantes
  set "Pais" = btrim(p_pais), "Departamento" = btrim(p_departamento)
  where id_restaurante = p_restaurante_id;
end;
$$;
revoke all on function public.actualizar_detalles_restaurante(text, text, text, text, text) from public, anon;
grant execute on function public.actualizar_detalles_restaurante(text, text, text, text, text) to authenticated;

grant select (
  "Horario_Apertura", "Horario_Cierre", "Latitud", "Longitud",
  "Radio_Entrega_Km", "Pais", "Departamento", "Ciudad",
  "Suma_Calif", "Total_Votos", "Fecha_Registro"
) on public.restaurantes to anon, authenticated;
grant select ("Promedio_Nuevo") on public.restaurantes to anon, authenticated;
grant update (
  "Nombre", "Categoria", "Logo_URL", "Portada_URL", "WhatsApp",
  "Horario_Apertura", "Horario_Cierre", "Estado_Manual", "Costo_Envio",
  "Envio_Gratis", "Tiempo_Entrega", "Municipio", "Pais", "Departamento",
  "Ciudad", "Latitud", "Longitud", "Radio_Entrega_Km"
) on public.restaurantes to authenticated;

drop policy if exists "Restaurant owners can update their restaurant" on public.restaurantes;
create policy "Restaurant owners can update their restaurant"
  on public.restaurantes for update
  to authenticated
  using (public.es_dueno_restaurante(id_restaurante))
  with check (public.es_dueno_restaurante(id_restaurante));

grant select (
  id_producto, id_restaurante, "Nombre", "Descripcion", "Precio",
  "Precio_Anterior", "Es_Top", "Categoria_Plato", "Foto_URL", "Disponible"
) on public.menus to authenticated;
grant insert (
  id_producto, id_restaurante, "Nombre", "Descripcion", "Precio",
  "Precio_Anterior", "Es_Top", "Categoria_Plato", "Foto_URL", "Disponible"
) on public.menus to authenticated;
grant update (
  "Nombre", "Descripcion", "Precio", "Precio_Anterior", "Es_Top",
  "Categoria_Plato", "Foto_URL", "Disponible"
) on public.menus to authenticated;
grant delete on public.menus to authenticated;

drop policy if exists "Restaurant owners can read their full menu" on public.menus;
create policy "Restaurant owners can read their full menu"
  on public.menus for select
  to authenticated
  using (public.es_dueno_restaurante(id_restaurante));
drop policy if exists "Restaurant owners can add menu items" on public.menus;
create policy "Restaurant owners can add menu items"
  on public.menus for insert
  to authenticated
  with check (public.es_dueno_restaurante(id_restaurante));
drop policy if exists "Restaurant owners can update menu items" on public.menus;
create policy "Restaurant owners can update menu items"
  on public.menus for update
  to authenticated
  using (public.es_dueno_restaurante(id_restaurante))
  with check (public.es_dueno_restaurante(id_restaurante));
drop policy if exists "Restaurant owners can delete menu items" on public.menus;
create policy "Restaurant owners can delete menu items"
  on public.menus for delete
  to authenticated
  using (public.es_dueno_restaurante(id_restaurante));

create table if not exists public.solicitudes_restaurante (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  nombre text not null,
  contacto text not null,
  categoria text not null,
  whatsapp text not null,
  ciudad text not null,
  departamento text,
  pais text,
  direccion text,
  logo_url text,
  portada_url text,
  estado text not null default 'PENDIENTE'
    check (estado in ('PENDIENTE', 'APROBADO', 'RECHAZADO')),
  motivo text,
  restaurante_id text references public.restaurantes(id_restaurante) on delete set null,
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

alter table public.solicitudes_restaurante enable row level security;
revoke all on public.solicitudes_restaurante from anon, authenticated;
grant select on public.solicitudes_restaurante to authenticated;
drop policy if exists "Users can read their own merchant request" on public.solicitudes_restaurante;
create policy "Users can read their own merchant request"
  on public.solicitudes_restaurante for select
  to authenticated
  using (user_id = auth.uid() or public.es_admin_rapiya());

create or replace function public.crear_perfil_comprador()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_meta jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  v_nombre text := nullif(btrim(coalesce(v_meta ->> 'nombre_completo', '')), '');
  v_telefono text := nullif(btrim(coalesce(v_meta ->> 'telefono', '')), '');
  v_solicitud jsonb := v_meta -> 'solicitud_restaurante';
begin
  if v_nombre is null or char_length(v_nombre) < 2 or char_length(v_nombre) > 120 then
    raise exception 'Se requiere un nombre completo válido';
  end if;

  if coalesce((v_meta ->> 'acepta_terminos')::boolean, false) is not true
    or coalesce((v_meta ->> 'leyo_privacidad')::boolean, false) is not true then
    raise exception 'Se requiere aceptar los términos y confirmar la lectura del aviso de privacidad';
  end if;

  if v_telefono is not null and char_length(v_telefono) > 30 then
    raise exception 'El teléfono supera la longitud permitida';
  end if;

  insert into public.perfiles (
    user_id, rol, nombre_completo, telefono,
    terminos_aceptados_at, terminos_version,
    privacidad_leida_at, privacidad_version
  )
  values (new.id, 'comprador', v_nombre, v_telefono, now(), 'v1.0', now(), 'v1.0')
  on conflict (user_id) do nothing;

  if v_meta ->> 'tipo_cuenta' = 'restaurante' then
    if jsonb_typeof(v_solicitud) <> 'object'
      or coalesce(length(btrim(v_solicitud ->> 'nombre')), 0) not between 2 and 120
      or coalesce(length(v_nombre), 0) not between 2 and 120
      or coalesce(length(btrim(v_solicitud ->> 'categoria')), 0) not between 2 and 80
      or coalesce(length(btrim(v_solicitud ->> 'whatsapp')), 0) not between 10 and 20
      or coalesce(length(btrim(v_solicitud ->> 'ciudad')), 0) not between 2 and 100
      or (v_solicitud ->> 'whatsapp') !~ '^\+?[1-9][0-9]{9,14}$'
      or coalesce(v_solicitud ->> 'logo_url', '') !~* '^(|https://[^[:space:]<>"]+)$'
      or coalesce(v_solicitud ->> 'portada_url', '') !~* '^(|https://[^[:space:]<>"]+)$' then
      raise exception 'Los datos de la solicitud del restaurante están incompletos';
    end if;

    insert into public.solicitudes_restaurante (
      user_id, nombre, contacto, categoria, whatsapp, ciudad, departamento,
      pais, direccion, logo_url, portada_url
    )
    values (
      new.id,
      btrim(v_solicitud ->> 'nombre'),
      v_nombre,
      btrim(v_solicitud ->> 'categoria'),
      btrim(v_solicitud ->> 'whatsapp'),
      btrim(v_solicitud ->> 'ciudad'),
      nullif(btrim(v_solicitud ->> 'departamento'), ''),
      nullif(btrim(v_solicitud ->> 'pais'), ''),
      nullif(btrim(v_solicitud ->> 'direccion'), ''),
      nullif(btrim(v_solicitud ->> 'logo_url'), ''),
      nullif(btrim(v_solicitud ->> 'portada_url'), '')
    )
    on conflict (user_id) do nothing;
  end if;
  return new;
end;
$$;

create table if not exists public.pedidos (
  id uuid primary key default gen_random_uuid(),
  checkout_id uuid not null default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  id_restaurante text not null references public.restaurantes(id_restaurante),
  estado text not null default 'PENDIENTE'
    check (estado in ('PENDIENTE', 'ACEPTADO', 'PREPARANDO', 'EN_CAMINO', 'ENTREGADO', 'CANCELADO')),
  items jsonb not null,
  subtotal numeric not null check (subtotal >= 0),
  ahorro numeric not null default 0 check (ahorro >= 0),
  envio numeric not null check (envio >= 0),
  total numeric not null check (total >= 0),
  direccion text not null,
  ciudad text not null,
  latitud double precision,
  longitud double precision,
  created_at timestamptz not null default now()
);

alter table public.pedidos
  add column if not exists checkout_id uuid default gen_random_uuid();
update public.pedidos set checkout_id = gen_random_uuid() where checkout_id is null;
alter table public.pedidos alter column checkout_id set not null;
create index if not exists pedidos_user_created_idx
  on public.pedidos (user_id, created_at desc);
create index if not exists pedidos_restaurante_created_idx
  on public.pedidos (id_restaurante, created_at desc);
create unique index if not exists pedidos_checkout_restaurant_unique
  on public.pedidos (user_id, id_restaurante, checkout_id);

alter table public.pedidos enable row level security;
revoke all on public.pedidos from anon, authenticated;
grant select on public.pedidos to authenticated;
grant update (estado) on public.pedidos to authenticated;
drop policy if exists "Customers and restaurant owners can read orders" on public.pedidos;
create policy "Customers and restaurant owners can read orders"
  on public.pedidos for select
  to authenticated
  using (
    user_id = auth.uid()
    or public.es_dueno_restaurante(id_restaurante)
    or public.es_admin_rapiya()
  );
drop policy if exists "Restaurant owners can update order status" on public.pedidos;
create policy "Restaurant owners can update order status"
  on public.pedidos for update
  to authenticated
  using (public.es_dueno_restaurante(id_restaurante))
  with check (public.es_dueno_restaurante(id_restaurante));

create or replace function public.crear_pedido(
  p_restaurante_id text,
  p_items jsonb,
  p_direccion text,
  p_ciudad text,
  p_latitud double precision default null,
  p_longitud double precision default null,
  p_checkout_id uuid default null
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_rest public.restaurantes%rowtype;
  v_item jsonb;
  v_product public.menus%rowtype;
  v_seen text[] := array[]::text[];
  v_lines jsonb := '[]'::jsonb;
  v_qty integer;
  v_price numeric;
  v_previous numeric;
  v_subtotal numeric := 0;
  v_saving numeric := 0;
  v_shipping numeric;
  v_order_id uuid;
  v_checkout_id uuid := coalesce(p_checkout_id, gen_random_uuid());
  v_existing public.pedidos%rowtype;
  v_distance double precision;
begin
  if auth.uid() is null then
    raise exception 'Inicia sesión antes de realizar un pedido';
  end if;
  if length(btrim(coalesce(p_direccion, ''))) not between 3 and 400
    or length(btrim(coalesce(p_ciudad, ''))) not between 2 and 100 then
    raise exception 'Indica una ciudad y una dirección de entrega válidas';
  end if;
  if coalesce(jsonb_typeof(p_items), '') <> 'array' then
    raise exception 'El carrito está vacío o no es válido';
  end if;
  if jsonb_array_length(p_items) not between 1 and 100 then
    raise exception 'El carrito está vacío o no es válido';
  end if;
  if (p_latitud is null) <> (p_longitud is null)
    or (p_latitud is not null and (abs(p_latitud) > 90 or abs(p_longitud) > 180)) then
    raise exception 'Las coordenadas de entrega no son válidas';
  end if;

  select * into v_rest
  from public.restaurantes
  where id_restaurante = p_restaurante_id
  for share;
  if not found then
    raise exception 'Restaurante no encontrado';
  end if;
  if lower(btrim(coalesce(v_rest."Estado_Manual", ''))) = 'cerrado' then
    raise exception 'El restaurante está cerrado';
  end if;
  if coalesce(nullif(btrim(v_rest."Ciudad"), ''), nullif(btrim(v_rest."Municipio"), '')) is not null
    and lower(coalesce(nullif(btrim(v_rest."Ciudad"), ''), nullif(btrim(v_rest."Municipio"), '')))
      <> lower(btrim(p_ciudad)) then
    raise exception 'El restaurante no atiende la ciudad seleccionada';
  end if;
  select * into v_existing
  from public.pedidos
  where user_id = auth.uid()
    and id_restaurante = p_restaurante_id
    and checkout_id = v_checkout_id;
  if found then
    return jsonb_build_object(
      'id', v_existing.id,
      'restaurante', v_rest."Nombre",
      'whatsapp', v_rest."WhatsApp",
      'items', v_existing.items,
      'subtotal', v_existing.subtotal,
      'ahorro', v_existing.ahorro,
      'envio', v_existing.envio,
      'total', v_existing.total
    );
  end if;
  if lower(btrim(coalesce(v_rest."Estado_Manual", ''))) in ('automatico', 'automático', '') then
    if v_rest."Horario_Apertura" is null or v_rest."Horario_Cierre" is null
      or v_rest."Horario_Apertura" = v_rest."Horario_Cierre"
      or not (
        case
          when v_rest."Horario_Apertura" < v_rest."Horario_Cierre"
            then (now() at time zone 'America/Bogota')::time >= v_rest."Horario_Apertura"
              and (now() at time zone 'America/Bogota')::time < v_rest."Horario_Cierre"
          else (now() at time zone 'America/Bogota')::time >= v_rest."Horario_Apertura"
            or (now() at time zone 'America/Bogota')::time < v_rest."Horario_Cierre"
        end
      ) then
      raise exception 'El restaurante está fuera de su horario de atención';
    end if;
  end if;
  if p_latitud is not null and v_rest."Latitud" is not null
    and v_rest."Longitud" is not null and v_rest."Radio_Entrega_Km" is not null then
    v_distance := 6371 * 2 * asin(sqrt(least(1, greatest(0,
      sin(radians(p_latitud - v_rest."Latitud") / 2)^2
      + cos(radians(v_rest."Latitud")) * cos(radians(p_latitud))
      * sin(radians(p_longitud - v_rest."Longitud") / 2)^2
    ))));
    if v_distance > v_rest."Radio_Entrega_Km" then
      raise exception 'El restaurante no entrega en el punto GPS seleccionado';
    end if;
  end if;

  for v_item in select value from jsonb_array_elements(p_items)
  loop
    if jsonb_typeof(v_item) <> 'object'
      or coalesce(v_item ->> 'id', '') = ''
      or coalesce(v_item ->> 'qty', '') !~ '^[0-9]+$' then
      raise exception 'Hay un producto o una cantidad inválida';
    end if;
    v_qty := (v_item ->> 'qty')::integer;
    if v_qty < 1 or v_qty > 50 or (v_item ->> 'id') = any(v_seen) then
      raise exception 'Las cantidades del carrito no son válidas';
    end if;
    v_seen := array_append(v_seen, v_item ->> 'id');

    select * into v_product
    from public.menus
    where id_producto::text = v_item ->> 'id'
      and id_restaurante = p_restaurante_id
      and "Disponible" is true
    for share;
    if not found or coalesce(v_product."Precio", 0) <= 0 then
      raise exception 'Un producto ya no está disponible';
    end if;

    v_price := v_product."Precio";
    v_previous := greatest(v_price, coalesce(v_product."Precio_Anterior", v_price));
    v_subtotal := v_subtotal + v_price * v_qty;
    v_saving := v_saving + (v_previous - v_price) * v_qty;
    v_lines := v_lines || jsonb_build_array(jsonb_build_object(
      'id', v_product.id_producto,
      'nombre', v_product."Nombre",
      'cantidad', v_qty,
      'precio', v_price,
      'precioAnterior', v_previous,
      'foto', coalesce(v_product."Foto_URL", '')
    ));
  end loop;

  v_shipping := case
    when lower(btrim(coalesce(v_rest."Envio_Gratis"::text, 'false'))) in ('true', 'si', 'sí', '1') then 0
    else greatest(0, coalesce(v_rest."Costo_Envio", 0)::numeric)
  end;
  insert into public.pedidos (
    checkout_id, user_id, id_restaurante, items, subtotal, ahorro, envio, total,
    direccion, ciudad, latitud, longitud
  )
  values (
    v_checkout_id, auth.uid(), p_restaurante_id, v_lines, v_subtotal, v_saving,
    v_shipping, v_subtotal + v_shipping, btrim(p_direccion), btrim(p_ciudad),
    p_latitud, p_longitud
  )
  returning id into v_order_id;

  return jsonb_build_object(
    'id', v_order_id,
    'restaurante', v_rest."Nombre",
    'whatsapp', v_rest."WhatsApp",
    'items', v_lines,
    'subtotal', v_subtotal,
    'ahorro', v_saving,
    'envio', v_shipping,
    'total', v_subtotal + v_shipping
  );
end;
$$;

revoke all on function public.crear_pedido(text, jsonb, text, text, double precision, double precision, uuid) from public, anon;
grant execute on function public.crear_pedido(text, jsonb, text, text, double precision, double precision, uuid) to authenticated;

create table if not exists public.calificaciones_restaurante (
  user_id uuid not null references auth.users(id) on delete cascade,
  id_restaurante text not null references public.restaurantes(id_restaurante) on delete cascade,
  estrellas smallint not null check (estrellas between 1 and 5),
  created_at timestamptz not null default now(),
  primary key (user_id, id_restaurante)
);

alter table public.calificaciones_restaurante enable row level security;
revoke all on public.calificaciones_restaurante from anon, authenticated;
grant select on public.calificaciones_restaurante to authenticated;
drop policy if exists "Users can read own restaurant ratings" on public.calificaciones_restaurante;
create policy "Users can read own restaurant ratings"
  on public.calificaciones_restaurante for select
  to authenticated
  using (user_id = auth.uid());

create or replace function public.calificar_restaurante(p_restaurante_id text, p_estrellas integer)
returns numeric
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_average numeric;
begin
  if auth.uid() is null then
    raise exception 'Inicia sesión para calificar';
  end if;
  if p_estrellas not between 1 and 5 then
    raise exception 'La calificación debe ser de 1 a 5 estrellas';
  end if;
  if not exists (
    select 1 from public.pedidos
    where user_id = auth.uid()
      and id_restaurante = p_restaurante_id
      and estado = 'ENTREGADO'
  ) then
    raise exception 'Solo puedes calificar un restaurante después de recibir un pedido';
  end if;

  insert into public.calificaciones_restaurante (user_id, id_restaurante, estrellas)
  values (auth.uid(), p_restaurante_id, p_estrellas)
  on conflict (user_id, id_restaurante) do update
    set estrellas = excluded.estrellas, created_at = now();

  update public.restaurantes r
  set "Suma_Calif" = totals.rating_sum,
      "Total_Votos" = totals.rating_count,
      "Promedio_Nuevo" = round(totals.rating_sum::numeric / nullif(totals.rating_count, 0), 1)
  from (
    select id_restaurante, sum(estrellas)::integer as rating_sum, count(*)::integer as rating_count
    from public.calificaciones_restaurante
    where id_restaurante = p_restaurante_id
    group by id_restaurante
  ) totals
  where r.id_restaurante = totals.id_restaurante
  returning r."Promedio_Nuevo" into v_average;
  return v_average;
end;
$$;

revoke all on function public.calificar_restaurante(text, integer) from public, anon;
grant execute on function public.calificar_restaurante(text, integer) to authenticated;

create or replace function public.resolver_solicitud_restaurante(
  p_solicitud_id uuid,
  p_decision text,
  p_motivo text default null
)
returns text
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_request public.solicitudes_restaurante%rowtype;
  v_restaurant_id text;
begin
  if not public.es_admin_rapiya() then
    raise exception 'No tienes permiso para resolver solicitudes';
  end if;
  if p_decision not in ('APROBADO', 'RECHAZADO') then
    raise exception 'Decisión inválida';
  end if;
  select * into v_request
  from public.solicitudes_restaurante
  where id = p_solicitud_id
  for update;
  if not found or v_request.estado <> 'PENDIENTE' then
    raise exception 'La solicitud no está pendiente';
  end if;

  if p_decision = 'RECHAZADO' then
    if length(btrim(coalesce(p_motivo, ''))) not between 2 and 400 then
      raise exception 'Indica un motivo de rechazo (2 a 400 caracteres)';
    end if;
    update public.solicitudes_restaurante
    set estado = p_decision, motivo = btrim(p_motivo), resolved_at = now()
    where id = p_solicitud_id;
    return '';
  end if;

  v_restaurant_id := 'REST-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 16));
  insert into public.restaurantes (
    id_restaurante, "Nombre", "Contacto", "Categoria", "Promedio", "Costo_Envio",
    "Envio_Gratis", "Estado_Manual", "Tiempo_Entrega", "Logo_URL",
    "Portada_URL", "WhatsApp", "Municipio", "Pais", "Departamento",
    "Ciudad", "Direccion exacta", "Suma_Calif", "Total_Votos", "Fecha_Registro"
  )
  values (
    v_restaurant_id, v_request.nombre, v_request.contacto, v_request.categoria, 0, 0,
    false, 'Cerrado', '30-45 min', coalesce(v_request.logo_url, ''),
    coalesce(v_request.portada_url, ''), v_request.whatsapp, v_request.ciudad,
    coalesce(v_request.pais, ''), coalesce(v_request.departamento, ''),
    v_request.ciudad, coalesce(v_request.direccion, ''), 0, 0, current_date
  );
  insert into public.restaurante_detalles (
    id_restaurante, contacto, direccion, pais, departamento
  )
  values (
    v_restaurant_id, v_request.contacto, coalesce(v_request.direccion, ''),
    coalesce(v_request.pais, ''), coalesce(v_request.departamento, '')
  );
  update public.perfiles
  set rol = 'restaurante', restaurante_id = v_restaurant_id
  where user_id = v_request.user_id;
  update public.solicitudes_restaurante
  set estado = p_decision, motivo = null, restaurante_id = v_restaurant_id, resolved_at = now()
  where id = p_solicitud_id;
  return v_restaurant_id;
end;
$$;

revoke all on function public.resolver_solicitud_restaurante(uuid, text, text) from public, anon;
grant execute on function public.resolver_solicitud_restaurante(uuid, text, text) to authenticated;

-- Promote trusted administrators only from the Supabase SQL Editor:
-- update public.perfiles set rol = 'admin' where user_id = '<auth.users.id>';

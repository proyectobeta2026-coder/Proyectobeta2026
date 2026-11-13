alter table public.restaurantes enable row level security;

revoke all on table public.restaurantes from anon, authenticated;
grant select (
  id_restaurante,
  "Nombre",
  "Categoria",
  "Promedio",
  "Tiempo_Entrega",
  "Costo_Envio",
  "Envio_Gratis",
  "Estado_Manual",
  "Logo_URL",
  "Portada_URL",
  "WhatsApp",
  "Municipio",
  "Ciudad"
) on table public.restaurantes to anon, authenticated;

drop policy if exists "Public restaurant catalog" on public.restaurantes;
create policy "Public restaurant catalog"
  on public.restaurantes for select
  to anon, authenticated
  using (true);

alter table public.menus enable row level security;

revoke all on table public.menus from anon, authenticated;
grant select (
  id_producto,
  id_restaurante,
  "Nombre",
  "Descripcion",
  "Precio",
  "Precio_Anterior",
  "Es_Top",
  "Categoria_Plato",
  "Foto_URL",
  "Disponible"
) on table public.menus to anon, authenticated;

drop policy if exists "Available menu products are public" on public.menus;
create policy "Available menu products are public"
  on public.menus for select
  to anon, authenticated
  using ("Disponible" = true);

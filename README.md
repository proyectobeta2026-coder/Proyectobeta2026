# Toque App

Plataforma web adaptable a dispositivos móviles que conecta compradores y restaurantes. Los clientes pagan directamente a los restaurantes; Toque no procesa ni recauda pagos.

## Estructura

- `index.html`: pantalla principal del cliente
- `panel.html`: panel para comercios
- `style.css`: estilos visuales del producto
- `app.js`: lógica principal del flujo de cliente y comercio
- `manifest.json`: configuración de PWA
- `service-worker.js`: cache mínimo para instalación
- `api/index.js`: prototipo de servidor Node.js incluido por compatibilidad; no utilizar su autenticación de demostración para un despliegue público

## Requisitos

- Node.js 18+
- NPM

## Instalación local

```bash
npm install
npm run dev
```

## Arquitectura sugerida

- Frontend: HTML + CSS + JS vanilla
- UX: mobile-first, responsive, PWA
- Backend: Supabase + funciones serverless
- Modelo: clientes, restaurantes, platos, banners, pedidos

## Supabase

El catálogo de cliente lee restaurantes desde `public.restaurantes` y productos disponibles desde `public.menus`. La configuración pública está en `supabase-config.js`; contiene la URL y la publishable key, nunca una secret key.

1. Verifica que las tablas `restaurantes` y `menus` y sus columnas públicas coincidan con `supabase-schema.sql`. **No ejecutes migraciones antiguas sobre una base en funcionamiento sin evaluar sus efectos.**
2. Si se crea una base de datos nueva, revisa `supabase-accounts.sql` para configurar Auth, perfiles y favoritos.
3. Si se crea una base nueva, revisa `supabase-workflows.sql` para agregar permisos de comercio, solicitudes de aprobación, cobertura GPS, pedidos, calificaciones y sus políticas RLS.
4. Sirve la app por HTTP y abre `index.html`. Supabase JS y las operaciones del catálogo requieren conexión.

La migración de flujos es aditiva: conserva las tablas de catálogo existentes y agrega columnas, tablas y funciones RPC. Revisa los nombres y tipos de las columnas existentes antes de ejecutarla; el SQL usa identificadores con mayúsculas y nombres como `Direccion exacta`. No pegues la `service_role` key en el navegador.

La ubicación puede elegirse manualmente o detectarse con GPS. Al pulsar “Usar GPS”, las coordenadas se consultan con OpenStreetMap Nominatim para sugerir el municipio; la interfaz informa al usuario y muestra la atribución requerida. La aplicación conserva la selección manual si no se puede detectar el municipio. El servicio público de Nominatim tiene límites de uso y puede responder lento o restringir solicitudes, por lo que un despliegue de alto volumen debe usar un proveedor o instancia con capacidad y políticas acordes. El GPS también valida la distancia cuando el restaurante configuró coordenadas y radio.

El carrito se conserva localmente. Antes de registrar cada pedido, la función SQL vuelve a validar el horario, la ciudad, disponibilidad y precios, guarda una copia del pedido y devuelve el enlace de WhatsApp. Se registra un pedido por restaurante. Para comprar y consultar el historial es necesario iniciar sesión.

## Cuentas y favoritos

Supabase Auth gestiona correo y contraseña; `perfiles` conserva el nombre, teléfono opcional, rol y restaurante vinculado. El comprador puede crear una cuenta o enviar una solicitud de comercio. Los comercios nuevos deben confirmar el correo y ser aprobados por un administrador antes de entrar al panel. Los roles no se pueden escoger desde el formulario.

El registro pide nombre completo, correo, contraseña de al menos 8 caracteres, teléfono opcional y confirmación de términos/aviso de privacidad. No solicita dirección ni fecha de nacimiento al crear la cuenta; esos datos deben pedirse solo cuando sean necesarios para una entrega. El SQL registra fecha y versión de las confirmaciones (`v1.0`). Publica y revisa legalmente los documentos definitivos y actualiza la versión antes de producción; el texto de confirmación por sí solo no sustituye esos documentos ni el cumplimiento legal local.

Para habilitar el panel de aprobación, primero crea una cuenta de confianza y promuévela desde el SQL Editor usando su UUID de `auth.users`:

```sql
update public.perfiles
set rol = 'admin'
where user_id = '<UUID_DE_AUTH_USERS>';
```

No promuevas cuentas de usuarios desde el navegador. El administrador revisa las solicitudes desde Perfil; al aprobar, Supabase crea el restaurante y vincula la cuenta automáticamente. Los comercios aprobados pueden actualizar su perfil y menú, administrar disponibilidad y cambiar el estado de pedidos. Cada acción está restringida por RLS al restaurante asociado.

En la aplicación principal (`index.html`), inicia sesión con la cuenta admin, abre Perfil y usa “Ver vista de cliente” o “Ver vista de restaurante”; en esta última puedes seleccionar cualquier comercio del catálogo. La vista previa no permite guardar cambios, editar productos, cambiar pedidos, crear pedidos ni guardar favoritos; oculta datos privados del comercio y direcciones de entrega. El archivo `panel.html` independiente sigue reservado a la cuenta propietaria del comercio.

Configura en Supabase Auth el `Site URL` y las URL de redirección del dominio desplegado para que la confirmación de correo y la recuperación de contraseña regresen a la aplicación. La recuperación utiliza el enlace de Supabase Auth; no se reutiliza el PIN de Apps Script.

Los clientes pueden calificar un restaurante después de que el comercio marque al menos un pedido como `ENTREGADO`. El promedio previo del catálogo se conserva; las calificaciones nuevas se muestran por separado.

La tabla existente `usuarios` y sus PIN no se usan para autenticar en esta versión. Las métricas históricas de clics de WhatsApp y la administración de banners del ejemplo de Apps Script no se trasladaron porque no son necesarias para el flujo actual.

## Trabajo habitual con VS Code, GitHub y Supabase

- Editar los archivos en Visual Studio Code.
- Comprobar el frontend con Live Server durante el desarrollo.
- Mantener el código versionado en GitHub.
- Utilizar Supabase para autenticación, datos y almacenamiento.
- Antes de publicar, elegir y configurar un alojamiento y dominio adecuados.

**Cambio de marca:** el nombre público es **Toque**. Se conservan identificadores técnicos heredados (`RAPIYA_SUPABASE_CONFIG`, claves de almacenamiento local, bucket `pideya-imagenes`, funciones SQL y nombres de migraciones) para no interrumpir los datos ni la sesión de usuarios existentes. No es necesario volver a ejecutar migraciones SQL por este cambio de nombre.


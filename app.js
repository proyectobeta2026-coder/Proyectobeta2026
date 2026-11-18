const CATEGORIES = [
  { key: "all", label: "Todo", icon: "fa-solid fa-utensils" },
  { key: "hamburguesas", label: "Hamburguesas", icon: "fa-solid fa-burger" },
  { key: "pizzas", label: "Pizzas", icon: "fa-solid fa-pizza-slice" },
  { key: "pollo", label: "Pollo", icon: "fa-solid fa-drumstick-bite" },
  { key: "saludable", label: "Saludable", icon: "fa-solid fa-leaf" },
  { key: "bebidas", label: "Bebidas", icon: "fa-solid fa-martini-glass-citrus" }
];

const RESTAURANTS = [
  {
    id: "REST-001",
    nombre: "Bigote Pizzas",
    categoria: "pizzas",
    rating: 4.8,
    tiempo: "25-35 min",
    costoEnvio: 3500,
    envioGratis: false,
    promo: "Envío gratis por compras mayores a $35k",
    cover: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=300&q=80",
    pedidos: 500,
    abierto: true,
    whatsapp: "573001234567",
    municipio: "Medellín"
  },
  {
    id: "REST-002",
    nombre: "Burger House",
    categoria: "hamburguesas",
    rating: 4.9,
    tiempo: "20-30 min",
    costoEnvio: 2500,
    envioGratis: true,
    promo: "Combo 2x1 hoy",
    cover: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80",
    pedidos: 890,
    abierto: true,
    whatsapp: "573004567890",
    municipio: "Bogotá"
  },
  {
    id: "REST-003",
    nombre: "Pollo Supremo",
    categoria: "pollo",
    rating: 4.7,
    tiempo: "18-25 min",
    costoEnvio: 3000,
    envioGratis: false,
    promo: "Lleva una de regalo hoy",
    cover: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80",
    pedidos: 350,
    abierto: true,
    whatsapp: "573009876543",
    municipio: "Cali"
  },
  {
    id: "REST-004",
    nombre: "Fresh Bowl",
    categoria: "saludable",
    rating: 4.6,
    tiempo: "15-25 min",
    costoEnvio: 2800,
    envioGratis: false,
    promo: "Tu primer pedido al 20% off",
    cover: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80",
    pedidos: 210,
    abierto: false,
    whatsapp: "573001112233",
    municipio: "Medellín"
  },
  {
    id: "REST-005",
    nombre: "Sakura Drinks",
    categoria: "bebidas",
    rating: 4.8,
    tiempo: "10-20 min",
    costoEnvio: 2100,
    envioGratis: true,
    promo: "2 bebidas por 1",
    cover: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80",
    logo: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80",
    pedidos: 640,
    abierto: true,
    whatsapp: "573005556677",
    municipio: "Bogotá"
  }
];

const MENU = {
  "REST-001": [
    { id: "P1", nombre: "Pizza Clásica", desc: "Salsa de tomate, queso mozzarella y orégano.", precio: 22500, precioAnterior: 36000, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" },
    { id: "P2", nombre: "Pizza Hawaiana", desc: "Jamón, piña, queso y toque de salsa especial.", precio: 24900, precioAnterior: 39000, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" },
    { id: "P3", nombre: "Bebida Coca-Cola", desc: "Botella 500 ml.", precio: 3200, precioAnterior: 4500, img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80" }
  ],
  "REST-002": [
    { id: "B1", nombre: "Burger Royale", desc: "Doble carne, queso cheddar, tomate y cebolla.", precio: 19900, precioAnterior: 28900, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
    { id: "B2", nombre: "Combo Crispy", desc: "Hamburguesa + papas + gaseosa.", precio: 28900, precioAnterior: 42900, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80" },
    { id: "B3", nombre: "Bebida natural", desc: "Jugo de naranja fresco.", precio: 5300, precioAnterior: 7500, img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80" }
  ],
  "REST-003": [
    { id: "C1", nombre: "Pollo Crispy", desc: "Piezas crujientes con salsa BBQ.", precio: 16900, precioAnterior: 22900, img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80" },
    { id: "C2", nombre: "Combo Familiar", desc: "2 piezas grandes + papas + complemento.", precio: 33900, precioAnterior: 49900, img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80" },
    { id: "C3", nombre: "Gaseosa", desc: "Refrescante y fría.", precio: 3100, precioAnterior: 4600, img: "https://images.unsplash.com/photo-1622483767028-3f66f2b0a5a0?auto=format&fit=crop&w=800&q=80" }
  ],
  "REST-004": [
    { id: "S1", nombre: "Bowl Verde", desc: "Mix de vegetales frescos y quinoa.", precio: 17900, precioAnterior: 23900, img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80" },
    { id: "S2", nombre: "Avena y Fruta", desc: "Cereal con yogurt natural y frutas.", precio: 12900, precioAnterior: 17900, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80" }
  ],
  "REST-005": [
    { id: "D1", nombre: "Sakura Matcha", desc: "Bebida de matcha con espuma cremosa.", precio: 9900, precioAnterior: 14200, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80" },
    { id: "D2", nombre: "Limonada fresca", desc: "Limonada con menta y hielo.", precio: 6200, precioAnterior: 9200, img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80" }
  ]
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

// Personalización: opciones configuradas por cada comercio. Los precios finales
// siempre son recalculados en la función SQL crear_pedido de Supabase.
function productCustomization(product) {
  const data = product?.personalizacion || {};
  return {
    tamanos: Array.isArray(data.tamanos) ? data.tamanos : [],
    extras: Array.isArray(data.extras) ? data.extras : [],
    ingredientes: Array.isArray(data.ingredientes) ? data.ingredientes : []
  };
}

function hasRequiredChoices(product) {
  const options = productCustomization(product);
  return options.tamanos.length > 0 || options.extras.length > 0 || options.ingredientes.length > 0;
}

function emptySelection() {
  return { tamano: "", extras: [], sin: [], nota: "" };
}

function cartSelection(key) {
  const encoded = String(key).split(":").slice(2).join(":");
  if (!encoded) return emptySelection();
  try {
    const saved = JSON.parse(decodeURIComponent(encoded));
    return {
      tamano: typeof saved.tamano === "string" ? saved.tamano : "",
      extras: Array.isArray(saved.extras) ? saved.extras.filter((x) => typeof x === "string") : [],
      sin: Array.isArray(saved.sin) ? saved.sin.filter((x) => typeof x === "string") : [],
      nota: typeof saved.nota === "string" ? saved.nota.slice(0, 250) : ""
    };
  } catch { return emptySelection(); }
}

function cartKey(restaurantId, productId, selection = emptySelection()) {
  const clean = {
    tamano: selection.tamano || "",
    extras: [...new Set(selection.extras || [])].sort(),
    sin: [...new Set(selection.sin || [])].sort(),
    nota: String(selection.nota || "").trim()
  };
  const base = `${restaurantId}:${productId}`;
  return clean.tamano || clean.extras.length || clean.sin.length || clean.nota
    ? `${base}:${encodeURIComponent(JSON.stringify(clean))}` : base;
}

function selectedProductPrice(product, selection = emptySelection()) {
  const options = productCustomization(product);
  const size = options.tamanos.find((item) => item.nombre === selection.tamano);
  const extras = (selection.extras || []).map((name) => options.extras.find((item) => item.nombre === name)).filter(Boolean);
  const additional = Number(size?.precio || 0) + extras.reduce((sum, item) => sum + Number(item.precio || 0), 0);
  return Number(product.precio) + additional;
}

function formatSelectionLines(selection) {
  const lines = [];
  if (selection.tamano) lines.push(`Tamaño: ${selection.tamano}`);
  if (selection.extras?.length) lines.push(`Extras: ${selection.extras.join(", ")}`);
  if (selection.sin?.length) lines.push(`Sin: ${selection.sin.join(", ")}`);
  if (selection.nota) lines.push(`Observación: ${selection.nota}`);
  return lines;
}

function getDialogProductSelection() {
  const container = document.getElementById("product-customization");
  const size = container.querySelector('[name="detail-size"]:checked');
  const extras = [...container.querySelectorAll('[data-detail-extra]:checked')].map((field) => field.value);
  const without = [...container.querySelectorAll('[data-detail-sin]:checked')].map((field) => field.value);
  const note = container.querySelector("#detail-note")?.value?.trim() || "";
  return { tamano: size?.value || "", extras, sin: without, nota: note.slice(0, 250) };
}

function renderProductCustomization(product) {
  const container = document.getElementById("product-customization");
  const options = productCustomization(product);
  const sizesHtml = options.tamanos.length ? `
    <fieldset class="custom-options-set"><legend>Elige un tamaño</legend>
      ${options.tamanos.map((item, index) => `
        <label class="custom-option"><input type="radio" name="detail-size" value="${escapeHtml(item.nombre)}" ${index === 0 ? "checked" : ""} />
          <span>${escapeHtml(item.nombre)}</span><strong>${Number(item.precio) > 0 ? `+${formatCurrency(item.precio)}` : "Incluido"}</strong></label>`).join("")}
    </fieldset>` : "";
  const extrasHtml = options.extras.length ? `
    <fieldset class="custom-options-set"><legend>Agrega extras (opcional)</legend>
      ${options.extras.map((item) => `
        <label class="custom-option"><input type="checkbox" data-detail-extra value="${escapeHtml(item.nombre)}" />
          <span>${escapeHtml(item.nombre)}</span><strong>+${formatCurrency(item.precio)}</strong></label>`).join("")}
    </fieldset>` : "";
  const ingredientsHtml = options.ingredientes.length ? `
    <fieldset class="custom-options-set"><legend>Quitar ingredientes (opcional)</legend>
      ${options.ingredientes.map((item) => `
        <label class="custom-option"><input type="checkbox" data-detail-sin value="${escapeHtml(item)}" />
          <span>Sin ${escapeHtml(item)}</span></label>`).join("")}
    </fieldset>` : "";
  container.innerHTML = `${sizesHtml}${extrasHtml}${ingredientsHtml}
    <label class="detail-note-label" for="detail-note">Observaciones para el restaurante (opcional)
      <textarea id="detail-note" rows="2" maxlength="250" placeholder="Ej. Salsa aparte, bien cocida..."></textarea>
    </label>`;
  container.onchange = () => refreshPersonalizedProductPrice(product);
  container.oninput = () => refreshPersonalizedProductPrice(product);
  refreshPersonalizedProductPrice(product);
}

function refreshPersonalizedProductPrice(product) {
  const selected = getDialogProductSelection();
  document.getElementById("product-detail-price").textContent = formatCurrency(selectedProductPrice(product, selected));
  const oldPrice = document.getElementById("product-detail-old-price");
  const previous = Number(product.precioAnterior || 0);
  oldPrice.hidden = previous <= Number(product.precio);
  oldPrice.textContent = oldPrice.hidden ? "" : formatCurrency(previous + selectedProductPrice(product, selected) - product.precio);
}

function parseProductOptionLines(input, label) {
  const lines = String(input || "").split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
  if (lines.length > 12) throw new Error(`${label}: máximo 12 opciones.`);
  const names = new Set();
  return lines.map((line) => {
    const parts = line.split("|");
    if (parts.length !== 2) throw new Error(`${label}: utiliza Nombre|Precio, una opción por línea.`);
    const name = parts[0].trim();
    const number = parts[1].trim();
    if (!name || name.length > 60 || !/^\d+(?:\.\d{1,2})?$/.test(number)) {
      throw new Error(`${label}: revisa el nombre y el precio (sin puntos de miles ni $).`);
    }
    const price = Number(number);
    if (price > 1000000) throw new Error(`${label}: un adicional no puede superar $1.000.000.`);
    const slug = name.toLocaleLowerCase("es");
    if (names.has(slug)) throw new Error(`${label}: no repitas nombres de opciones.`);
    names.add(slug);
    return { nombre: name, precio: price };
  });
}

function parseProductIngredients(input) {
  const ingredients = String(input || "").split(",").map((item) => item.trim()).filter(Boolean);
  if (ingredients.length > 20 || ingredients.some((name) => name.length > 60)) {
    throw new Error("Ingredientes: máximo 20 nombres de 60 caracteres.");
  }
  if (new Set(ingredients.map((name) => name.toLocaleLowerCase("es"))).size !== ingredients.length) {
    throw new Error("Ingredientes: elimina los nombres repetidos.");
  }
  return ingredients;
}

function orderItemDetails(item) {
  const extras = (Array.isArray(item.extras) ? item.extras : []).map((entry) => typeof entry === "string" ? entry : entry?.nombre).filter(Boolean);
  return formatSelectionLines({
    tamano: item.tamano || "", extras, sin: Array.isArray(item.sin) ? item.sin : [], nota: item.nota || ""
  });
}

function readStoredCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("rapiya-cart") || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    return Object.fromEntries(Object.entries(saved).filter(([key, quantity]) =>
      /^[^:]+:[^:]+(?::.{1,1500})?$/.test(key) && Number.isInteger(quantity) && quantity > 0 && quantity <= 50
    ));
  } catch (error) {
    console.warn("No se pudo restaurar el carrito:", error.message || error);
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem("rapiya-cart", JSON.stringify(state.cart));
  } catch (error) {
    console.error("No se pudo guardar el carrito:", error.message || error);
  }
}

function readDeliveryLocation() {
  try {
    const saved = JSON.parse(localStorage.getItem("rapiya-delivery-location") || "null");
    if (!saved || typeof saved.city !== "string") return { city: "", address: "", lat: null, lng: null };
    const lat = Number(saved.lat);
    const lng = Number(saved.lng);
    return {
      city: saved.city.trim(),
      address: typeof saved.address === "string" ? saved.address.slice(0, 400) : "",
      lat: saved.lat != null && Number.isFinite(lat) && Math.abs(lat) <= 90 ? lat : null,
      lng: saved.lng != null && Number.isFinite(lng) && Math.abs(lng) <= 180 ? lng : null
    };
  } catch (error) {
    console.warn("No se pudo restaurar la ubicación:", error.message || error);
    return { city: "", address: "", lat: null, lng: null };
  }
}

const state = {
  selectedCategory: "all",
  selectedRestaurantId: "REST-001",
  cart: readStoredCart(),
  activeView: "lobby",
  user: null,
  profile: null,
  favorites: new Set(),
  favoritesType: "restaurante",
  delivery: readDeliveryLocation(),
  deliveryZones: [],
  deliveryZonesLoaded: false,
  selectedZoneIds: {},
  couponCodes: {},
  couponQuotes: {},
  couponMessages: {},
  merchantPromos: [],
  paymentSettings: {},
  paymentSelections: {},
  paymentSettingsLoaded: false,
  paymentSettingsError: "",
  merchantApplication: null,
  businessProducts: [],
  preparedOrders: [],
  checkoutId: ""
};

function getCheckoutId() {
  if (state.checkoutId) return state.checkoutId;
  try {
    state.checkoutId = sessionStorage.getItem("rapiya-checkout-id") || "";
  } catch (error) {
    console.warn("No se pudo restaurar la sesión del pedido:", error.message || error);
  }
  return state.checkoutId;
}

function setCheckoutId(value) {
  state.checkoutId = value;
  try {
    sessionStorage.setItem("rapiya-checkout-id", value);
  } catch (error) {
    console.warn("No se pudo guardar la sesión del pedido:", error.message || error);
  }
}

function clearCheckoutId() {
  state.checkoutId = "";
  try {
    sessionStorage.removeItem("rapiya-checkout-id");
  } catch (error) {
    console.warn("No se pudo limpiar la sesión del pedido:", error.message || error);
  }
}

const supabaseClient = window.supabase && window.RAPIYA_SUPABASE_CONFIG
  ? window.supabase.createClient(
    window.RAPIYA_SUPABASE_CONFIG.url,
    window.RAPIYA_SUPABASE_CONFIG.publishableKey
  )
  : null;

// Imágenes públicas de restaurantes: el permiso de escritura se controla
// en storage.objects con RLS (solo la cuenta propietaria del restaurante).
const RESTAURANT_IMAGE_BUCKET = "pideya-imagenes";
const RESTAURANT_IMAGE_MAX_BYTES = 5 * 1024 * 1024;
const RESTAURANT_IMAGE_EXTENSIONS = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp"
};

function validateRestaurantImage(file) {
  if (!file) return;
  if (!Object.hasOwn(RESTAURANT_IMAGE_EXTENSIONS, file.type)) {
    throw new Error("Selecciona una imagen JPG, PNG o WebP. Los archivos HEIC deben convertirse antes a JPG.");
  }
  if (!file.size || file.size > RESTAURANT_IMAGE_MAX_BYTES) {
    throw new Error("La imagen no puede estar vacía ni superar los 5 MB.");
  }
}

async function uploadRestaurantImage(file, imageKind) {
  if (!file) return null;
  validateRestaurantImage(file);
  if (!supabaseClient || !state.user || state.profile?.rol !== "restaurante"
    || state.profile.restaurante_id !== state.selectedRestaurantId) {
    throw new Error("Solo la cuenta propietaria puede subir imágenes de su restaurante.");
  }
  const ext = RESTAURANT_IMAGE_EXTENSIONS[file.type];
  const path = `restaurantes/${state.selectedRestaurantId}/${imageKind}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabaseClient.storage
    .from(RESTAURANT_IMAGE_BUCKET)
    .upload(path, file, { contentType: file.type, cacheControl: "3600", upsert: false });
  if (error) throw new Error(`Error al subir la imagen: ${error.message}`);
  const { data } = supabaseClient.storage.from(RESTAURANT_IMAGE_BUCKET).getPublicUrl(path);
  if (!data?.publicUrl) throw new Error("La imagen se subió pero no se pudo obtener su URL pública.");
  return { url: data.publicUrl, path };
}

async function cleanupFailedImageUploads(paths) {
  if (!paths.length) return;
  const { error } = await supabaseClient.storage.from(RESTAURANT_IMAGE_BUCKET).remove(paths);
  if (error) console.warn("No se pudieron limpiar algunas imágenes sin guardar:", error.message);
}

function showUploadPreview(fileId, urlId, previewId) {
  const file = document.getElementById(fileId)?.files?.[0];
  const url = document.getElementById(urlId)?.value?.trim() || "";
  const preview = document.getElementById(previewId);
  if (!preview) return;
  const oldBlob = preview.dataset.blobUrl;
  if (oldBlob) URL.revokeObjectURL(oldBlob);
  delete preview.dataset.blobUrl;
  const nextSrc = file ? URL.createObjectURL(file) : safeImageUrl(url);
  preview.hidden = !nextSrc;
  if (nextSrc) {
    if (file) preview.dataset.blobUrl = nextSrc;
    preview.src = nextSrc;
  } else {
    preview.removeAttribute("src");
  }
}

function formatCurrency(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
}

function parsePrice(value) {
  if (typeof value === "number") return value;
  return Number(String(value || "").replace(/[^\d]/g, "")) || 0;
}

function safeImageUrl(value, fallback = "") {
  try {
    const url = new URL(String(value || ""));
    return url.protocol === "https:" ? url.href : fallback;
  } catch (error) {
    return fallback;
  }
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });
  state.activeView = viewId;
  if (viewId === "view-orders" && state.user) {
    void renderOrders(true);
  }

  document.querySelectorAll(".nav-item").forEach((item) => {
    const active = item.dataset.target === viewId.replace("view-", "") || item.dataset.target === "lobby" && viewId === "view-lobby";
    item.classList.toggle("active", active);
  });
}

function renderCategories() {
  const categoriesContainer = document.getElementById("categories");
  if (!categoriesContainer) return;

  const categoriesByKey = new Map(CATEGORIES.map((category) => [category.key, category]));
  RESTAURANTS.filter((restaurant) => !restaurant.suspendido).forEach((restaurant) => {
    const label = restaurant.categoria?.trim();
    const key = label?.toLocaleLowerCase("es");
    if (key && !categoriesByKey.has(key)) {
      categoriesByKey.set(key, { key, label, icon: "fa-solid fa-utensils" });
    }
  });

  categoriesContainer.innerHTML = [...categoriesByKey.values()].map((category) => `
    <button class="category-card ${state.selectedCategory === category.key ? "active" : ""}" data-category="${escapeHtml(category.key)}" type="button">
      <div class="cat-icon"><i class="${category.icon}"></i></div>
      <span>${escapeHtml(category.label)}</span>
    </button>
  `).join("");

  categoriesContainer.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedCategory = card.dataset.category;
      renderCategories();
      renderRestaurants();
    });
  });
}

// Las cifras públicas se cargan con obtener_resumen_pedidos_publicos().
// Mostramos un Top 5 por municipio solo cuando hay pedidos ENTREGADOS
// verificados y el cliente seleccionó su ciudad.
function orderByDeliveredOrders(first, second) {
  const ordersDifference = (Number(second.pedidos) || 0) - (Number(first.pedidos) || 0);
  return ordersDifference || first.nombre.localeCompare(second.nombre, "es");
}

function restaurantCatalogCard(restaurant, rank = 0) {
  const hasCount = restaurant.pedidosVerificados === true;
  const delivered = Number(restaurant.pedidos) || 0;
  const orderText = `${delivered.toLocaleString("es-CO")} ${delivered === 1 ? "pedido entregado" : "pedidos entregados"}`;
  const favorite = isFavorite("restaurante", restaurant.id);
  return `
    <article class="restaurant-card ${rank ? "is-top-restaurant" : ""}" data-id="${escapeHtml(restaurant.id)}" role="button" tabindex="0" aria-label="Abrir restaurante ${escapeHtml(restaurant.nombre)}">
      <button class="favorite-toggle ${favorite ? "is-favorite" : ""}" type="button"
        data-favorite-type="restaurante" data-favorite-id="${escapeHtml(restaurant.id)}"
        aria-label="Guardar restaurante en favoritos" aria-pressed="${favorite}">
        <i class="fa-${favorite ? "solid" : "regular"} fa-heart"></i>
      </button>
      ${rank ? `<span class="restaurant-rank" aria-label="Puesto ${rank} en pedidos entregados">#${rank} Top pedidos</span>` : ""}
      <div class="restaurant-card-media">
        <img src="${escapeHtml(safeImageUrl(restaurant.cover))}" alt="Portada de ${escapeHtml(restaurant.nombre)}" loading="lazy" ${safeImageUrl(restaurant.cover) ? "" : "hidden"} />
        <div class="restaurant-image-fallback" role="img" aria-label="Portada alternativa para ${escapeHtml(restaurant.nombre)}">
          <span class="restaurant-fallback-mark">R<span>Y</span></span>
          <small>Restaurante</small>
        </div>
      </div>
      <div class="card-body">
        <h4>${escapeHtml(restaurant.nombre)}</h4>
        <p>
          <span class="rating"><i class="fa-solid fa-star"></i> ${restaurant.votos > 0 ? escapeHtml(restaurant.rating) : "Sin votos"}</span>
          <span>• ${escapeHtml(restaurant.tiempo)}</span>
        </p>
        ${hasCount ? `<p class="restaurant-deliveries"><i class="fa-solid fa-check-circle"></i> ${escapeHtml(orderText)}</p>` : ""}
      </div>
    </article>
  `;
}

function renderRestaurants() {
  const grid = document.getElementById("restaurantes-grid");
  const topSection = document.getElementById("top-restaurantes-section");
  const topGrid = document.getElementById("top-restaurantes-grid");
  const otherHeading = document.getElementById("other-restaurants-heading");
  const topCity = document.getElementById("top-city-name");
  if (!grid || !topSection || !topGrid || !otherHeading || !topCity) return;

  const search = document.getElementById("input-buscar")?.value.trim().toLocaleLowerCase("es") || "";
  const filtered = RESTAURANTS.filter((restaurant) => {
    if (restaurant.suspendido) return false;
    const matchesCategory = state.selectedCategory === "all" || normalizeText(restaurant.categoria) === normalizeText(state.selectedCategory);
    const matchesSearch = !search || normalizeText(restaurant.nombre).includes(normalizeText(search));
    const matchesCity = !state.delivery.city || normalizeText(restaurant.ciudad || restaurant.municipio) === normalizeText(state.delivery.city);
    return matchesCategory && matchesSearch && matchesCity;
  });

  // El ranking nunca mezcla ciudades y se oculta si la consulta al contador falló.
  const showTop = Boolean(state.delivery.city && !search && state.selectedCategory === "all"
    && filtered.every((restaurant) => restaurant.pedidosVerificados === true));
  const top = showTop
    ? filtered.filter((restaurant) => (Number(restaurant.pedidos) || 0) > 0)
        .sort(orderByDeliveredOrders).slice(0, 5)
    : [];
  const rankedIds = new Set(top.map((restaurant) => restaurant.id));
  const remaining = filtered.filter((restaurant) => !rankedIds.has(restaurant.id));
  remaining.sort((first, second) => first.nombre.localeCompare(second.nombre, "es"));

  topSection.hidden = top.length === 0;
  topCity.textContent = state.delivery.city || "tu ciudad";
  topGrid.innerHTML = top.map((restaurant, index) => restaurantCatalogCard(restaurant, index + 1)).join("");
  otherHeading.hidden = remaining.length === 0;
  const otherTitle = otherHeading.querySelector("h3");
  if (otherTitle) otherTitle.textContent = top.length ? "Otros restaurantes" : "Restaurantes disponibles";

  const emptyMessage = search
    ? "No encontramos resultados para tu búsqueda."
    : state.delivery.city
      ? `No hay restaurantes disponibles en ${escapeHtml(state.delivery.city)}.`
      : "Aún no hay restaurantes disponibles. Vuelve a consultar más tarde.";
  grid.innerHTML = remaining.map((restaurant) => restaurantCatalogCard(restaurant)).join("")
    || (top.length ? "" : `<div class="catalog-empty">${emptyMessage}</div>`);

  [topGrid, grid].forEach((container) => {
    container.querySelectorAll(".restaurant-card").forEach((card) => {
      card.addEventListener("click", () => openRestaurant(card.dataset.id));
      card.addEventListener("keydown", (event) => {
        if (event.target !== card || !["Enter", " "].includes(event.key)) return;
        event.preventDefault();
        openRestaurant(card.dataset.id);
      });
      const cover = card.querySelector(".restaurant-card-media img");
      const fallback = card.querySelector(".restaurant-image-fallback");
      cover?.addEventListener("error", () => {
        cover.hidden = true;
        if (fallback) fallback.hidden = false;
      });
    });
    container.querySelectorAll(".favorite-toggle").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleFavorite(button.dataset.favoriteType, button.dataset.favoriteId);
      });
    });
  });
}

function normalizeText(value) {
  return String(value || "").trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

const WEEKDAYS_CO = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
function colombiaClock(date = new Date()) {
  const fields = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota", weekday: "long", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
  }).formatToParts(date);
  const value = (key) => fields.find((part) => part.type === key)?.value || "";
  const days = {Monday:0, Tuesday:1, Wednesday:2, Thursday:3, Friday:4, Saturday:5, Sunday:6};
  return { weekday: days[value("weekday")] ?? 0, minutes: Number(value("hour"))*60 + Number(value("minute")) };
}
function timeMinutes(value) {
  if (!/^\d{2}:\d{2}$/.test(value || "")) return null;
  const [h,m] = value.split(":").map(Number);
  return h < 24 && m < 60 ? h * 60 + m : null;
}
function scheduleDayOpen(day, minute, yesterday = false) {
  if (!day?.activo) return false;
  const start = timeMinutes(day.abre), end = timeMinutes(day.cierra);
  if (start === null || end === null || start === end) return false;
  if (yesterday) return start > end && minute < end;
  return start < end ? minute >= start && minute < end : minute >= start;
}
function isRestaurantOpen(restaurant) {
  if (restaurant.suspendido) return false;
  const manual = normalizeText(restaurant.estado);
  if (manual === "cerrado") return false;
  if (restaurant.pausaHasta && new Date(restaurant.pausaHasta).getTime() > Date.now()) return false;
  if (manual === "abierto") return true;
  const {weekday, minutes} = colombiaClock();
  const weekly = restaurant.horarioSemanal;
  if (weekly && typeof weekly === "object") {
    const today = weekly[WEEKDAYS_CO[weekday]];
    const prev = weekly[WEEKDAYS_CO[(weekday + 6) % 7]];
    return scheduleDayOpen(today, minutes) || scheduleDayOpen(prev, minutes, true);
  }
  const start = timeMinutes(restaurant.apertura), end = timeMinutes(restaurant.cierre);
  if (start === null || end === null || start === end) return false;
  return start < end ? (minutes >= start && minutes < end) : (minutes >= start || minutes < end);
}

function setWeeklyFields(restaurant) {
  const enabled = document.getElementById("panel-weekly-enabled");
  const days = document.getElementById("panel-weekly-days");
  if (!enabled || !days) return;
  enabled.checked = Boolean(restaurant.horarioSemanal);
  days.hidden = !enabled.checked;
  document.querySelectorAll(".weekly-hour-row").forEach((row) => {
    const day = restaurant.horarioSemanal?.[row.dataset.weekday];
    const active = row.querySelector("[data-day-enabled]");
    active.checked = day ? day.activo === true : true;
    row.querySelector("[data-day-open]").value = day?.abre || restaurant.apertura || "09:00";
    row.querySelector("[data-day-close]").value = day?.cierra || restaurant.cierre || "22:00";
    row.querySelectorAll("[data-day-open],[data-day-close]").forEach((input) => {input.disabled = !active.checked;});
  });
  updateWeeklyInputsDisabled();
  const pause = document.getElementById("panel-pause-status");
  if (pause) pause.textContent = restaurant.pausaHasta && new Date(restaurant.pausaHasta).getTime() > Date.now()
    ? `Pausado hasta ${new Date(restaurant.pausaHasta).toLocaleString("es-CO", {timeZone:"America/Bogota"})} (hora de Colombia)`
    : "Sin pausa activa.";
}
function updateWeeklyInputsDisabled() {
  const weeklyEnabled = document.getElementById("panel-weekly-enabled")?.checked;
  const days = document.getElementById("panel-weekly-days");
  if (days) days.hidden = !weeklyEnabled;
  document.querySelectorAll(".weekly-hour-row").forEach((row) => {
    const active = row.querySelector("[data-day-enabled]");
    row.querySelectorAll("[data-day-open],[data-day-close]").forEach((input) => {
      input.disabled = !weeklyEnabled || !active.checked || active.disabled;
    });
  });
}
function readWeeklyFields() {
  if (!document.getElementById("panel-weekly-enabled")?.checked) return null;
  const weekly = {};
  document.querySelectorAll(".weekly-hour-row").forEach((row) => {
    const activo = row.querySelector("[data-day-enabled]").checked;
    const abre = row.querySelector("[data-day-open]").value;
    const cierra = row.querySelector("[data-day-close]").value;
    if (activo && (timeMinutes(abre) === null || timeMinutes(cierra) === null || abre === cierra)) {
      throw new Error(`Revisa las horas de ${row.dataset.weekday}: deben ser válidas y diferentes.`);
    }
    weekly[row.dataset.weekday] = {activo, abre: activo ? abre : null, cierra: activo ? cierra : null};
  });
  return weekly;
}

function distanceKm(first, second) {
  const radians = Math.PI / 180;
  const dLat = (second.lat - first.lat) * radians;
  const dLng = (second.lng - first.lng) * radians;
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(first.lat * radians) * Math.cos(second.lat * radians) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(Math.max(0, Math.min(1, a))));
}

// Solo consultamos conteos agregados; la función SQL no devuelve datos personales.
// Se consideran entregados únicamente los pedidos con estado ENTREGADO.
async function loadPublicOrderCounts() {
  RESTAURANTS.forEach((restaurant) => {
    restaurant.pedidos = 0;
    restaurant.pedidosVerificados = false;
  });
  if (!supabaseClient) return;

  try {
    const { data, error } = await supabaseClient.rpc("obtener_resumen_pedidos_publicos");
    if (error) throw error;
    if (!Array.isArray(data)) throw new Error("Respuesta inesperada del contador");
    const counts = new Map(data.map((item) => [item.id_restaurante, Number(item.pedidos_entregados) || 0]));
    RESTAURANTS.forEach((restaurant) => {
      restaurant.pedidos = Math.max(0, counts.get(restaurant.id) ?? 0);
      restaurant.pedidosVerificados = true;
    });
  } catch (error) {
    // No presentar cero como dato confirmado si falla la consulta a Supabase.
    console.warn("No se pudo cargar el conteo público de pedidos:", error.message || error);
  }
}

function zonesForRestaurant(restaurantId) {
  return state.deliveryZones.filter((zone) => zone.id_restaurante === restaurantId);
}

function selectedDeliveryZone(restaurantId) {
  return zonesForRestaurant(restaurantId).find((zone) =>
    String(zone.id) === String(state.selectedZoneIds[restaurantId] || "")) || null;
}

async function loadDeliveryZones() {
  state.deliveryZonesLoaded = false;
  const { data, error } = await supabaseClient.from("zonas_entrega")
    .select("id,id_restaurante,nombre,tarifa")
    .eq("activo", true)
    .order("nombre", { ascending: true });
  if (error) throw error;
  state.deliveryZones = (data || []).map((row) => ({
    ...row, tarifa: Number(row.tarifa)
  }));
  state.deliveryZonesLoaded = true;
}

function parseDeliveryZoneLines(value) {
  const lines = String(value || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (lines.length > 35) throw new Error("Máximo 35 sectores por restaurante.");
  const seen = new Set();
  return lines.map((line) => {
    const parts = line.split("|");
    if (parts.length !== 2) throw new Error("Para cada zona escribe Barrio|Tarifa, una por línea.");
    const nombre = parts[0].trim();
    const precio = parts[1].trim();
    if (nombre.length < 2 || nombre.length > 80 || !/^(0|[1-9]\d{0,5})$/.test(precio) || Number(precio) > 200000) {
      throw new Error("Cada sector debe tener un nombre de 2-80 caracteres y una tarifa de $0 a $200.000 (sin puntos).");
    }
    const normalized = nombre.toLocaleLowerCase("es");
    if (seen.has(normalized)) throw new Error("Los barrios o sectores no pueden repetirse.");
    seen.add(normalized);
    return { nombre, tarifa: Number(precio) };
  });
}

async function loadCatalogFromSupabase() {
  if (!supabaseClient) return false;

  try {
    const restaurantsResult = await supabaseClient
      .from("restaurantes")
      .select("id_restaurante,Nombre,Categoria,Promedio,Promedio_Nuevo,Tiempo_Entrega,Costo_Envio,Envio_Gratis,Estado_Manual,Logo_URL,Portada_URL,WhatsApp,Municipio,Ciudad,Departamento,Pais,Horario_Apertura,Horario_Cierre,Horario_Semanal,Pausa_Hasta,Latitud,Longitud,Radio_Entrega_Km,Total_Votos,Fecha_Registro");

    if (restaurantsResult.error) throw restaurantsResult.error;
    // Se consulta antes de mostrar el catálogo. El disparador SQL impide nuevos pedidos
    // en comercios suspendidos incluso si alguien omite el filtro del navegador.
    const moderation = await supabaseClient.rpc("pideya_restaurantes_suspendidos");
    if (moderation.error) throw moderation.error;
    const blockedRestaurantIds = new Set((moderation.data || []).map((item) => item.id_restaurante));

    const restaurants = restaurantsResult.data.map((row) => ({
      id: row.id_restaurante,
      suspendido: blockedRestaurantIds.has(row.id_restaurante),
      nombre: row.Nombre,
      categoria: row.Categoria || "Otros",
      rating: Number(row.Promedio_Nuevo ?? row.Promedio ?? 0),
      votos: Number(row.Total_Votos || 0),
      tiempo: row.Tiempo_Entrega || "30-45 min",
      costoEnvio: Number(row.Costo_Envio || 0),
      envioGratis: ["si", "sí", "true"].includes(String(row.Envio_Gratis).trim().toLocaleLowerCase("es")),
      promo: "",
      cover: safeImageUrl(row.Portada_URL),
      logo: safeImageUrl(row.Logo_URL),
      pedidos: 0,
      pedidosVerificados: false,
      estado: row.Estado_Manual || "Automatico",
      horarioSemanal: row.Horario_Semanal || null,
      pausaHasta: row.Pausa_Hasta || null,
      apertura: row.Horario_Apertura ? String(row.Horario_Apertura).slice(0, 5) : "",
      cierre: row.Horario_Cierre ? String(row.Horario_Cierre).slice(0, 5) : "",
      abierto: isRestaurantOpen({
        suspendido: blockedRestaurantIds.has(row.id_restaurante),
        estado: row.Estado_Manual,
        horarioSemanal: row.Horario_Semanal || null,
        pausaHasta: row.Pausa_Hasta || null,
        apertura: row.Horario_Apertura ? String(row.Horario_Apertura).slice(0, 5) : "",
        cierre: row.Horario_Cierre ? String(row.Horario_Cierre).slice(0, 5) : ""
      }),
      whatsapp: row.WhatsApp || "",
      municipio: row.Municipio || row.Ciudad || "",
      ciudad: row.Ciudad || row.Municipio || "",
      departamento: row.Departamento || "",
      pais: row.Pais || "",
      lat: row.Latitud != null && Number.isFinite(Number(row.Latitud)) ? Number(row.Latitud) : null,
      lng: row.Longitud != null && Number.isFinite(Number(row.Longitud)) ? Number(row.Longitud) : null,
      radioKm: row.Radio_Entrega_Km != null && Number.isFinite(Number(row.Radio_Entrega_Km)) ? Number(row.Radio_Entrega_Km) : null,
      fechaRegistro: row.Fecha_Registro || ""
    })).sort((first, second) => first.nombre.localeCompare(second.nombre, "es"));

    RESTAURANTS.splice(0, RESTAURANTS.length, ...restaurants);
    Object.keys(MENU).forEach((restaurantId) => delete MENU[restaurantId]);

    let productsLoaded = false;
    try {
      const productsResult = await supabaseClient
        .from("menus")
        .select("id_producto,id_restaurante,Nombre,Descripcion,Precio,Precio_Anterior,Categoria_Plato,Foto_URL,Disponible,Personalizacion")
        .eq("Disponible", true);

      if (productsResult.error) throw productsResult.error;
      productsLoaded = true;

      productsResult.data.forEach((row) => {
        if (!row.id_producto || !row.id_restaurante || !row.Nombre) return;
        const price = parsePrice(row.Precio);
        if (price <= 0) return;

        const restaurant = RESTAURANTS.find((item) => item.id === row.id_restaurante);
        if (!restaurant) return;
        if (!MENU[row.id_restaurante]) MENU[row.id_restaurante] = [];

        MENU[row.id_restaurante].push({
          id: row.id_producto,
          nombre: row.Nombre,
          desc: row.Descripcion || "",
          precio: price,
          precioAnterior: parsePrice(row.Precio_Anterior),
          img: safeImageUrl(row.Foto_URL, restaurant.cover),
          disponible: row.Disponible === true,
          categoria: row.Categoria_Plato || "",
          personalizacion: row.Personalizacion || {}
        });
      });
    } catch (error) {
      console.error("No se pudieron cargar los productos de Supabase:", error.message || error);
    }

    if (productsLoaded) pruneCartToCatalog();
    try {
      await loadDeliveryZones();
    } catch (zoneError) {
      state.deliveryZonesLoaded = false;
      state.deliveryZones = [];
      console.error("No se pudieron cargar las zonas de entrega:", zoneError.message || zoneError);
    }
    await loadPublicOrderCounts();
    return true;
  } catch (error) {
    console.error("No se pudo cargar el catálogo de Supabase:", error.message || error);
    // No mostrar los restaurantes ficticios del demo como datos reales ni omitir una suspensión.
    RESTAURANTS.splice(0, RESTAURANTS.length);
    Object.keys(MENU).forEach((id) => delete MENU[id]);
    return false;
  }
}

function pruneCartToCatalog() {
  const kept = {};
  let removed = 0;
  Object.entries(state.cart).forEach(([key, quantity]) => {
    const [restaurantId, productId] = key.split(":");
    const restaurant = RESTAURANTS.find((item) => item.id === restaurantId);
    const product = (MENU[restaurantId] || []).find((item) => item.id === productId);
    if (restaurant && product?.disponible) kept[key] = quantity;
    else removed += quantity;
  });
  if (!removed) return;
  state.cart = kept;
  state.preparedOrders = [];
  clearCheckoutId();
  saveCart();
  updateCartBadge();
  window.alert(`Se quitaron ${removed} unidad(es) del carrito porque el producto ya no está disponible.`);
}

function catalogCities() {
  return [...new Set(RESTAURANTS.filter((restaurant) => !restaurant.suspendido)
    .map((restaurant) => restaurant.ciudad || restaurant.municipio).filter(Boolean))]
    .sort((first, second) => first.localeCompare(second, "es"));
}

function updateCitySelect(id, selectedCity) {
  const select = document.getElementById(id);
  if (!select) return;
  const cities = [...new Set([...catalogCities(), selectedCity].filter(Boolean))]
    .sort((first, second) => first.localeCompare(second, "es"));
  select.replaceChildren(new Option("Selecciona una ciudad", ""));
  cities.forEach((city) => select.add(new Option(city, city)));
  select.value = cities.includes(selectedCity) ? selectedCity : "";
}

async function reverseGeocodeCity(lat, lng) {
  const params = new URLSearchParams({
    format: "jsonv2",
    lat: String(lat),
    lon: String(lng),
    zoom: "10",
    addressdetails: "1",
    "accept-language": "es"
  });
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${params}`, {
      signal: controller.signal
    });
    if (!response.ok) {
      throw new Error(`OpenStreetMap respondió con el código ${response.status}.`);
    }
    const result = await response.json();
    if (!result || typeof result !== "object") {
      throw new Error("OpenStreetMap devolvió una respuesta inválida.");
    }
    if (result.error) throw new Error(result.error);

    const address = result.address || {};
    const city = [
      address.city,
      address.town,
      address.village,
      address.municipality,
      address.hamlet,
      address.county,
      address.city_district,
      address.suburb,
      address.neighbourhood
    ].find((value) => typeof value === "string" && value.trim());
    if (!city) throw new Error("OpenStreetMap no encontró un municipio para estas coordenadas.");
    return city.trim();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("La consulta del municipio tardó demasiado. Intenta de nuevo o selecciónalo manualmente.");
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}

let locationGpsDraft = null;

function refreshLocationUI() {
  updateCitySelect("delivery-city", state.delivery.city);
  updateCitySelect("checkout-city", state.delivery.city);
  const label = document.getElementById("location-label");
  if (label) {
    label.textContent = state.delivery.city
      ? `${state.delivery.city}${state.delivery.address ? ` · ${state.delivery.address}` : ""}`
      : "Selecciona tu ciudad";
  }
}

function openLocationDialog() {
  const dialog = document.getElementById("location-dialog");
  if (!dialog) return;
  refreshLocationUI();
  locationGpsDraft = state.delivery.lat != null && state.delivery.lng != null
    ? { lat: state.delivery.lat, lng: state.delivery.lng }
    : null;
  document.getElementById("delivery-address").value = state.delivery.address;
  document.getElementById("gps-location-status").textContent = state.delivery.lat != null
    ? "GPS guardado. Puedes actualizarlo o conservarlo."
    : "El GPS ayuda a comprobar si el restaurante está dentro del radio configurado.";
  document.getElementById("gps-clear-btn").hidden = !locationGpsDraft;
  if (!dialog.open) dialog.showModal();
}

function requestDeliveryGps() {
  const button = document.getElementById("gps-location-btn");
  const status = document.getElementById("gps-location-status");
  if (!navigator.geolocation) {
    status.textContent = "Este navegador no ofrece ubicación GPS.";
    return;
  }
  button.disabled = true;
  status.textContent = "Solicitando ubicación...";
  try {
    navigator.geolocation.getCurrentPosition(async (position) => {
      locationGpsDraft = { lat: position.coords.latitude, lng: position.coords.longitude };
      document.getElementById("gps-clear-btn").hidden = false;
      status.textContent = "Ubicación obtenida. Buscando el municipio...";
      try {
        const city = await reverseGeocodeCity(locationGpsDraft.lat, locationGpsDraft.lng);
        updateCitySelect("delivery-city", city);
        document.getElementById("delivery-city").value = city;
        status.textContent = `Municipio detectado: ${city} (precisión GPS aproximada: ${Math.round(position.coords.accuracy)} m).`;
      } catch (error) {
        document.getElementById("delivery-city").value = "";
        status.textContent = `Se obtuvo el GPS, pero no se pudo detectar el municipio: ${error.message || error} Selecciónalo manualmente.`;
      } finally {
        button.disabled = false;
      }
    }, (error) => {
      status.textContent = error.code === 1
        ? "No se permitió el acceso a la ubicación. Puedes continuar con dirección y ciudad."
        : "No se pudo obtener el GPS. Intenta de nuevo o continúa con dirección y ciudad.";
      button.disabled = false;
    }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 });
  } catch (error) {
    status.textContent = `No se pudo solicitar la ubicación: ${error.message || error}`;
    button.disabled = false;
  }
}

function clearDeliveryGps() {
  locationGpsDraft = null;
  document.getElementById("gps-clear-btn").hidden = true;
  document.getElementById("gps-location-status").textContent = "Se quitará el GPS al guardar esta ubicación.";
}

function saveDeliveryLocation(event) {
  event.preventDefault();
  const city = document.getElementById("delivery-city").value.trim();
  const address = document.getElementById("delivery-address").value.trim();
  if (!city || address.length > 400) {
    document.getElementById("gps-location-status").textContent = "Selecciona una ciudad y revisa la dirección.";
    return;
  }
  state.delivery = {
    ...state.delivery,
    city,
    address,
    lat: locationGpsDraft?.lat ?? null,
    lng: locationGpsDraft?.lng ?? null
  };
  try {
    localStorage.setItem("rapiya-delivery-location", JSON.stringify(state.delivery));
  } catch (error) {
    document.getElementById("gps-location-status").textContent = `No se pudo guardar la ubicación: ${error.message || error}`;
    return;
  }
  state.preparedOrders = [];
  refreshLocationUI();
  renderRestaurants();
  renderCart();
  document.getElementById("location-dialog").close();
}

function openRestaurant(id) {
  const restaurant = RESTAURANTS.find((item) => item.id === id);
  if (!restaurant) return;

  state.selectedRestaurantId = id;
  renderRestaurantDetail();
  showView("view-restaurant");
}

function renderRestaurantDetail() {
  const restaurant = RESTAURANTS.find((item) => item.id === state.selectedRestaurantId);
  if (!restaurant) return;

  const header = document.getElementById("store-header");
  const logo = document.getElementById("store-logo");
  const name = document.getElementById("store-name");
  const meta = document.getElementById("store-meta");
  const delivery = document.getElementById("store-delivery");
  const price = document.getElementById("store-price");
  const promo = document.getElementById("store-promo");
  const list = document.getElementById("platos-container");
  const count = document.getElementById("menu-count");

  if (!header || !logo || !name || !meta || !delivery || !price || !promo || !list || !count) return;

  header.style.backgroundImage = `url("${safeImageUrl(restaurant.cover)}")`;
  logo.src = restaurant.logo || restaurant.cover;
  logo.onerror = () => { logo.onerror = null; logo.src = restaurant.cover; };
  name.textContent = restaurant.nombre;
  const ordersBadge = document.getElementById("store-orders-badge");
  const ordersCount = document.getElementById("store-orders-count");
  if (ordersBadge && ordersCount) {
    ordersBadge.hidden = restaurant.pedidosVerificados !== true;
    if (restaurant.pedidosVerificados === true) {
      const n = restaurant.pedidos;
      ordersCount.textContent = `${n.toLocaleString("es-CO")} ${n === 1 ? "pedido entregado" : "pedidos entregados"}`;
    }
  }
  const votes = Number(restaurant.votos) || 0;
  meta.textContent = votes > 0
    ? `${restaurant.categoria} • ★ ${Number(restaurant.rating || 0).toFixed(1)} (${votes} ${votes === 1 ? "valoración" : "valoraciones"})`
    : `${restaurant.categoria} • Sin valoraciones todavía`;
  delivery.textContent = `Entrega: ${restaurant.tiempo}`;
  price.textContent = restaurant.envioGratis
    ? "Envío gratis"
    : zonesForRestaurant(restaurant.id).length ? "Envío según sector" : `Envío ${formatCurrency(restaurant.costoEnvio)}`;
  // Solo comunicar beneficios realmente configurados por el restaurante.
  const shippingNote = promo.closest(".promo-shipping-banner");
  if (shippingNote) shippingNote.hidden = !restaurant.envioGratis;
  promo.textContent = restaurant.envioGratis ? "Envío gratis" : "";

  const favoriteButton = document.getElementById("btn-favorite-restaurant");
  if (favoriteButton) {
    const favorite = isFavorite("restaurante", restaurant.id);
    favoriteButton.classList.toggle("is-favorite", favorite);
    favoriteButton.setAttribute("aria-pressed", String(favorite));
    favoriteButton.innerHTML = `<svg viewBox="0 0 24 24" fill="${favorite ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="ui-icon"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>`;
  }

  const items = (MENU[restaurant.id] || []).filter((product) => product.disponible !== false);
  count.textContent = `${items.length} ${items.length === 1 ? "producto" : "productos"}`;
  list.innerHTML = items.length ? items.map((product) => `
    <article class="dish-card">
      <img src="${escapeHtml(safeImageUrl(product.img))}" alt="${escapeHtml(product.nombre)}" loading="lazy" />
      <div class="dish-copy">
        <h4>${escapeHtml(product.nombre)}</h4>
        <p>${escapeHtml(product.desc)}</p>
        <div class="price-row">
          <strong>${formatCurrency(product.precio)}</strong>
          ${product.precioAnterior > product.precio ? `<del>${formatCurrency(product.precioAnterior)}</del>` : ""}
        </div>
      </div>
      <button class="dish-open" type="button" data-open-product="${escapeHtml(product.id)}" aria-label="Ver imagen y descripción completa de ${escapeHtml(product.nombre)}"></button>
      <button class="add-btn" type="button" data-product="${escapeHtml(product.id)}" ${restaurant.abierto ? "" : "disabled"} aria-label="Agregar ${escapeHtml(product.nombre)}">+</button>
      <button class="favorite-toggle ${isFavorite("producto", product.id) ? "is-favorite" : ""}" type="button" data-favorite-type="producto" data-favorite-id="${escapeHtml(product.id)}" aria-label="Guardar producto en favoritos" aria-pressed="${isFavorite("producto", product.id)}"><i class="fa-${isFavorite("producto", product.id) ? "solid" : "regular"} fa-heart"></i></button>
    </article>
  `).join("") : '<p class="catalog-empty">Este restaurante no tiene productos disponibles en este momento.</p>';

  list.querySelectorAll("[data-open-product]").forEach((button) => {
    button.addEventListener("click", () => openProductDetails(button.dataset.openProduct, restaurant.id));
  });

  list.querySelectorAll(".add-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const product = items.find((item) => item.id === button.dataset.product);
      if (hasRequiredChoices(product)) openProductDetails(button.dataset.product, restaurant.id);
      else addToCart(button.dataset.product, restaurant.id);
    });
  });

  list.querySelectorAll(".favorite-toggle").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favoriteType, button.dataset.favoriteId));
  });
}

// Ventana de detalle para clientes: abre un producto sin alterar el catálogo
// ni confundirla con el formulario privado de edición de los comercios.
function openProductDetails(productId, restaurantId) {
  const dialog = document.getElementById("product-detail-dialog");
  const restaurant = RESTAURANTS.find((item) => item.id === restaurantId);
  const product = (MENU[restaurantId] || []).find((item) => item.id === productId);
  if (!dialog || !restaurant || !product || product.disponible === false) return;

  const image = document.getElementById("product-detail-image");
  const imageFallback = document.getElementById("product-detail-image-fallback");
  const title = document.getElementById("product-detail-title");
  const description = document.getElementById("product-detail-description");
  const category = document.getElementById("product-detail-category");
  const seller = document.getElementById("product-detail-restaurant");
  const price = document.getElementById("product-detail-price");
  const oldPrice = document.getElementById("product-detail-old-price");
  const addButton = document.getElementById("product-detail-add");
  const feedback = document.getElementById("product-detail-feedback");

  title.textContent = product.nombre;
  seller.textContent = restaurant.nombre;
  category.textContent = product.categoria || restaurant.categoria || "Producto";
  description.textContent = product.desc?.trim() || "Este producto todavía no tiene una descripción adicional.";
  renderProductCustomization(product);
  feedback.textContent = "";

  const imageUrl = safeImageUrl(product.img, safeImageUrl(restaurant.cover));
  image.hidden = !imageUrl;
  imageFallback.hidden = Boolean(imageUrl);
  image.alt = `Fotografía de ${product.nombre}`;
  image.onload = () => { imageFallback.hidden = true; image.hidden = false; };
  image.onerror = () => { image.hidden = true; imageFallback.hidden = false; };
  if (imageUrl) image.src = imageUrl;
  else image.removeAttribute("src");

  // El cliente puede leer los detalles aun cuando el comercio esté cerrado.
  const canAdd = restaurant.abierto && state.profile?.rol !== "admin";
  addButton.disabled = !canAdd;
  addButton.textContent = state.profile?.rol === "admin"
    ? "Vista previa: solo lectura"
    : restaurant.abierto ? "Agregar al carrito" : "Restaurante cerrado";
  addButton.onclick = () => {
    if (!canAdd) return;
    const selection = getDialogProductSelection();
    const options = productCustomization(product);
    if (options.tamanos.length && !selection.tamano) {
      feedback.textContent = "Selecciona un tamaño.";
      return;
    }
    const added = addToCart(productId, restaurantId, selection);
    feedback.textContent = added
      ? "Producto personalizado agregado al carrito."
      : "No se pudo agregar. Revisa la ubicación o disponibilidad.";
  };

  // Cada ficha comienza arriba, aunque la anterior se haya desplazado.
  const scrollArea = document.getElementById("product-detail-scroll");
  if (scrollArea) scrollArea.scrollTop = 0;
  if (!dialog.open) dialog.showModal();
}

function addToCart(productId, restaurantId, selection = emptySelection()) {
  const restaurant = RESTAURANTS.find((item) => item.id === restaurantId);
  const product = (MENU[restaurantId] || []).find((item) => item.id === productId);
  if (!restaurant || !product || product.disponible === false || !restaurant.abierto) {
    alert("Este producto no está disponible en este momento.");
    return false;
  }
  if (state.delivery.city && normalizeText(state.delivery.city) !== normalizeText(restaurant.ciudad || restaurant.municipio)) {
    alert("Este restaurante no atiende la ciudad seleccionada.");
    return false;
  }
  if (state.delivery.lat != null && state.delivery.lng != null
    && restaurant.lat != null && restaurant.lng != null && restaurant.radioKm != null
    && distanceKm(state.delivery, { lat: restaurant.lat, lng: restaurant.lng }) > restaurant.radioKm) {
    alert("Este restaurante no entrega en el punto GPS seleccionado.");
    return false;
  }

  const key = cartKey(restaurantId, productId, selection);
  if ((state.cart[key] || 0) >= 50) {
    alert("El máximo es 50 unidades por producto.");
    return false;
  }
  state.cart[key] = (state.cart[key] || 0) + 1;
  state.preparedOrders = [];
  clearCheckoutId();
  saveCart();
  updateCartBadge();
  renderCart();
  return true;
}

function updateCartBadge() {
  const countEl = document.getElementById("cart-count");
  const total = Object.values(state.cart).reduce((sum, quantity) => sum + quantity, 0);
  if (countEl) countEl.textContent = total;
  const quickCount = document.getElementById("quick-cart-count");
  if (quickCount) quickCount.textContent = total;
}

function cartEntries() {
  return Object.entries(state.cart).map(([key, quantity]) => {
    const [restaurantId, productId] = key.split(":");
    const restaurant = RESTAURANTS.find((item) => item.id === restaurantId);
    const product = (MENU[restaurantId] || []).find((item) => item.id === productId);
    const selection = cartSelection(key);
    return { key, quantity, restaurant, product, selection, unitPrice: product ? selectedProductPrice(product, selection) : 0 };
  }).filter((entry) => entry.restaurant && entry.product);
}


// Las cotizaciones sólo son informativas: Supabase recalcula el importe final del cupón.
function promoMoneyForRestaurant(restaurantId) {
  const restaurant = RESTAURANTS.find((item) => item.id === restaurantId);
  const entries = cartEntries().filter((item) => item.restaurant.id === restaurantId);
  const subtotal = entries.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
  const zones = zonesForRestaurant(restaurantId);
  const zone = selectedDeliveryZone(restaurantId);
  const shipping = restaurant?.envioGratis ? 0 : zones.length ? Number(zone?.tarifa || 0) : Number(restaurant?.costoEnvio || 0);
  const signature = JSON.stringify([entries.map((item) => [item.key,item.quantity,item.unitPrice]),shipping]);
  return { subtotal, shipping, signature, hasZone: !zones.length || !!zone };
}

function promoDiscountForRestaurant(restaurantId) {
  const quote = state.couponQuotes[restaurantId];
  const money = promoMoneyForRestaurant(restaurantId);
  return quote && quote.code === state.couponCodes[restaurantId] && quote.signature === money.signature
    ? Number(quote.discount || 0) : 0;
}

function renderCartKeepingCheckoutFields() {
  const address = document.getElementById("checkout-address");
  const city = document.getElementById("checkout-city");
  const savedAddress = address?.value;
  const savedCity = city?.value;
  renderCart();
  if (address && savedAddress !== undefined) address.value = savedAddress;
  if (city && savedCity !== undefined) city.value = savedCity;
}

async function applyCartCoupon(restaurantId, rawCode) {
  const code = String(rawCode || "").trim().toUpperCase();
  state.couponCodes[restaurantId] = code;
  delete state.couponQuotes[restaurantId];
  state.couponMessages[restaurantId] = "";
  state.preparedOrders = [];
  clearCheckoutId();
  if (!code) { renderCartKeepingCheckoutFields(); return; }
  const money = promoMoneyForRestaurant(restaurantId);
  if (!money.hasZone) {
    state.couponMessages[restaurantId] = "Selecciona primero tu barrio o sector de entrega.";
    renderCartKeepingCheckoutFields();
    return;
  }
  if (!supabaseClient) { state.couponMessages[restaurantId] = "No hay conexión con Supabase."; renderCartKeepingCheckoutFields(); return; }
  state.couponMessages[restaurantId] = "Comprobando cupón...";
  renderCartKeepingCheckoutFields();
  const expectedSignature = money.signature;
  try {
    const {data,error} = await supabaseClient.rpc("cotizar_promocion", {
      p_restaurante_id: restaurantId,
      p_codigo: code,
      p_subtotal: money.subtotal,
      p_envio: money.shipping
    });
    if (error) throw error;
    if (state.couponCodes[restaurantId] === code && promoMoneyForRestaurant(restaurantId).signature === expectedSignature) {
      state.couponQuotes[restaurantId] = {code, signature: expectedSignature, discount: Number(data.descuento || 0)};
      state.couponMessages[restaurantId] = `${data.nombre}: ahorras ${formatCurrency(data.descuento)}.`;
    }
  } catch(error) {
    if (state.couponCodes[restaurantId] === code) state.couponMessages[restaurantId] = error.message || "Cupón no válido";
  }
  renderCartKeepingCheckoutFields();
}

function refreshCartDiscountTotals() {
  const groups = new Set();
  let subtotal = 0, shipping = 0, missingZone = false;
  for (const entry of cartEntries()) {
    subtotal += entry.unitPrice * entry.quantity;
    if (groups.has(entry.restaurant.id)) continue;
    groups.add(entry.restaurant.id);
    const money = promoMoneyForRestaurant(entry.restaurant.id);
    shipping += money.shipping;
    if (!money.hasZone) missingZone = true;
  }
  const discount = [...groups].reduce((sum,id) => sum + promoDiscountForRestaurant(id),0);
  const row = document.getElementById("cart-promo-row");
  if (row) row.hidden = discount <= 0;
  const value = document.getElementById("cart-promo-discount");
  if (value) value.textContent = `−${formatCurrency(discount)}`;
  const total = document.getElementById("cart-total");
  if (total) total.textContent = missingZone ? "Por calcular" : formatCurrency(Math.max(0, subtotal+shipping-discount));
  updateCheckoutPaymentValidity();
}

function renderCartPromotions(restaurantIds) {
  const box = document.getElementById("checkout-promotions");
  if (!box) return;
  if (!restaurantIds.length) { box.replaceChildren(); return; }
  box.innerHTML = `<h3>Cupones y promociones</h3><p class="upload-hint">Cada restaurante define sus descuentos. El cliente paga directamente al restaurante; Toque no recauda dinero.</p>` +
    restaurantIds.map((restaurantId) => {
      const restaurant = RESTAURANTS.find((item) => item.id === restaurantId);
      const money = promoMoneyForRestaurant(restaurantId);
      const code = state.couponCodes[restaurantId] || "";
      const discount = promoDiscountForRestaurant(restaurantId);
      const hint = state.couponMessages[restaurantId] || (code && !discount ? "Pulsa Aplicar para actualizar el descuento estimado." : "");
      return `<div class="checkout-coupon-box">
        <label for="coupon-${escapeHtml(restaurantId)}">Cupón para ${escapeHtml(restaurant?.nombre || "restaurante")}</label>
        <div class="checkout-coupon-controls">
          <input type="text" id="coupon-${escapeHtml(restaurantId)}" value="${escapeHtml(code)}" maxlength="24" placeholder="Ej. DANNYS10" data-coupon-input="${escapeHtml(restaurantId)}" autocomplete="off" />
          <button class="secondary-btn" type="button" data-coupon-apply="${escapeHtml(restaurantId)}">Aplicar</button>
          ${code ? `<button class="secondary-btn" type="button" data-coupon-remove="${escapeHtml(restaurantId)}">Quitar</button>` : ""}
        </div>
        <p class="coupon-result" role="status">${escapeHtml(hint)}${discount ? ` · Descuento: ${formatCurrency(discount)}` : ""}</p>
        ${!money.hasZone ? '<small>Selecciona primero un sector para cotizar el envío.</small>' : ''}
      </div>`;
    }).join("");
  box.querySelectorAll("[data-coupon-apply]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.couponApply;
    void applyCartCoupon(id, box.querySelector(`[data-coupon-input="${CSS.escape(id)}"]`)?.value);
  }));
  box.querySelectorAll("[data-coupon-remove]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.couponRemove;
    void applyCartCoupon(id, "");
  }));
  // No reconstruir el modal al perder foco: de lo contrario se destruye
  // el botón Aplicar antes de que su evento click se ejecute.
  box.querySelectorAll("[data-coupon-input]").forEach((input) => input.addEventListener("input", () => {
    const id = input.dataset.couponInput;
    const newCode = input.value.trim().toUpperCase();
    state.couponCodes[id] = newCode;
    delete state.couponQuotes[id];
    state.couponMessages[id] = newCode ? "Pulsa Aplicar para verificar el descuento." : "";
    state.preparedOrders = [];
    clearCheckoutId();
    const result = input.closest(".checkout-coupon-box")?.querySelector(".coupon-result");
    if (result) result.textContent = state.couponMessages[id];
    renderPreparedOrders();
    refreshCartDiscountTotals();
  }));
}


// Toque - medios de pago informativos. Los montos definitivos se guardan
// mediante la RPC crear_pedido_con_pago, nunca son confiados al navegador.
function checkoutPaymentSelection(restaurantId) {
  if (!state.paymentSelections[restaurantId]) {
    state.paymentSelections[restaurantId] = { metodo: "", exacto: true, con: "" };
  }
  return state.paymentSelections[restaurantId];
}

function checkoutRestaurantTotal(restaurantId) {
  const money = promoMoneyForRestaurant(restaurantId);
  return Math.max(0, money.subtotal + money.shipping - promoDiscountForRestaurant(restaurantId));
}

async function loadCheckoutPaymentSettings() {
  if (!supabaseClient || !state.user) {
    state.paymentSettingsLoaded = true;
    state.paymentSettingsError = "";
    return;
  }
  const userId = state.user.id;
  const {data, error} = await supabaseClient.from("restaurante_metodos_pago")
    .select("id_restaurante,transferencia_habilitada,entidad,numero,titular,instrucciones");
  if (state.user?.id !== userId) return;
  if (error) {
    state.paymentSettingsError = `No se pudieron consultar las transferencias: ${error.message}`;
    state.paymentSettingsLoaded = false;
    console.warn(state.paymentSettingsError);
    return;
  }
  state.paymentSettings = Object.fromEntries((data || []).map((item) => [item.id_restaurante, item]));
  state.paymentSettingsLoaded = true;
  state.paymentSettingsError = "";
}

function paymentSelectionsValid(restaurantIds) {
  for (const id of restaurantIds) {
    const chosen = checkoutPaymentSelection(id);
    const settings = state.paymentSettings[id];
    if (chosen.metodo === "TRANSFERENCIA") {
      if (!settings?.transferencia_habilitada || !settings.entidad || !settings.numero || !state.paymentSettingsLoaded) return false;
    } else if (chosen.metodo === "EFECTIVO") {
      if (!chosen.exacto) {
        const amount = Number(chosen.con);
        if (!chosen.con || !Number.isInteger(amount) || amount < checkoutRestaurantTotal(id) || amount > 1000000000) return false;
      }
    } else return false;
  }
  return true;
}

function updateCheckoutPaymentValidity() {
  const groups = [...new Set(cartEntries().map((entry) => entry.restaurant.id))];
  const button = document.getElementById("checkout-submit");
  if (button) {
    button.disabled = !groups.length || !paymentSelectionsValid(groups) ||
      groups.some((id) => !isRestaurantOpen(RESTAURANTS.find((r) => r.id === id))) ||
      groups.some((id) => zonesForRestaurant(id).length && !selectedDeliveryZone(id)) ||
      !state.deliveryZonesLoaded || state.preparedOrders.length > 0 || state.profile?.rol === "admin";
  }
  document.querySelectorAll("[data-payment-restaurant]").forEach((card) => {
    const id = card.dataset.paymentRestaurant;
    const chosen = checkoutPaymentSelection(id);
    const amount = checkoutRestaurantTotal(id);
    const exact = card.querySelector("[data-pay-exact]");
    const cashBox = card.querySelector("[data-pay-cash-box]");
    const cashOptions = card.querySelector("[data-pay-cash-options]");
    const transfer = card.querySelector("[data-pay-transfer-info]");
    const badge = card.querySelector("[data-pay-result]");
    if (cashOptions) cashOptions.hidden = chosen.metodo !== "EFECTIVO";
    if (cashBox) cashBox.hidden = chosen.metodo !== "EFECTIVO" || chosen.exacto;
    if (exact) exact.checked = chosen.exacto;
    if (transfer) transfer.hidden = chosen.metodo !== "TRANSFERENCIA";
    if (badge) {
      const needsChange = !chosen.exacto && chosen.metodo === "EFECTIVO";
      const tendered = Number(chosen.con);
      badge.textContent = chosen.metodo === "TRANSFERENCIA"
        ? "Transfiere directamente al restaurante. El comercio debe confirmar la recepción del dinero."
        : chosen.metodo === "EFECTIVO"
          ? needsChange
            ? (chosen.con && Number.isInteger(tendered) && tendered >= amount && tendered <= 1000000000
                ? `El domiciliario debe llevar ${formatCurrency(tendered - amount)} de cambio.`
                : `Indica un valor en efectivo igual o mayor a ${formatCurrency(amount)}.`)
            : `Pagarás el valor exacto: ${formatCurrency(amount)}. No necesitas cambio.`
          : "Selecciona efectivo o transferencia antes de preparar el pedido.";
    }
  });
}

function renderCheckoutPaymentFields(restaurantIds) {
  const container = document.getElementById("checkout-payment-methods");
  if (!container) return;
  container.innerHTML = restaurantIds.map((id) => {
    const restaurant = RESTAURANTS.find((item) => item.id === id);
    const conf = state.paymentSettings[id];
    const available = !!(state.paymentSettingsLoaded && conf?.transferencia_habilitada && conf.entidad && conf.numero);
    const selection = checkoutPaymentSelection(id);
    if (selection.metodo === "TRANSFERENCIA" && !available) selection.metodo = "";
    return `<fieldset class="checkout-payment-card" data-payment-restaurant="${escapeHtml(id)}">
      <legend>Forma de pago · ${escapeHtml(restaurant?.nombre || "Restaurante")}</legend>
      <p class="payment-note">El dinero se entrega directamente al restaurante. Toque no recauda ni verifica pagos.</p>
      <label for="payment-method-${escapeHtml(id)}">¿Cómo pagarás?</label>
      <select id="payment-method-${escapeHtml(id)}" data-pay-method="${escapeHtml(id)}" required>
        <option value="" ${selection.metodo === "" ? "selected" : ""}>Selecciona un medio de pago</option>
        <option value="EFECTIVO" ${selection.metodo === "EFECTIVO" ? "selected" : ""}>Efectivo al recibir</option>
        <option value="TRANSFERENCIA" ${selection.metodo === "TRANSFERENCIA" ? "selected" : ""} ${available ? "" : "disabled"}>Transferencia al restaurante${available ? "" : " (no habilitada)"}</option>
      </select>
      <div data-pay-cash-options hidden>
        <label class="payment-exact"><input type="checkbox" data-pay-exact="${escapeHtml(id)}" ${selection.exacto ? "checked" : ""} /> Pagaré el valor exacto</label>
        <div class="field-group" data-pay-cash-box hidden>
          <label for="payment-cash-${escapeHtml(id)}">¿Con cuánto efectivo pagarás? ($)</label>
          <input id="payment-cash-${escapeHtml(id)}" type="number" inputmode="numeric" min="0" max="1000000000" step="1" data-pay-cash="${escapeHtml(id)}" value="${escapeHtml(selection.con)}" placeholder="Ejemplo: 50000" />
        </div>
      </div>
      <div class="payment-transfer-info" data-pay-transfer-info hidden>
        <strong>${escapeHtml(conf?.entidad || "")}</strong>
        <p>Cuenta / número: ${escapeHtml(conf?.numero || "")}</p>
        ${conf?.titular ? `<p>Titular: ${escapeHtml(conf.titular)}</p>` : ""}
        ${conf?.instrucciones ? `<p>${escapeHtml(conf.instrucciones)}</p>` : ""}
        <small>El restaurante confirma la recepción de la transferencia; no envíes claves ni contraseñas.</small>
      </div>
      <p class="payment-validation" data-pay-result aria-live="polite"></p>
    </fieldset>`;
  }).join("");
  container.querySelectorAll("[data-pay-method]").forEach((select) => select.addEventListener("change", () => {
    checkoutPaymentSelection(select.dataset.payMethod).metodo = select.value;
    state.preparedOrders = [];
    clearCheckoutId();
    updateCheckoutPaymentValidity();
  }));
  container.querySelectorAll("[data-pay-exact]").forEach((checkbox) => checkbox.addEventListener("change", () => {
    checkoutPaymentSelection(checkbox.dataset.payExact).exacto = checkbox.checked;
    state.preparedOrders = [];
    clearCheckoutId();
    updateCheckoutPaymentValidity();
  }));
  container.querySelectorAll("[data-pay-cash]").forEach((input) => input.addEventListener("input", () => {
    checkoutPaymentSelection(input.dataset.payCash).con = input.value;
    state.preparedOrders = [];
    clearCheckoutId();
    updateCheckoutPaymentValidity();
  }));
  updateCheckoutPaymentValidity();
}

async function loadMerchantPaymentSettings(restaurantId, preview) {
  const section = document.getElementById("merchant-payment-settings");
  if (!section) return;
  section.hidden = preview;
  if (preview) return;
  const status = document.getElementById("merchant-payment-status");
  const result = await supabaseClient.from("restaurante_metodos_pago")
    .select("id_restaurante,transferencia_habilitada,entidad,numero,titular,instrucciones")
    .eq("id_restaurante", restaurantId).maybeSingle();
  if (state.selectedRestaurantId !== restaurantId) return;
  if (result.error) { if (status) status.textContent = `Error al consultar los medios de pago: ${result.error.message}`; return; }
  const cfg = result.data || {};
  const field = (id, value) => { const el=document.getElementById(id); if(el) el.value=value || ""; };
  document.getElementById("merchant-transfer-enabled").checked = cfg.transferencia_habilitada === true;
  field("merchant-transfer-provider",cfg.entidad);
  field("merchant-transfer-number",cfg.numero);
  field("merchant-transfer-holder",cfg.titular);
  field("merchant-transfer-instructions",cfg.instrucciones);
  if (status) status.textContent = "Las transferencias se realizan directamente a tu cuenta; Toque no administra el dinero.";
}

async function saveMerchantPaymentSettings(event) {
  event.preventDefault();
  const restaurantId = state.selectedRestaurantId;
  const status = document.getElementById("merchant-payment-status");
  const button = document.getElementById("merchant-payment-save");
  if (state.profile?.rol !== "restaurante" || state.profile?.restaurante_id !== restaurantId) {
    if (status) status.textContent = "Solo el dueño del restaurante puede editar los datos de pago.";
    return;
  }
  const enabled = document.getElementById("merchant-transfer-enabled").checked;
  const entidad = document.getElementById("merchant-transfer-provider").value.trim();
  const numero = document.getElementById("merchant-transfer-number").value.trim();
  if (enabled && (entidad.length < 2 || numero.length < 5)) {
    status.textContent = "Para activar transferencias indica una entidad y un número válido.";
    return;
  }
  const payload = {
    id_restaurante:restaurantId, transferencia_habilitada:enabled,
    entidad, numero,
    titular:document.getElementById("merchant-transfer-holder").value.trim(),
    instrucciones:document.getElementById("merchant-transfer-instructions").value.trim(),
    updated_at:new Date().toISOString()
  };
  button.disabled = true;
  status.textContent = "Guardando datos de transferencia...";
  const {error} = await supabaseClient.from("restaurante_metodos_pago")
    .upsert(payload,{onConflict:"id_restaurante"});
  button.disabled = false;
  if (error) { status.textContent = `No se pudo guardar: ${error.message}`; return; }
  state.paymentSettings[restaurantId] = payload;
  status.textContent = "Configuración de pago guardada. Los clientes ya pueden ver tus medios habilitados.";
  await loadCheckoutPaymentSettings();
}

function paymentLinesForOrder(order) {
  if (order.metodo_pago === "EFECTIVO") return [
    `<p><strong>Pago:</strong> Efectivo</p>`,
    `<p>El comprador paga con ${formatCurrency(order.efectivo_con)}.</p>`,
    `<p><strong>Cambio a llevar: ${formatCurrency(order.cambio_requerido)}</strong></p>`
  ].join("");
  if (order.metodo_pago === "TRANSFERENCIA") return '<p><strong>Pago:</strong> Transferencia directa · pendiente de confirmar por el restaurante</p>';
  return '<p><strong>Pago:</strong> No informado (pedido anterior)</p>';
}

function renderCart() {
  const box = document.getElementById("cart-items");
  if (!box) return;
  const entries = cartEntries();
  let subtotal = 0;
  let savings = 0;
  let shipping = 0;
  let missingZone = false;
  const closedRestaurants = new Set();
  const groups = new Set();
  box.innerHTML = entries.map(({ key, quantity, restaurant, product, selection, unitPrice }) => {
    subtotal += unitPrice * quantity;
    savings += Math.max(0, product.precioAnterior - product.precio) * quantity;
    if (!isRestaurantOpen(restaurant)) closedRestaurants.add(restaurant.nombre);
    if (!groups.has(restaurant.id)) {
      groups.add(restaurant.id);
      const zones = zonesForRestaurant(restaurant.id);
      const selectedZone = selectedDeliveryZone(restaurant.id);
      if (zones.length && !selectedZone) missingZone = true;
      if (!restaurant.envioGratis) shipping += zones.length ? (selectedZone?.tarifa || 0) : restaurant.costoEnvio;
    }
    return `
      <article class="cart-row">
        <div><strong>${escapeHtml(product.nombre)}</strong>
          <small>${escapeHtml(restaurant.nombre)} · ${formatCurrency(unitPrice)}</small>
          ${formatSelectionLines(selection).map((line) => `<small class="cart-selection-line">${escapeHtml(line)}</small>`).join("")}
        </div>
        <div class="quantity-control">
          <button type="button" data-cart-key="${escapeHtml(key)}" data-cart-delta="-1" aria-label="Quitar una unidad">−</button>
          <span>${quantity}</span>
          <button type="button" data-cart-key="${escapeHtml(key)}" data-cart-delta="1" aria-label="Agregar una unidad">+</button>
        </div>
      </article>
    `;
  }).join("") || '<p class="empty-state">Tu carrito está vacío.</p>';
  if (closedRestaurants.size) {
    box.insertAdjacentHTML("beforeend", `<p class="cart-closed-warning" role="status"><i class="fa-solid fa-clock" aria-hidden="true"></i> ${escapeHtml([...closedRestaurants].join(", "))} ${closedRestaurants.size === 1 ? "está cerrado" : "están cerrados"} en este momento. Conservamos tus productos y sus opciones; podrás preparar el pedido cuando ${closedRestaurants.size === 1 ? "vuelva a abrir" : "vuelvan a abrir"}. Los precios y la disponibilidad se verificarán de nuevo.</p>`);
  }

  document.getElementById("cart-subtotal").textContent = formatCurrency(subtotal + savings);
  document.getElementById("cart-savings").textContent = `−${formatCurrency(savings)}`;
  document.getElementById("cart-shipping").textContent = missingZone ? "Selecciona sector" : formatCurrency(shipping);
  const couponDiscount = [...groups].reduce((sum, id) => sum + promoDiscountForRestaurant(id), 0);
  const promoRow = document.getElementById("cart-promo-row");
  if (promoRow) promoRow.hidden = couponDiscount <= 0;
  const promoAmount = document.getElementById("cart-promo-discount");
  if (promoAmount) promoAmount.textContent = `−${formatCurrency(couponDiscount)}`;
  document.getElementById("cart-total").textContent = missingZone ? "Por calcular" : formatCurrency(Math.max(0, subtotal + shipping - couponDiscount));
  document.getElementById("checkout-address").value = state.delivery.address || "";
  updateCitySelect("checkout-city", state.delivery.city);
  const zoneBox = document.getElementById("checkout-zones");
  if (zoneBox) {
    zoneBox.innerHTML = [...groups].map((restaurantId) => {
      const rest = RESTAURANTS.find((item) => item.id === restaurantId);
      const zones = zonesForRestaurant(restaurantId);
      if (!zones.length) return "";
      const zoneId = String(state.selectedZoneIds[restaurantId] || "");
      return `<div class="field-group"><label for="zone-${escapeHtml(restaurantId)}">Barrio o sector de entrega · ${escapeHtml(rest?.nombre || "Restaurante")}</label>
        <select id="zone-${escapeHtml(restaurantId)}" data-zone-restaurant="${escapeHtml(restaurantId)}" required>
          <option value="">Selecciona el barrio o sector</option>
          ${zones.map((zone) => `<option value="${zone.id}" ${String(zone.id) === zoneId ? "selected" : ""}>${escapeHtml(zone.nombre)} · ${rest.envioGratis ? "Envío gratis" : formatCurrency(zone.tarifa)}</option>`).join("")}
        </select></div>`;
    }).join("");
    zoneBox.querySelectorAll("[data-zone-restaurant]").forEach((select) => {
      select.addEventListener("change", () => {
        const address = document.getElementById("checkout-address").value;
        const city = document.getElementById("checkout-city").value;
        state.selectedZoneIds[select.dataset.zoneRestaurant] = select.value;
        state.preparedOrders = [];
        clearCheckoutId();
        document.getElementById("checkout-message").textContent = "";
        renderCart();
        document.getElementById("checkout-address").value = address;
        document.getElementById("checkout-city").value = city;
      });
    });
  }
  renderCartPromotions([...groups]);
  renderCheckoutPaymentFields([...groups]);
  const checkoutButton = document.getElementById("checkout-submit");
  const isAdminPreview = state.profile?.rol === "admin";
  const checkoutMessage = document.getElementById("checkout-message");
  if (checkoutButton) checkoutButton.disabled = !entries.length || closedRestaurants.size > 0 || missingZone || !state.deliveryZonesLoaded || state.preparedOrders.length > 0 || isAdminPreview || !paymentSelectionsValid([...groups]);
  if (!state.deliveryZonesLoaded && checkoutMessage) checkoutMessage.textContent = "No se pudieron consultar los sectores de entrega. Actualiza y comprueba tu conexión.";
  else if (closedRestaurants.size && checkoutMessage) checkoutMessage.textContent = "El restaurante está fuera de horario. Tu carrito se conserva, pero no puedes preparar el pedido hasta que abra.";
  else if (checkoutMessage && checkoutMessage.textContent.includes("fuera de horario")) checkoutMessage.textContent = "";
  if (isAdminPreview && checkoutMessage) {
    checkoutMessage.textContent = "La vista previa de cliente es de solo lectura; no se pueden registrar pedidos.";
  }
  box.querySelectorAll("[data-cart-key]").forEach((button) => {
    button.addEventListener("click", () => changeCartQuantity(button.dataset.cartKey, Number(button.dataset.cartDelta)));
  });
  renderPreparedOrders();
}

function changeCartQuantity(key, delta) {
  const next = (state.cart[key] || 0) + delta;
  if (next > 50) return;
  if (next <= 0) delete state.cart[key];
  else state.cart[key] = next;
  state.preparedOrders = [];
  clearCheckoutId();
  saveCart();
  updateCartBadge();
  renderCart();
}

function openCart() {
  renderCart();
  void loadCheckoutPaymentSettings().then(() => renderCartKeepingCheckoutFields());
  const dialog = document.getElementById("cart-dialog");
  if (dialog && !dialog.open) dialog.showModal();
}

function renderPreparedOrders() {
  const box = document.getElementById("checkout-links");
  if (!box) return;
  box.replaceChildren();
  state.preparedOrders.forEach((order) => {
    const link = document.createElement("a");
    link.className = "primary-btn prepared-order-link";
    link.href = order.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `Continuar pedido con ${order.restaurant}`;
    link.addEventListener("click", () => {
      Object.keys(state.cart).forEach((key) => {
        if (key.startsWith(`${order.restaurantId}:`)) delete state.cart[key];
      });
      delete state.couponCodes[order.restaurantId];
      delete state.couponQuotes[order.restaurantId];
      delete state.couponMessages[order.restaurantId];
      state.preparedOrders = state.preparedOrders.filter((item) => item.id !== order.id);
      saveCart();
      updateCartBadge();
      if (!state.preparedOrders.length) clearCheckoutId();
      window.setTimeout(() => {
        renderCart();
        renderOrders();
      }, 0);
    });
    box.appendChild(link);
  });
}

async function prepareCheckout(event) {
  event.preventDefault();
  const message = document.getElementById("checkout-message");
  const button = document.getElementById("checkout-submit");
  if (state.profile?.rol === "admin") {
    message.textContent = "La vista previa de cliente es de solo lectura; no se pueden registrar pedidos.";
    return;
  }
  if (!state.user) {
    message.textContent = "Inicia sesión antes de preparar el pedido.";
    document.getElementById("cart-dialog").close();
    showView("view-profile");
    return;
  }
  const city = document.getElementById("checkout-city").value.trim();
  const address = document.getElementById("checkout-address").value.trim();
  if (!city || address.length < 3 || address.length > 400) {
    message.textContent = "Selecciona la ciudad e indica una dirección válida.";
    return;
  }
  const groups = new Map();
  cartEntries().forEach(({ restaurant, product, quantity, selection }) => {
    if (!groups.has(restaurant.id)) groups.set(restaurant.id, []);
    groups.get(restaurant.id).push({ id: product.id, qty: quantity, ...selection });
  });
  if (!groups.size) {
    message.textContent = "Tu carrito está vacío.";
    return;
  }
  // No confiar en un botón que quedó habilitado antes de que cerrara el restaurante.
  for (const restaurantId of groups.keys()) {
    const restaurant = RESTAURANTS.find((item) => item.id === restaurantId);
    if (!restaurant || !isRestaurantOpen(restaurant)) {
      message.textContent = "Uno de los restaurantes está fuera de horario. Conservamos tu carrito para cuando vuelva a abrir.";
      renderCart();
      return;
    }
  }
  if (!state.deliveryZonesLoaded) {
    message.textContent = "No pudimos cargar las zonas de entrega. Actualiza la página.";
    return;
  }
  for (const restaurantId of groups.keys()) {
    if (zonesForRestaurant(restaurantId).length && !selectedDeliveryZone(restaurantId)) {
      message.textContent = "Selecciona un barrio o sector válido para cada restaurante.";
      return;
    }
  }

  if (!paymentSelectionsValid([...groups.keys()])) {
    message.textContent = "Selecciona el medio de pago de cada restaurante e indica un efectivo suficiente si necesitas cambio.";
    updateCheckoutPaymentValidity();
    return;
  }
  button.disabled = true;
  message.textContent = "Verificando precios y disponibilidad...";
  state.preparedOrders = [];
  try {
    let checkoutId = getCheckoutId();
    if (!checkoutId) {
      checkoutId = crypto.randomUUID();
      setCheckoutId(checkoutId);
    }
    for (const [restaurantId, items] of groups) {
      const pago = checkoutPaymentSelection(restaurantId);
      const { data, error } = await supabaseClient.rpc("crear_pedido_con_pago", {
        p_restaurante_id: restaurantId,
        p_items: items,
        p_direccion: address,
        p_ciudad: city,
        p_latitud: state.delivery.lat,
        p_longitud: state.delivery.lng,
        p_checkout_id: checkoutId,
        p_zona_id: selectedDeliveryZone(restaurantId)?.id ?? null,
        p_codigo: state.couponCodes[restaurantId] || null,
        p_metodo_pago: pago.metodo,
        p_efectivo_con: pago.metodo === "EFECTIVO" && !pago.exacto ? Number(pago.con) : null
      });
      if (error) throw error;
      const phone = String(data.whatsapp || "").replace(/\D/g, "");
      if (!phone) throw new Error(`El restaurante ${data.restaurante} no tiene un WhatsApp válido configurado.`);
      const lines = data.items.flatMap((item) => [
        `${item.cantidad} x ${item.nombre}: ${formatCurrency(item.precio * item.cantidad)}`,
        ...orderItemDetails(item).map((line) => `  - ${line}`)
      ]);
      const mapsLink = state.delivery.lat != null && state.delivery.lng != null
        ? `\nUbicación: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${state.delivery.lat},${state.delivery.lng}`)}`
        : "";
      const text = [
        `Nuevo pedido en Toque · #${data.id}`,
        `Restaurante: ${data.restaurante}`,
        `Entrega: ${city} · ${address}${mapsLink}`,
        "",
        ...lines,
        "",
        `Subtotal: ${formatCurrency(data.subtotal)}`,
        `Ahorro: ${formatCurrency(data.ahorro)}`,
        `Zona de entrega: ${data.zona_entrega_nombre || "Tarifa general"}`,
        `Domicilio: ${formatCurrency(data.envio)}`,
        ...(data.codigo_promocion ? [`Cupón: ${data.codigo_promocion}`, `Descuento del cupón: −${formatCurrency(data.descuento_promocion)}`] : []),
        `Total: ${formatCurrency(data.total)}`,
        ...(data.metodo_pago === "EFECTIVO" ? [
          "Pago: efectivo al recibir",
          `El cliente pagará con: ${formatCurrency(data.efectivo_con)}`,
          `Cambio que debe llevar el domiciliario: ${formatCurrency(data.cambio_requerido)}`
        ] : [
          "Pago: transferencia directa al restaurante (por confirmar)",
          `Entidad: ${data.transferencia_entidad || "Consultar al restaurante"}`,
          `Cuenta/número: ${data.transferencia_numero || "Consultar al restaurante"}`,
          ...(data.transferencia_titular ? [`Titular: ${data.transferencia_titular}`] : []),
          ...(data.transferencia_instrucciones ? [`Instrucciones: ${data.transferencia_instrucciones}`] : []),
          "El restaurante confirma el pago; Toque no recibe dinero."
        ]),
        "Por favor confirma la aceptación del pedido."
      ].join("\n");
      state.preparedOrders.push({
        id: data.id,
        restaurantId,
        restaurant: data.restaurante,
        url: `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`
      });
    }
    state.delivery = { ...state.delivery, city, address };
    try {
      localStorage.setItem("rapiya-delivery-location", JSON.stringify(state.delivery));
    } catch (storageError) {
      console.warn("No se pudo guardar la ubicación actualizada:", storageError.message || storageError);
    }
    message.textContent = "Pedido registrado. Pulsa cada botón para abrir WhatsApp y enviarlo al restaurante.";
    renderPreparedOrders();
    await renderOrders();
  } catch (error) {
    message.textContent = `No se pudo preparar el pedido: ${error.message || error}`;
    if (!state.preparedOrders.length) clearCheckoutId();
  } finally {
    button.disabled = state.preparedOrders.length > 0;
  }
}

function isFavorite(type, targetId) {
  return state.favorites.has(`${type}:${targetId}`);
}

async function loadFavorites() {
  if (!supabaseClient || !state.user) {
    state.favorites = new Set();
    return;
  }

  const { data, error } = await supabaseClient
    .from("favoritos")
    .select("tipo,target_id")
    .eq("user_id", state.user.id);
  if (error) throw error;
  state.favorites = new Set(data.map((favorite) => `${favorite.tipo}:${favorite.target_id}`));
}

function renderFavorites() {
  const content = document.getElementById("favorites-content");
  if (!content) return;

  document.querySelectorAll("[data-favorites-type]").forEach((button) => {
    button.classList.toggle("active", button.dataset.favoritesType === state.favoritesType);
  });

  if (!state.user) {
    content.innerHTML = '<div class="empty-state">Inicia sesión para guardar y consultar tus favoritos.</div>';
    return;
  }

  const prefix = `${state.favoritesType}:`;
  const ids = [...state.favorites]
    .filter((favorite) => favorite.startsWith(prefix))
    .map((favorite) => favorite.slice(prefix.length));

  if (state.favoritesType === "restaurante") {
    const savedRestaurants = ids
      .map((id) => RESTAURANTS.find((restaurant) => restaurant.id === id))
      .filter(Boolean);
    content.innerHTML = savedRestaurants.map((restaurant) => `
      <article class="saved-card" data-open-restaurant="${escapeHtml(restaurant.id)}">
        <img src="${escapeHtml(safeImageUrl(restaurant.cover))}" alt="${escapeHtml(restaurant.nombre)}" />
        <div><h3>${escapeHtml(restaurant.nombre)}</h3><p>${escapeHtml(restaurant.categoria)} · ${escapeHtml(restaurant.tiempo)}</p></div>
        <button class="favorite-toggle is-favorite" type="button" data-favorite-type="restaurante" data-favorite-id="${escapeHtml(restaurant.id)}" aria-label="Quitar de favoritos" aria-pressed="true"><i class="fa-solid fa-heart"></i></button>
      </article>
    `).join("") || '<div class="empty-state">Aún no guardaste restaurantes.</div>';
  } else {
    const products = Object.entries(MENU).flatMap(([restaurantId, items]) => {
      const restaurant = RESTAURANTS.find((item) => item.id === restaurantId);
      return items.filter((product) => ids.includes(product.id)).map((product) => ({ product, restaurant }));
    });
    content.innerHTML = products.map(({ product, restaurant }) => `
      <article class="saved-card" data-saved-product="${escapeHtml(product.id)}" data-saved-restaurant="${escapeHtml(restaurant?.id || "")}">
        <img src="${escapeHtml(safeImageUrl(product.img))}" alt="${escapeHtml(product.nombre)}" />
        <div><h3>${escapeHtml(product.nombre)}</h3><p>${escapeHtml(restaurant?.nombre || "Restaurante")} · ${formatCurrency(product.precio)}</p></div>
        <button class="favorite-toggle is-favorite" type="button" data-favorite-type="producto" data-favorite-id="${escapeHtml(product.id)}" aria-label="Quitar de favoritos" aria-pressed="true"><i class="fa-solid fa-heart"></i></button>
      </article>
    `).join("") || '<div class="empty-state">Aún no guardaste productos.</div>';
  }

  content.querySelectorAll("[data-open-restaurant]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".favorite-toggle")) return;
      openRestaurant(card.dataset.openRestaurant);
    });
  });
  content.querySelectorAll("[data-saved-product]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".favorite-toggle")) return;
      openProductDetails(card.dataset.savedProduct, card.dataset.savedRestaurant);
    });
  });
  content.querySelectorAll(".favorite-toggle").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favoriteType, button.dataset.favoriteId));
  });
}


// ===== Complementos recuperados del ZIP antiguo, adaptados a la versión actual =====
const BANNERS = [];

function renderHomeBanners() {
  const container = document.getElementById("home-banner");
  if (!container) return;

  container.replaceChildren();
  const activeBanners = BANNERS.filter((item) => item.activo);
  const fallback = document.getElementById("home-fallback-banner");
  if (fallback) fallback.hidden = activeBanners.length > 0;
  if (!activeBanners.length) return;

  const track = document.createElement("div");
  track.className = "home-banner-track";
  track.setAttribute("role", "region");
  track.setAttribute("aria-label", "Promociones");

  activeBanners.forEach((banner) => {
    const section = document.createElement("section");
    section.className = "hero-banner";
    section.setAttribute("aria-label", banner.titulo);
    const content = document.createElement("div");
    content.className = "banner-content";

    if (banner.etiqueta) {
      const tag = document.createElement("span");
      tag.className = "banner-tag";
      tag.textContent = banner.etiqueta;
      content.append(tag);
    }

    const title = document.createElement("h2");
    title.textContent = banner.titulo;
    content.append(title);
    if (banner.descripcion) {
      const description = document.createElement("p");
      description.className = "banner-description";
      description.textContent = banner.descripcion;
      content.append(description);
    }

    if (banner.texto_boton && isHttpUrl(banner.enlace_url)) {
      const link = document.createElement("a");
      link.className = "banner-cta";
      link.textContent = banner.texto_boton;
      link.href = banner.enlace_url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      content.append(link);
    }

    const image = document.createElement("img");
    image.src = banner.imagen_url;
    image.alt = banner.titulo;
    image.loading = "lazy";
    section.append(content, image);
    track.append(section);
  });
  container.append(track);
}


function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}


async function loadHomeBanners() {
  if (!supabaseClient || !document.getElementById("home-banner")) return;

  const { data, error } = await supabaseClient
    .from("banners")
    .select("id,titulo,descripcion,etiqueta,texto_boton,enlace_url,imagen_url,orden,activo")
    .eq("activo", true)
    .order("orden", { ascending: true })
    .limit(10);

  if (error) {
    console.warn("Banners pendientes de configurar en Supabase:", error.message || error);
    return;
  }

  BANNERS.splice(0, BANNERS.length, ...data);
  renderHomeBanners();
}


function resetAdminBannerForm() {
  const form = document.getElementById("admin-banner-form");
  if (!form) return;
  form.reset();
  document.getElementById("admin-banner-id").value = "";
  document.getElementById("admin-banner-order").value = "0";
  document.getElementById("admin-banner-active").checked = true;
  document.getElementById("btn-cancel-banner-edit").hidden = true;
}


function editAdminBanner(banner) {
  document.getElementById("admin-banner-id").value = banner.id;
  document.getElementById("admin-banner-title-input").value = banner.titulo;
  document.getElementById("admin-banner-description").value = banner.descripcion || "";
  document.getElementById("admin-banner-tag").value = banner.etiqueta || "";
  document.getElementById("admin-banner-button").value = banner.texto_boton || "";
  document.getElementById("admin-banner-link").value = banner.enlace_url || "";
  document.getElementById("admin-banner-image-url").value = banner.imagen_url;
  document.getElementById("admin-banner-order").value = String(banner.orden || 0);
  document.getElementById("admin-banner-active").checked = banner.activo;
  document.getElementById("admin-banner-image").value = "";
  document.getElementById("btn-cancel-banner-edit").hidden = false;
  document.getElementById("admin-banner-title-input").focus();
}


function renderAdminBanners(banners) {
  const list = document.getElementById("admin-banner-list");
  if (!list) return;
  list.replaceChildren();

  if (!banners.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Todavía no hay banners configurados.";
    list.append(empty);
    return;
  }

  banners.forEach((banner) => {
    const row = document.createElement("article");
    row.className = "product-row admin-banner-row";
    const image = document.createElement("img");
    image.src = banner.imagen_url;
    image.alt = "";
    const details = document.createElement("div");
    details.className = "details";
    const copy = document.createElement("div");
    const title = document.createElement("strong");
    title.className = "name";
    title.textContent = banner.titulo;
    const status = document.createElement("p");
    status.className = "price";
    status.textContent = `${banner.activo ? "Visible" : "Oculto"} · Orden ${banner.orden}`;
    copy.append(title, status);
    details.append(image, copy);

    const actions = document.createElement("div");
    actions.className = "product-actions";
    const editButton = document.createElement("button");
    editButton.className = "small-btn";
    editButton.type = "button";
    editButton.textContent = "Editar";
    editButton.addEventListener("click", () => editAdminBanner(banner));
    const deleteButton = document.createElement("button");
    deleteButton.className = "small-btn";
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", async () => {
      if (window.confirm(`¿Eliminar el banner "${banner.titulo}"?`)) {
        await deleteAdminBanner(banner);
      }
    });
    actions.append(editButton, deleteButton);
    row.append(details, actions);
    list.append(row);
  });
}


async function loadAdminBanners() {
  const message = document.getElementById("admin-banner-message");
  if (!message || state.profile?.rol !== "admin" || !supabaseClient) return;

  const { data, error } = await supabaseClient
    .from("banners")
    .select("id,titulo,descripcion,etiqueta,texto_boton,enlace_url,imagen_url,orden,activo")
    .order("orden", { ascending: true });

  if (error) {
    console.error("No se pudieron cargar los banners para administración:", error.message || error);
    message.textContent = "No se pudieron cargar los banners. Ejecuta pideya-17-banners-y-perfiles.sql en Supabase.";
    return;
  }

  renderAdminBanners(data);
}


async function saveAdminBanner(event) {
  event.preventDefault();
  const message = document.getElementById("admin-banner-message");
  if (state.profile?.rol !== "admin" || !supabaseClient) {
    message.textContent = "Solo una cuenta administradora puede gestionar banners.";
    return;
  }

  const id = document.getElementById("admin-banner-id").value;
  const imageInput = document.getElementById("admin-banner-image");
  let imageUrl = document.getElementById("admin-banner-image-url").value.trim();
  let uploadedPath = null;
  let previousImageUrl = null;
  const submitButton = event.submitter;
  if (submitButton) submitButton.disabled = true;

  try {
    if (imageInput.files[0]) {
      const uploaded = await uploadMediaImage(imageInput.files[0], `banners/${state.user.id}`);
      imageUrl = uploaded.url;
      uploadedPath = uploaded.path;
    }
    if (!imageUrl) {
      message.textContent = "Sube una imagen o proporciona su URL.";
      return;
    }
    if (!uploadedPath && !isHttpUrl(imageUrl)) {
      message.textContent = "La URL de la imagen debe comenzar con http:// o https://.";
      return;
    }

    const linkUrl = document.getElementById("admin-banner-link").value.trim();
    if (linkUrl && !isHttpUrl(linkUrl)) {
      message.textContent = "El enlace del botón debe comenzar con http:// o https://.";
      return;
    }

    if (id) {
      const { data: previousBanner, error: previousBannerError } = await supabaseClient
        .from("banners")
        .select("imagen_url")
        .eq("id", id)
        .maybeSingle();
      if (previousBannerError) throw previousBannerError;
      previousImageUrl = previousBanner?.imagen_url || null;
    }

    const payload = {
      titulo: document.getElementById("admin-banner-title-input").value.trim(),
      descripcion: document.getElementById("admin-banner-description").value.trim(),
      etiqueta: document.getElementById("admin-banner-tag").value.trim(),
      texto_boton: document.getElementById("admin-banner-button").value.trim(),
      enlace_url: linkUrl,
      imagen_url: imageUrl,
      orden: Number(document.getElementById("admin-banner-order").value || 0),
      activo: document.getElementById("admin-banner-active").checked
    };
    const query = id
      ? supabaseClient.from("banners").update(payload).eq("id", id)
      : supabaseClient.from("banners").insert(payload);
    const { error } = await query;
    if (error) {
      if (uploadedPath) await removeMediaImage(uploadedPath);
      console.error("No se pudo guardar el banner:", error.message || error);
      message.textContent = "No se pudo guardar el banner. Revisa los datos e inténtalo de nuevo.";
      return;
    }

    message.textContent = "Banner guardado.";
    resetAdminBannerForm();
    const previousPath = getMediaPathFromUrl(previousImageUrl);
    if (previousPath && previousPath !== uploadedPath) await removeMediaImage(previousPath);
    await Promise.all([loadAdminBanners(), loadHomeBanners()]);
  } catch (error) {
    if (uploadedPath) await removeMediaImage(uploadedPath);
    console.error("No se pudo guardar el banner:", error.message || error);
    message.textContent = error.message || "No se pudo subir la imagen o guardar el banner.";
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}


async function deleteAdminBanner(banner) {
  const message = document.getElementById("admin-banner-message");
  const { error } = await supabaseClient.from("banners").delete().eq("id", banner.id);
  if (error) {
    console.error("No se pudo eliminar el banner:", error.message || error);
    message.textContent = "No se pudo eliminar el banner. Inténtalo de nuevo.";
    return;
  }

  const imagePath = getMediaPathFromUrl(banner.imagen_url);
  if (imagePath) await removeMediaImage(imagePath);
  message.textContent = "Banner eliminado.";
  await Promise.all([loadAdminBanners(), loadHomeBanners()]);
}


async function uploadMediaImage(file, folder) {
  if (!supabaseClient || !state.user) throw new Error("Inicia sesión para subir imágenes.");
  if (!file || !["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    throw new Error("Elige una imagen JPG, PNG o WebP.");
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error("La imagen debe pesar 5 MB o menos.");
  }

  const extension = file.type.split("/")[1].replace("jpeg", "jpg");
  const identifier = window.crypto?.randomUUID
    ? window.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const fileName = `${identifier}.${extension}`;
  const path = `${folder}/${fileName}`;
  const { data, error } = await supabaseClient.storage
    .from("pideya-imagenes")
    .upload(path, file, { cacheControl: "3600", contentType: file.type, upsert: false });
  if (error) throw error;

  const { data: publicUrl } = supabaseClient.storage.from("pideya-imagenes").getPublicUrl(data.path);
  return { path: data.path, url: publicUrl.publicUrl };
}


async function removeMediaImage(path) {
  if (!supabaseClient || !path) return;
  const { error } = await supabaseClient.storage.from("pideya-imagenes").remove([path]);
  if (error) console.error("No se pudo eliminar la imagen anterior:", error.message || error);
}


function getMediaPathFromUrl(url) {
  if (!url) return null;
  try {
    if (new URL(url).origin !== new URL(window.RAPIYA_SUPABASE_CONFIG.url).origin) return null;
  } catch { return null; }
  const marker = "/storage/v1/object/public/pideya-imagenes/";
  const pathStart = url.indexOf(marker);
  if (pathStart === -1) return null;
  return decodeURIComponent(url.slice(pathStart + marker.length).split("?")[0]);
}


async function uploadCustomerAvatar(file) {
  const message = document.getElementById("customer-avatar-message");
  const preview = document.getElementById("customer-avatar-preview");
  const initials = document.getElementById("customer-avatar-initials");
  const fileInput = document.getElementById("customer-avatar-file");
  if (!file) return;

  try {
    message.textContent = "Subiendo foto...";
    fileInput.disabled = true;
    const uploaded = await uploadMediaImage(file, `perfiles/${state.user.id}`);
    const { data, error } = await supabaseClient
      .from("perfiles")
      .update({ avatar_url: uploaded.url })
      .eq("user_id", state.user.id)
      .select("avatar_url")
      .maybeSingle();

    if (error || !data) {
      await removeMediaImage(uploaded.path);
      throw error || new Error("No se encontró el perfil de la cuenta.");
    }

    const oldPath = getMediaPathFromUrl(state.profile?.avatar_url);
    state.profile = { ...state.profile, avatar_url: data.avatar_url };
    renderProfile();
    preview.src = data.avatar_url;
    preview.hidden = false;
    initials.hidden = true;
    message.textContent = "Foto de perfil actualizada.";
    if (oldPath && oldPath !== uploaded.path) await removeMediaImage(oldPath);
  } catch (error) {
    console.error("No se pudo actualizar la foto de perfil:", error.message || error);
    message.textContent = error.message || "No se pudo subir la foto. Inténtalo de nuevo.";
  } finally {
    fileInput.disabled = false;
    fileInput.value = "";
  }
}


function showCustomerProfilePanel(panelName) {
  const panels = [...document.querySelectorAll(".customer-profile-panel")];
  const selectedPanel = document.getElementById(`customer-${panelName}-panel`);
  const shouldOpen = selectedPanel?.hidden;
  panels.forEach((panel) => {
    panel.hidden = panel !== selectedPanel || !shouldOpen;
  });
  if (shouldOpen) selectedPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}


async function saveCustomerProfile(event) {
  event.preventDefault();
  const message = document.getElementById("customer-edit-message");
  if (!supabaseClient || !state.user) {
    message.textContent = "No se pudo conectar con el servicio de cuentas.";
    return;
  }

  const nombre = document.getElementById("customer-name-input").value.trim();
  const telefono = document.getElementById("customer-phone-input").value.trim();
  if (nombre.length < 2 || nombre.length > 120 || telefono.length > 30) {
    message.textContent = "Revisa el nombre y el teléfono antes de guardar.";
    return;
  }

  const submitButton = event.submitter;
  if (submitButton) submitButton.disabled = true;
  message.textContent = "Guardando cambios...";
  try {
    const { data, error } = await supabaseClient
      .from("perfiles")
      .update({ nombre_completo: nombre, telefono: telefono || null })
      .eq("user_id", state.user.id)
      .select("nombre_completo,telefono")
      .maybeSingle();

    if (error || !data) {
      console.error("No se pudo actualizar el perfil:", error?.message || "No se encontró el perfil de la cuenta.");
      message.textContent = "No se pudieron guardar los cambios. Inténtalo de nuevo.";
      return;
    }

    state.profile = { ...state.profile, ...data };
    renderProfile();
    message.textContent = "Cambios guardados.";
  } catch (error) {
    console.error("No se pudo actualizar el perfil:", error.message || error);
    message.textContent = "No se pudieron guardar los cambios. Revisa tu conexión e inténtalo de nuevo.";
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}


async function resendProfileVerification() {
  const message = document.getElementById("customer-security-message");
  if (!supabaseClient || !state.user?.email) {
    message.textContent = "No se pudo conectar con el servicio de cuentas.";
    return;
  }

  try {
    const emailRedirectTo = new URL("./index.html#profile", window.location.href).toString();
    const { error } = await supabaseClient.auth.resend({
      type: "signup",
      email: state.user.email,
      options: { emailRedirectTo }
    });
    if (error) {
      console.error("No se pudo reenviar la verificación del correo:", error.message || error);
      message.textContent = "No se pudo enviar el correo. Inténtalo de nuevo más tarde.";
      return;
    }
    message.textContent = "Enlace enviado. Revisa tu correo y la carpeta de spam.";
  } catch (error) {
    console.error("No se pudo reenviar la verificación del correo:", error.message || error);
    message.textContent = "No se pudo enviar el correo. Revisa tu conexión e inténtalo de nuevo.";
  }
}


async function updateCustomerPassword(event) {
  event.preventDefault();
  const message = document.getElementById("customer-security-message");
  const passwordInput = document.getElementById("customer-new-password");
  if (!supabaseClient || !state.user) {
    message.textContent = "No se pudo conectar con el servicio de cuentas.";
    return;
  }

  const submitButton = event.submitter;
  if (submitButton) submitButton.disabled = true;
  message.textContent = "Actualizando contraseña...";
  try {
    const { error } = await supabaseClient.auth.updateUser({ password: passwordInput.value });
    if (error) {
      console.error("No se pudo actualizar la contraseña:", error.message || error);
      message.textContent = error.message || "No se pudo actualizar la contraseña.";
      return;
    }
    passwordInput.value = "";
    message.textContent = "Contraseña actualizada.";
  } catch (error) {
    console.error("No se pudo actualizar la contraseña:", error.message || error);
    message.textContent = "No se pudo actualizar la contraseña. Revisa tu conexión e inténtalo de nuevo.";
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}


function showAuthRedirectStatus() {
  const hashParams = new URLSearchParams(window.location.hash.slice(1));
  const errorCode = hashParams.get("error_code");
  const description = hashParams.get("error_description") || "";
  if (errorCode !== "otp_expired" && !description.toLowerCase().includes("expired")) return false;

  const message = document.getElementById("account-message");
  if (message) message.textContent = "El enlace venció o ya fue utilizado. Escribe tu correo y pulsa Reenviar enlace de confirmación.";
  window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}#profile`);
  return true;
}


async function resendConfirmationEmail() {
  const message = document.getElementById("account-message");
  const resendButton = document.getElementById("btn-resend-confirmation");
  const email = document.getElementById("account-email").value.trim();
  if (!email) {
    if (message) message.textContent = "Escribe tu correo para reenviar la confirmación.";
    return;
  }

  resendButton.disabled = true;
  try {
    const emailRedirectTo = new URL("./index.html#profile", window.location.href).toString();
    const { error } = await supabaseClient.auth.resend({
      type: "signup",
      email,
      options: { emailRedirectTo }
    });
    if (message) {
      const errorText = error?.message?.toLowerCase() || "";
      message.textContent = errorText.includes("rate limit") || error?.status === 429
        ? "Supabase limitó temporalmente los correos. Espera antes de volver a intentarlo; para producción configura un proveedor SMTP propio."
        : error
          ? "No se pudo reenviar el correo. Verifica la dirección e inténtalo de nuevo."
          : "Solicitud enviada. Revisa tu correo y la carpeta de spam.";
    }
  } catch {
    if (message) message.textContent = "No hay conexión para reenviar el correo. Inténtalo de nuevo.";
  } finally {
    resendButton.disabled = false;
  }
}


function dismissAppSplash() {
  const splash = document.getElementById("app-splash");
  if (!splash) return;

  splash.classList.add("is-hidden");
  window.setTimeout(() => splash.remove(), 350);
}


function renderCustomerExtras() {
  const box = document.getElementById("customer-profile-panel");
  if (!box) return;
  const isCustomer = Boolean(state.user && state.profile?.rol === "comprador");
  box.hidden = !isCustomer;
  document.getElementById("account-details")?.classList.toggle("is-customer-account", isCustomer);
  const basicSignout = document.getElementById("btn-signout-user");
  if (basicSignout) basicSignout.hidden = isCustomer;
  if (!isCustomer) return;

  const put = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const fill = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  const name = state.profile?.nombre_completo || state.user.user_metadata?.nombre_completo || "Cliente";
  const phone = state.profile?.telefono || state.user.user_metadata?.telefono || "";
  put("customer-profile-name", name);
  fill("customer-name-input", name);
  fill("customer-phone-input", phone);
  put("customer-settings-email", state.user.email || "Correo no disponible");
  put("customer-security-email", state.user.email || "Correo no disponible");
  const initials = name.trim().split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase() || "R";
  put("customer-avatar-initials", initials);
  const image = document.getElementById("customer-avatar-preview-image");
  const preview = document.getElementById("customer-avatar-preview");
  const initialsElement = document.getElementById("customer-avatar-initials");
  const avatar = state.profile?.avatar_url || "";
  if (image) { image.hidden = !avatar; if (avatar) image.src = avatar; else image.removeAttribute("src"); }
  if (preview) { preview.hidden = !avatar; if (avatar) preview.src = avatar; else preview.removeAttribute("src"); }
  if (initialsElement) initialsElement.hidden = Boolean(avatar);

  const confirmed = Boolean(state.user.email_confirmed_at || state.user.confirmed_at);
  put("customer-verification-title", confirmed ? "Correo verificado" : "Correo sin verificar");
  put("customer-verification-copy", confirmed ? "Tu correo electrónico está confirmado." : "Confirma tu correo para verificar tu perfil.");
  put("customer-security-verification", confirmed ? "Correo confirmado" : "Correo pendiente de confirmación");
  document.getElementById("customer-verification")?.classList.toggle("is-verified", confirmed);
  const resend = document.getElementById("btn-resend-profile-verification");
  if (resend) resend.hidden = confirmed;
}

function renderRestaurantProfilePreview(restaurant) {
  if (!restaurant) return;
  const put = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const image = (id, url) => {
    const el = document.getElementById(id);
    if (!el) return;
    const safe = safeImageUrl(url);
    if (safe) el.src = safe;
    else el.removeAttribute("src");
    el.hidden = !safe;
  };
  image("panel-profile-cover", restaurant.cover);
  image("panel-profile-logo", restaurant.logo);
  put("panel-profile-name", restaurant.nombre || "Mi restaurante");
  put("panel-profile-category", restaurant.categoria || "Restaurante");
  put("panel-profile-status", restaurant.abierto ? "Abierto" : "Cerrado");
  document.getElementById("panel-profile-status")?.classList.toggle("is-closed", !restaurant.abierto);
}

function renderProfile() {
  const authForm = document.getElementById("account-auth-form");
  const details = document.getElementById("account-details");
  if (!authForm || !details) return;

  authForm.hidden = Boolean(state.user);
  details.hidden = !state.user;
  const message = document.getElementById("account-message");

  if (!supabaseClient && message) message.textContent = "No hay conexión con el servicio de cuentas.";
  const adminApplications = document.getElementById("admin-applications");
  if (adminApplications) adminApplications.hidden = state.profile?.rol !== "admin";
  const adminPreviewActions = document.getElementById("admin-preview-actions");
  if (adminPreviewActions) adminPreviewActions.hidden = state.profile?.rol !== "admin";
  const adminCenter = document.getElementById("pideya-admin-center");
  if (adminCenter) adminCenter.hidden = state.profile?.rol !== "admin";
  const supportPanel = document.getElementById("pideya-support");
  if (supportPanel) supportPanel.hidden = !state.user || state.profile?.rol === "admin";
  if (!state.user) { renderCustomerExtras(); return; }

  document.getElementById("account-email-label").textContent = state.user.email || "Cuenta Toque";
  const isMerchant = state.profile?.rol === "restaurante" && state.profile.restaurante_id;
  const roleLabel = isMerchant
    ? "Cuenta de restaurante"
    : state.profile?.rol === "comprador"
      ? state.merchantApplication?.estado === "PENDIENTE"
        ? "Solicitud de restaurante pendiente de revisión"
        : state.merchantApplication?.estado === "RECHAZADO"
          ? `Solicitud de restaurante rechazada: ${state.merchantApplication.motivo || "Revisa los datos y contacta a soporte."}`
          : "Cuenta de comprador"
      : state.profile?.rol === "admin"
        ? "Administración de Toque"
      : "Perfil pendiente de configuración";
  document.getElementById("account-role-label").textContent = roleLabel;
  document.getElementById("btn-open-merchant-panel").hidden = !isMerchant;
  const quickMerchantAction = document.getElementById("quick-merchant-action");
  if (quickMerchantAction) quickMerchantAction.hidden = !isMerchant;
  renderCustomerExtras();
}

const ORDER_STEPS = [
  { key: "PENDIENTE", label: "Pedido registrado", description: "Esperando aceptación del restaurante" },
  { key: "ACEPTADO", label: "Pedido aceptado", description: "El restaurante confirmó tu pedido" },
  { key: "PREPARANDO", label: "En preparación", description: "Están preparando tus productos" },
  { key: "EN_CAMINO", label: "En camino", description: "Tu pedido salió para la entrega" },
  { key: "ENTREGADO", label: "Entregado", description: "El restaurante confirmó la entrega" }
];
const ORDER_LABELS = {
  PENDIENTE: "Pendiente de aceptación",
  ACEPTADO: "Aceptado",
  PREPARANDO: "En preparación",
  EN_CAMINO: "En camino",
  ENTREGADO: "Entregado",
  CANCELADO: "Cancelado"
};
const ORDER_NEXT_STATES = {
  PENDIENTE: ["ACEPTADO", "CANCELADO"],
  ACEPTADO: ["PREPARANDO", "CANCELADO"],
  PREPARANDO: ["EN_CAMINO", "CANCELADO"],
  EN_CAMINO: ["ENTREGADO", "CANCELADO"],
  ENTREGADO: [],
  CANCELADO: []
};
const buyerOrderRefresh = { inFlight: false, signature: "", intervalId: null };
// Realtime Postgres Changes usa la política SELECT existente de pedidos (RLS).
// Suscripción por usuario; para cambios perdidos usamos una consulta de respaldo cada 60 s.
const buyerOrderRealtime = { channel: null, userId: null, connected: false, timerId: null, lastStatus: "" };

function stopBuyerOrderRealtime() {
  if (buyerOrderRealtime.timerId !== null) clearTimeout(buyerOrderRealtime.timerId);
  const channel = buyerOrderRealtime.channel;
  buyerOrderRealtime.channel = null;
  buyerOrderRealtime.userId = null;
  buyerOrderRealtime.connected = false;
  buyerOrderRealtime.timerId = null;
  buyerOrderRealtime.lastStatus = "";
  if (channel && supabaseClient) void supabaseClient.removeChannel(channel);
}

function queueBuyerRealtimeRefresh(payload = null) {
  const changedOrder = payload?.new;
  if (changedOrder && changedOrder.id && changedOrder.estado) {
    buyerOrderRealtime.lastStatus = `Pedido #${String(changedOrder.id).slice(0, 8)}: ${ORDER_LABELS[changedOrder.estado] || changedOrder.estado}`;
  }
  if (buyerOrderRealtime.timerId !== null) clearTimeout(buyerOrderRealtime.timerId);
  buyerOrderRealtime.timerId = setTimeout(() => {
    buyerOrderRealtime.timerId = null;
    if (!document.hidden && document.getElementById("view-orders")?.classList.contains("active")) {
      void renderOrders(true);
    }
  }, 300);
}

function startBuyerOrderRealtime() {
  const userId = state.user?.id;
  if (!supabaseClient || !userId || state.profile?.rol !== "comprador") {
    stopBuyerOrderRealtime();
    return;
  }
  if (buyerOrderRealtime.channel && buyerOrderRealtime.userId === userId) return;
  stopBuyerOrderRealtime();
  buyerOrderRealtime.userId = userId;
  const channel = supabaseClient.channel(`pideya-comprador-${userId}`)
    .on("postgres_changes", {
      event: "INSERT", schema: "public", table: "pedidos", filter: `user_id=eq.${userId}`
    }, queueBuyerRealtimeRefresh)
    .on("postgres_changes", {
      event: "UPDATE", schema: "public", table: "pedidos", filter: `user_id=eq.${userId}`
    }, queueBuyerRealtimeRefresh);
  buyerOrderRealtime.channel = channel;
  channel.subscribe((status) => {
    if (buyerOrderRealtime.channel !== channel) return;
    buyerOrderRealtime.connected = status === "SUBSCRIBED";
    if (status === "SUBSCRIBED") queueBuyerRealtimeRefresh();
  });
}

function formatOrderTime(value) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleString("es-CO", {
    day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit"
  });
}

function renderOrderTimeline(order, events, expanded) {
  const canceled = order.estado === "CANCELADO";
  const currentIndex = ORDER_STEPS.findIndex((step) => step.key === order.estado);
  const previousEvent = canceled ? [...events].reverse().find((event) => event.estado !== "CANCELADO") : null;
  const canceledIndex = previousEvent ? ORDER_STEPS.findIndex((step) => step.key === previousEvent.estado) : 0;
  const stepMarkup = ORDER_STEPS.map((step, index) => {
    const completed = canceled ? index <= canceledIndex : index <= currentIndex;
    const current = !canceled && step.key === order.estado;
    const event = events.find((item) => item.estado === step.key);
    const recordedAt = event?.created_at || (step.key === "PENDIENTE" ? order.created_at : null);
    return `
      <li class="order-step ${completed ? "is-complete" : ""} ${current ? "is-current" : ""}">
        <span class="order-step-dot" aria-hidden="true">${completed && !current ? "✓" : index + 1}</span>
        <span class="order-step-text">
          <strong>${escapeHtml(step.label)}</strong>
          <small>${escapeHtml(recordedAt ? formatOrderTime(recordedAt) : current ? step.description : completed ? "Estado completado" : "Pendiente")}</small>
        </span>
      </li>`;
  }).join("");
  const cancelEvent = events.find((event) => event.estado === "CANCELADO");
  return `
    <details class="buyer-order-tracking" data-track-order="${escapeHtml(order.id)}" ${expanded ? "open" : ""}>
      <summary><i class="fa-solid fa-route" aria-hidden="true"></i> Ver seguimiento del pedido</summary>
      <ol class="order-timeline">${stepMarkup}</ol>
      ${canceled ? `<p class="order-canceled-note"><i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> Pedido cancelado${cancelEvent ? ` · ${escapeHtml(formatOrderTime(cancelEvent.created_at))}` : ""}. Comunícate con el restaurante si necesitas más información.</p>` : ""}
    </details>`;
}

// Paso 7 — Volver a pedir. Se reconstruye el carrito desde los items guardados,
// pero se valida cada producto/opción contra el catálogo ACTUAL. La validación
// definitiva de importes, horarios, zonas y cupones sigue ocurriendo en Supabase.
function repeatPreviousOrder(order) {
  if (!state.user || state.profile?.rol !== "comprador") {
    window.alert("Inicia sesión con una cuenta de comprador para repetir pedidos.");
    return false;
  }
  if (!state.deliveryZonesLoaded) {
    window.alert("No pudimos verificar las zonas de entrega. Actualiza la página e inténtalo de nuevo.");
    return false;
  }
  const restaurant = RESTAURANTS.find((entry) => entry.id === order?.id_restaurante);
  if (!restaurant) {
    window.alert("Este restaurante ya no aparece en el catálogo de Toque.");
    return false;
  }
  const city = String(order.ciudad || "").trim();
  if (!city || normalizeText(city) !== normalizeText(restaurant.ciudad || restaurant.municipio)) {
    window.alert("El restaurante cambió de ciudad o ya no atiende la zona del pedido anterior.");
    return false;
  }
  const items = Array.isArray(order.items) ? order.items : [];
  if (!items.length) {
    window.alert("Este pedido no tiene productos para repetir.");
    return false;
  }
  const newCart = {};
  const problems = [];
  const pricesChanged = [];
  for (const item of items) {
    const productId = String(item?.id || "");
    const product = (MENU[restaurant.id] || []).find((entry) => String(entry.id) === productId);
    const label = String(item?.nombre || product?.nombre || "Producto");
    const quantity = Number(item?.cantidad);
    if (!product || product.disponible === false) {
      problems.push(`${label}: ya no está disponible`);
      continue;
    }
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 50) {
      problems.push(`${label}: cantidad inválida`);
      continue;
    }
    const options = productCustomization(product);
    const size = typeof item.tamano === "string" ? item.tamano : "";
    const extras = Array.isArray(item.extras)
      ? item.extras.map((value) => typeof value === "string" ? value : value?.nombre).filter((value) => typeof value === "string")
      : [];
    const removed = Array.isArray(item.sin)
      ? item.sin.filter((value) => typeof value === "string") : [];
    const note = String(item.nota || "").trim().slice(0, 250);
    if ((options.tamanos.length && !options.tamanos.some((opt) => opt.nombre === size))
      || (!options.tamanos.length && size)
      || extras.length > 12 || new Set(extras).size !== extras.length
      || extras.some((name) => !options.extras.some((opt) => opt.nombre === name))
      || removed.length > 20 || new Set(removed).size !== removed.length
      || removed.some((name) => !options.ingredientes.includes(name))) {
      problems.push(`${label}: sus tamaños o ingredientes cambiaron`);
      continue;
    }
    const selection = { tamano: size, extras, sin: removed, nota: note };
    const key = cartKey(restaurant.id, product.id, selection);
    const combined = (newCart[key] || 0) + quantity;
    if (combined > 50) {
      problems.push(`${label}: excede las 50 unidades permitidas`);
      continue;
    }
    newCart[key] = combined;
    const oldPrice = Number(item.precio);
    const newPrice = selectedProductPrice(product, selection);
    if (Number.isFinite(oldPrice) && oldPrice !== newPrice) {
      pricesChanged.push(`${label}: ${formatCurrency(oldPrice)} → ${formatCurrency(newPrice)}`);
    }
  }
  // No alterar el carrito si falta cualquier producto o si cambió una opción.
  if (problems.length) {
    window.alert(`No podemos repetir el pedido exactamente:\n\n${problems.join("\n")}\n\nAbre el menú del restaurante para elegir opciones actuales.`);
    return false;
  }
  const currentItems = Object.values(state.cart).reduce((total, quantity) => total + quantity, 0);
  const explanations = ["Vamos a recuperar los productos y personalizaciones del pedido anterior."];
  if (currentItems) explanations.push(`Se reemplazarán las ${currentItems} unidades que tienes actualmente en el carrito.`);
  if (pricesChanged.length) explanations.push(`Los precios cambiaron:\n${pricesChanged.join("\n")}`);
  explanations.push("Comprueba el barrio, domicilio y dirección antes de confirmar. Los cupones anteriores no se aplican automáticamente.");
  if (!window.confirm(explanations.join("\n\n"))) return false;

  state.cart = newCart;
  state.preparedOrders = [];
  state.selectedZoneIds = {};
  state.couponCodes = {};
  state.couponQuotes = {};
  state.couponMessages = {};
  clearCheckoutId(); // El nuevo checkout nunca reutiliza el identificador del pedido original.

  // Reutilizamos la dirección sólo como borrador editable; el GPS anterior NO se hereda.
  state.delivery = {
    city,
    address: String(order.direccion || "").slice(0, 400),
    lat: null,
    lng: null
  };
  try {
    localStorage.setItem("rapiya-delivery-location", JSON.stringify(state.delivery));
  } catch (error) { console.warn("No se pudo guardar la dirección del pedido repetido:", error); }

  const previousZone = String(order.zona_entrega_nombre || "").trim();
  const zones = zonesForRestaurant(restaurant.id);
  const matchingZone = zones.find((zone) => normalizeText(zone.nombre) === normalizeText(previousZone));
  if (matchingZone) state.selectedZoneIds[restaurant.id] = String(matchingZone.id);

  saveCart();
  updateCartBadge();
  refreshLocationUI();
  openCart();
  const notice = document.getElementById("checkout-message");
  if (notice) {
    notice.textContent = !restaurant.abierto
      ? "Productos recuperados. El restaurante está cerrado: el pedido no se puede confirmar hasta que abra."
      : zones.length && !matchingZone
        ? "Productos recuperados. Selecciona un sector vigente y revisa el costo de domicilio antes de continuar."
        : "Productos recuperados. Comprueba dirección, precio actual y domicilio. Si usaste un cupón, debes aplicarlo otra vez.";
  }
  return true;
}

async function renderOrders(quiet = false) {
  const content = document.getElementById("orders-content");
  if (!content || buyerOrderRefresh.inFlight) return;
  const info = document.getElementById("orders-auto-refresh");
  if (!state.user) {
    buyerOrderRefresh.signature = "";
    content.textContent = "Inicia sesión para consultar tus pedidos.";
    if (info) info.textContent = "";
    return;
  }
  if (!supabaseClient) {
    content.textContent = "No hay conexión con el servicio de pedidos.";
    return;
  }
  const requestingUserId = state.user.id;
  const wasRendered = Boolean(content.querySelector("[data-track-order]"));
  const openedOrders = new Set([...content.querySelectorAll("details[data-track-order][open]")]
    .map((item) => item.dataset.trackOrder));
  buyerOrderRefresh.inFlight = true;
  if (!quiet && !wasRendered) content.textContent = "Cargando pedidos...";
  try {
    const { data, error } = await supabaseClient
      .from("pedidos")
      .select("id,id_restaurante,estado,items,subtotal,ahorro,envio,descuento_promocion,promocion_codigo,total,direccion,ciudad,zona_entrega_nombre,metodo_pago,efectivo_con,cambio_requerido,created_at")
      .eq("user_id", requestingUserId)
      .order("created_at", { ascending: false })
      .limit(50);
    if (error) throw error;
    if (state.user?.id !== requestingUserId) return;
    const orders = data || [];
    let events = [];
    let historyError = false;
    if (orders.length) {
      const historyResult = await supabaseClient.from("pedido_estado_historial")
        .select("pedido_id,estado,created_at")
        .in("pedido_id", orders.map((order) => order.id))
        .order("created_at", { ascending: true });
      if (historyResult.error) {
        historyError = true;
        console.warn("El historial de estados no está disponible:", historyResult.error.message);
      } else {
        events = historyResult.data || [];
      }
    }
    if (state.user?.id !== requestingUserId) return;
    const signature = JSON.stringify([orders.map((o) => [o.id, o.estado, o.created_at]),
      events.map((e) => [e.pedido_id, e.estado, e.created_at]), historyError]);
    if (quiet && signature === buyerOrderRefresh.signature) {
      if (info) info.textContent = `Estados actualizados · ${new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}${buyerOrderRealtime.connected ? " · En tiempo real" : " · Respaldo automático"}`;
      return;
    }
    buyerOrderRefresh.signature = signature;
    if (!orders.length) {
      content.textContent = "Aún no tienes pedidos. Tus compras aparecerán aquí.";
    } else {
      const eventsByOrder = new Map();
      events.forEach((event) => {
        if (!eventsByOrder.has(event.pedido_id)) eventsByOrder.set(event.pedido_id, []);
        eventsByOrder.get(event.pedido_id).push(event);
      });
      content.classList.remove("empty-state");
      content.innerHTML = orders.map((order) => {
        const restaurant = RESTAURANTS.find((item) => item.id === order.id_restaurante);
        const items = Array.isArray(order.items) ? order.items : [];
        const canRate = order.estado === "ENTREGADO" && state.profile?.rol === "comprador";
        const isExpanded = wasRendered ? openedOrders.has(order.id) : !["ENTREGADO", "CANCELADO"].includes(order.estado);
        const pillClass = order.estado === "ENTREGADO" ? "delivered" : order.estado === "CANCELADO" ? "canceled" : "active";
        return `
          <article class="order-card buyer-order-card">
            <div class="order-card-heading">
              <strong>${escapeHtml(restaurant?.nombre || order.id_restaurante)}</strong>
              <span class="order-status-pill ${pillClass}">${escapeHtml(ORDER_LABELS[order.estado] || order.estado)}</span>
            </div>
            <p>Pedido #${escapeHtml(order.id.slice(0, 8))} · ${escapeHtml(formatOrderTime(order.created_at))}</p>
            <div class="order-custom-items">${items.map((item) => `<p>${Number(item.cantidad)} × ${escapeHtml(item.nombre)}
                ${orderItemDetails(item).map((line) => `<small>${escapeHtml(line)}</small>`).join("")}</p>`).join("")}</div>
            ${order.zona_entrega_nombre ? `<p>Sector: ${escapeHtml(order.zona_entrega_nombre)}</p>` : ""}
            ${order.promocion_codigo ? `<p>Promoción ${escapeHtml(order.promocion_codigo)}: −${formatCurrency(order.descuento_promocion || 0)}</p>` : ""}
            <strong>Total: ${formatCurrency(order.total)}</strong>
            <div class="order-payment-detail">${paymentLinesForOrder(order)}</div>
            ${renderOrderTimeline(order, eventsByOrder.get(order.id) || [], isExpanded)}
            ${state.profile?.rol === "comprador" ? `<button class="secondary-btn repeat-order-btn" type="button" data-repeat-order="${escapeHtml(order.id)}"><i class="fa-solid fa-rotate-right" aria-hidden="true"></i> Volver a pedir</button>` : ""}
            ${canRate ? `<button class="secondary-btn" type="button" data-rate-restaurant="${escapeHtml(order.id_restaurante)}">Calificar restaurante</button>` : ""}
          </article>`;
      }).join("");
      const ordersById = new Map(orders.map((order) => [order.id, order]));
      content.querySelectorAll("[data-repeat-order]").forEach((button) => {
        button.addEventListener("click", () => {
          const previous = ordersById.get(button.dataset.repeatOrder);
          if (previous) repeatPreviousOrder(previous);
        });
      });
      content.querySelectorAll("[data-rate-restaurant]").forEach((button) => {
        button.addEventListener("click", async () => {
          const value = Number(window.prompt("Califica el restaurante de 1 a 5 estrellas:"));
          if (!Number.isInteger(value) || value < 1 || value > 5) return;
          button.disabled = true;
          try {
            const { error: ratingError } = await supabaseClient.rpc("calificar_restaurante", {
              p_restaurante_id: button.dataset.rateRestaurant,
              p_estrellas: value
            });
            if (ratingError) throw ratingError;
            await loadCatalogFromSupabase();
            renderRestaurants();
            renderRestaurantDetail();
            await renderOrders();
          } catch (ratingError) {
            window.alert(`No se pudo guardar la calificación: ${ratingError.message || ratingError}`);
            button.disabled = false;
          }
        });
      });
    }
    if (info) info.textContent = historyError
      ? "Se muestra el estado actual, pero el historial detallado no está disponible. Comprueba el SQL del seguimiento."
      : `Estados actualizados · ${new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}${buyerOrderRealtime.connected ? " · En tiempo real" : " · Respaldo automático"}`;
  } catch (error) {
    if (!quiet) content.textContent = `No se pudieron cargar los pedidos: ${error.message || error}`;
    if (info) info.textContent = "No se pudo actualizar el seguimiento. Comprueba la conexión.";
  } finally {
    buyerOrderRefresh.inFlight = false;
  }
}

function startBuyerOrderRefresh() {
  if (buyerOrderRefresh.intervalId !== null) return;
  buyerOrderRefresh.intervalId = setInterval(() => {
    const ordersView = document.getElementById("view-orders");
    if (!document.hidden && ordersView?.classList.contains("active") && state.user) {
      void renderOrders(true);
    }
  }, 60000);
}

async function loadMerchantApplication() {
  state.merchantApplication = null;
  if (!state.user || !supabaseClient || state.profile?.rol !== "comprador") return;
  const { data, error } = await supabaseClient
    .from("solicitudes_restaurante")
    .select("estado,motivo")
    .eq("user_id", state.user.id)
    .maybeSingle();
  if (error) {
    console.error("No se pudo consultar la solicitud de restaurante:", error.message || error);
    return;
  }
  state.merchantApplication = data;
}

async function loadAdminApplications() {
  const box = document.getElementById("admin-applications-list");
  const message = document.getElementById("admin-applications-message");
  if (!box || !message || state.profile?.rol !== "admin") return;
  message.textContent = "Cargando solicitudes...";
  const { data, error } = await supabaseClient
    .from("solicitudes_restaurante")
    .select("id,nombre,contacto,categoria,whatsapp,ciudad,departamento,pais,direccion,logo_url,portada_url,created_at")
    .eq("estado", "PENDIENTE")
    .order("created_at", { ascending: true });
  if (error) {
    message.textContent = `No se pudieron cargar las solicitudes: ${error.message}`;
    return;
  }
  if (!data.length) {
    box.replaceChildren();
    message.textContent = "No hay solicitudes pendientes.";
    return;
  }
  message.textContent = `${data.length} solicitud(es) pendiente(s).`;
  box.innerHTML = data.map((request) => `
    <article class="saved-card admin-request" data-request-id="${escapeHtml(request.id)}">
      <div>
        <h3>${escapeHtml(request.nombre)}</h3>
        <p>${escapeHtml(request.contacto)} · ${escapeHtml(request.categoria)} · ${escapeHtml(request.whatsapp)}</p>
        <p>${escapeHtml([request.ciudad, request.departamento, request.pais].filter(Boolean).join(", "))}</p>
        <p>${escapeHtml(request.direccion || "Sin dirección")}</p>
        <p>${escapeHtml(request.created_at ? new Date(request.created_at).toLocaleDateString("es-CO") : "")}</p>
      </div>
      <div class="admin-request-actions">
        <button class="primary-btn" type="button" data-review-decision="APROBADO">Aprobar</button>
        <button class="secondary-btn" type="button" data-review-decision="RECHAZADO">Rechazar</button>
      </div>
    </article>
  `).join("");
  box.querySelectorAll("[data-review-decision]").forEach((button) => {
    button.addEventListener("click", async () => {
      const decision = button.dataset.reviewDecision;
      const motivo = decision === "RECHAZADO" ? window.prompt("Motivo del rechazo (2 a 400 caracteres):") : null;
      if (decision === "RECHAZADO" && motivo === null) return;
      const card = button.closest("[data-request-id]");
      card.querySelectorAll("button").forEach((item) => { item.disabled = true; });
      try {
        const { error: reviewError } = await supabaseClient.rpc("resolver_solicitud_restaurante", {
          p_solicitud_id: card.dataset.requestId,
          p_decision: decision,
          p_motivo: motivo
        });
        if (reviewError) throw reviewError;
        await loadAdminApplications();
        await loadCatalogFromSupabase();
        renderRestaurants();
      } catch (reviewError) {
        message.textContent = `No se pudo resolver la solicitud: ${reviewError.message || reviewError}`;
        card.querySelectorAll("button").forEach((item) => { item.disabled = false; });
      }
    });
  });
}

// Toque / Paso 9: Administración con RPC de solo lectura y operaciones autorizadas
// en el servidor. La clave secret nunca se utiliza en el navegador.
async function loadPideyaAdminDashboard() {
  const status = document.getElementById("pideya-admin-status");
  if (!status || !supabaseClient || state.profile?.rol !== "admin") return;
  status.textContent = "Actualizando el centro de administración...";
  const { data, error } = await supabaseClient.rpc("pideya_admin_resumen");
  if (error) {
    status.textContent = `Error de administración: ${error.message}`;
    return;
  }
  status.textContent = "Datos actualizados desde Supabase.";
  const m = data?.metricas || {};
  const metrics = [
    ["Restaurantes", m.restaurantes], ["Suspendidos", m.suspendidos],
    ["Pedidos", m.pedidos], ["Entregados", m.entregados],
    ["Cancelados", m.cancelados], ["En curso", m.pendientes],
    ["Valor estimado entregados", formatCurrency(Number(m.valor_entregados || 0))],
    ["Reportes abiertos", m.reportes_abiertos]
  ];
  const metricBox = document.getElementById("pideya-admin-metrics");
  if (metricBox) metricBox.innerHTML = metrics.map(([title, value]) => `<div class="admin-metric"><small>${escapeHtml(title)}</small><strong>${escapeHtml(value ?? 0)}</strong></div>`).join("");

  const container = document.getElementById("pideya-admin-restaurants");
  if (container) {
    container.innerHTML = (data.restaurantes || []).map((r) => `
      <article class="admin-restaurant-item" data-admin-restaurant="${escapeHtml(r.id)}">
        <div class="admin-restaurant-heading"><strong>${escapeHtml(r.nombre)}</strong>
          <span class="${r.suspendido ? "admin-status-blocked" : "admin-status-normal"}">${r.suspendido ? "Suspendido" : "Activo en Toque"}</span></div>
        <p>${escapeHtml(r.ciudad || "Sin ciudad")} · ${Number(r.pedidos || 0)} pedidos · ${Number(r.entregados || 0)} entregados</p>
        ${r.suspendido ? `<p>Motivo: ${escapeHtml(r.motivo || "No indicado")}</p>` : ""}
        <div class="admin-category-action">
          <label>Categoría <input type="text" maxlength="80" value="${escapeHtml(r.categoria || "")}" data-admin-category /></label>
          <button class="secondary-btn" type="button" data-admin-update-category>Guardar categoría</button>
        </div>
        <button class="${r.suspendido ? "secondary-btn" : "admin-danger-button"}" type="button" data-admin-toggle-suspension="${r.suspendido ? "false" : "true"}">
          ${r.suspendido ? "Reactivar restaurante" : "Suspender nuevos pedidos"}
        </button>
      </article>`).join("") || '<p class="empty-state">No hay restaurantes registrados.</p>';
    container.querySelectorAll("[data-admin-toggle-suspension]").forEach((button) => {
      button.addEventListener("click", async () => {
        const card = button.closest("[data-admin-restaurant]");
        const suspender = button.dataset.adminToggleSuspension === "true";
        const motivo = suspender ? window.prompt("Motivo de la suspensión (5 a 400 caracteres):") : null;
        if (suspender && motivo === null) return;
        if (suspender && (!motivo || motivo.trim().length < 5 || motivo.trim().length > 400)) {
          status.textContent = "Debes indicar un motivo de 5 a 400 caracteres.";
          return;
        }
        if (!window.confirm(suspender
          ? "¿Suspender este restaurante para nuevos pedidos? Los pedidos anteriores seguirán vigentes."
          : "¿Reactivar este restaurante en el catálogo?")) return;
        button.disabled = true;
        try {
          const { error } = await supabaseClient.rpc("pideya_admin_cambiar_suspension", {
            p_restaurante_id: card.dataset.adminRestaurant, p_suspendido: suspender, p_motivo: motivo
          });
          if (error) throw error;
          await loadCatalogFromSupabase();
          renderCategories(); renderRestaurants(); renderRestaurantDetail(); renderCart();
          await loadPideyaAdminDashboard();
        } catch (err) { status.textContent = `No se pudo actualizar: ${err.message}`; button.disabled = false; }
      });
    });
    container.querySelectorAll("[data-admin-update-category]").forEach((button) => {
      button.addEventListener("click", async () => {
        const card = button.closest("[data-admin-restaurant]");
        const category = card.querySelector("[data-admin-category]").value.trim();
        if (category.length < 2 || category.length > 80) {
          status.textContent = "La categoría debe tener entre 2 y 80 caracteres."; return;
        }
        button.disabled = true;
        try {
          const { error } = await supabaseClient.rpc("pideya_admin_cambiar_categoria", {
            p_restaurante_id: card.dataset.adminRestaurant, p_categoria: category
          });
          if (error) throw error;
          await loadCatalogFromSupabase(); renderCategories(); renderRestaurants();
          await loadPideyaAdminDashboard();
        } catch (err) { status.textContent = `No se pudo guardar la categoría: ${err.message}`; button.disabled = false; }
      });
    });
  }
  const reports = document.getElementById("pideya-admin-reports");
  if (reports) {
    reports.innerHTML = (data.reportes || []).map((r) => `
      <article class="admin-report-item" data-admin-report="${escapeHtml(r.id)}">
        <strong>${escapeHtml(r.titulo)} <small>(${escapeHtml(r.estado)})</small></strong>
        <p>${escapeHtml(r.descripcion)}</p>
        <small>${escapeHtml(new Date(r.creado_at).toLocaleString("es-CO"))}</small>
        <label>Estado
          <select data-admin-report-state>
            ${["ABIERTO", "EN_REVISION", "RESUELTO"].map((s) => `<option value="${s}" ${s === r.estado ? "selected" : ""}>${s.replace("_", " ")}</option>`).join("")}
          </select>
        </label>
        <label>Respuesta para quien reportó
          <textarea data-admin-report-answer maxlength="600" rows="2">${escapeHtml(r.respuesta || "")}</textarea>
        </label>
        <button class="secondary-btn" type="button" data-admin-save-report>Guardar respuesta</button>
      </article>`).join("") || '<p class="empty-state">No hay reportes.</p>';
    reports.querySelectorAll("[data-admin-save-report]").forEach((button) => {
      button.addEventListener("click", async () => {
        const card = button.closest("[data-admin-report]");
        button.disabled = true;
        try {
          const { error } = await supabaseClient.rpc("pideya_admin_resolver_reporte", {
            p_reporte_id: card.dataset.adminReport,
            p_estado: card.querySelector("[data-admin-report-state]").value,
            p_respuesta: card.querySelector("[data-admin-report-answer]").value.trim()
          });
          if (error) throw error;
          await loadPideyaAdminDashboard();
        } catch (err) { status.textContent = `Error al guardar reporte: ${err.message}`; button.disabled = false; }
      });
    });
  }
}

async function loadPideyaOwnReports() {
  const box = document.getElementById("pideya-own-reports");
  const selector = document.getElementById("pideya-report-restaurant");
  if (!box || !selector || !supabaseClient || !state.user || state.profile?.rol === "admin") return;
  const current = selector.value;
  selector.replaceChildren(new Option("General / plataforma", ""));
  RESTAURANTS.forEach((r) => selector.add(new Option(r.nombre, r.id)));
  selector.value = [...selector.options].some((o) => o.value === current) ? current : "";
  const { data, error } = await supabaseClient.from("pideya_reportes")
    .select("titulo,estado,respuesta_admin,creado_at").eq("user_id", state.user.id)
    .order("creado_at", { ascending: false }).limit(12);
  box.innerHTML = error ? `<p>${escapeHtml(error.message)}</p>`
    : (data || []).map((r) => `<article class="admin-report-item"><strong>${escapeHtml(r.titulo)}</strong>
      <small> · ${escapeHtml(r.estado)}</small>
      ${r.respuesta_admin ? `<p>Respuesta: ${escapeHtml(r.respuesta_admin)}</p>` : ""}
    </article>`).join("");
}

function bindPideyaAdministration() {
  document.getElementById("pideya-admin-refresh")?.addEventListener("click", () => void loadPideyaAdminDashboard());
  document.getElementById("pideya-report-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!state.user || state.profile?.rol === "admin") return;
    const form = event.currentTarget;
    const button = form.querySelector('[type="submit"]');
    const message = document.getElementById("pideya-report-message");
    button.disabled = true;
    message.textContent = "Enviando reporte...";
    try {
      const { error } = await supabaseClient.rpc("pideya_crear_reporte", {
        p_titulo: document.getElementById("pideya-report-title").value.trim(),
        p_descripcion: document.getElementById("pideya-report-description").value.trim(),
        p_restaurante_id: document.getElementById("pideya-report-restaurant").value || null
      });
      if (error) throw error;
      form.reset();
      message.textContent = "Reporte enviado a Toque. Puedes consultar su estado abajo.";
      await loadPideyaOwnReports();
    } catch (err) { message.textContent = `No se pudo enviar el reporte: ${err.message}`; }
    finally { button.disabled = false; }
  });
}

async function loadAccountState() {
  if (!supabaseClient) {
    renderProfile();
    renderFavorites();
    renderOrders();
    return;
  }

  const { data, error } = await supabaseClient.auth.getSession();
  if (error) console.error("No se pudo consultar la sesión:", error.message || error);
  state.user = data?.session?.user || null;
  buyerOrderRefresh.signature = "";
  state.profile = null;
  state.favorites = new Set();
  state.merchantApplication = null;
  stopMerchantOrderMonitor();
  stopBuyerOrderRealtime();

  if (state.user) {
    const profileResult = await supabaseClient
      .from("perfiles")
      .select("rol,restaurante_id")
      .eq("user_id", state.user.id)
      .maybeSingle();
    if (profileResult.error) {
      console.error("No se pudo cargar el perfil:", profileResult.error.message || profileResult.error);
    } else {
      state.profile = profileResult.data;
      if (state.profile?.rol === "comprador") {
        const extras = await supabaseClient.from("perfiles")
          .select("nombre_completo,telefono,avatar_url")
          .eq("user_id", state.user.id).maybeSingle();
        if (!extras.error && extras.data) state.profile = { ...state.profile, ...extras.data };
        else if (extras.error) console.warn("Datos de perfil pendientes de migración:", extras.error.message || extras.error);
      }
    }

    await loadMerchantApplication();
    try {
      await loadFavorites();
    } catch (favoritesError) {
      console.error("No se pudieron cargar los favoritos:", favoritesError.message || favoritesError);
    }
  }

  renderProfile();
  renderFavorites();
  await renderOrders();
  startBuyerOrderRealtime();
  renderCategories();
  renderRestaurants();
  renderRestaurantDetail();
  await loadAdminApplications();
  if (document.getElementById("checkout-payment-methods")) {
    await loadCheckoutPaymentSettings();
    renderCartKeepingCheckoutFields();
  }
  if (state.profile?.rol === "admin") {
    await loadPideyaAdminDashboard();
    await loadAdminBanners();
  }
  if (state.user && state.profile?.rol !== "admin") await loadPideyaOwnReports();

  if (document.body.dataset.page === "panel") {
    const authorized = state.profile?.rol === "restaurante" && state.profile.restaurante_id;
    document.getElementById("panel-access-gate").hidden = Boolean(authorized);
    document.querySelector(".panel-shell").hidden = !authorized;
    if (authorized) {
      state.selectedRestaurantId = state.profile.restaurante_id;
      await renderBusinessPanel();
    }
  }
}

async function authenticate(action) {
  const message = document.getElementById("account-message");
  if (!supabaseClient) {
    if (message) message.textContent = "No hay conexión con el servicio de cuentas.";
    return;
  }

  const email = document.getElementById("account-email").value.trim();
  const password = document.getElementById("account-password").value;
  const isMerchantSignup = action === "signup-merchant";
  const result = action === "signup" || isMerchantSignup
    ? await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          nombre_completo: isMerchantSignup
            ? document.getElementById("merchant-name").value.trim()
            : document.getElementById("account-name").value.trim(),
          telefono: document.getElementById("account-phone").value.trim() || null,
          acepta_terminos: document.getElementById("accept-terms").checked,
          leyo_privacidad: document.getElementById("acknowledge-privacy").checked,
          tipo_cuenta: isMerchantSignup ? "restaurante" : "comprador",
          ...(isMerchantSignup ? {
            solicitud_restaurante: {
              nombre: document.getElementById("merchant-name").value.trim(),
              categoria: document.getElementById("merchant-category").value.trim(),
              whatsapp: document.getElementById("merchant-whatsapp").value.trim(),
              ciudad: document.getElementById("merchant-city").value.trim(),
              departamento: document.getElementById("merchant-department").value.trim(),
              pais: document.getElementById("merchant-country").value.trim(),
              direccion: document.getElementById("merchant-address").value.trim(),
              logo_url: document.getElementById("merchant-logo").value.trim(),
              portada_url: document.getElementById("merchant-cover").value.trim()
            }
          } : {})
        }
      }
    })
    : await supabaseClient.auth.signInWithPassword({ email, password });

  if (result.error) {
    if (message) message.textContent = result.error.message;
    return;
  }

  if ((action === "signup" || isMerchantSignup) && !result.data.session) {
    if (message) message.textContent = isMerchantSignup
      ? "Revisa tu correo para confirmar la cuenta. La solicitud de restaurante quedará pendiente de aprobación."
      : "Revisa tu correo para confirmar la cuenta.";
    return;
  }

  if (message) message.textContent = isMerchantSignup
    ? "Cuenta creada. La solicitud de restaurante está pendiente de revisión."
    : "";
  await loadAccountState();
}

function setAccountFormMode(mode) {
  const isSignup = mode === "signup" || mode === "signup-merchant";
  const isMerchantSignup = mode === "signup-merchant";
  const signupFields = document.getElementById("signup-fields");
  if (!signupFields) return;

  signupFields.hidden = !isSignup || isMerchantSignup;
  const merchantFields = document.getElementById("merchant-signup-fields");
  if (merchantFields) merchantFields.hidden = !isMerchantSignup;
  document.getElementById("account-name").required = isSignup && !isMerchantSignup;
  document.getElementById("account-phone").required = false;
  document.getElementById("accept-terms").required = isSignup;
  document.getElementById("acknowledge-privacy").required = isSignup;
  [
    "merchant-name", "merchant-category", "merchant-whatsapp", "merchant-city",
    "merchant-address"
  ].forEach((id) => {
    const field = document.getElementById(id);
    if (field) field.required = isMerchantSignup;
  });
  document.getElementById("account-password").autocomplete = isSignup ? "new-password" : "current-password";
  document.getElementById("btn-login-user").hidden = isSignup;
  document.getElementById("btn-signup-user").hidden = isSignup;
  document.getElementById("btn-signup-merchant").hidden = isSignup;
  document.getElementById("btn-create-account").hidden = !isSignup || isMerchantSignup;
  document.getElementById("btn-create-merchant").hidden = !isMerchantSignup;
  document.getElementById("btn-back-login").hidden = !isSignup;
  document.getElementById("btn-reset-password").hidden = isSignup;
  document.getElementById("account-message").textContent = "";
}

async function resetAccountPassword() {
  const message = document.getElementById("account-message");
  const email = document.getElementById("account-email").value.trim();
  if (!email) {
    message.textContent = "Escribe tu correo para enviarte el enlace de recuperación.";
    document.getElementById("account-email").focus();
    return;
  }
  const button = document.getElementById("btn-reset-password");
  button.disabled = true;
  try {
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email);
    if (error) throw error;
    message.textContent = "Si el correo está registrado, recibirás un enlace para restablecer la contraseña.";
  } catch (error) {
    message.textContent = `No se pudo enviar el enlace: ${error.message || error}`;
  } finally {
    button.disabled = false;
  }
}

async function saveNewPassword(event) {
  event.preventDefault();
  const button = document.getElementById("password-update-submit");
  const message = document.getElementById("password-update-message");
  button.disabled = true;
  try {
    const { error } = await supabaseClient.auth.updateUser({
      password: document.getElementById("new-account-password").value
    });
    if (error) throw error;
    document.getElementById("password-update-dialog").close();
    document.getElementById("password-update-form").reset();
    document.getElementById("account-message").textContent = "Contraseña actualizada.";
  } catch (error) {
    message.textContent = `No se pudo actualizar la contraseña: ${error.message || error}`;
  } finally {
    button.disabled = false;
  }
}

function toggleFavorite(type, targetId) {
  if (state.profile?.rol === "admin") {
    showView("view-profile");
    const message = document.getElementById("account-message");
    if (message) message.textContent = "La vista previa de cliente es de solo lectura.";
    return;
  }
  if (!state.user) {
    showView("view-profile");
    const message = document.getElementById("account-message");
    if (message) message.textContent = "Inicia sesión para guardar favoritos.";
    return;
  }

  const key = `${type}:${targetId}`;
  const isSaved = state.favorites.has(key);
  const request = isSaved
    ? supabaseClient.from("favoritos").delete().eq("user_id", state.user.id).eq("tipo", type).eq("target_id", targetId)
    : supabaseClient.from("favoritos").insert({ user_id: state.user.id, tipo: type, target_id: targetId });

  request.then(({ error }) => {
    if (error) {
      const message = document.getElementById("account-message");
      if (message) message.textContent = `No se pudo actualizar favoritos: ${error.message}`;
      return;
    }
    if (isSaved) state.favorites.delete(key);
    else state.favorites.add(key);
    renderCategories();
    renderRestaurants();
    renderRestaurantDetail();
    renderFavorites();
  });
}

function openMerchantPanel() {
  if (state.profile?.rol !== "restaurante" || !state.profile.restaurante_id) return;
  state.selectedRestaurantId = state.profile.restaurante_id;
  renderBusinessPanel();
  showView("view-panel");
}

function openAdminRestaurantPreview() {
  if (state.profile?.rol !== "admin") return;
  if (!RESTAURANTS.length) {
    showView("view-panel");
    document.getElementById("panel-message").textContent = "No hay restaurantes para previsualizar.";
    return;
  }
  state.selectedRestaurantId = RESTAURANTS[0].id;
  renderBusinessPanel();
  showView("view-panel");
}

// Barra inferior inteligente: al explorar se oculta y reaparece al necesitarla.
function setupBottomNavAutoHide() {
  const nav = document.getElementById("bottom-nav");
  if (!nav) return; // El panel independiente del restaurante no tiene esta barra.

  const revealButton = document.getElementById("bottom-nav-reveal");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const touchMode = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  let timer = null;
  let previousScrollY = window.scrollY;
  const quickMenuIsOpen = () => {
    const menu = document.getElementById("quick-actions");
    return Boolean(menu && !menu.hidden);
  };

  const show = () => {
    window.clearTimeout(timer);
    nav.classList.remove("is-hidden");
    revealButton?.setAttribute("aria-expanded", "true");
  };
  const hide = () => {
    // Nunca ocultar controles que estén siendo utilizados con el teclado,
    // ni el menú de atajos cuando esté desplegado.
    if (quickMenuIsOpen() || nav.contains(document.activeElement)) return;
    nav.classList.add("is-hidden");
    revealButton?.setAttribute("aria-expanded", "false");
  };
  const hideSoon = (delay = 450) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(hide, delay);
  };

  nav.classList.add("toque-nav-auto-hide");
  nav.addEventListener("pointerenter", show);
  nav.addEventListener("pointerleave", () => {
    if (finePointer) hideSoon();
  });
  nav.addEventListener("focusin", show);
  nav.addEventListener("focusout", () => hideSoon(650));

  // Tras tocar una opción de navegación, dejar libre la pantalla.
  // Los accesos con Tab conservan el foco y nunca desaparecen inesperadamente.
  nav.addEventListener("click", (event) => {
    if (event.detail <= 0 || !event.target.closest("button")) return;
    if (nav.contains(document.activeElement)) document.activeElement.blur();
    hideSoon(touchMode ? 750 : 500);
    if (touchMode) {
      // Al cambiar de vista el navegador puede reajustar el scroll y mostrar
      // la barra otra vez. Ocultarla después evita que tape el nuevo contenido.
      window.setTimeout(() => { if (!quickMenuIsOpen()) hideSoon(200); }, 650);
    }
  });

  revealButton?.addEventListener("click", () => {
    show();
    // Mantenemos el menú visible hasta que el usuario vuelva a navegar.
  });

  // Escritorio: acercar el cursor a los últimos 105 px de la pantalla
  // revela la barra sin requerir otro clic.
  if (finePointer) {
    document.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      if (event.clientY >= window.innerHeight - 105) {
        show();
      } else if (!nav.matches(":hover") && !quickMenuIsOpen()) {
        hideSoon();
      }
    }, { passive: true });
    hideSoon(2400); // breve presentación inicial para descubrir los botones
  } else if (touchMode) {
    // Si el catálogo es corto y no hay desplazamiento, liberar también la pantalla.
    hideSoon(3400);
  }

  // Celular: se oculta al bajar y vuelve al subir; el botón pequeño «Menú»
  // sirve para abrirlo sin desplazarse.
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const difference = y - previousScrollY;
    if (Math.abs(difference) < 7) return;
    previousScrollY = y;
    if (difference > 0 && y > 85) {
      window.clearTimeout(timer);
      hide();
    } else if (difference < 0 && touchMode) {
      show();
    }
  }, { passive: true });
}

function bindNavigation() {
  document.getElementById("customer-avatar-file")?.addEventListener("change", (event) => void uploadCustomerAvatar(event.currentTarget.files[0]));
  document.getElementById("customer-edit-panel")?.addEventListener("submit", saveCustomerProfile);
  document.getElementById("customer-password-form")?.addEventListener("submit", updateCustomerPassword);
  document.querySelectorAll("[data-customer-panel]").forEach(button => {
    button.addEventListener("click", () => showCustomerProfilePanel(button.dataset.customerPanel));
  });
  document.querySelectorAll("[data-close-profile-panel]").forEach(button => {
    button.addEventListener("click", () => document.querySelectorAll(".customer-profile-panel").forEach(panel => { panel.hidden = true; }));
  });
  document.querySelectorAll("[data-open-customer-orders]").forEach(button => {
    button.addEventListener("click", () => { showView("view-orders"); void renderOrders(); });
  });
  document.getElementById("btn-edit-profile")?.addEventListener("click", () => showCustomerProfilePanel("edit"));
  document.getElementById("btn-settings-edit-profile")?.addEventListener("click", () => showCustomerProfilePanel("edit"));
  document.getElementById("btn-resend-profile-verification")?.addEventListener("click", resendProfileVerification);
  document.getElementById("admin-banner-form")?.addEventListener("submit", saveAdminBanner);
  document.getElementById("btn-cancel-banner-edit")?.addEventListener("click", resetAdminBannerForm);
  document.getElementById("btn-resend-confirmation")?.addEventListener("click", resendConfirmationEmail);
  const quickActions = document.getElementById("quick-actions");
  const quickButton = document.getElementById("btn-quick-actions");
  const closeQuickActions = () => {
    if (quickActions) quickActions.hidden = true;
    quickButton?.setAttribute("aria-expanded", "false");
  };

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      closeQuickActions();
      const target = item.dataset.target;
      const view = { lobby: "view-lobby", favorites: "view-favorites", orders: "view-orders", profile: "view-profile" }[target];
      if (view) showView(view);
    });
  });

  quickButton?.addEventListener("click", () => {
    const isOpen = quickActions.hidden;
    quickActions.hidden = !isOpen;
    quickButton.setAttribute("aria-expanded", String(isOpen));
  });

  quickActions?.querySelectorAll("[data-quick-action]").forEach((button) => {
    button.addEventListener("click", () => {
      closeQuickActions();
      const action = button.dataset.quickAction;
      if (action === "search") {
        showView("view-lobby");
        document.getElementById("input-buscar")?.focus({ preventScroll: true });
      } else if (action === "cart") {
        openCart();
      } else if (action === "favorites") {
        showView("view-favorites");
      } else if (action === "orders") {
        showView("view-orders");
      } else if (action === "merchant") {
        openMerchantPanel();
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".bottom-nav")) closeQuickActions();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeQuickActions();
  });

  document.getElementById("back-to-lobby")?.addEventListener("click", () => showView("view-lobby"));
  // Los atajos del panel llevan a secciones reales. Abrimos Ajustes antes de desplazarnos.
  document.querySelectorAll("[data-open-merchant-settings]").forEach((button) => {
    button.addEventListener("click", () => {
      const settings = document.getElementById("panel-settings");
      if (!settings) return;
      settings.open = true;
      settings.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  document.getElementById("btn-carrito")?.addEventListener("click", openCart);
  document.getElementById("btn-location")?.addEventListener("click", openLocationDialog);
  document.getElementById("gps-location-btn")?.addEventListener("click", requestDeliveryGps);
  document.getElementById("gps-clear-btn")?.addEventListener("click", clearDeliveryGps);
  document.getElementById("location-form")?.addEventListener("submit", saveDeliveryLocation);
  document.getElementById("checkout-form")?.addEventListener("submit", prepareCheckout);
  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => document.getElementById(button.dataset.closeDialog)?.close());
  });
  document.getElementById("checkout-city")?.addEventListener("change", () => {
    state.selectedZoneIds = {};
    state.preparedOrders = [];
    clearCheckoutId();
    document.getElementById("checkout-message").textContent = "";
    renderPreparedOrders();
    document.getElementById("checkout-submit").disabled = false;
  });
  document.getElementById("checkout-address")?.addEventListener("input", () => {
    if (!state.preparedOrders.length) return;
    state.preparedOrders = [];
    clearCheckoutId();
    document.getElementById("checkout-message").textContent = "";
    renderPreparedOrders();
    document.getElementById("checkout-submit").disabled = false;
  });

  document.getElementById("btn-historial")?.addEventListener("click", () => showView("view-orders"));
  document.getElementById("orders-refresh")?.addEventListener("click", () => void renderOrders(false));
  document.querySelectorAll("[data-favorites-type]").forEach((button) => {
    button.addEventListener("click", () => {
      state.favoritesType = button.dataset.favoritesType;
      renderFavorites();
    });
  });

  document.getElementById("account-auth-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = event.submitter;
    if (button) button.disabled = true;
    authenticate(button?.dataset.authAction || "login")
      .catch((error) => {
        document.getElementById("account-message").textContent = `No se pudo completar la operación: ${error.message || error}`;
      })
      .finally(() => { if (button) button.disabled = false; });
  });
  document.getElementById("btn-signup-user")?.addEventListener("click", () => setAccountFormMode("signup"));
  document.getElementById("btn-signup-merchant")?.addEventListener("click", () => setAccountFormMode("signup-merchant"));
  document.getElementById("btn-back-login")?.addEventListener("click", () => setAccountFormMode("login"));
  document.getElementById("btn-reset-password")?.addEventListener("click", resetAccountPassword);
  document.getElementById("password-update-form")?.addEventListener("submit", saveNewPassword);
  const signOutPideya = async () => {
    await supabaseClient.auth.signOut();
    stopMerchantOrderMonitor();
    stopBuyerOrderRealtime();
    state.user = null;
    state.profile = null;
    state.favorites.clear();
    renderProfile();
    renderFavorites();
    renderOrders();
    renderCategories();
    renderRestaurants();
    setAccountFormMode("login");
    showView("view-profile");
  };
  document.getElementById("btn-signout-user")?.addEventListener("click", signOutPideya);
  document.getElementById("btn-signout-customer")?.addEventListener("click", signOutPideya);
  document.getElementById("btn-open-merchant-panel")?.addEventListener("click", openMerchantPanel);
  document.getElementById("btn-admin-preview-customer")?.addEventListener("click", () => {
    if (state.profile?.rol === "admin") showView("view-lobby");
  });
  document.getElementById("btn-admin-preview-restaurant")?.addEventListener("click", openAdminRestaurantPreview);
  document.getElementById("admin-preview-restaurant")?.addEventListener("change", () => {
    if (state.profile?.rol !== "admin") return;
    state.selectedRestaurantId = document.getElementById("admin-preview-restaurant").value;
    renderBusinessPanel();
  });
  document.querySelectorAll('.nav-item[data-target="orders"]').forEach((button) => {
    button.addEventListener("click", renderOrders);
  });

  document.getElementById("search-btn")?.addEventListener("click", renderRestaurants);
  document.getElementById("input-buscar")?.addEventListener("input", renderRestaurants);
}

// Resumen comercial privado: sólo la cuenta titular del restaurante puede consultarlo.
// No se interpretan los pedidos entregados como pagos cobrados.
let merchantStatsRequestSequence = 0;

async function loadMerchantStatistics(restaurantId = state.selectedRestaurantId) {
  const section = document.getElementById("merchant-analytics");
  const target = document.getElementById("merchant-analytics-content");
  const message = document.getElementById("merchant-analytics-status");
  if (!section || !target || !message) return;
  const canView = Boolean(supabaseClient && state.profile?.rol === "restaurante"
    && state.profile.restaurante_id === restaurantId);
  section.hidden = !canView;
  if (!canView) { merchantStatsRequestSequence++; return; }
  const requestId = ++merchantStatsRequestSequence;
  const period = document.getElementById("merchant-analytics-period")?.value || "30d";
  message.textContent = "Actualizando estadísticas...";
  const refresh = document.getElementById("merchant-analytics-refresh");
  if (refresh) refresh.disabled = true;
  try {
    const { data, error } = await supabaseClient.rpc("obtener_estadisticas_restaurante", {
      p_restaurante_id: restaurantId,
      p_periodo: period
    });
    if (error) throw error;
    if (requestId !== merchantStatsRequestSequence || state.profile?.restaurante_id !== restaurantId) return;
    const r = data?.resumen || {};
    const count = (value) => Math.max(0, Number(value) || 0);
    const top = Array.isArray(data?.productos) ? data.productos.slice(0, 5) : [];
    const hours = Array.isArray(data?.horas) ? data.horas.slice(0, 3) : [];
    const metric = (label, value, hint = "") => `
      <div class="analytics-metric"><span>${label}</span><strong>${value}</strong>${hint ? `<small>${hint}</small>` : ""}</div>`;
    target.innerHTML = `
      <div class="analytics-metrics">
        ${metric("Pedidos recibidos", count(r.pedidos_recibidos).toLocaleString("es-CO"))}
        ${metric("Entregados", count(r.entregados).toLocaleString("es-CO"))}
        ${metric("En curso", count(r.en_curso).toLocaleString("es-CO"))}
        ${metric("Cancelados", count(r.cancelados).toLocaleString("es-CO"))}
        ${metric("Valor de pedidos entregados", formatCurrency(count(r.valor_entregado)), "No significa dinero cobrado")}
        ${metric("Promedio por pedido entregado", formatCurrency(count(r.ticket_promedio)))}
      </div>
      <p class="analytics-cancellation">Tasa de cancelación: <strong>${count(r.tasa_cancelacion).toLocaleString("es-CO", { maximumFractionDigits: 1 })} %</strong></p>
      <div class="analytics-detail-grid">
        <section class="analytics-detail-card">
          <h4>Productos más solicitados</h4>
          <small>Unidades de pedidos entregados</small>
          ${top.length ? `<ol class="analytics-top-products">${top.map((item) => `
            <li><span>${escapeHtml(item.nombre)}</span><strong>${count(item.cantidad).toLocaleString("es-CO")}</strong></li>
          `).join("")}</ol>` : '<p class="analytics-empty">Aún no hay productos entregados en este periodo.</p>'}
        </section>
        <section class="analytics-detail-card">
          <h4>Horas con más pedidos</h4>
          <small>Hora de registro de pedidos entregados (Colombia)</small>
          ${hours.length ? `<ol class="analytics-top-products">${hours.map((item) => `
            <li><span>${String(Math.max(0, Math.min(23, Math.trunc(Number(item.hora) || 0)))).padStart(2, "0")}:00–${String((Math.max(0, Math.min(23, Math.trunc(Number(item.hora) || 0))) + 1) % 24).padStart(2, "0")}:00</span><strong>${count(item.pedidos).toLocaleString("es-CO")}</strong></li>
          `).join("")}</ol>` : '<p class="analytics-empty">Sin pedidos entregados en este periodo.</p>'}
        </section>
      </div>`;
    message.textContent = "Datos actualizados a las " + new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" }) + ".";
  } catch (error) {
    if (requestId !== merchantStatsRequestSequence) return;
    message.textContent = "No se pudieron consultar las estadísticas: " + (error.message || error);
    target.innerHTML = "";
  } finally {
    if (requestId === merchantStatsRequestSequence && refresh) refresh.disabled = false;
  }
}

async function renderBusinessPanel() {
  const restaurant = RESTAURANTS.find((item) => item.id === state.selectedRestaurantId);
  const panelProducts = document.getElementById("panel-products");
  const isAdminPreview = state.profile?.rol === "admin";
  if (!restaurant || !panelProducts || (!supabaseClient && !isAdminPreview)) return;
  renderRestaurantProfilePreview(restaurant);

  const setValue = (id, value) => {
    const field = document.getElementById(id);
    if (field) field.value = value ?? "";
  };
  const setChecked = (id, value) => {
    const field = document.getElementById(id);
    if (field) field.checked = Boolean(value);
  };
  const previewControls = document.getElementById("admin-preview-controls");
  if (previewControls) previewControls.hidden = !isAdminPreview;
  if (isAdminPreview) {
    const select = document.getElementById("admin-preview-restaurant");
    select.replaceChildren(...RESTAURANTS.map((item) => new Option(item.nombre, item.id)));
    select.value = restaurant.id;
  }

  let details = null;
  let detailsError = null;
  if (!isAdminPreview) {
    const result = await supabaseClient
      .from("restaurante_detalles")
      .select("pais,departamento,direccion,contacto")
      .eq("id_restaurante", restaurant.id)
      .maybeSingle();
    details = result.data;
    detailsError = result.error;
  }
  const panelMessage = document.getElementById("panel-message");
  if (isAdminPreview && panelMessage) {
    panelMessage.textContent = "Vista previa de solo lectura. Los datos privados y las acciones de escritura están ocultos.";
  } else if (detailsError && panelMessage) {
    panelMessage.textContent = `No se pudieron cargar los datos privados del comercio: ${detailsError.message}`;
  }
  document.getElementById("panel-store-name").textContent = restaurant.nombre;
  document.getElementById("metric-status").textContent = restaurant.abierto ? "Abierto" : "Cerrado";
  document.getElementById("metric-rating").textContent = Number(restaurant.votos) > 0
    ? Number(restaurant.rating || 0).toFixed(1) : "Sin votos";
  setValue("panel-name", restaurant.nombre);
  setValue("panel-category", restaurant.categoria);
  setValue("panel-whatsapp", restaurant.whatsapp);
  setValue("panel-apertura", restaurant.apertura);
  setValue("panel-cierre", restaurant.cierre);
  setWeeklyFields(restaurant);
  setValue("panel-costo", restaurant.costoEnvio);
  setValue("panel-zonas", zonesForRestaurant(restaurant.id).map((zone) => `${zone.nombre}|${zone.tarifa}`).join("\n"));
  setValue("panel-tiempo", restaurant.tiempo);
  setValue("panel-cobertura", restaurant.ciudad || restaurant.municipio);
  setValue("panel-pais", details?.pais || restaurant.pais);
  setValue("panel-departamento", details?.departamento || restaurant.departamento);
  setValue("panel-contacto", details?.contacto);
  setValue("panel-direccion", details?.direccion);
  setValue("panel-logo", restaurant.logo);
  setValue("panel-portada", restaurant.cover);
  document.getElementById("panel-logo-file").value = "";
  document.getElementById("panel-portada-file").value = "";
  showUploadPreview("panel-logo-file", "panel-logo", "panel-logo-preview");
  showUploadPreview("panel-portada-file", "panel-portada", "panel-portada-preview");
  setValue("panel-estado", restaurant.estado);
  setValue("panel-lat", restaurant.lat);
  setValue("panel-lng", restaurant.lng);
  setValue("panel-radio", restaurant.radioKm);
  setChecked("panel-envio-gratis", restaurant.envioGratis);

  await loadMerchantPaymentSettings(restaurant.id, isAdminPreview);
  const panelForm = document.getElementById("panel-form");
  panelForm.querySelectorAll("input,select,textarea").forEach((field) => {
    field.disabled = isAdminPreview;
  });
  document.querySelectorAll("[data-pause-minutes]").forEach((btn) => {btn.disabled = isAdminPreview;});
  panelForm.querySelector('[type="submit"]').hidden = isAdminPreview;
  document.getElementById("add-product-btn").hidden = isAdminPreview;

  if (isAdminPreview) {
    state.businessProducts = (MENU[restaurant.id] || []).map((product) => ({
      ...product,
      disponible: product.disponible !== false
    }));
  } else {
    const { data: products, error: productsError } = await supabaseClient
      .from("menus")
      .select("id_producto,id_restaurante,Nombre,Descripcion,Precio,Precio_Anterior,Categoria_Plato,Foto_URL,Disponible,Es_Top,Personalizacion")
      .eq("id_restaurante", restaurant.id)
      .order("Nombre");
    if (productsError) {
      document.getElementById("panel-message").textContent = `No se pudieron cargar los productos: ${productsError.message}`;
      return;
    }
    state.businessProducts = products.map((row) => ({
      id: row.id_producto,
      nombre: row.Nombre,
      desc: row.Descripcion || "",
      precio: parsePrice(row.Precio),
      precioAnterior: parsePrice(row.Precio_Anterior),
      categoria: row.Categoria_Plato || "",
      img: row.Foto_URL || "",
      disponible: row.Disponible === true,
      esTop: row.Es_Top === true,
      personalizacion: row.Personalizacion || {}
    }));
  }
  panelProducts.innerHTML = state.businessProducts.map((product) => `
    <div class="product-row">
      <div class="details">
        <img src="${escapeHtml(product.img || restaurant.cover)}" alt="${escapeHtml(product.nombre)}" />
        <div>
          <div class="name">${escapeHtml(product.nombre)}</div>
          <div class="price">${formatCurrency(product.precio)} · ${product.disponible ? "Disponible" : "Agotado"}</div>
        </div>
      </div>
      ${isAdminPreview ? "" : `<div class="product-actions">
        <button class="small-btn" type="button" data-product-action="toggle" data-product-id="${escapeHtml(product.id)}">${product.disponible ? "Desactivar" : "Activar"}</button>
        <button class="small-btn" type="button" data-product-action="edit" data-product-id="${escapeHtml(product.id)}" aria-label="Editar ${escapeHtml(product.nombre)}">Editar</button>
        <button class="small-btn" type="button" data-product-action="delete" data-product-id="${escapeHtml(product.id)}" aria-label="Eliminar ${escapeHtml(product.nombre)}">Eliminar</button>
      </div>`}
    </div>
  `).join("") || '<p class="empty-state">Todavía no tienes productos.</p>';
  panelProducts.querySelectorAll("[data-product-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = state.businessProducts.find((item) => item.id === button.dataset.productId);
      if (!product) return;
      if (button.dataset.productAction === "edit") openProductForm(product);
      if (button.dataset.productAction === "toggle") toggleBusinessProduct(product);
      if (button.dataset.productAction === "delete") deleteBusinessProduct(product);
    });
  });

  await loadMerchantPromos(restaurant.id, isAdminPreview);
  await loadMerchantStatistics(restaurant.id);
  const ordersBox = document.getElementById("merchant-orders");
  if (isAdminPreview) {
    stopMerchantOrderMonitor();
    document.getElementById("metric-orders").textContent = "—";
    const pendingBadge = document.getElementById("merchant-pending-badge");
    if (pendingBadge) pendingBadge.hidden = true;
    if (ordersBox) ordersBox.innerHTML = '<p class="empty-state">Los pedidos reales se muestran solo en el panel de la cuenta propietaria.</p>';
  } else if (ordersBox && supabaseClient) {
    await startMerchantOrderMonitor(restaurant.id);
  } else if (ordersBox) {
    ordersBox.innerHTML = '<p class="empty-state">No hay pedidos en esta vista previa.</p>';
  }
}


// Promociones administradas por el restaurante propietario; las políticas RLS
// de Supabase protegen la tabla y la vista admin sigue siendo sólo lectura.
function promoDateForInput(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return "";
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0,16);
}

function adjustPromoValueInput() {
  const kind = document.getElementById("promo-type")?.value || "PORCENTAJE";
  const field = document.getElementById("promo-value");
  const label = document.getElementById("promo-value-label");
  if (!field || !label) return;
  label.textContent = kind === "PORCENTAJE" ? "Descuento (%)" : kind === "MONTO" ? "Descuento ($)" : "Sin costo de domicilio";
  field.disabled = kind === "ENVIO_GRATIS";
  field.required = kind !== "ENVIO_GRATIS";
  field.max = kind === "PORCENTAJE" ? "100" : "1000000";
  field.min = kind === "PORCENTAJE" ? "1" : "0";
  if (kind === "ENVIO_GRATIS") field.value = "0";
  else if (!Number(field.value)) field.value = kind === "PORCENTAJE" ? "10" : "5000";
}

function resetPromoForm(promo = null) {
  const form = document.getElementById("promo-form");
  if (!form) return;
  form.reset();
  const val = (id, value) => { const field=document.getElementById(id); if (field) field.value = value ?? ""; };
  val("promo-id",promo?.id || "");
  val("promo-code",promo?.codigo || "");
  val("promo-name",promo?.nombre || "");
  val("promo-type",promo?.tipo || "PORCENTAJE");
  val("promo-value",promo?.valor ?? 10);
  val("promo-min",promo?.compra_minima ?? 0);
  val("promo-start",promoDateForInput(promo?.fecha_inicio));
  val("promo-end",promoDateForInput(promo?.fecha_fin));
  val("promo-limit",promo?.limite_usos ?? "");
  val("promo-user-limit",promo?.limite_por_cliente ?? "");
  document.getElementById("promo-enabled").checked = promo?.activo ?? true;
  const info = document.getElementById("promo-form-status");
  if (info) info.textContent = "";
  adjustPromoValueInput();
}

async function loadMerchantPromos(restaurantId, isAdminPreview = false) {
  const section = document.getElementById("merchant-promotions");
  const list = document.getElementById("merchant-promo-list");
  if (!section || !list) return;
  section.hidden = false;
  const form = document.getElementById("promo-form");
  if (form) form.hidden = isAdminPreview;
  list.textContent = "Consultando promociones...";
  const { data, error } = await supabaseClient.from("promociones")
    .select("id,codigo,nombre,tipo,valor,compra_minima,fecha_inicio,fecha_fin,limite_usos,limite_por_cliente,activo")
    .eq("id_restaurante",restaurantId).order("created_at",{ascending:false});
  if (error) { list.textContent = `No se pudieron cargar los cupones: ${error.message}`; return; }
  if (state.selectedRestaurantId !== restaurantId) return;
  state.merchantPromos = data || [];
  list.innerHTML = data?.length ? data.map((promo) => `
    <article class="merchant-promo-card">
      <div><strong>${escapeHtml(promo.codigo)}</strong> · ${escapeHtml(promo.nombre)}</div>
      <small>${promo.tipo === "PORCENTAJE" ? `${promo.valor}%` : promo.tipo === "MONTO" ? formatCurrency(promo.valor) : "Domicilio gratis"}
        · Mínimo ${formatCurrency(promo.compra_minima)} · ${promo.activo ? "Activo" : "Inactivo"}</small>
      ${isAdminPreview ? '<small>Supervisión del administrador: solo lectura.</small>' : `<div class="promo-card-actions">
        <button class="secondary-btn" type="button" data-promo-edit="${promo.id}">Editar</button>
        <button class="secondary-btn" type="button" data-promo-toggle="${promo.id}">${promo.activo ? "Desactivar" : "Activar"}</button>
      </div>`}
    </article>`).join("") : '<p class="empty-state">Aún no tienes cupones. Crea uno desde el formulario.</p>';
  list.querySelectorAll("[data-promo-edit]").forEach((button) => button.addEventListener("click", () => {
    const promo = state.merchantPromos.find((item)=>String(item.id)===button.dataset.promoEdit);
    if (promo) { resetPromoForm(promo); section.scrollIntoView({behavior:"smooth",block:"start"}); }
  }));
  list.querySelectorAll("[data-promo-toggle]").forEach((button) => button.addEventListener("click", async () => {
    const promo = state.merchantPromos.find((item)=>String(item.id)===button.dataset.promoToggle);
    if (!promo) return;
    button.disabled = true;
    const { error: updateError } = await supabaseClient.from("promociones").update({activo:!promo.activo})
      .eq("id",promo.id).eq("id_restaurante",restaurantId);
    if (updateError) { window.alert(`No se pudo actualizar la promoción: ${updateError.message}`); button.disabled = false; }
    else await loadMerchantPromos(restaurantId);
  }));
}

async function saveMerchantPromo(event) {
  event.preventDefault();
  const button = document.getElementById("promo-save");
  const info = document.getElementById("promo-form-status");
  if (!supabaseClient || state.profile?.rol !== "restaurante" ||
      state.profile.restaurante_id !== state.selectedRestaurantId) return;
  const id = document.getElementById("promo-id").value;
  const code = document.getElementById("promo-code").value.trim().toUpperCase();
  const type = document.getElementById("promo-type").value;
  const value = type === "ENVIO_GRATIS" ? 0 : Number(document.getElementById("promo-value").value);
  const parseDate = (id) => {
    const text = document.getElementById(id).value;
    if (!text) return null;
    const date = new Date(text);
    if (Number.isNaN(date.valueOf())) throw new Error("Fecha de la promoción no válida");
    return date.toISOString();
  };
  button.disabled = true;
  try {
    if (!/^[A-Z0-9_-]{4,24}$/.test(code)) throw new Error("Utiliza un código de 4 a 24 letras, números, guion o guion bajo.");
    if (!Number.isInteger(value) || (type === "PORCENTAJE" && (value<1 || value>100)) || (type === "MONTO" && (value<1 || value>1000000)))
      throw new Error("El descuento no es válido");
    const toOptional = (id) => { const str=document.getElementById(id).value; return str === "" ? null : Number(str); };
    const start = parseDate("promo-start"), end = parseDate("promo-end");
    if (start && end && new Date(end) <= new Date(start)) throw new Error("El vencimiento debe ser posterior al inicio.");
    const payload = {
      codigo:code, nombre:document.getElementById("promo-name").value.trim(),
      tipo:type, valor:value, compra_minima:Number(document.getElementById("promo-min").value),
      fecha_inicio:start,fecha_fin:end,limite_usos:toOptional("promo-limit"),
      limite_por_cliente:toOptional("promo-user-limit"),activo:document.getElementById("promo-enabled").checked
    };
    info.textContent = "Guardando cupón...";
    const query = id ? supabaseClient.from("promociones").update(payload).eq("id",id).eq("id_restaurante",state.selectedRestaurantId)
      : supabaseClient.from("promociones").insert({...payload,id_restaurante:state.selectedRestaurantId});
    const { data,error } = await query.select("id").single();
    if (error) throw error;
    if (!data?.id) throw new Error("La promoción no se guardó. Comprueba permisos.");
    resetPromoForm();
    info.textContent = "Promoción guardada correctamente.";
    await loadMerchantPromos(state.selectedRestaurantId);
  } catch (error) {
    info.textContent = `No se pudo guardar: ${error.message || error}`;
  } finally { button.disabled = false; }
}

// Avisos en tiempo real; la consulta periódica de 60 s sirve de respaldo.
// Solo se consultan los pedidos del restaurante de la sesión; RLS se aplica en Supabase.
const merchantOrderMonitor = {
  restaurantId: null,
  intervalId: null,
  knownIds: null,
  signature: "",
  fetching: false,
  realtimeChannel: null,
  realtimeConnected: false,
  realtimeTimer: null
};
const merchantSound = { enabled: false, context: null };

function stopMerchantOrderMonitor() {
  if (merchantOrderMonitor.realtimeTimer !== null) clearTimeout(merchantOrderMonitor.realtimeTimer);
  const channel = merchantOrderMonitor.realtimeChannel;
  merchantOrderMonitor.realtimeChannel = null;
  merchantOrderMonitor.realtimeTimer = null;
  merchantOrderMonitor.realtimeConnected = false;
  if (channel && supabaseClient) void supabaseClient.removeChannel(channel);
  if (merchantOrderMonitor.intervalId !== null) {
    clearInterval(merchantOrderMonitor.intervalId);
  }
  merchantOrderMonitor.restaurantId = null;
  merchantOrderMonitor.intervalId = null;
  merchantOrderMonitor.knownIds = null;
  merchantOrderMonitor.signature = "";
  merchantOrderMonitor.fetching = false;
  document.getElementById("merchant-order-alert")?.setAttribute("hidden", "");
}

function showNewMerchantOrders(newOrders) {
  const alertBox = document.getElementById("merchant-order-alert");
  const alertTitle = document.getElementById("merchant-order-alert-title");
  const alertDetails = document.getElementById("merchant-order-alert-details");
  if (!alertBox || !alertTitle || !alertDetails || !newOrders.length) return;
  alertTitle.textContent = newOrders.length === 1 ? "¡Nuevo pedido recibido!" : `¡${newOrders.length} pedidos nuevos!`;
  const latest = newOrders[0];
  const items = Array.isArray(latest.items) ? latest.items : [];
  const summary = items.map((item) => `${Number(item.cantidad) || 1} × ${String(item.nombre || "Producto")}`).join(", ");
  alertDetails.textContent = newOrders.length === 1
    ? `Pedido #${latest.id.slice(0, 8)} · ${summary.slice(0, 130) || "Revisa los detalles abajo"}`
    : "Revisa la lista de pedidos para confirmar los nuevos encargos.";
  alertBox.hidden = false;
  playMerchantOrderSound();
}

function playMerchantOrderSound() {
  if (!merchantSound.enabled || !merchantSound.context) return;
  try {
    const ctx = merchantSound.context;
    if (ctx.state !== "running") return;
    for (const [offset, tone] of [[0, 740], [0.16, 880]]) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = tone;
      const t = ctx.currentTime + offset;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.085, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.13);
    }
  } catch (error) {
    console.warn("No se pudo reproducir el aviso de pedido:", error.message || error);
  }
}

async function toggleMerchantOrderSound() {
  const button = document.getElementById("merchant-order-sound");
  if (!button) return;
  if (!merchantSound.enabled) {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) {
      button.textContent = "Sonido no disponible";
      button.disabled = true;
      return;
    }
    try {
      if (!merchantSound.context) merchantSound.context = new AudioCtor();
      await merchantSound.context.resume(); // Debe llamarse tras el clic del comerciante.
      merchantSound.enabled = true;
    } catch (error) {
      window.alert("Brave bloqueó el sonido. Comprueba los permisos de audio para esta página.");
    }
  } else {
    merchantSound.enabled = false;
  }
  button.textContent = merchantSound.enabled ? "Silenciar avisos" : "Activar sonido";
  button.setAttribute("aria-pressed", merchantSound.enabled ? "true" : "false");
}

function queueMerchantRealtimeRefresh() {
  if (merchantOrderMonitor.realtimeTimer !== null) clearTimeout(merchantOrderMonitor.realtimeTimer);
  merchantOrderMonitor.realtimeTimer = setTimeout(() => {
    merchantOrderMonitor.realtimeTimer = null;
    if (merchantOrderMonitor.restaurantId) void refreshMerchantOrderMonitor();
  }, 250);
}

function subscribeMerchantOrderRealtime(restaurantId) {
  if (!supabaseClient || merchantOrderMonitor.restaurantId !== restaurantId) return;
  if (merchantOrderMonitor.realtimeChannel) return;
  const channel = supabaseClient.channel(`pideya-comercio-${restaurantId}`)
    .on("postgres_changes", {
      event: "INSERT", schema: "public", table: "pedidos", filter: `id_restaurante=eq.${restaurantId}`
    }, queueMerchantRealtimeRefresh)
    .on("postgres_changes", {
      event: "UPDATE", schema: "public", table: "pedidos", filter: `id_restaurante=eq.${restaurantId}`
    }, queueMerchantRealtimeRefresh);
  merchantOrderMonitor.realtimeChannel = channel;
  channel.subscribe((status) => {
    if (merchantOrderMonitor.realtimeChannel !== channel) return;
    merchantOrderMonitor.realtimeConnected = status === "SUBSCRIBED";
    const sync = document.getElementById("merchant-orders-sync");
    if (sync && !merchantOrderMonitor.fetching) sync.textContent = merchantOrderMonitor.realtimeConnected
      ? "Conectado en tiempo real · Respaldo cada 60 s"
      : "Sin conexión en tiempo real · Respaldo cada 60 s";
    if (status === "SUBSCRIBED") queueMerchantRealtimeRefresh();
  });
}

async function refreshMerchantOrderMonitor(forceRender = false) {
  const restaurantId = merchantOrderMonitor.restaurantId;
  if (merchantOrderMonitor.fetching || !restaurantId || !supabaseClient) return;
  if (state.profile?.rol !== "restaurante" || state.profile.restaurante_id !== restaurantId) {
    stopMerchantOrderMonitor();
    return;
  }
  const box = document.getElementById("merchant-orders");
  const message = document.getElementById("merchant-orders-sync");
  if (!box) return;
  merchantOrderMonitor.fetching = true;
  try {
    const [{ data, count, error }, { count: pendingCount, error: pendingError }] = await Promise.all([
      supabaseClient.from("pedidos")
        .select("id,estado,items,subtotal,envio,descuento_promocion,promocion_codigo,total,direccion,ciudad,zona_entrega_nombre,metodo_pago,efectivo_con,cambio_requerido,created_at", { count: "exact" })
        .eq("id_restaurante", restaurantId)
        .order("created_at", { ascending: false })
        .limit(30),
      supabaseClient.from("pedidos")
        .select("id", { count: "exact", head: true })
        .eq("id_restaurante", restaurantId)
        .eq("estado", "PENDIENTE")
    ]);
    if (merchantOrderMonitor.restaurantId !== restaurantId || state.profile?.restaurante_id !== restaurantId) return;
    if (error) throw error;
    if (pendingError) throw pendingError;
    const orders = data || [];
    const incomingIds = new Set(orders.map((order) => order.id));
    if (merchantOrderMonitor.knownIds !== null) {
      const justArrived = orders.filter((order) => !merchantOrderMonitor.knownIds.has(order.id));
      showNewMerchantOrders(justArrived);
    }
    merchantOrderMonitor.knownIds = incomingIds;
    const signature = JSON.stringify(orders.map((order) => [order.id, order.estado, order.metodo_pago, order.efectivo_con, order.cambio_requerido, order.created_at]));
    if (forceRender || signature !== merchantOrderMonitor.signature) {
      renderMerchantOrders(box, restaurantId, orders);
      merchantOrderMonitor.signature = signature;
      if (document.getElementById("merchant-analytics")?.open) void loadMerchantStatistics(restaurantId);
    }
    const pendingBadge = document.getElementById("merchant-pending-badge");
    if (pendingBadge) {
      const pending = pendingCount ?? 0;
      pendingBadge.textContent = `${pending} ${pending === 1 ? "pendiente" : "pendientes"}`;
      pendingBadge.hidden = false;
    }
    const metric = document.getElementById("metric-orders");
    if (metric) metric.textContent = String(count ?? orders.length);
    if (message) message.textContent = merchantOrderMonitor.realtimeConnected
      ? "Conectado en tiempo real · Respaldo cada 60 s"
      : "Respaldo automático cada 60 s · Sin conexión instantánea";
  } catch (error) {
    console.warn("No se pudieron actualizar las notificaciones de pedidos:", error.message || error);
    if (message) message.textContent = "No se pudo actualizar. Comprueba tu conexión y pulsa Actualizar.";
  } finally {
    if (merchantOrderMonitor.restaurantId === restaurantId) merchantOrderMonitor.fetching = false;
  }
}

async function startMerchantOrderMonitor(restaurantId) {
  if (!restaurantId || state.profile?.rol !== "restaurante" || state.profile.restaurante_id !== restaurantId) {
    stopMerchantOrderMonitor();
    return;
  }
  if (merchantOrderMonitor.restaurantId !== restaurantId) {
    stopMerchantOrderMonitor();
    merchantOrderMonitor.restaurantId = restaurantId;
  }
  await refreshMerchantOrderMonitor(true);
  subscribeMerchantOrderRealtime(restaurantId);
  if (!merchantOrderMonitor.intervalId && merchantOrderMonitor.restaurantId === restaurantId) {
    merchantOrderMonitor.intervalId = setInterval(() => {
      const view = document.getElementById("view-panel");
      if (!document.hidden && view?.classList.contains("active")) {
        refreshMerchantOrderMonitor();
      }
    }, 60000);
  }
}

function renderMerchantOrders(box, restaurantId, data) {
  if (!data.length) {
    box.innerHTML = '<p class="empty-state">Aún no has recibido pedidos.</p>';
    return;
  }
  box.innerHTML = data.map((order) => {
    const next = ORDER_NEXT_STATES[order.estado] || [];
    const terminal = next.length === 0;
    const statusClass = order.estado === "ENTREGADO" ? "delivered" : order.estado === "CANCELADO" ? "canceled" : "active";
    return `
    <article class="order-card merchant-tracking-card">
      <div class="order-card-heading">
        <strong>Pedido #${escapeHtml(order.id.slice(0, 8))}</strong>
        <span class="order-status-pill ${statusClass}">${escapeHtml(ORDER_LABELS[order.estado] || order.estado)}</span>
      </div>
      <p>${escapeHtml(new Date(order.created_at).toLocaleString("es-CO"))} · ${escapeHtml(order.ciudad)}</p>
      <p>${escapeHtml(order.direccion)}</p>
      ${order.zona_entrega_nombre ? `<p>Sector de entrega: ${escapeHtml(order.zona_entrega_nombre)}</p>` : ""}
      <div class="order-custom-items">${(Array.isArray(order.items) ? order.items : []).map((item) => `<p>${Number(item.cantidad)} × ${escapeHtml(item.nombre)}
        ${orderItemDetails(item).map((line) => `<small>${escapeHtml(line)}</small>`).join("")}</p>`).join("")}</div>
      ${order.promocion_codigo ? `<p>Cupón ${escapeHtml(order.promocion_codigo)}: −${formatCurrency(order.descuento_promocion || 0)}</p>` : ""}
      <strong>Total: ${formatCurrency(order.total)}</strong>
      <div class="order-payment-detail">${paymentLinesForOrder(order)}</div>
      ${terminal
        ? `<p class="merchant-order-done">${order.estado === "ENTREGADO" ? "Este pedido se completó." : "Este pedido fue cancelado."}</p>`
        : `<label class="field-group">
            <span>Siguiente paso</span>
            <select data-order-status="${escapeHtml(order.id)}">
              ${next.map((status) => `<option value="${status}">${escapeHtml(ORDER_LABELS[status] || status)}</option>`).join("")}
            </select>
          </label>
          <button class="secondary-btn" type="button" data-save-order-status="${escapeHtml(order.id)}">Confirmar cambio de estado</button>`}
    </article>`;
  }).join("");
  box.querySelectorAll("[data-save-order-status]").forEach((button) => {
    button.addEventListener("click", async () => {
      const orderId = button.dataset.saveOrderStatus;
      const existing = data.find((order) => order.id === orderId);
      const status = box.querySelector(`[data-order-status="${CSS.escape(orderId)}"]`)?.value;
      if (!existing || !(ORDER_NEXT_STATES[existing.estado] || []).includes(status)) return;
      button.disabled = true;
      try {
        const { data: updated, error: updateError } = await supabaseClient
          .from("pedidos")
          .update({ estado: status })
          .eq("id", orderId)
          .eq("id_restaurante", restaurantId)
          .eq("estado", existing.estado)
          .select("id")
          .maybeSingle();
        if (updateError) throw updateError;
        if (!updated) throw new Error("El pedido cambió en otra sesión. Actualiza el panel antes de intentarlo de nuevo.");
        await refreshMerchantOrderMonitor(true);
        await loadPublicOrderCounts();
        renderRestaurantDetail();
      } catch (error) {
        window.alert(`No se pudo actualizar el pedido: ${error.message || error}`);
        button.disabled = false;
      }
    });
  });
}

function openProductForm(product = null) {
  const form = document.getElementById("product-form");
  form.reset();
  document.getElementById("product-message").textContent = "";
  document.getElementById("product-dialog-title").textContent = product ? "Editar producto" : "Nuevo producto";
  document.getElementById("product-id").value = product?.id || "";
  document.getElementById("product-name").value = product?.nombre || "";
  document.getElementById("product-description").value = product?.desc || "";
  document.getElementById("product-price").value = product?.precio || "";
  document.getElementById("product-previous-price").value = product?.precioAnterior || "";
  document.getElementById("product-category").value = product?.categoria || "";
  const options = productCustomization(product);
  document.getElementById("product-sizes").value = options.tamanos.map((item) => `${item.nombre}|${item.precio}`).join("\n");
  document.getElementById("product-extras").value = options.extras.map((item) => `${item.nombre}|${item.precio}`).join("\n");
  document.getElementById("product-ingredients").value = options.ingredientes.join(", ");
  document.getElementById("product-image").value = product?.img || "";
  showUploadPreview("product-image-file", "product-image", "product-image-preview");
  document.getElementById("product-available").checked = product ? product.disponible : true;
  document.getElementById("product-dialog").showModal();
}

async function saveBusinessProduct(event) {
  event.preventDefault();
  const button = document.getElementById("product-save");
  const message = document.getElementById("product-message");
  const name = document.getElementById("product-name").value.trim();
  const price = Number(document.getElementById("product-price").value);
  const previous = Number(document.getElementById("product-previous-price").value || 0);
  let image = document.getElementById("product-image").value.trim();
  const imageFile = document.getElementById("product-image-file").files[0];
  let personalization;
  try {
    validateRestaurantImage(imageFile);
    personalization = {
      tamanos: parseProductOptionLines(document.getElementById("product-sizes").value, "Tamaños"),
      extras: parseProductOptionLines(document.getElementById("product-extras").value, "Extras"),
      ingredientes: parseProductIngredients(document.getElementById("product-ingredients").value)
    };
  } catch (error) {
    message.textContent = error.message;
    return;
  }
  if (previous && previous < price) {
    message.textContent = "El precio normal no puede ser menor al precio de oferta.";
    return;
  }
  if (image && !/^https:\/\/[^\s<>"']+$/i.test(image)) {
    message.textContent = "La imagen debe ser una URL HTTPS válida.";
    return;
  }
  button.disabled = true;
  const newImagePaths = [];
  let productSaved = false;
  try {
    if (imageFile) {
      message.textContent = "Subiendo fotografía...";
      const uploaded = await uploadRestaurantImage(imageFile, "productos");
      image = uploaded.url;
      newImagePaths.push(uploaded.path);
    }
    message.textContent = "Guardando producto...";
    const productId = document.getElementById("product-id").value;
    const values = {
      Nombre: name,
      Descripcion: document.getElementById("product-description").value.trim(),
      Precio: price,
      Precio_Anterior: previous || null,
      Categoria_Plato: document.getElementById("product-category").value.trim(),
      Personalizacion: personalization,
      Foto_URL: image,
      Disponible: document.getElementById("product-available").checked
    };
    const result = productId
      ? await supabaseClient.from("menus").update(values).eq("id_producto", productId).eq("id_restaurante", state.selectedRestaurantId)
      : await supabaseClient.from("menus").insert({
        ...values,
        id_producto: `PROD-${crypto.randomUUID()}`,
        id_restaurante: state.selectedRestaurantId,
        Es_Top: false
      });
    if (result.error) throw result.error;
    productSaved = true;
    document.getElementById("product-dialog").close();
    await loadCatalogFromSupabase();
    renderCategories();
    renderRestaurants();
    renderRestaurantDetail();
    await renderBusinessPanel();
  } catch (error) {
    if (!productSaved) await cleanupFailedImageUploads(newImagePaths);
    message.textContent = `No se pudo guardar el producto: ${error.message || error}`;
  } finally {
    button.disabled = false;
  }
}

async function toggleBusinessProduct(product) {
  const { error } = await supabaseClient
    .from("menus")
    .update({ Disponible: !product.disponible })
    .eq("id_producto", product.id)
    .eq("id_restaurante", state.selectedRestaurantId);
  if (error) {
    window.alert(`No se pudo cambiar la disponibilidad: ${error.message}`);
    return;
  }
  await loadCatalogFromSupabase();
  await renderBusinessPanel();
  renderRestaurantDetail();
}

async function deleteBusinessProduct(product) {
  if (!window.confirm(`¿Eliminar ${product.nombre}?`)) return;
  const { error } = await supabaseClient
    .from("menus")
    .delete()
    .eq("id_producto", product.id)
    .eq("id_restaurante", state.selectedRestaurantId);
  if (error) {
    window.alert(`No se pudo eliminar el producto: ${error.message}`);
    return;
  }
  await loadCatalogFromSupabase();
  await renderBusinessPanel();
  renderRestaurantDetail();
}

function bindBusinessPanel() {
  document.getElementById("merchant-analytics-period")?.addEventListener("change", () => {
    if (state.profile?.rol === "restaurante") void loadMerchantStatistics();
  });
  document.getElementById("merchant-analytics-refresh")?.addEventListener("click", () => {
    if (state.profile?.rol === "restaurante") void loadMerchantStatistics();
  });
  document.getElementById("panel-weekly-enabled")?.addEventListener("change", updateWeeklyInputsDisabled);
  document.querySelectorAll("[data-day-enabled]").forEach((el) => el.addEventListener("change", updateWeeklyInputsDisabled));
  document.querySelectorAll("[data-pause-minutes]").forEach((button) => button.addEventListener("click", async () => {
    if (state.profile?.rol !== "restaurante") return;
    button.disabled = true;
    const status = document.getElementById("panel-pause-status");
    if (status) status.textContent = "Actualizando pausa...";
    const {error} = await supabaseClient.rpc("pausar_restaurante", {
      p_restaurante_id: state.selectedRestaurantId, p_minutos: Number(button.dataset.pauseMinutes)
    });
    if (error) {
      if (status) status.textContent = `No se pudo actualizar la pausa: ${error.message}`;
    } else {
      await loadCatalogFromSupabase();
      renderRestaurants();
      renderRestaurantDetail();
      renderCart();
      await renderBusinessPanel();
    }
    button.disabled = false;
  }));
  [
    ["panel-logo-file", "panel-logo", "panel-logo-preview"],
    ["panel-portada-file", "panel-portada", "panel-portada-preview"],
    ["product-image-file", "product-image", "product-image-preview"]
  ].forEach(([fileId, urlId, previewId]) => {
    document.getElementById(fileId)?.addEventListener("change", () => showUploadPreview(fileId, urlId, previewId));
    document.getElementById(urlId)?.addEventListener("input", () => showUploadPreview(fileId, urlId, previewId));
  });
  document.getElementById("btn-logout-panel")?.addEventListener("click", () => {
    if (document.body.dataset.page === "panel") {
      window.location.href = "./index.html#profile";
    } else {
      showView("view-profile");
    }
  });

  document.getElementById("panel-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = document.getElementById("panel-message");
    if (state.profile?.rol === "admin") {
      message.textContent = "La vista previa de restaurante es de solo lectura.";
      return;
    }
    const button = form.querySelector('[type="submit"]');
    const digits = document.getElementById("panel-whatsapp").value.replace(/\D/g, "");
    const rawLat = document.getElementById("panel-lat").value;
    const rawLng = document.getElementById("panel-lng").value;
    const rawRadius = document.getElementById("panel-radio").value;
    const coverageSupplied = [rawLat, rawLng, rawRadius].some(Boolean);
    const opening = document.getElementById("panel-apertura").value;
    const closing = document.getElementById("panel-cierre").value;
    let logo = document.getElementById("panel-logo").value.trim();
    let cover = document.getElementById("panel-portada").value.trim();
    const logoFile = document.getElementById("panel-logo-file").files[0];
    const coverFile = document.getElementById("panel-portada-file").files[0];
    let configuredZones;
    try {
      configuredZones = parseDeliveryZoneLines(document.getElementById("panel-zonas").value);
    } catch (error) {
      message.textContent = error.message;
      return;
    }
    let configuredWeekly;
    try {
      configuredWeekly = readWeeklyFields();
    } catch (error) {
      message.textContent = error.message;
      return;
    }
    try {
      validateRestaurantImage(logoFile);
      validateRestaurantImage(coverFile);
    } catch (error) {
      message.textContent = error.message;
      return;
    }
    if (digits.length < 10 || digits.length > 15) {
      message.textContent = "Incluye un número de WhatsApp válido con código de país.";
      return;
    }
    if (!opening || !closing || opening === closing) {
      message.textContent = "Indica horas de apertura y cierre válidas y diferentes.";
      return;
    }
    if ((logo && !/^https:\/\/[^\s<>"']+$/i.test(logo)) || (cover && !/^https:\/\/[^\s<>"']+$/i.test(cover))) {
      message.textContent = "El logo y la portada deben usar URLs HTTPS válidas.";
      return;
    }
    if (coverageSupplied && (!rawLat || !rawLng || !rawRadius
      || Math.abs(Number(rawLat)) > 90 || Math.abs(Number(rawLng)) > 180
      || Number(rawRadius) < 0.1 || Number(rawRadius) > 200)) {
      message.textContent = "Completa coordenadas válidas y un radio entre 0,1 y 200 km, o deja esos campos vacíos.";
      return;
    }
    button.disabled = true;
    const newImagePaths = [];
    let publicDataSaved = false;
    message.textContent = "Guardando configuración...";
    try {
      if (logoFile) {
        message.textContent = "Subiendo logo...";
        const uploaded = await uploadRestaurantImage(logoFile, "logos");
        logo = uploaded.url;
        newImagePaths.push(uploaded.path);
      }
      if (coverFile) {
        message.textContent = "Subiendo portada...";
        const uploaded = await uploadRestaurantImage(coverFile, "portadas");
        cover = uploaded.url;
        newImagePaths.push(uploaded.path);
      }
      message.textContent = "Guardando configuración...";
      const { error } = await supabaseClient.from("restaurantes").update({
        Nombre: document.getElementById("panel-name").value.trim(),
        Categoria: document.getElementById("panel-category").value.trim(),
        WhatsApp: digits,
        Horario_Apertura: opening,
        Horario_Cierre: closing,
        Estado_Manual: document.getElementById("panel-estado").value,
        Costo_Envio: Number(document.getElementById("panel-costo").value || 0),
        Tiempo_Entrega: document.getElementById("panel-tiempo").value.trim(),
        Envio_Gratis: document.getElementById("panel-envio-gratis").checked,
        Municipio: document.getElementById("panel-cobertura").value.trim(),
        Ciudad: document.getElementById("panel-cobertura").value.trim(),
        Logo_URL: logo,
        Portada_URL: cover,
        Latitud: coverageSupplied ? Number(rawLat) : null,
        Longitud: coverageSupplied ? Number(rawLng) : null,
        Radio_Entrega_Km: coverageSupplied ? Number(rawRadius) : null
      }).eq("id_restaurante", state.selectedRestaurantId);
      if (error) throw error;
      publicDataSaved = true;
      const { error: detailsError } = await supabaseClient.rpc("actualizar_detalles_restaurante", {
        p_restaurante_id: state.selectedRestaurantId,
        p_contacto: document.getElementById("panel-contacto").value.trim(),
        p_pais: document.getElementById("panel-pais").value.trim(),
        p_departamento: document.getElementById("panel-departamento").value.trim(),
        p_direccion: document.getElementById("panel-direccion").value.trim()
      });
      if (detailsError) throw new Error(`Configuración principal guardada, pero fallaron los datos privados: ${detailsError.message}`);
      const { error: zoneSaveError } = await supabaseClient.rpc("configurar_zonas_entrega", {
        p_restaurante_id: state.selectedRestaurantId,
        p_zonas: configuredZones
      });
      if (zoneSaveError) throw new Error(`Datos del restaurante guardados, pero no se pudieron guardar las zonas: ${zoneSaveError.message}`);
      const { error: weeklyError } = await supabaseClient.rpc("configurar_horario_semanal", {
        p_restaurante_id: state.selectedRestaurantId,
        p_horario: configuredWeekly
      });
      if (weeklyError) throw new Error(`Datos guardados, pero falló el horario semanal: ${weeklyError.message}`);
      message.textContent = "Configuración, zonas y horarios guardados.";
      await loadCatalogFromSupabase();
      renderCategories();
      renderRestaurants();
      renderRestaurantDetail();
      await renderBusinessPanel();
    } catch (error) {
      if (!publicDataSaved) await cleanupFailedImageUploads(newImagePaths);
      message.textContent = `No se pudo guardar la configuración: ${error.message || error}`;
    } finally {
      button.disabled = false;
    }
  });

  document.getElementById("merchant-payment-form")?.addEventListener("submit", saveMerchantPaymentSettings);
  document.getElementById("promo-type")?.addEventListener("change", adjustPromoValueInput);
  document.getElementById("promo-form")?.addEventListener("submit", saveMerchantPromo);
  document.getElementById("promo-clear")?.addEventListener("click", () => resetPromoForm());
  document.getElementById("add-product-btn")?.addEventListener("click", () => {
    openProductForm();
  });
  document.getElementById("merchant-order-sound")?.addEventListener("click", toggleMerchantOrderSound);
  document.getElementById("merchant-orders-refresh")?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    button.disabled = true;
    try { await refreshMerchantOrderMonitor(true); }
    finally { button.disabled = false; }
  });
  document.getElementById("merchant-order-alert-close")?.addEventListener("click", () => {
    document.getElementById("merchant-order-alert").hidden = true;
  });
  document.getElementById("merchant-order-alert-view")?.addEventListener("click", () => {
    document.getElementById("merchant-order-alert").hidden = true;
    document.querySelector(".panel-orders")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("product-form")?.addEventListener("submit", saveBusinessProduct);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    });
  }
}

function initApp() {
  if (document.body.dataset.page !== "panel") {
    setInterval(() => {
      if (document.hidden) return;
      let changed = false;
      RESTAURANTS.forEach((restaurant) => {
        const next = isRestaurantOpen(restaurant);
        if (restaurant.abierto !== next) { restaurant.abierto = next; changed = true; }
      });
      if (changed) { renderRestaurants(); renderRestaurantDetail(); renderCart(); }
    }, 30000);
  }
  bindNavigation();
  setupBottomNavAutoHide();
  bindBusinessPanel();
  bindPideyaAdministration();
  if (document.body.dataset.page !== "panel") startBuyerOrderRefresh();
  renderCategories();
  renderHomeBanners();
  renderRestaurants();
  renderRestaurantDetail();
  updateCartBadge();

  if (document.body.dataset.page === "panel") {
    showView("view-panel");
    document.querySelector(".panel-shell").hidden = true;
    document.getElementById("panel-access-gate").hidden = false;
  } else {
    showView(window.location.hash === "#profile" ? "view-profile" : "view-lobby");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const splashStarted = Date.now();
  const maxSplash = window.setTimeout(dismissAppSplash, 5000);
  try {
  initApp();
  if (showAuthRedirectStatus()) showView("view-profile");
  refreshLocationUI();
  renderCart();
  if (supabaseClient) {
    supabaseClient.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        const dialog = document.getElementById("password-update-dialog");
        if (dialog && !dialog.open) dialog.showModal();
      }
    });
  }
  registerServiceWorker();
  void loadHomeBanners();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    if (merchantOrderMonitor.restaurantId) void refreshMerchantOrderMonitor();
    if (document.getElementById("view-orders")?.classList.contains("active") && state.user) void renderOrders(true);
    let changed = false;
    RESTAURANTS.forEach((restaurant) => {
      const next = isRestaurantOpen(restaurant);
      if (restaurant.abierto !== next) { restaurant.abierto = next; changed = true; }
    });
    if (changed) { renderRestaurants(); renderRestaurantDetail(); }
    renderCart();
  });
  const loaded = await loadCatalogFromSupabase();
  refreshLocationUI();
  if (loaded) {
    renderCategories();
    renderRestaurants();
    renderRestaurantDetail();
    renderCart();
  }
  await loadAccountState();
  } catch (error) {
    console.error("Error en el inicio de Toque:", error.message || error);
  } finally {
    window.clearTimeout(maxSplash);
    const remaining = Math.max(0, 650 - (Date.now() - splashStarted));
    window.setTimeout(dismissAppSplash, remaining);
  }
});
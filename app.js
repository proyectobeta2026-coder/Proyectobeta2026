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

function readStoredCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("rapiya-cart") || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    return Object.fromEntries(Object.entries(saved).filter(([key, quantity]) =>
      /^[^:]+:[^:]+$/.test(key) && Number.isInteger(quantity) && quantity > 0 && quantity <= 50
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

  document.querySelectorAll(".nav-item").forEach((item) => {
    const active = item.dataset.target === viewId.replace("view-", "") || item.dataset.target === "lobby" && viewId === "view-lobby";
    item.classList.toggle("active", active);
  });
}

function renderCategories() {
  const categoriesContainer = document.getElementById("categories");
  if (!categoriesContainer) return;

  const categoriesByKey = new Map(CATEGORIES.map((category) => [category.key, category]));
  RESTAURANTS.forEach((restaurant) => {
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

function renderRestaurants() {
  const grid = document.getElementById("restaurantes-grid");
  if (!grid) return;

  const search = document.getElementById("input-buscar")?.value.trim().toLowerCase() || "";
  const filtered = RESTAURANTS.filter((restaurant) => {
    const matchesCategory = state.selectedCategory === "all" || restaurant.categoria.toLocaleLowerCase("es") === state.selectedCategory;
    const matchesSearch = !search || restaurant.nombre.toLowerCase().includes(search);
    const matchesCity = !state.delivery.city || normalizeText(restaurant.ciudad || restaurant.municipio) === normalizeText(state.delivery.city);
    return matchesCategory && matchesSearch && matchesCity;
  });

  const cards = filtered.map((restaurant, index) => {
    const isPromo = index % 2 === 1;

    if (isPromo) {
      return `
        <article class="promo-card" data-id="${escapeHtml(restaurant.id)}" aria-label="Promoción de ${escapeHtml(restaurant.nombre)}">
          <button class="favorite-toggle ${isFavorite("restaurante", restaurant.id) ? "is-favorite" : ""}" type="button" data-favorite-type="restaurante" data-favorite-id="${escapeHtml(restaurant.id)}" aria-label="Guardar restaurante en favoritos" aria-pressed="${isFavorite("restaurante", restaurant.id)}"><i class="fa-${isFavorite("restaurante", restaurant.id) ? "solid" : "regular"} fa-heart"></i></button>
          <div class="promo-tag">Promo flash</div>
          <div>
            <h3>${escapeHtml(restaurant.nombre)}</h3>
            <div class="promo-price">${escapeHtml(restaurant.promo)}</div>
          </div>
          <button type="button">¡Pide aquí!</button>
        </article>
      `;
    }

    return `
      <article class="restaurant-card" data-id="${escapeHtml(restaurant.id)}" aria-label="Abrir restaurante ${escapeHtml(restaurant.nombre)}">
        <button class="favorite-toggle ${isFavorite("restaurante", restaurant.id) ? "is-favorite" : ""}" type="button" data-favorite-type="restaurante" data-favorite-id="${escapeHtml(restaurant.id)}" aria-label="Guardar restaurante en favoritos" aria-pressed="${isFavorite("restaurante", restaurant.id)}"><i class="fa-${isFavorite("restaurante", restaurant.id) ? "solid" : "regular"} fa-heart"></i></button>
        <img src="${escapeHtml(safeImageUrl(restaurant.cover))}" alt="${escapeHtml(restaurant.nombre)}" />
        <div class="card-body">
          <h4>${escapeHtml(restaurant.nombre)}</h4>
          <p>
            <span class="rating"><i class="fa-solid fa-star"></i> ${escapeHtml(restaurant.rating)}</span>
            <span>• ${escapeHtml(restaurant.tiempo)}</span>
          </p>
        </div>
      </article>
    `;
  }).join("");

  const emptyMessage = search
    ? "No encontramos resultados para tu búsqueda."
    : state.delivery.city
      ? `No hay restaurantes disponibles en ${escapeHtml(state.delivery.city)}.`
      : "No hay restaurantes para mostrar.";
  grid.innerHTML = cards || `<div style="grid-column: 1 / -1; padding: 18px; text-align: center; color: #666;">${emptyMessage}</div>`;

  grid.querySelectorAll(".restaurant-card").forEach((card) => {
    card.addEventListener("click", () => openRestaurant(card.dataset.id));
  });

  grid.querySelectorAll(".promo-card").forEach((card) => {
    card.addEventListener("click", () => openRestaurant(card.dataset.id));
  });

  grid.querySelectorAll(".favorite-toggle").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(button.dataset.favoriteType, button.dataset.favoriteId);
    });
  });
}

function normalizeText(value) {
  return String(value || "").trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

function isRestaurantOpen(restaurant) {
  const manual = normalizeText(restaurant.estado);
  if (manual === "cerrado") return false;
  if (manual === "abierto") return true;
  if (!restaurant.apertura || !restaurant.cierre || restaurant.apertura === restaurant.cierre) return false;
  const now = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Bogota",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).format(new Date());
  return restaurant.apertura < restaurant.cierre
    ? now >= restaurant.apertura && now < restaurant.cierre
    : now >= restaurant.apertura || now < restaurant.cierre;
}

function distanceKm(first, second) {
  const radians = Math.PI / 180;
  const dLat = (second.lat - first.lat) * radians;
  const dLng = (second.lng - first.lng) * radians;
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(first.lat * radians) * Math.cos(second.lat * radians) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(Math.max(0, Math.min(1, a))));
}

async function loadCatalogFromSupabase() {
  if (!supabaseClient) return false;

  try {
    const restaurantsResult = await supabaseClient
      .from("restaurantes")
      .select("id_restaurante,Nombre,Categoria,Promedio,Promedio_Nuevo,Tiempo_Entrega,Costo_Envio,Envio_Gratis,Estado_Manual,Logo_URL,Portada_URL,WhatsApp,Municipio,Ciudad,Departamento,Pais,Horario_Apertura,Horario_Cierre,Latitud,Longitud,Radio_Entrega_Km,Total_Votos,Fecha_Registro");

    if (restaurantsResult.error) throw restaurantsResult.error;

    const restaurants = restaurantsResult.data.map((row) => ({
      id: row.id_restaurante,
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
      estado: row.Estado_Manual || "Automatico",
      apertura: row.Horario_Apertura ? String(row.Horario_Apertura).slice(0, 5) : "",
      cierre: row.Horario_Cierre ? String(row.Horario_Cierre).slice(0, 5) : "",
      abierto: isRestaurantOpen({
        estado: row.Estado_Manual,
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
        .select("id_producto,id_restaurante,Nombre,Descripcion,Precio,Precio_Anterior,Categoria_Plato,Foto_URL,Disponible")
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
          categoria: row.Categoria_Plato || ""
        });
      });
    } catch (error) {
      console.error("No se pudieron cargar los productos de Supabase:", error.message || error);
    }

    if (productsLoaded) pruneCartToCatalog();
    return true;
  } catch (error) {
    console.error("No se pudo cargar el catálogo de Supabase:", error.message || error);
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
    if (restaurant && restaurant.abierto && product?.disponible) kept[key] = quantity;
    else removed += quantity;
  });
  if (!removed) return;
  state.cart = kept;
  state.preparedOrders = [];
  clearCheckoutId();
  saveCart();
  updateCartBadge();
  window.alert(`Se quitaron ${removed} unidad(es) del carrito porque el restaurante cerró o el producto dejó de estar disponible.`);
}

function catalogCities() {
  return [...new Set(RESTAURANTS.map((restaurant) => restaurant.ciudad || restaurant.municipio).filter(Boolean))]
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
  meta.textContent = `${restaurant.categoria} • ⭐ ${restaurant.rating || "Sin votos"} • ${restaurant.votos || 0} votos`;
  delivery.textContent = `Entrega: ${restaurant.tiempo}`;
  price.textContent = restaurant.envioGratis ? "Envío gratis" : `Envío ${formatCurrency(restaurant.costoEnvio)}`;
  promo.textContent = restaurant.promo;

  const favoriteButton = document.getElementById("btn-favorite-restaurant");
  if (favoriteButton) {
    const favorite = isFavorite("restaurante", restaurant.id);
    favoriteButton.classList.toggle("is-favorite", favorite);
    favoriteButton.setAttribute("aria-pressed", String(favorite));
    favoriteButton.innerHTML = `<i class="fa-${favorite ? "solid" : "regular"} fa-heart"></i>`;
  }

  const items = (MENU[restaurant.id] || []).filter((product) => product.disponible !== false);
  count.textContent = `${items.length} platos`;
  list.innerHTML = items.map((product) => `
    <article class="dish-card">
      <img src="${escapeHtml(product.img)}" alt="${escapeHtml(product.nombre)}" />
      <div class="dish-copy">
        <h4>${escapeHtml(product.nombre)}</h4>
        <p>${escapeHtml(product.desc)}</p>
        <div class="price-row">
          <strong>${formatCurrency(product.precio)}</strong>
          ${product.precioAnterior > product.precio ? `<del>${formatCurrency(product.precioAnterior)}</del>` : ""}
        </div>
      </div>
      <button class="add-btn" type="button" data-product="${escapeHtml(product.id)}" ${restaurant.abierto ? "" : "disabled"} aria-label="Agregar ${escapeHtml(product.nombre)}">+</button>
      <button class="favorite-toggle ${isFavorite("producto", product.id) ? "is-favorite" : ""}" type="button" data-favorite-type="producto" data-favorite-id="${escapeHtml(product.id)}" aria-label="Guardar producto en favoritos" aria-pressed="${isFavorite("producto", product.id)}"><i class="fa-${isFavorite("producto", product.id) ? "solid" : "regular"} fa-heart"></i></button>
    </article>
  `).join("");

  list.querySelectorAll(".add-btn").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(button.dataset.product, restaurant.id);
    });
  });

  list.querySelectorAll(".favorite-toggle").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favoriteType, button.dataset.favoriteId));
  });
}

function addToCart(productId, restaurantId) {
  const restaurant = RESTAURANTS.find((item) => item.id === restaurantId);
  const product = (MENU[restaurantId] || []).find((item) => item.id === productId);
  if (!restaurant || !product || product.disponible === false || !restaurant.abierto) {
    alert("Este producto no está disponible en este momento.");
    return;
  }
  if (state.delivery.city && normalizeText(state.delivery.city) !== normalizeText(restaurant.ciudad || restaurant.municipio)) {
    alert("Este restaurante no atiende la ciudad seleccionada.");
    return;
  }
  if (state.delivery.lat != null && state.delivery.lng != null
    && restaurant.lat != null && restaurant.lng != null && restaurant.radioKm != null
    && distanceKm(state.delivery, { lat: restaurant.lat, lng: restaurant.lng }) > restaurant.radioKm) {
    alert("Este restaurante no entrega en el punto GPS seleccionado.");
    return;
  }

  const key = `${restaurantId}:${productId}`;
  if ((state.cart[key] || 0) >= 50) {
    alert("El máximo es 50 unidades por producto.");
    return;
  }
  state.cart[key] = (state.cart[key] || 0) + 1;
  saveCart();
  updateCartBadge();
  renderCart();
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
    return { key, quantity, restaurant, product };
  }).filter((entry) => entry.restaurant && entry.product);
}

function renderCart() {
  const box = document.getElementById("cart-items");
  if (!box) return;
  const entries = cartEntries();
  let subtotal = 0;
  let savings = 0;
  let shipping = 0;
  const groups = new Set();
  box.innerHTML = entries.map(({ key, quantity, restaurant, product }) => {
    subtotal += product.precio * quantity;
    savings += Math.max(0, product.precioAnterior - product.precio) * quantity;
    if (!groups.has(restaurant.id)) {
      groups.add(restaurant.id);
      if (!restaurant.envioGratis) shipping += restaurant.costoEnvio;
    }
    return `
      <article class="cart-row">
        <div><strong>${escapeHtml(product.nombre)}</strong><small>${escapeHtml(restaurant.nombre)} · ${formatCurrency(product.precio)}</small></div>
        <div class="quantity-control">
          <button type="button" data-cart-key="${escapeHtml(key)}" data-cart-delta="-1" aria-label="Quitar una unidad">−</button>
          <span>${quantity}</span>
          <button type="button" data-cart-key="${escapeHtml(key)}" data-cart-delta="1" aria-label="Agregar una unidad">+</button>
        </div>
      </article>
    `;
  }).join("") || '<p class="empty-state">Tu carrito está vacío.</p>';

  document.getElementById("cart-subtotal").textContent = formatCurrency(subtotal + savings);
  document.getElementById("cart-savings").textContent = `−${formatCurrency(savings)}`;
  document.getElementById("cart-shipping").textContent = formatCurrency(shipping);
  document.getElementById("cart-total").textContent = formatCurrency(subtotal + shipping);
  document.getElementById("checkout-address").value = state.delivery.address || "";
  updateCitySelect("checkout-city", state.delivery.city);
  const checkoutButton = document.getElementById("checkout-submit");
  const isAdminPreview = state.profile?.rol === "admin";
  if (checkoutButton) checkoutButton.disabled = !entries.length || state.preparedOrders.length > 0 || isAdminPreview;
  const checkoutMessage = document.getElementById("checkout-message");
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
  cartEntries().forEach(({ restaurant, product, quantity }) => {
    if (!groups.has(restaurant.id)) groups.set(restaurant.id, []);
    groups.get(restaurant.id).push({ id: product.id, qty: quantity });
  });
  if (!groups.size) {
    message.textContent = "Tu carrito está vacío.";
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
      const { data, error } = await supabaseClient.rpc("crear_pedido", {
        p_restaurante_id: restaurantId,
        p_items: items,
        p_direccion: address,
        p_ciudad: city,
        p_latitud: state.delivery.lat,
        p_longitud: state.delivery.lng,
        p_checkout_id: checkoutId
      });
      if (error) throw error;
      const phone = String(data.whatsapp || "").replace(/\D/g, "");
      if (!phone) throw new Error(`El restaurante ${data.restaurante} no tiene un WhatsApp válido configurado.`);
      const lines = data.items.map((item) =>
        `${item.cantidad} x ${item.nombre}: ${formatCurrency(item.precio * item.cantidad)}`
      );
      const mapsLink = state.delivery.lat != null && state.delivery.lng != null
        ? `\nUbicación: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${state.delivery.lat},${state.delivery.lng}`)}`
        : "";
      const text = [
        `Nuevo pedido en RapiYa · #${data.id}`,
        `Restaurante: ${data.restaurante}`,
        `Entrega: ${city} · ${address}${mapsLink}`,
        "",
        ...lines,
        "",
        `Subtotal: ${formatCurrency(data.subtotal)}`,
        `Ahorro: ${formatCurrency(data.ahorro)}`,
        `Domicilio: ${formatCurrency(data.envio)}`,
        `Total: ${formatCurrency(data.total)}`,
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
      <article class="saved-card" data-open-restaurant="${escapeHtml(restaurant?.id || "")}">
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
  content.querySelectorAll(".favorite-toggle").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favoriteType, button.dataset.favoriteId));
  });
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
  if (!state.user) return;

  document.getElementById("account-email-label").textContent = state.user.email || "Cuenta RapiYa";
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
        ? "Administración de RapiYa"
      : "Perfil pendiente de configuración";
  document.getElementById("account-role-label").textContent = roleLabel;
  document.getElementById("btn-open-merchant-panel").hidden = !isMerchant;
  const quickMerchantAction = document.getElementById("quick-merchant-action");
  if (quickMerchantAction) quickMerchantAction.hidden = !isMerchant;
}

async function renderOrders() {
  const content = document.getElementById("orders-content");
  if (!content) return;
  if (!state.user) {
    content.textContent = "Inicia sesión para consultar tus pedidos.";
    return;
  }
  if (!supabaseClient) {
    content.textContent = "No hay conexión con el servicio de pedidos.";
    return;
  }
  content.textContent = "Cargando pedidos...";
  const { data, error } = await supabaseClient
    .from("pedidos")
    .select("id,id_restaurante,estado,items,subtotal,ahorro,envio,total,direccion,ciudad,created_at")
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) {
    content.textContent = `No se pudieron cargar los pedidos: ${error.message}`;
    return;
  }
  if (!data.length) {
    content.textContent = "Aún no tienes pedidos. Tus compras aparecerán aquí.";
    return;
  }
  content.innerHTML = data.map((order) => {
    const restaurant = RESTAURANTS.find((item) => item.id === order.id_restaurante);
    const items = Array.isArray(order.items) ? order.items : [];
    const canRate = order.estado === "ENTREGADO" && state.profile?.rol === "comprador";
    return `
      <article class="order-card">
        <div class="order-card-heading">
          <strong>${escapeHtml(restaurant?.nombre || order.id_restaurante)}</strong>
          <span>${escapeHtml(order.estado)}</span>
        </div>
        <p>${escapeHtml(new Date(order.created_at).toLocaleString("es-CO"))} · ${escapeHtml(order.ciudad)}</p>
        <p>${items.map((item) => `${Number(item.cantidad)} × ${escapeHtml(item.nombre)}`).join(", ")}</p>
        <strong>Total: ${formatCurrency(order.total)}</strong>
        ${canRate ? `<button class="secondary-btn" type="button" data-rate-restaurant="${escapeHtml(order.id_restaurante)}">Calificar restaurante</button>` : ""}
      </article>
    `;
  }).join("");
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
  state.profile = null;
  state.favorites = new Set();
  state.merchantApplication = null;

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
  renderCategories();
  renderRestaurants();
  renderRestaurantDetail();
  await loadAdminApplications();

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

function bindNavigation() {
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
  document.getElementById("btn-signout-user")?.addEventListener("click", async () => {
    await supabaseClient.auth.signOut();
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
  });
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

async function renderBusinessPanel() {
  const restaurant = RESTAURANTS.find((item) => item.id === state.selectedRestaurantId);
  const panelProducts = document.getElementById("panel-products");
  const isAdminPreview = state.profile?.rol === "admin";
  if (!restaurant || !panelProducts || (!supabaseClient && !isAdminPreview)) return;

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
  document.getElementById("metric-rating").textContent = restaurant.rating ? restaurant.rating.toFixed(1) : "Sin votos";
  setValue("panel-name", restaurant.nombre);
  setValue("panel-category", restaurant.categoria);
  setValue("panel-whatsapp", restaurant.whatsapp);
  setValue("panel-apertura", restaurant.apertura);
  setValue("panel-cierre", restaurant.cierre);
  setValue("panel-costo", restaurant.costoEnvio);
  setValue("panel-tiempo", restaurant.tiempo);
  setValue("panel-cobertura", restaurant.ciudad || restaurant.municipio);
  setValue("panel-pais", details?.pais || restaurant.pais);
  setValue("panel-departamento", details?.departamento || restaurant.departamento);
  setValue("panel-contacto", details?.contacto);
  setValue("panel-direccion", details?.direccion);
  setValue("panel-logo", restaurant.logo);
  setValue("panel-portada", restaurant.cover);
  setValue("panel-estado", restaurant.estado);
  setValue("panel-lat", restaurant.lat);
  setValue("panel-lng", restaurant.lng);
  setValue("panel-radio", restaurant.radioKm);
  setChecked("panel-envio-gratis", restaurant.envioGratis);

  const panelForm = document.getElementById("panel-form");
  panelForm.querySelectorAll("input,select").forEach((field) => {
    field.disabled = isAdminPreview;
  });
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
      .select("id_producto,id_restaurante,Nombre,Descripcion,Precio,Precio_Anterior,Categoria_Plato,Foto_URL,Disponible,Es_Top")
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
      esTop: row.Es_Top === true
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

  let ordersCount = 0;
  if (!isAdminPreview && supabaseClient) {
    const { count, error: ordersError } = await supabaseClient
      .from("pedidos")
      .select("id", { count: "exact", head: true })
      .eq("id_restaurante", restaurant.id);
    if (!ordersError) ordersCount = count || 0;
  }
  document.getElementById("metric-orders").textContent = String(ordersCount);
  const ordersBox = document.getElementById("merchant-orders");
  if (ordersBox && isAdminPreview) {
    ordersBox.innerHTML = '<p class="empty-state">Los pedidos reales se muestran solo en el panel de la cuenta propietaria.</p>';
  } else if (ordersBox && supabaseClient) {
    await renderMerchantOrders(ordersBox, restaurant.id);
  } else if (ordersBox) {
    ordersBox.innerHTML = '<p class="empty-state">No hay pedidos en esta vista previa.</p>';
  }
}

async function renderMerchantOrders(box, restaurantId) {
  const { data, error } = await supabaseClient
    .from("pedidos")
    .select("id,estado,items,subtotal,envio,total,direccion,ciudad,created_at")
    .eq("id_restaurante", restaurantId)
    .order("created_at", { ascending: false })
    .limit(30);
  if (error) {
    box.textContent = `No se pudieron cargar los pedidos: ${error.message}`;
    return;
  }
  if (!data.length) {
    box.innerHTML = '<p class="empty-state">Aún no has recibido pedidos.</p>';
    return;
  }
  const statuses = ["PENDIENTE", "ACEPTADO", "PREPARANDO", "EN_CAMINO", "ENTREGADO", "CANCELADO"];
  box.innerHTML = data.map((order) => `
    <article class="order-card">
      <div class="order-card-heading"><strong>Pedido #${escapeHtml(order.id.slice(0, 8))}</strong><span>${escapeHtml(order.estado)}</span></div>
      <p>${escapeHtml(new Date(order.created_at).toLocaleString("es-CO"))} · ${escapeHtml(order.ciudad)}</p>
      <p>${escapeHtml(order.direccion)}</p>
      <p>${(Array.isArray(order.items) ? order.items : []).map((item) => `${Number(item.cantidad)} × ${escapeHtml(item.nombre)}`).join(", ")}</p>
      <strong>Total: ${formatCurrency(order.total)}</strong>
      <label class="field-group">
        <span>Estado del pedido</span>
        <select data-order-status="${escapeHtml(order.id)}">
          ${statuses.map((status) => `<option value="${status}" ${status === order.estado ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <button class="secondary-btn" type="button" data-save-order-status="${escapeHtml(order.id)}">Guardar estado</button>
    </article>
  `).join("");
  box.querySelectorAll("[data-save-order-status]").forEach((button) => {
    button.addEventListener("click", async () => {
      const orderId = button.dataset.saveOrderStatus;
      const status = box.querySelector(`[data-order-status="${CSS.escape(orderId)}"]`).value;
      button.disabled = true;
      try {
        const { error: updateError } = await supabaseClient
          .from("pedidos")
          .update({ estado: status })
          .eq("id", orderId)
          .eq("id_restaurante", restaurantId);
        if (updateError) throw updateError;
        await renderMerchantOrders(box, restaurantId);
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
  document.getElementById("product-image").value = product?.img || "";
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
  const image = document.getElementById("product-image").value.trim();
  if (previous && previous < price) {
    message.textContent = "El precio normal no puede ser menor al precio de oferta.";
    return;
  }
  if (image && !/^https:\/\/[^\s<>"']+$/i.test(image)) {
    message.textContent = "La imagen debe ser una URL HTTPS válida.";
    return;
  }
  button.disabled = true;
  try {
    const productId = document.getElementById("product-id").value;
    const values = {
      Nombre: name,
      Descripcion: document.getElementById("product-description").value.trim(),
      Precio: price,
      Precio_Anterior: previous || null,
      Categoria_Plato: document.getElementById("product-category").value.trim(),
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
    document.getElementById("product-dialog").close();
    await loadCatalogFromSupabase();
    renderCategories();
    renderRestaurants();
    renderRestaurantDetail();
    await renderBusinessPanel();
  } catch (error) {
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
    const logo = document.getElementById("panel-logo").value.trim();
    const cover = document.getElementById("panel-portada").value.trim();
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
    message.textContent = "Guardando configuración...";
    try {
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
      const { error: detailsError } = await supabaseClient.rpc("actualizar_detalles_restaurante", {
        p_restaurante_id: state.selectedRestaurantId,
        p_contacto: document.getElementById("panel-contacto").value.trim(),
        p_pais: document.getElementById("panel-pais").value.trim(),
        p_departamento: document.getElementById("panel-departamento").value.trim(),
        p_direccion: document.getElementById("panel-direccion").value.trim()
      });
      if (detailsError) throw new Error(`Configuración principal guardada, pero fallaron los datos privados: ${detailsError.message}`);
      message.textContent = "Configuración guardada.";
      await loadCatalogFromSupabase();
      renderCategories();
      renderRestaurants();
      renderRestaurantDetail();
      await renderBusinessPanel();
    } catch (error) {
      message.textContent = `No se pudo guardar la configuración: ${error.message || error}`;
    } finally {
      button.disabled = false;
    }
  });

  document.getElementById("add-product-btn")?.addEventListener("click", () => {
    openProductForm();
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
  bindNavigation();
  bindBusinessPanel();
  renderCategories();
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
  initApp();
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
  const loaded = await loadCatalogFromSupabase();
  refreshLocationUI();
  if (loaded) {
    renderCategories();
    renderRestaurants();
    renderRestaurantDetail();
    renderCart();
  }
  await loadAccountState();
});
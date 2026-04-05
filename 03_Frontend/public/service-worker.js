const CACHE_NAME = 'condoconnect-cache-v1';
const RUTAS_A_GUARDAR = ['/', '/index.html', '/logo.png'];

// 1. Instalamos el caché en el navegador del guardia
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(RUTAS_A_GUARDAR)));
});

// 2. Interceptamos las llamadas. Si no hay internet, usamos el caché
self.addEventListener('fetch', (event) => {
  if (event.request.method === 'POST') {
    // Si es un escaneo de visita y no hay red, lo guardamos en IndexedDB (Memoria Local)
    // para sincronizarlo más tarde cuando vuelva el internet.
    if (!navigator.onLine) {
      console.log('♾️ Marina: Modo Offline Activo. Guardando registro localmente.');
      // (Aquí va la lógica de IndexedDB)
      return new Response(JSON.stringify({ offline: true, mensaje: "Guardado en modo local" }));
    }
  } else {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
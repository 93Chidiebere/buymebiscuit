const CACHE_NAME = 'biscuit-cache-v1';
const urlsToCache = [
  '/buymebiscuit/',
  '/buymebiscuit/index.html',
  '/buymebiscuit/styles.css',
  '/buymebiscuit/css/style.css',
  '/buymebiscuit/admin.html',
  '/buymebiscuit/adminHome.html',
  '/buymebiscuit/editpost.html',
  '/buymebiscuit/category.html',
  '/buymebiscuit/singlepost.html',
  '/buymebiscuit/login.html',
  '/buymebiscuit/signup.html',
  'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap'
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});

// Activate (clean up old caches)
// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames
//           .filter((name) => name !== CACHE_NAME)
//           .map((name) => caches.delete(name))
//       )
//     )
//   );
// });

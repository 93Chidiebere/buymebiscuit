const CACHE_NAME = 'biscuit-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/css/style.css',
  '/admin.html',
  '/adminHome.html',
  '/editpost.html',
  '/category.html',
  '/singlepost.html',
  '/login.html',
  '/signup.html',
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

var CACHE_NAME = 'appV1';

var urlsToCache = [
'/static/js/bundle.js',
'/static/js/0.chunk.js',
'/static/js/main.chunk.js',
'/',
'/index.html',
'/manifest.json',
'/favicon.ico',
'/logo192.png',
'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
'https://fonts.googleapis.com/icon?family=Material+Icons',
'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2',
'https://opentdb.com/api.php?amount=10&type=multiple'
];

self.addEventListener("activate", function(e){
    console.log("[servicworker] Activate")
})

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
const CACHE_NAME = "solvio-card-v3";

const FILES_TO_CACHE = [ "./", "./index.html", "./card/", "./card/index.html", "./profile.JPG", "./solvio-logo.png", "./qr-code.png" ];

self.addEventListener("install", event => { event.waitUntil( caches.open(CACHE_NAME) .then(cache => cache.addAll(FILES_TO_CACHE)) .then(() => self.skipWaiting()) ); });

self.addEventListener("activate", event => { event.waitUntil( caches.keys() .then(keys => { return Promise.all( keys .filter(key => key !== CACHE_NAME) .map(key => caches.delete(key)) ); }) .then(() => self.clients.claim()) ); });

self.addEventListener("fetch", event => { const request = event.request;

if (request.method !== "GET") { return; }

const url = new URL(request.url);

// Only handle same-origin requests. if (url.origin !== self.location.origin) { return; }

event.respondWith( caches.match(request) .then(cachedResponse => {

if (cachedResponse) { return cachedResponse; } return fetch(request) .then(response => { if (response && response.ok) { const responseClone = response.clone(); caches.open(CACHE_NAME) .then(cache => { cache.put(request, responseClone); }); } return response; }) .catch(() => { // If the user is navigating and the network is unavailable, // return the cached card. if (request.mode === "navigate") { return caches.match("./card/index.html"); } return Response.error(); }); }) 

); });


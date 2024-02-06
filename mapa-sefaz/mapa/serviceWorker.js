const staticDevCoffee = "mapa-sefaz-v2";
const assets = [
  "/",
  "https://expertfiscaltributario.com.br/ferramentas/mapasefaz/index.html",
  "/css/style.css",
  "/js/app.js",
  "/js/jquery.min.js",
  "/js/popper.min.js",
  "/js/bootstrap.min.js",
  "/images/perfilInstagram.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});

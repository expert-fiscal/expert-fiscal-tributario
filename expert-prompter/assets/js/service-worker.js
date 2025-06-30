// Define um nome e versão para o cache
const CACHE_NAME = 'teleprompter-pwa-v1';

// Lista de arquivos essenciais para o funcionamento offline do app (o "App Shell")
const URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/roteiros.json',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
];

// Evento 'install': é disparado quando o Service Worker é instalado.
// Aqui, nós guardamos os arquivos do "App Shell" em cache.
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache aberto:', CACHE_NAME);
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

// Evento 'fetch': é disparado para cada requisição de rede feita pela página.
// A estratégia é "Cache First": tenta servir do cache, e se falhar, busca na rede.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Se a resposta for encontrada no cache, a retorna.
                if (response) {
                    return response;
                }
                // Caso contrário, faz a requisição à rede.
                return fetch(event.request);
            })
    );
});

// Evento 'activate': é disparado quando o Service Worker é ativado.
// Usado para limpar caches antigos e garantir que a nova versão seja usada.
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // Deleta os caches que não estão na whitelist (caches antigos)
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
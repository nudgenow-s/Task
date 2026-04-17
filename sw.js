const CACHE_NAME = 'nuno-task';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// 安装并缓存
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// 拦截请求：网络优先
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

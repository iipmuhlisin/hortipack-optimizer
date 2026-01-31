// ═══════════════════════════════════════════════════════════════
// HortiPack Optimizer v3.0 — Service Worker
// Strategi: Cache-First untuk app shell, Network-First untuk fonts
// ═══════════════════════════════════════════════════════════════

const CACHE_NAME = 'hortipack-v3.0';
const CACHE_VERSION = '3.0.0';

// File yang akan di-cache saat install (app shell)
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

// Font URLs untuk cache secara terpisah
const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap'
];

// ── INSTALL: Cache app shell ──
self.addEventListener('install', event => {
  console.log('[SW] Installing HortiPack v' + CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching app shell');
        return cache.addAll(APP_SHELL);
      })
      .then(() => self.skipWaiting()) // Langsung aktif
  );
});

// ── ACTIVATE: Hapus cache lama ──
self.addEventListener('activate', event => {
  console.log('[SW] Activating HortiPack v' + CACHE_VERSION);
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            })
      ))
      .then(() => self.clients.claim()) // Ambil kontrol semua tab
  );
});

// ── FETCH: Cache-first untuk app shell, Network-first untuk fonts ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Fonts: Network-first (try network, fallback to cache)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  
  // App shell: Cache-first (try cache, fallback to network)
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        
        return fetch(event.request)
          .then(response => {
            // Cache successful responses
            if (response.ok && event.request.method === 'GET') {
              const clone = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            }
            return response;
          })
          .catch(() => {
            // Offline fallback: return index.html for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            return new Response('Offline', { status: 503, statusText: 'Offline' });
          });
      })
  );
});

// ── MESSAGE: Handle update messages from app ──
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

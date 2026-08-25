// TLEA Training Portal — Service Worker
// Provides offline caching, background sync, and fast loads.

const CACHE_VERSION = 'tlea-v1';
const STATIC_CACHE  = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;

// Core app shell files to pre-cache on install
const STATIC_ASSETS = [
  'index.html',
  'dashboard.html',
  'academy.html',
  'jurisdiction.html',
  'quiz.html',
  'scenarios.html',
  'study-guide.html',
  'tcole.html',
  'styles.css',
  'js/app.js',
  'js/auth.js',
  'js/data.js',
  'js/quiz-data.js',
  'js/scenario-data.js',
  'js/tcole-data.js',
  'manifest.json',
];

// ── Install: pre-cache app shell ──────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: clean up old caches ────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('tlea-') && key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first for static, network-first for dynamic ─
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        // Return cached, then refresh in background (stale-while-revalidate)
        const networkFetch = caches.open(STATIC_CACHE).then(staticCache =>
          staticCache.match(request).then(staticHit => (staticHit ? STATIC_CACHE : DYNAMIC_CACHE))
        ).then(cacheName =>
          fetch(request).then(response => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(cacheName).then(cache => cache.put(request, clone));
            }
            return response;
          })
        ).catch(() => null);

        // Return cached immediately, background-update
        event.waitUntil(networkFetch);
        return cached;
      }

      // Not in cache — fetch from network, store in dynamic cache
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(DYNAMIC_CACHE).then(cache => cache.put(request, clone));
        return response;
      }).catch(() => {
        // Offline fallback: return index.html for navigation requests
        if (request.mode === 'navigate') {
          return caches.match('index.html');
        }
        return new Response('Offline — resource not available', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain' },
        });
      });
    })
  );
});

// ── Background Sync: queue writes when offline ───────────────
self.addEventListener('sync', event => {
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgressData());
  }
});

async function syncProgressData() {
  // Progress is stored in localStorage (client-side).
  // This hook is available for future server-sync integration.
  console.log('[SW] Background sync: progress data');
}

// ── Push Notifications (configuration stub) ──────────────────
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'TLEA Training Portal';
  const options = {
    body: data.body || 'You have a new training notification.',
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-96.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/' },
    actions: [
      { action: 'open',    title: 'Open Portal' },
      { action: 'dismiss', title: 'Dismiss' },
    ],
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'dismiss') return;
  const url = (event.notification.data && event.notification.data.url) || '/';
  event.waitUntil(clients.openWindow(url));
});

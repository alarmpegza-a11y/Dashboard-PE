// Minimaler Service Worker: macht die App installierbar, cached nichts
// (damit Firebase-Live-Daten und eingebettete Apps immer aktuell bleiben).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

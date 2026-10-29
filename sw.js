/* Service worker: lets GS House open instantly and work offline for solo practice.
 * Game files and questions are fetched from the network first (so updates arrive at once),
 * with the saved copy as a fallback. CDN libraries and fonts never change at a given URL,
 * so they are served from the saved copy once fetched.
 */
'use strict';

const CACHE = 'gshouse-v4';
const SHELL = ['./', './index.html', './style.css', './app.js', './sections.js', './manifest.json', './data/index.json',
  './icons/icon-192.png', './icons/icon-512.png', './icons/favicon-32.png'];

// Every question file is saved at install too, so the installed app works fully offline for solo practice.
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE)
    .then((cache) => cache.addAll(SHELL)
      .then(() => fetch('./data/index.json'))
      .then((res) => res.json())
      .then((index) => cache.addAll(Object.keys(index.sections).map((id) => `./data/${id}.json`))))
    .catch(() => {})
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    const key = url.origin + url.pathname; // one saved copy per file, whatever ?room=… says
    event.respondWith(fetch(req)
      .then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((cache) => cache.put(key, copy)); }
        return res;
      })
      .catch(() => caches.match(key).then((hit) => hit || caches.match('./'))));
    return;
  }
  if (url.hostname === 'cdnjs.cloudflare.com' || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((cache) => cache.put(req, copy));
      return res;
    })));
  }
});

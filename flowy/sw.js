(function () {
    'use strict';

    const VERSION = "0.1.26";
    const PRECACHE_URLS = [
        "./",
        "./index.css",
        "./index.js",
        "./assets/favicon.png",
    ];
    self.addEventListener("install", (event) => {
        event.waitUntil(precache().then(() => {
            self.skipWaiting();
        }));
    });
    async function precache() {
        const now = Date.now();
        const cache = await caches.open(`v${VERSION}`);
        await Promise.all(PRECACHE_URLS.map((u) => {
            const url = `${u}?cache-bust=${now}`;
            const request = new Request(url, { mode: "no-cors" });
            return fetch(request).then((res) => {
                if (res.status === 200) {
                    cache.put(u, res);
                }
            });
        }));
    }
    self.addEventListener("activate", (event) => {
        event.waitUntil(removeUnusedCaches());
    });
    async function removeUnusedCaches() {
        const cacheNames = await caches.keys();
        const cacheNamesToRemove = cacheNames.filter((cacheName) => cacheName !== `v${VERSION}`);
        await Promise.all(cacheNamesToRemove.map((cacheName) => caches.delete(cacheName)));
        self.clients.claim();
    }
    self.addEventListener("fetch", (event) => {
        event.respondWith(handle(event.request));
    });
    async function handle(req) {
        const res = await caches.match(req);
        if (res) {
            return res;
        }
        return fetch(req);
    }

}());

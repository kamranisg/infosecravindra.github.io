var CACHE_NAME="CACHE_13_MAY_2019_07_43_AM",urlsToCache=["/assets/images/favicon/logo.webp"];self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return console.log("Opened cache"),e.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(t){t.respondWith(caches.match(t.request).then(function(e){return e||fetch(t.request).then(function(e){if(!e||200!==e.status||"basic"!==e.type)return e;var n=e.clone();return caches.open(CACHE_NAME).then(function(e){e.put(t.request,n)}),e})}))}),self.addEventListener("activate",function(e){var n=["CACHE_13_MAY_2019_07_43_AM"];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===n.indexOf(e))return caches.delete(e)}))}))});
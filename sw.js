const CACHE="sausages-stuff-v2";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icon.svg","./images/beer-onion-bratwurst.jpg","./images/sausage-mash.svg","./images/sausage-pasta.svg","./images/honey-garlic-sausages.svg","./images/sausage-pepper-hoagie.svg","./images/sausage-curry.svg"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{if(event.request.method!=="GET")return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return resp;}).catch(()=>caches.match("./index.html"))))});

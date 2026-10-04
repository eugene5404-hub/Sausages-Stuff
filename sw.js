const CACHE="sausages-stuff-v10";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icon.svg","./images/classic-fresh-pork.jpg","./images/italian-fennel.jpg","./images/beer-onion-bratwurst.jpg","./images/garlic-herb.jpg","./images/smoky-paprika.jpg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const y=x.clone();caches.open(CACHE).then(c=>c.put(e.request,y));return x}).catch(()=>caches.match("./")))));

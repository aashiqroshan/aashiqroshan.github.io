'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ce3a0c246bfd02d4b3dfb92ef25a12b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "086eb7b61f6e5fdec4a30f3958297a85",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "746cc3e4d8845e0fcdbcf6e9fd725c93",
".git/logs/refs/heads/main": "e6a65aed352d86a5692576c92be1f2f4",
".git/logs/refs/remotes/origin/main": "3e7a890e196feaf49f394e9d4c3ab8a0",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/dce78590f0e8c7738d4bbb2fa650a28296556d": "7153b3be131a8ec5ebb14b90eca42b16",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/1913559bfebced186bcb02676acc557bacfdf9": "80a62c5569757ee1b9826965fa530c95",
".git/objects/1d/90cb26c433b122dcfa98a1e9fd719fd0a71a56": "b9c55c2c23899281bd7766af84a99ec4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/28/8898764e6a2f1d051469c8c46a69c6c10f2d09": "831f36c3d17043e83a4b8be91804fcc5",
".git/objects/2c/2fcd968435cddc4950e40bc17e73e87e0f726e": "f6c49438d1724bb61185b8e65bca6d73",
".git/objects/2e/58bfb6925eb8b8601bd1d956879c5780a940dd": "fddcae6d3b79912697e71f9d948a0c8f",
".git/objects/3a/879aaaf07073d277b3b10172409310fe52e746": "e26e07c8f1259ddfe6cf7dbb94a74b83",
".git/objects/41/d6de4bb67d91753fda970c0dfb40bdd899a1ad": "6117406e1ca38c05837c35bf4cc55c46",
".git/objects/45/3cd0e6361c9cf6c77a66d82785c54af1a6dcfb": "1823da9fe5a776c61794e7686ccf0456",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/b536c347cc9002daa94ca2ad73abb49ecde943": "4d22a8dd7f01073289e7845126a548da",
".git/objects/4b/a60378680236972c8849f20b7e231cf0a32610": "646c8ccd3b810cf2cfd93d4e26f9546c",
".git/objects/4c/449424724afdaea2995fc849eb533f8dd1d015": "b1b5d7dca8eb6308e17b0951bf18d0a8",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/e0c0cf586becaa5ad28f411de96967a9b278a5": "f398546bbc248c3936b4bc7a43fc7926",
".git/objects/5b/fcc3e86d35fd5082fca78fe0e719e4b747c427": "9775387f11315f1d1d303ebcb61dde98",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/01a5b91d10854113858a65c19c1c10310bbdff": "ffb4cc59a0da8de1fee0f6d998747dc7",
".git/objects/64/92ef43346f8df69a0cb808e9ec8c99b77956e0": "fa0b7686378875d255b41cb64e08ca64",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/ce97850d15741b52ecbb337df8150bf9cbf2fc": "3e24d51e42fe140cfec913db11c4cd87",
".git/objects/7a/e8d1458824404a997d831ab1ac4d8d386762c5": "a79b8fa434cdbe7c89d5ae6b8735e1fb",
".git/objects/7c/d5505eea8db6b04b55abbae2d4083b3d88f295": "a11121e27e7f8c65f08d1164cacbfb15",
".git/objects/7d/fbb63a97956e066c6805e1f721df93211afa20": "ee98ad7ab065c55e088c999003bf96bf",
".git/objects/81/55b05d74e252a83a6a5ca689b36846e155f437": "f77d789544dbe26e9f999e37c21a414d",
".git/objects/81/f05815d4c2691dc85e81cebcc39c517a1bb170": "a650eb8daded83386b08ed6ffd21e386",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/8ad48122e4ce577047d803c6c4bde1da0df46d": "9037c2e712e751ed7ec467a94945962c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2c429cd90f56bca54e55ec9ee23f2b3c1566b9": "80596224f42a03055f918baa289fe63a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/ab73854651456fdebf6bbbaec4f2c5fbe2343e": "2844f422dea34e9c613ff46dfc21fa77",
".git/objects/8f/29c1d9d7a927ebc68789b5ccad42f2c9eb212e": "4f5f50be8e4ad8d37ab8f34dbc54d735",
".git/objects/90/12455e8ebe2dafc740fa6f537172a174023e78": "5257645bc3bcd9f067f181582a606ee1",
".git/objects/93/7d1ddd18c3ffe1a95ca0b4e15a0bd53966fff4": "eb470ac26e763ffd2a8a3220f31ae634",
".git/objects/94/426d4c6046d49b29a137a110afa07323eff3a0": "40526cabee309f6cc957c6595594895a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/489e0755cfea62c9e7adedfb1a2c4292e8eb7f": "66483a1557b455671021b7034068a114",
".git/objects/9c/d8e1a7ae4d38167d865aebdc78986146f71b9b": "e995926116dd4d0c1107797516c798cc",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/2eeec20629a9328ff2c993b40f40cc416dfa28": "f7759d3ff31871b668f9b2d2ee178180",
".git/objects/b2/7661a19927ff85f54e7d960fe90d34cc413684": "6220c5230837c5103edc8456267a9bc5",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/2e2458ad44264a423cc76d075511fac6dcdf8b": "d7d75fecdaa8169e50559e03fa175f7f",
".git/objects/cc/f27931c0dfcbd55c5f711c55b271d600e37284": "a0a1bb518973f389af4bd86ebe484329",
".git/objects/ce/630bdf0e6472ad155d4f89398b2281fcf4208e": "a44c9b3989a76dddab2ff156db37f885",
".git/objects/cf/4da13e12d2c7e42638ec65e0bb267449871d1d": "0b846037344b20e5a860d1fe148d4ee1",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/fed904b9b208d5e5a97e8a249e86b9c8e6e642": "b4c7a10a70be1e0b89c2a52150cd3e6c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d5d2631cc82acffebc15d266a639b38204d52a": "0142bbc4f0fd5d20a1434b2a97f4947e",
".git/objects/e6/3ee1fd5a1b2b9a0799982c0c0dbcedf423bc6e": "758ed825d75d9f7e35fd0651862e3ff6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a8e959ebc54ac80a2bdef5aac7bd8bd9859f38": "919edb3d3e8a3a1ab8352b18dcbfaa29",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/935a2e39911c562917929b7837d9bef9fba7dc": "24ec4770e2ae25ae736f2625027f2ac0",
".git/refs/heads/main": "cc7089e705a4d0a0a0d9bc64dfe98026",
".git/refs/remotes/origin/main": "cc7089e705a4d0a0a0d9bc64dfe98026",
"assets/AssetManifest.bin": "ef5aa7c89f5319b7c4ded82a33885108",
"assets/AssetManifest.bin.json": "54ddf4ed29be56deb4de6c89152f73a8",
"assets/AssetManifest.json": "bf64d36f444f42c712909b3616f20d5f",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/artist.png": "0924173c88c6c2671c4a8ba756f9af61",
"assets/assets/images/cassette.jpg": "9f34a3542e79f0cfc93a731b9ea47bb6",
"assets/assets/images/dhundhala.jpeg": "4f25e29748f136ef187302ac641653f6",
"assets/assets/images/genre.png": "8ab34b49b5254137a3d5671f155b5bb3",
"assets/assets/images/hindi.jpeg": "80a42713a124258aba926b7095a236a1",
"assets/assets/images/husn.jpeg": "451081a3e91007da2e2b88f474d8871d",
"assets/assets/images/icon.jpg": "bbc39e22498e186ade0178733e6f50fa",
"assets/assets/images/language.png": "a6da0957659380778e63d939f8026d98",
"assets/assets/images/liked.png": "b2100d6e863ba7efc88c6188db06ac41",
"assets/assets/images/malayalam.jpeg": "59fa24fb8a309d227da6eb72474a9df3",
"assets/assets/images/me.jpg": "bc3350567482fc95490c8826c16067e1",
"assets/assets/images/melody.jpeg": "c7093d089c90628becf759599014fc91",
"assets/assets/images/other.jpeg": "2e7751c22a696d5f7d92275055be9dec",
"assets/assets/images/pop.jpeg": "26e3dedaf6cbc85960bc81adda4abc99",
"assets/assets/images/star.png": "4c999c65a8adcce640808f1e993e39f8",
"assets/assets/images/starboy.jpeg": "7992ee3ecbc1e720d7d4240b14f1d031",
"assets/assets/images/tamil.jpeg": "6bbc38a9dc06f5e3029c0a73a73d0a1a",
"assets/FontManifest.json": "c75f82f647af98ac590d308d505b8d20",
"assets/fonts/MaterialIcons-Regular.otf": "e8e9d1d3d9447f88e72a8d67aa36165c",
"assets/NOTICES": "52322411570663f7dea1a1d6c525cd6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0dbf6c1946cb8036e0c9f3569c072df5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c9bff7c8de1045ff3f9aa2f384f2885e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c29c42a3c09a4b3905edc4389ae66821",
"/": "c29c42a3c09a4b3905edc4389ae66821",
"main.dart.js": "569abfee7fcb35e53cfccf3957d9a196",
"manifest.json": "d83eb6c113b591b0559cd84cdd27b0e2",
"version.json": "81ab6aa95199dbf64b3e242771bca0e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

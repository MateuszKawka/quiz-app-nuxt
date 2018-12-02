importScripts('/quiz-app-nuxt/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/quiz-app-nuxt/_nuxt/4d58220fb2b8632ea98f.js",
    "revision": "0079841d7e96d75f3c67a4d122761b99"
  },
  {
    "url": "/quiz-app-nuxt/_nuxt/6516bcb44cb35aa1d846.js",
    "revision": "b34293cfd26547244cada1c75d6dd1c1"
  },
  {
    "url": "/quiz-app-nuxt/_nuxt/83ab944ae5b818e08921.js",
    "revision": "bf829137df13423fb47b7b6d2a416c60"
  },
  {
    "url": "/quiz-app-nuxt/_nuxt/90e5ee417695b8918b27.js",
    "revision": "ec37424a92d5123b01ad92fe42d104d9"
  },
  {
    "url": "/quiz-app-nuxt/_nuxt/b568814a835700034bbd.js",
    "revision": "4f8c8ea5f60ab36b2065186fb51f460d"
  },
  {
    "url": "/quiz-app-nuxt/_nuxt/da0f991594cc1e7e5591.js",
    "revision": "37e1f559c7b5611082774cd0a8b4a7db"
  },
  {
    "url": "/quiz-app-nuxt/_nuxt/eff42c94f27f3c82417d.js",
    "revision": "3f393adb6e6401b175bc347a89302862"
  }
], {
  "cacheId": "quiz-app-v2",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/quiz-app-nuxt/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/quiz-app-nuxt/.*'), workbox.strategies.networkFirst({}), 'GET')

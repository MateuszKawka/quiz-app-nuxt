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
    "url": "/quiz-app-nuxt/_nuxt/b935c0ca1ef5c164f6d1.js",
    "revision": "6b1d6d1eebcc20867e765fa743682955"
  },
  {
    "url": "/quiz-app-nuxt/_nuxt/c0951e3b6705a1d4d9dd.js",
    "revision": "56fc992440dbdf8b020d785048b2bc67"
  },
  {
    "url": "/quiz-app-nuxt/_nuxt/f0ba3b82ca104a9ff1f6.js",
    "revision": "8bf5f00c41dcca5119531ad0ef514cdd"
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

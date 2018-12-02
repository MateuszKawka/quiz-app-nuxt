importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1bfb29f1cf887c2bf1c9.js",
    "revision": "4506468b5ab3b758314131d8dff84768"
  },
  {
    "url": "/_nuxt/4d58220fb2b8632ea98f.js",
    "revision": "0079841d7e96d75f3c67a4d122761b99"
  },
  {
    "url": "/_nuxt/6516bcb44cb35aa1d846.js",
    "revision": "b34293cfd26547244cada1c75d6dd1c1"
  },
  {
    "url": "/_nuxt/83ab944ae5b818e08921.js",
    "revision": "bf829137df13423fb47b7b6d2a416c60"
  },
  {
    "url": "/_nuxt/b935c0ca1ef5c164f6d1.js",
    "revision": "6b1d6d1eebcc20867e765fa743682955"
  },
  {
    "url": "/_nuxt/c0951e3b6705a1d4d9dd.js",
    "revision": "56fc992440dbdf8b020d785048b2bc67"
  },
  {
    "url": "/_nuxt/d994185635f9ae399bc7.js",
    "revision": "ace147af78ad85e6c38074b5d9982130"
  }
], {
  "cacheId": "quiz-app-v2",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6970c078814f09fdfaddb0f875b48ea8"
  },
  {
    "url": "assets/css/0.styles.9f24b5cb.css",
    "revision": "480052c2c0eaf61874b71eeb45c0d6dc"
  },
  {
    "url": "assets/img/createdUserResult.47c14c2c.jpeg",
    "revision": "47c14c2cbe82b9d4f55d880959667312"
  },
  {
    "url": "assets/img/createTaskReq.a4479996.jpeg",
    "revision": "a4479996771a5f943569569696974b2f"
  },
  {
    "url": "assets/img/createTaskResult.2f23b6bd.jpeg",
    "revision": "2f23b6bd4606f3ffd1840a8400f22eab"
  },
  {
    "url": "assets/img/createUserRequest.808daa8d.jpeg",
    "revision": "808daa8d0ec44976c84bca80623a3c37"
  },
  {
    "url": "assets/img/deletedUserResult.74f35d9f.jpeg",
    "revision": "74f35d9f099c3f8b34a0636bd0e01613"
  },
  {
    "url": "assets/img/deleteTaskReq.9ae284b2.jpeg",
    "revision": "9ae284b24011ce9d2693ff940d4b5f15"
  },
  {
    "url": "assets/img/deleteTaskResult.7e129a05.jpeg",
    "revision": "7e129a050251ab8b11a96276d7429ed5"
  },
  {
    "url": "assets/img/deleteUserReq.f5db860a.jpeg",
    "revision": "f5db860a50b244fff54e6bf8711cf862"
  },
  {
    "url": "assets/img/rel_scheme.aa1ccce9.png",
    "revision": "aa1ccce90d0880d0a3215ed919ec1cef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/updatedUserResult.9aa9ef48.jpeg",
    "revision": "9aa9ef48211217b5598a9b6c1313efb4"
  },
  {
    "url": "assets/img/updateTaskReq.d3c5f9d9.jpeg",
    "revision": "d3c5f9d99f0a51b816012cc5094ca08e"
  },
  {
    "url": "assets/img/updateTaskResult.ee7eb2fe.jpeg",
    "revision": "ee7eb2fef3fc9e946c0dd6b2cf583371"
  },
  {
    "url": "assets/img/updateUserReq.136eda95.jpeg",
    "revision": "136eda95108f74d9e129c2cecb27e6e4"
  },
  {
    "url": "assets/js/1.a1a589e3.js",
    "revision": "af657d6d4bfe403c6f44bb67a8c1a203"
  },
  {
    "url": "assets/js/10.c3075cff.js",
    "revision": "039cb30e4b09b54858988c9633ab2d53"
  },
  {
    "url": "assets/js/13.3ab671eb.js",
    "revision": "d06cafe03dac1a82b363fe7952d28713"
  },
  {
    "url": "assets/js/14.5b2de81e.js",
    "revision": "c6f6850b0dffa62d873a4ff9b4fefe77"
  },
  {
    "url": "assets/js/15.83575e7c.js",
    "revision": "aaf4252a551538ea97e8c098d905953f"
  },
  {
    "url": "assets/js/16.768b2f65.js",
    "revision": "c948025b46d85572a39b57054de1b523"
  },
  {
    "url": "assets/js/17.12025469.js",
    "revision": "1690fe4795f80c4ab557b17f3013436b"
  },
  {
    "url": "assets/js/18.17d7d4c7.js",
    "revision": "430d15fe7ba03c487296169708bd2a5d"
  },
  {
    "url": "assets/js/19.cf4c0059.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.719a43ec.js",
    "revision": "b7856903779b2c05cacc28e26d387496"
  },
  {
    "url": "assets/js/20.56811147.js",
    "revision": "8fd5d85e7e98792842e55fdb2fd3237d"
  },
  {
    "url": "assets/js/21.9840ee13.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.04214989.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.c6e1dfb1.js",
    "revision": "4a0a42a49a5cddded8548d3f12db3471"
  },
  {
    "url": "assets/js/25.acae8e0e.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.2ced7144.js",
    "revision": "9c0a5157d4cc30993acc627bcff79c74"
  },
  {
    "url": "assets/js/27.ea368885.js",
    "revision": "404db6b16cf7f42452fade3ccec31122"
  },
  {
    "url": "assets/js/28.ebe252ba.js",
    "revision": "ef02c0fda4db4af41f62f7abe1417183"
  },
  {
    "url": "assets/js/29.0b7ce706.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.b08aed10.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.14bb99e0.js",
    "revision": "04d1b9abc238aff4bc43ea99177454e0"
  },
  {
    "url": "assets/js/31.0cd9ce7d.js",
    "revision": "42fd063830f3c14c193f7de26bb0ceff"
  },
  {
    "url": "assets/js/32.4debd36f.js",
    "revision": "91bea2fae56b8a7a29cf77f316b0650b"
  },
  {
    "url": "assets/js/33.82f74ec7.js",
    "revision": "362bc581afe07d3420d3ee1014a8d4e0"
  },
  {
    "url": "assets/js/34.a43e87a3.js",
    "revision": "44e3d998cf5e99618cbebd9699f79de5"
  },
  {
    "url": "assets/js/35.302bb8e9.js",
    "revision": "fff502c03765a5017a8d33f124fe60d2"
  },
  {
    "url": "assets/js/36.bcc2ad0f.js",
    "revision": "0a7217a1d1342d9a644f7ddf22bfb7f5"
  },
  {
    "url": "assets/js/37.58dc1e88.js",
    "revision": "0b37e897c6e1307d20c491a6e3bfbee8"
  },
  {
    "url": "assets/js/38.c9dbd3bf.js",
    "revision": "4147d8f519d495cf4ce8401b9ea2038c"
  },
  {
    "url": "assets/js/39.faf93294.js",
    "revision": "4008c3940db3222761cecd565ffba682"
  },
  {
    "url": "assets/js/4.db34cb2c.js",
    "revision": "fa18f46fdf6304ce3fd246ba1b7834f2"
  },
  {
    "url": "assets/js/41.b559b8f8.js",
    "revision": "61ffd4728e85819720eb953d7c14cd62"
  },
  {
    "url": "assets/js/5.5a26b30c.js",
    "revision": "cb344231fbc314681510eb946878ffd4"
  },
  {
    "url": "assets/js/6.5ed836b2.js",
    "revision": "56e3e0ce0d0855c062f2fd81de044f31"
  },
  {
    "url": "assets/js/7.c9ef2030.js",
    "revision": "3829dd176a599fbf387762cbdd06f8a2"
  },
  {
    "url": "assets/js/8.e5f10b04.js",
    "revision": "c9524fb27caade5f6459d492de933a01"
  },
  {
    "url": "assets/js/9.25bc86e3.js",
    "revision": "cb83f182e17eabacb9ad883d8224dee7"
  },
  {
    "url": "assets/js/app.ef185940.js",
    "revision": "b1ce54d72587e9051a4f945b4899322d"
  },
  {
    "url": "assets/js/vendors~docsearch.79583025.js",
    "revision": "f7fe9c0c6e471b329c0e2be99d6f79da"
  },
  {
    "url": "conclusion/index.html",
    "revision": "375c26b1219d730208adf96dbefbdb68"
  },
  {
    "url": "design/index.html",
    "revision": "ae1a2026e6a69303cb45bb3a8ba0b7db"
  },
  {
    "url": "index.html",
    "revision": "85a2c131c09ae45b2ec7b65f8df70346"
  },
  {
    "url": "intro/index.html",
    "revision": "c51a32887dda5000fb750b070ffba347"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a0f7841d6d1f8c0b5254b32315000165"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "77e00d3dc6fdf4c9e4a6dfa661bfdb84"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9a80c0c492e278acc68a200ffb4580a4"
  },
  {
    "url": "software/index.html",
    "revision": "a599de05d8a66d6a35cc02f6d1b6a2bb"
  },
  {
    "url": "test/index.html",
    "revision": "993c7811eb08159215c2934b1fd0c93f"
  },
  {
    "url": "use cases/index.html",
    "revision": "d55bcb54cb056c63f86c8808cd6b619b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

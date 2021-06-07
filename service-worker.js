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
    "revision": "0dea92bbe6a44c0459b7dd65a019d3f0"
  },
  {
    "url": "assets/css/0.styles.5d61dfff.css",
    "revision": "6538de8ad4647bee431d21042910157b"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "a80f27db517b7b81d96c4fa17d22477d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/taro/taro1.png",
    "revision": "501016e1a3d4a8da46b27be2232efdb9"
  },
  {
    "url": "assets/img/taro/taro2.png",
    "revision": "e79c9c6aff07c1994f098e969d481821"
  },
  {
    "url": "assets/img/taro/taro3.png",
    "revision": "ba407d760c4a98adc520b2bd42bd8c83"
  },
  {
    "url": "assets/img/taro/taro4.png",
    "revision": "1abddb60b660b78dfc1dde9e40ba7176"
  },
  {
    "url": "assets/img/taro/taro5.png",
    "revision": "4231946ce535193eff8b33b0e70dd4b1"
  },
  {
    "url": "assets/img/taro/taro6.png",
    "revision": "9c385253c22f9c03edead33bdb861631"
  },
  {
    "url": "assets/img/taro/taro7.png",
    "revision": "a48bd85b0f19e1f7bfeac1a4bf113638"
  },
  {
    "url": "assets/img/wx/subpackage1.png",
    "revision": "a9f404ca708eba13931fd586e99dcd32"
  },
  {
    "url": "assets/img/wx/subpackage2.png",
    "revision": "78c1e6b9d70bc51e663c15868f9aaf2d"
  },
  {
    "url": "assets/img/wx/subpackage3.png",
    "revision": "9f125953274992ffde2ef95527cf518e"
  },
  {
    "url": "assets/img/wx/subpackage4.png",
    "revision": "4a30a952a217bf3ad61e9b604ffc83b8"
  },
  {
    "url": "assets/img/wx/subpackage5.png",
    "revision": "17c794122bf411eab56805e9dc97eeb8"
  },
  {
    "url": "assets/img/wx/subpackage6.png",
    "revision": "29ebea621ed6204685cd1a65dae93d35"
  },
  {
    "url": "assets/img/wx/subpackage7.png",
    "revision": "111bf5543e6bdfbcd3f0a320045edfea"
  },
  {
    "url": "assets/js/10.49efdb74.js",
    "revision": "bc5848e12ba1f16dad0740071f98e664"
  },
  {
    "url": "assets/js/11.90ec52ca.js",
    "revision": "ae71fef070c0474824f2b4577287515b"
  },
  {
    "url": "assets/js/12.a7d673a6.js",
    "revision": "a82e27108a0b55b98671cadab34a3855"
  },
  {
    "url": "assets/js/13.1340c431.js",
    "revision": "847c1632af20f5d3b8cabec9bcef5ed4"
  },
  {
    "url": "assets/js/14.e4a52496.js",
    "revision": "13980c91b890e465ed2a73068aedefba"
  },
  {
    "url": "assets/js/15.7e7f2a77.js",
    "revision": "b030a540007d5ce973565fd063bc6cd0"
  },
  {
    "url": "assets/js/16.7fa03481.js",
    "revision": "0f99fe776136c226095035fe35b2809f"
  },
  {
    "url": "assets/js/17.9ebe67e2.js",
    "revision": "dc6d90429d1436f1c7067f766ffe4b08"
  },
  {
    "url": "assets/js/18.c4c3b078.js",
    "revision": "c26d3936080be9e1afe52492d4de474c"
  },
  {
    "url": "assets/js/19.e92599f6.js",
    "revision": "5b7d337409aea1e93b8c1580542e2ad2"
  },
  {
    "url": "assets/js/2.49180a5f.js",
    "revision": "771fd4e75b8e32d71a6c1d896e1158f3"
  },
  {
    "url": "assets/js/20.f7a193a8.js",
    "revision": "fd01576b84ce81cce6e9c732fad897c9"
  },
  {
    "url": "assets/js/21.3018e3dc.js",
    "revision": "b9000be6ce1ebe7195d536cac12eac23"
  },
  {
    "url": "assets/js/22.c19b2bf2.js",
    "revision": "b7a3d5657d333c9482fa78d0222551b0"
  },
  {
    "url": "assets/js/3.a7939cb3.js",
    "revision": "d9987cbda10341b2f438575d0f7456e1"
  },
  {
    "url": "assets/js/4.cbfd6297.js",
    "revision": "bfb4f2318e4c1138c58d3203113dbc06"
  },
  {
    "url": "assets/js/5.bca9cb51.js",
    "revision": "b270d77a7f58f0048004a739681c725d"
  },
  {
    "url": "assets/js/6.5820bcc6.js",
    "revision": "44bdfc68430d8d4931f1cb123841ee56"
  },
  {
    "url": "assets/js/7.b3fc0064.js",
    "revision": "02a780221cb7181d399d13f202e24b20"
  },
  {
    "url": "assets/js/8.8f2eb329.js",
    "revision": "66e35d6e780b84e68ba6d64ad45c47cf"
  },
  {
    "url": "assets/js/9.63e5d6f7.js",
    "revision": "c84230232a05a9fd2100233a0b3a1aa7"
  },
  {
    "url": "assets/js/app.573ade0d.js",
    "revision": "5ba1ff67152af9198f7616a8fe542965"
  },
  {
    "url": "bug/H5.html",
    "revision": "7d5c431b245445f1f5631fc68266316c"
  },
  {
    "url": "bug/index.html",
    "revision": "25c3a6962bf44bb814dbb40b9df296e5"
  },
  {
    "url": "git/index.html",
    "revision": "5d4cd5206e2fc039950e20c8c22a536a"
  },
  {
    "url": "index.html",
    "revision": "cd93234045ed540c4ad95276e9c72c7b"
  },
  {
    "url": "node/index.html",
    "revision": "2eb14f6b2c447f534a9efdd6205d8ab5"
  },
  {
    "url": "react/index.html",
    "revision": "ff7b7749aa0136cc0d15e9c5a3907034"
  },
  {
    "url": "taro/common.html",
    "revision": "a7fcd06aba2a48da19e39d46f45bfe97"
  },
  {
    "url": "taro/index.html",
    "revision": "c89acf2bf69ec14fb68074f32a1d7077"
  },
  {
    "url": "typescript/index.html",
    "revision": "0824bfbf88f8a4804b914646f7317ea3"
  },
  {
    "url": "utils/regexp.html",
    "revision": "67fcc2c6396068a3b15bdaaef25ab723"
  },
  {
    "url": "utils/skill.html",
    "revision": "3fe68a231ca73282944dac620ab63a4d"
  },
  {
    "url": "vue/index.html",
    "revision": "402991ff0909c9b8b1987736e3637834"
  },
  {
    "url": "wx/index.html",
    "revision": "dbcd51ff853f23da20afccfb12e26e18"
  },
  {
    "url": "wx/subpackage.html",
    "revision": "f37bcec8b94df7f59b352ed58fd81a65"
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

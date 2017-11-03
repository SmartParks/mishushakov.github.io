importScripts('/worker-polyfill.js')
self.addEventListener('install', function(event) {
    
    console.log("Google Moogle worker installed")
    event.waitUntil(caches.open('mu').then(function(cache) {
        return cache.addAll([
            '/',
            '/index.html',
            'https://fonts.googleapis.com/icon?family=Material+Icons',
            'https://unpkg.com/material-components-web@0.20.0/dist/material-components-web.min.css',
            'https://mish.io/Ushakov/images/logo/Placeholder.png',
            'https://mish.io/Ushakov/images/icons/mubot.png',
          //'https://imgur.com/2WBewXv.png',
            'https://mish.io/Ushakov/images/icons/TMachine.png',
          //'https://www.ethode.com/contentAsset/image/e65ea977-f4b2-4cc2-8ffc-8a92127b999e/image/filter/Resize/resize_w/400',
            'https://mish.io/Ushakov/images/icons/mfolder.ico',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghWYXueAQVPvV2AVLHbCI3Y6km5n7GBUNZmSsgNeU68UZxifLoA',
          //'https://qph.ec.quoracdn.net/main-thumb-t-1800-200-lOn8kKfhqfcTcKdt2GwaLfGnC0jEjHmV.jpeg',
          //'https://imgur.com/pjNvoyJ.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/600px-VK.com-logo.svg.png',
            'https://pbs.twimg.com/profile_images/1250624875/tw-128-btg-v3_400x400.jpg',
            'https://mish.io/Ushakov/images/icons/octocat.png',
            'https://mish.io/Ushakov/images/icons/tap2.png',
            'https://pp.userapi.com/c639331/v639331097/3d771/YvGfr97mKeM.jpg',
            'https://pp.userapi.com/c841328/v841328051/2a591/sIRPCwN27tA.jpg',
            'https://pp.userapi.com/c840537/v840537090/115af/ZAO1jSSTeCI.jpg',
            'https://pp.userapi.com/c639521/v639521019/5c45f/bZP30OeNNnw.jpg',
            'https://pp.userapi.com/c840437/v840437590/15bfd/JKBGlOz6qQ4.jpg',
            'https://pp.userapi.com/c840132/v840132898/3b192/79qTNvmbvz8.jpg',
            'https://vignette1.wikia.nocookie.net/logopedia/images/f/f7/2000px-Google_2015_monochrome.svg.png/revision/latest?cb=20150901175304',
          //'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png',
          //'https://pngimg.com/uploads/ibm/ibm_PNG19648.png',
            '/assets/ushakov.png',
            '/assets/manifest_icons/web_hi_res_512.png',
            '/dist/build.js'
        ])
    }))
})

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
    }))
})
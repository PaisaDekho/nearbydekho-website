self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('video-cache').then(function(cache) {
            return cache.addAll([
                'https://d204mdjt2q4azq.cloudfront.net/Home.mp4'
            ])
        })
    )
})


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request)
        })
    )
})
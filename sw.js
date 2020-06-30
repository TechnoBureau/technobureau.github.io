importScripts('/js/workbox/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' ||
                   request.destination === 'style'  ||
                   request.destination === 'image'  ||
                   request.destination === 'font'   ||
                   request.destination === 'document',
    new workbox.strategies.StaleWhileRevalidate()
);

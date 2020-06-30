importScripts('/js/workbox/workbox-sw.js');
//cont CACHE = "TB-CACHE";
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

registerRoute(
    ({request}) => request.destination === 'script' ||
                   request.destination === 'style'  ||
                   request.destination === 'image'  ||
                   request.destination === 'font'   ||
                   request.destination === 'document',
    new StaleWhileRevalidate()
);
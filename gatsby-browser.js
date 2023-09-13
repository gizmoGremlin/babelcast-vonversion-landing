const { WOW } = require('wowjs/dist/wow.js');

exports.onRouteUpdate = (state) => {
    new WOW().init();
}
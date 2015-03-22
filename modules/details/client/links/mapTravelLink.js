"use strict";

module.exports = function (scope, element, attrs) {
    var $scrollToTop = $(element.find('.scroll-to-top'));
    var $body = $('html,body');
    var $mapTravelDrawer = $(element.find('.map-travel-container'));

    $scrollToTop.click(function () {
        $body.animate({ scrollTop: 0}, 1000);
        $mapTravelDrawer.hide();
    });
};
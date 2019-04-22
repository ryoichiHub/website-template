(function($){
    'use strict';
    
    //region Link on the page by Smooth Scroll
    var notSmoothScrollAnchor = '#back-top a';
    $('a[href^="#"]').not(notSmoothScrollAnchor).click(function () {
        var speed = 800;
        var href = $(this).attr('href');
        var target = $(href === '#' || href === '' ? 'html' : href);

        target.velocity('scroll', { duration: speed, easing: 'easeOutQuad' });

        return false;
    });
    //endregion

    //region Detected : Not( Mobile & SmartPhone & Tablet )
    var md = new MobileDetect(window.navigator.userAgent);
    if(!md.mobile() && !md.phone() && !md.tablet()) {

    }
    //endregion

    //region FastClick attach.
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }
    //endregion

    /*
     Support SVG Sprites for IE
     */
    // svg4everybody();

    /**
     * 各セクションのアコーディオン
     */
    $('.point-section h2 span').on('click', function() {
        $(this).parent().next().slideToggle();
    });

    $('.appeal-section__service-description h2 span').on('click', function() {
        $(this).parent().next().slideToggle();
    });
})(jQuery);
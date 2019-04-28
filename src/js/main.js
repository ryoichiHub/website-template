import './plugins.js';

(function($){
    'use strict';
    
    //region Link on the page by Smooth Scroll
    const notSmoothScrollAnchor = '#back-top a';
    $('a[href^="#"]').not(notSmoothScrollAnchor).click(function () {
        var speed = 800;
        var href = $(this).attr('href');
        var target = $(href === '#' || href === '' ? 'html' : href);

        target.velocity('scroll', { duration: speed, easing: 'easeOutQuad' });

        return false;
    });
    //endregion

    /*
     Support SVG Sprites for IE
     */
    // svg4everybody();
})(jQuery);
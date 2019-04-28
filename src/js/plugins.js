// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function($){
    /**
     * Toggle Text
     *
     * Reference:
     * http://thetimbanks.com/2011/03/22/jquery-extension-toggletext-method/
     *
     * @param value1
     * @param value2
     * @returns {*}
     */
    jQuery.fn.toggleText = function (value1, value2) {
        return this.each(function () {
            var $this = $(this),
                text = $this.text();

            if (text.indexOf(value1) > -1)
                $this.text(text.replace(value1, value2));
            else
                $this.text(text.replace(value2, value1));
        });
    };
})(jQuery);

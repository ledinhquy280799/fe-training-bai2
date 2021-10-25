$(document).ready(function() {
    $('[data-fancybox]').fancybox({
        animationEffect: "slide",
        transitionEffect: "circular",
        loop: "true",
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "thumbs",
            "close"
        ]
    });
});
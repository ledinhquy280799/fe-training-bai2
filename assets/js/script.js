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
$(window).on('load', function() {
    $(".loader").fadeOut(1000);
});
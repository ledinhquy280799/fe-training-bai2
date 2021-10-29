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

    $('.open-responsive-menu').click(function() {
        $('.responsive-menu').toggleClass('active');
    });
});
$(window).on('load', function() {
    $(".loader").fadeOut(1000);
});

$(window).scroll(function() {
    console.log($(document).scrollTop());
    if ($(document).scrollTop() > 50) {
        $(".top-header").css("z-index", "90");
        $(".top-header").css("background-color", "rgba(0, 0, 0, 0.8)")
    } else {
        $(".top-header").css("background-color", "rgb(255, 255, 255, 0.4)");
    }
});
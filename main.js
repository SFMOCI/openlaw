$(function() {
    $(".navbar").sticky({topSpacing:0});
    $(".navbar").localScroll({
        axis : "y",
        duration : 1000,
        easing : "easeInOutExpo",
        hash : true,
        offset: -70
    });
});
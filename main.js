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

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function redirect() {
    window.location = "http://" + getParameterByName("redirect");
}
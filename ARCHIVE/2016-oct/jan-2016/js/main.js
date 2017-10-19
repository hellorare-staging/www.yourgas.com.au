$(document).ready(function(){
    $('#nav-icon').click(function() {
            $(this).toggleClass('open');
            $(this).next('.mainNav').slideToggle();
    });
    $(".content-wrapper").css("min-height", $(window).height() - $("footer").height() - $("header").height() - 30);
});
$(window).resize(function(){
    $(".content-wrapper").css("min-height", $(window).height() - $("footer").height() - $("header").height() - 30);
});
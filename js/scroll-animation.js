$(document).ready(function(){

    /*--------------- animation on scroll ---------------*/
    
    let element = $('.js-bar');
    let banner = $('.js-banner');
    $counter = 0;

    $(window).scroll(function(){
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = element.offset().top;
        let offsetBanner = banner.offset().top;

        if (scroll > offset && $counter == 0) {
            $('.js-bar').css({ 'animation': 'bar-grow 1s linear 0s 1 alternate'});
            $counter = 1;
        } 
        
        if (scroll > offsetBanner && $counter == 1) {
            banner.addClass('banner-acrive');
            $counter = 2;
        }

        
    });


});




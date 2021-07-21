$(document).ready(function(){

    /*--------------- animation on scroll ---------------*/
    
    let element = $('.js-bar');
    $counter = 0;

    $(window).scroll(function(){
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = element.offset().top;

        if (scroll > offset && $counter == 0) {
            $('.js-bar').css({ 'animation': 'bar-grow 1s linear 0s 1 alternate'});
            $counter = 1;
        }
    });
});




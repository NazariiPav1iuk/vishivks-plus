$(document).ready(function(){

    let banner = $('.js-banner');
    let bannerActive = 'banner-active';
   
    $(window).scroll(function(){
        function Animate(el, adEl){
            let scroll = $(window).scrollTop() + $(window).height();
            let offset = el.offset().top;

            if (scroll > offset) {
                el.addClass(adEl);
            } 
        };
    
        Animate(banner, bannerActive);

    });
    
});
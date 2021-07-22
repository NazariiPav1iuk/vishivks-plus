$(document).ready(function(){


    /*--------------- nav-toggle ---------------*/

    let navToggleMenu = $(".header__nav"); 
    let navToggle = $(".nav-toggle");
    let logo = $('.logo');
    let dropBtn = $('.drop-down');
    let dropDownMenu = $('.dropp-down__menu');

    navToggle.click(function() {
        navToggleMenu.slideToggle(200).toggleClass('header__nav--active');
        navToggle.toggleClass('nav-toggle--active');
        dropDownMenu.removeClass('drop-down--active');
        dropBtn.removeClass('icon--active');
        dropDownMenu.css("display", "");   
    });

    // close nav-togle on click outside
    $(document).click(function (e) { 
        if ( ! navToggle.is(e.target) && navToggle.has(e.target).length === 0 &&
        ! navToggleMenu.is(e.target) && navToggleMenu.has(e.target).length === 0 &&
        ! logo.is(e.target) && logo.has(e.target).length === 0 ) {
            navToggleMenu.removeClass('header__nav--active');
            navToggle.removeClass('nav-toggle--active');
            dropDownMenu.removeClass('drop-down--active');
            dropBtn.removeClass('icon--active');
            dropDownMenu.css("display", "");   
            navToggleMenu.css("display", "");     
        }
    });

    dropBtn.on('click', function(){
      dropDownMenu.slideToggle(200).toggleClass('drop-down--active');
      dropBtn.toggleClass('icon--active');
    });

    /*--------------- up-btn ---------------*/


    $(window).scroll(function(){
        let sticky = $('.up-btn'),
            scroll = $(window).scrollTop();
        
        if (scroll >= 110) sticky.addClass('up-btn--active');
        else sticky.removeClass('up-btn--active');
    });

    /*--------------- smooth scroll ---------------*/

    $('a.yakor').on('click', function (event) {
        let $anchor  = $(this)
        $('html, body')
        .stop()
        .animate(
          {
           scrollTop: $($anchor.attr('href')).offset().top, 
          },
          {
            duration: 1000,
            specialEasing: {
              width: 'linear',
              height: 'easyInOutCubic',
            },
          }
        );
        event.preventDefault()
      });

      /*--------------- slick-slider ---------------*/
 
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    });    
      
});
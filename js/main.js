$(function (){

    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
    });

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       100,          // default
        mobile:       false,       // default
        live:         true        // default
      }
      )
      wow.init();

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                  arrows: false
              }
            }
        ]
      });

      $('.heroes__slider-text').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          arrows: false,
          asNavFor: '.heroes__slider-img'
      });

});
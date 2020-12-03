@@include('./_responsive.js')

$('.first-block-slider').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 1000,
   infinity: true,
   // dots: true,
   // appendDots: $('.twitter-slider__dots')
});

$('.guarant__slider').slick({
   centerMode: true,
   // centerPadding: '60px',
   slidesToShow: 5,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 1500,
   speed: 1000,
   infinity: true,
   dots: true,
   // appendDots: $('.twitter-slider__dots')
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 425,
         settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});
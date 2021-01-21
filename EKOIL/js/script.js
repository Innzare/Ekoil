// === Адаптивность навигации
$(window).resize(function (event) {
   adaptiveFunction();
});

function adaptiveHeader(w, h) {
   let headerMenu = $('.header-menu');

   if (w <= 768) {
      if (!$('.header-menu-nav').hasClass('done')) {
         $('.header-menu-nav').addClass('done').appendTo(headerMenu);
      }
   } else {
      $.each($('.header-menu-nav'), function (index, val) {
         if ($(this).hasClass('done')) {
            $(this).removeClass('done').prependTo($('nav'));

         };
      });
   }
}

function adaptiveFunction() {
   let w = $(window).outerWidth();
   let h = $(window).outerHeight();
   adaptiveHeader(w, h);
}

adaptiveFunction();
// === Адаптивность навигации

// === Вызов меню бургер
$('.header-menu__icon').click(function (event) {
   $(this).toggleClass('active');
   $('.header-menu').toggleClass('active');
   if ($(this).hasClass('active')) {
      $(this).css({ 'position': 'fixed', 'right': '20px' });
   } else if (!$(this).hasClass('active')) {
      $(this).css({ 'position': 'absolute', 'right': '20px' });
      if ($(window) < 468) {
         $(this).css({ 'position': 'absolute', 'right': '20px' });
      }
   }
});
// === Вызов меню бургер


function catalogFilter() {
   const filterBtns = document.querySelectorAll('.filter-buttons');
   const catalogItems = document.querySelectorAll('.catalog-item');

   function filter(category, items) {
      items.forEach((item) => {
         const isItemFiltered = !item.classList.contains(category);
         const isShowAll = category.toLowerCase() === 'oil-all';
         if (isItemFiltered && !isShowAll) {
            item.classList.add('catalog-item--hideAnime');
         } else {
            item.classList.remove('catalog-item--hide');
            item.classList.remove('catalog-item--hideAnime');
         }
      });
   }

   filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
         const currentCategory = btn.dataset.filter;
         filter(currentCategory, catalogItems);
      });
   });

   // catalogItems.forEach((card) => {
   //    card.ontransitionend = function () {
   //       if (card.classList.contains('catalog-item--hideAnime')) {
   //          card.classList.add('catalog-item--hide');
   //       }
   //    };
   // });
}

catalogFilter();
ScrollReveal().reveal('.htmlclass', { delay: 400 })
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
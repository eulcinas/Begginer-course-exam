const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
 // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   breakpoints: {
     1060: {
       slidesPerView: 3,
       slidesPerGroup: 3,
       allowSlidePrev: false,
       allowSlideNext: false,
     }
   }
 });
 /* COMMENTS SWIPER */

 const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,

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
     allowSlidePrev: true,
     allowSlideNext: true,
   }
 }
});
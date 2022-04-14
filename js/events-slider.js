const swiperevents = new Swiper('.js-events-slider', {
  slidesPerView:1,
  spaceBetween:20,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.js-events-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.js-events-nextev',
    prevEl: '.js-events-prevev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints:{
  611:{
        slidesPerView:2,
        spaceBetween:34,
       },
  971:{
      slidesPerView:3,
      spaceBetween:27,
  },
  1281:{
          slidesPerView:3,
          spaceBetween:50,
      },
  }
});
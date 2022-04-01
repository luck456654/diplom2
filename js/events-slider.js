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
    1023:{
        slidesPerView:2,
        spaceBetween:27,
        },
    1919:{
          slidesPerView:3,
          spaceBetween:50,
      },    
    1920:{
          slidesPerView:3,
          spaceBetween:50,
      },
  }
});
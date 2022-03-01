const swiperpartners = new Swiper('.js-partners-slider', {
    slidesPerView:1,
    spaceBetween:20,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.js-partners-next',
      prevEl: '.js-partners-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints:{
      611:{
          slidesPerView:2,
          spaceBetween:14,
      },
       971:{
            slidesPerView:2,
            spaceBetween:50,
        },
        1281:{
            slidesPerView:3,
            spaceBetween:50,
        },
    }
  });
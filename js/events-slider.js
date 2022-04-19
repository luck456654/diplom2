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


let butnext=document.querySelector(".events__slider__next")
let butprev=document.querySelector('.events__slider__prev')
let sost=1;

butnext.addEventListener("click",sostadd)
butprev.addEventListener("click",sostreduce)

function sostadd(){
  sost=sost+1;
  if (sost<=1){
    butprev.style="display:none!important";
    butnext.style="display:block!important";
  }
  if (sost>=2){
    butprev.style="display:block!important";
    butnext.style="display:block!important";
   }
  if (sost>=3){
    butprev.style="display:block!important";
    butnext.style="display:none!important";
  }
  return sost;
 
}
function sostreduce(){
  sost=sost-1;
  if (sost<=1){
    butprev.style="display:none!important";
    butnext.style="display:block!important";
  }
  if (sost>=2){
    butprev.style="display:block!important";
    butnext.style="display:block!important";   
  }
  if (sost>=3){
    butprev.style="display:block!important";
    butnext.style="display:none!important";
  }
  return sost;
  
}

if (sost<=1){
  butprev.style="display:none!important";
  butnext.style="display:block!important";
}
if (sost>=2){
  butprev.style="display:block!important";
  butnext.style="display:block!important";
}
if (sost>=3){
  butprev.style="display:block!important";
  butnext.style="display:none!important";
}

if (screen.width<1280){
  butprev.style="display:none!important";
  butnext.style="display:none!important";
}
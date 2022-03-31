(() => {
    new Accordion(".js-accordion-container", {
      openOnInit: [0]
    });
  })();
  
let hi1sost=0;
let li1=document.querySelector(".catalog__li1")
let hi1=document.getElementById("hicon1")
li1.addEventListener("click",rotateli1)
li1.addEventListener("blur",rotateli1)

let hi2sost=0;
let li2=document.querySelector(".catalog__li2")
let hi2=document.getElementById("hicon2")
li2.addEventListener("click",rotateli2)

let hi3sost=0;
let li3=document.querySelector(".catalog__li3")
let hi3=document.getElementById("hicon3")
li3.addEventListener("click",rotateli3)

function rotateli1(){
  if (hi1sost==0){  
    hi1.style.transform="rotate(180deg) translateY(22px)";
    hi1.style.transition="transform 0.00005s linear";
    if (hi2sost==1){
      hi2.style.transform="rotate(360deg) translateY(-22px)" 
      hi2.style.transition="transform 0.00005s linear"
    }
    if (hi3sost==1){
      hi3.style.transform="rotate(360deg) translateY(-22px)" 
      hi3.style.transition="transform 0.00005s linear"
    }
    if (hi4sost==1){
      hi4.style.transform="rotate(360deg) translateY(-22px)" 
      hi4.style.transition="transform 0.00005s linear"
    }
    if (hi5sost==1){
      hi5.style.transform="rotate(360deg) translateY(-22px)" 
      hi5.style.transition="transform 0.00005s linear"
    }
    if (hi6sost==1){
      hi6.style.transform="rotate(360deg) translateY(-22px)" 
      hi6.style.transition="transform 0.00005s linear"
    }
    if (hi7sost==1){
      hi7.style.transform="rotate(360deg) translateY(-22px)" 
      hi7.style.transition="transform 0.00005s linear"
    }
       return (hi1sost=1,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=0,hi7sost=0)
      }
      else{
      hi1.style.transform="rotate(360deg) translateY(-22px)" 
      hi1.style.transition="transform 0.00005s linear"
      hi2.style.transform="rotate(360deg) translateY(-22px)" 
      hi2.style.transition="transform 0.00005s linear"
      hi3.style.transform="rotate(360deg) translateY(-22px)" 
      hi3.style.transition="transform 0.00005s linear"
      hi4.style.transform="rotate(360deg) translateY(-22px)" 
      hi4.style.transition="transform 0.00005s linear"
      hi5.style.transform="rotate(360deg) translateY(-22px)" 
      hi5.style.transition="transform 0.00005s linear"
      hi6.style.transform="rotate(360deg) translateY(-22px)" 
      hi6.style.transition="transform 0.00005s linear"
      hi7.style.transform="rotate(360deg) translateY(-22px)" 
      hi7.style.transition="transform 0.00005s linear"
      return (hi1sost=0,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=0,hi7sost=0)
}
}



function rotateli2(){
  if (hi2sost==0){  
    hi2.style.transform="rotate(180deg) translateY(22px)";
    hi2.style.transition="transform 0.00005s linear";
    if (hi1sost==1){  
      hi1.style.transform="rotate(360deg) translateY(-22px)";
      hi1.style.transition="transform 0.00005s linear";
    }
    if (hi3sost==1){
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
      }
    if (hi4sost==1){
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
      }
    if (hi5sost==1){
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
      }
    if (hi6sost==1){
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
      }
    if (hi7sost==1){
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
      }
      return (hi1sost=0,hi2sost=1,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=0,hi7sost=0)
    }
    else{
        hi1.style.transform="rotate(360deg) translateY(-22px)" 
        hi1.style.transition="transform 0.00005s linear"
        hi2.style.transform="rotate(360deg) translateY(-22px)" 
        hi2.style.transition="transform 0.00005s linear"
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
        return (hi1sost=0,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=0,hi7sost=0)
  }
}



function rotateli3(){
  if (hi3sost==0){  
    hi3.style.transform="rotate(180deg) translateY(22px)";
    hi3.style.transition="transform 0.00005s linear";
    if (hi1sost==1){  
      hi1.style.transform="rotate(360deg) translateY(-22px)";
      hi1.style.transition="transform 0.00005s linear";
    }
    if (hi2sost==1){  
      hi2.style.transform="rotate(360deg) translateY(-22px)";
      hi2.style.transition="transform 0.00005s linear";
    }
    if (hi1sost==1){
        hi1.style.transform="rotate(360deg) translateY(-22px)" 
        hi1.style.transition="transform 0.00005s linear"
      }
    if (hi4sost==1){
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
      }
    if (hi5sost==1){
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
      }
    if (hi6sost==1){
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
      }
    if (hi7sost==1){
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
      }
      return (hi1sost=0,hi2sost=0,hi3sost=1,hi4sost=0,hi5sost=0,hi6sost=0,hi7sost=0)
    }
    else{
        hi1.style.transform="rotate(360deg) translateY(-22px)" 
        hi1.style.transition="transform 0.00005s linear"
        hi2.style.transform="rotate(360deg) translateY(-22px)" 
        hi2.style.transition="transform 0.00005s linear"
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
        return (hi1sost=0,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=0,hi7sost=0)
  }
}
let hi4sost=0;
let li4=document.querySelector(".catalog__li4")
let hi4=document.getElementById("hicon4")
li4.addEventListener("click",rotateli4)

function rotateli4(){
  if (hi4sost==0){  
    hi4.style.transform="rotate(180deg) translateY(22px)";
    hi4.style.transition="transform 0.00005s linear"
    if (hi1sost==1){  
      hi1.style.transform="rotate(360deg) translateY(-22px)";
      hi1.style.transition="transform 0.00005s linear";
    }
      if (hi2sost==1){
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
      }
    if (hi3sost==1){
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
      }
    if (hi5sost==1){
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
      }
    if (hi6sost==1){
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
      }
    if (hi7sost==1){
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
      }
      return (hi1sost=0,hi2sost=0,hi3sost=0,hi4sost=1,hi5sost=0,hi6sost=0,hi7sost=0)
     }
      else{
        hi1.style.transform="rotate(360deg) translateY(-22px)" 
        hi1.style.transition="transform 0.00005s linear"
        hi2.style.transform="rotate(360deg) translateY(-22px)" 
        hi2.style.transition="transform 0.00005s linear"
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
        return (hi1sost=0,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=0,hi7sost=0)
  }
}


let hi5sost=0;
let li5=document.querySelector(".catalog__li5")
let hi5=document.getElementById("hicon5")
li5.addEventListener("click",rotateli5)

function rotateli5(){
  if (hi5sost==0){  
    hi5.style.transform="rotate(180deg) translateY(22px)";
    hi5.style.transition="transform 0.00005s linear";
    if (hi1sost==1){  
      hi1.style.transform="rotate(360deg) translateY(-22px)";
      hi1.style.transition="transform 0.00005s linear";
    }
      if (hi2sost==1){
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
      }
    if (hi3sost==1){
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
      }
    if (hi4sost==1){
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
      }
    if (hi6sost==1){
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
      }
    if (hi7sost==1){
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
      }
      return (hi1sost=1,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=1,hi6sost=0,hi7sost=0)
      }
      else{
        hi1.style.transform="rotate(360deg) translateY(-22px)" 
        hi1.style.transition="transform 0.00005s linear"
        hi2.style.transform="rotate(360deg) translateY(-22px)" 
        hi2.style.transition="transform 0.00005s linear"
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
        return (hi1sost=0,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=0,hi7sost=0)
  }
}

let hi6sost=0;
let li6=document.querySelector(".catalog__li6")
let hi6=document.getElementById("hicon6")
li6.addEventListener("click",rotateli6)

function rotateli6(){
  if (hi6sost==0){  
    hi6.style.transform="rotate(180deg) translateY(22px)";
    hi6.style.transition="transform 0.00005s linear";
    if (hi1sost==1){  
      hi1.style.transform="rotate(360deg) translateY(-22px)";
      hi1.style.transition="transform 0.00005s linear";
    }
      if (hi2sost==1){
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
      }
    if (hi3sost==1){
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
      }
    if (hi4sost==1){
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
      }
    if (hi5sost==1){
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
      }
    if (hi7sost==1){
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
      }
      return (hi1sost=1,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=1,hi7sost=0)
      }
      else{
        hi1.style.transform="rotate(360deg) translateY(-22px)" 
        hi1.style.transition="transform 0.00005s linear"
        hi2.style.transform="rotate(360deg) translateY(-22px)" 
        hi2.style.transition="transform 0.00005s linear"
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
        return (hi1sost=0,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=0,hi7sost=0)
  }
}

let hi7sost=0;
let li7=document.querySelector(".catalog__li7")
let hi7=document.getElementById("hicon7")
li7.addEventListener("click",rotateli7)

function rotateli7(){
  if (hi7sost==0){  
    hi7.style.transform="rotate(180deg) translateY(22px)";
    hi7.style.transition="transform 0.00005s linear"
    if (hi1sost==1){  
      hi1.style.transform="rotate(360deg) translateY(-22px)";
      hi1.style.transition="transform 0.00005s linear";
    }
      if (hi2sost==1){
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
      }
    if (hi3sost==1){
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
      }
    if (hi4sost==1){
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
      }
    if (hi5sost==1){
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
      }
    if (hi6sost==1){
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
      }
      return (hi1sost=1,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=0,hi7sost=1)
      }
      else{
        hi2.style.transform="rotate(360deg) translateY(-22px)" 
        hi2.style.transition="transform 0.00005s linear"
        hi3.style.transform="rotate(360deg) translateY(-22px)" 
        hi3.style.transition="transform 0.00005s linear"
        hi4.style.transform="rotate(360deg) translateY(-22px)" 
        hi4.style.transition="transform 0.00005s linear"
        hi5.style.transform="rotate(360deg) translateY(-22px)" 
        hi5.style.transition="transform 0.00005s linear"
        hi6.style.transform="rotate(360deg) translateY(-22px)" 
        hi6.style.transition="transform 0.00005s linear"
        hi7.style.transform="rotate(360deg) translateY(-22px)" 
        hi7.style.transition="transform 0.00005s linear"
        return (hi1sost=0,hi2sost=0,hi3sost=0,hi4sost=0,hi5sost=0,hi6sost=0)
  }
}

let wrap1=document.querySelector(".catalog__wrap1")
let wrap11=document.querySelector(".catalog__wrap11")
wrap1.addEventListener("mouseover",addcolor1)
wrap1.addEventListener("mouseout",removecolor1)
function addcolor1(){
  wrap11.style.color="#7943A4";
 }
function removecolor1(){
  wrap11.style.color="#333333";
}

let wrap2=document.querySelector(".catalog__wrap2")
let wrap21=document.querySelector(".catalog__wrap21")
wrap2.addEventListener("mouseover",addcolor2)
wrap2.addEventListener("mouseout",removecolor2)
function addcolor2(){
  wrap21.style.color="#7943A4";
}
function removecolor2(){
  wrap21.style.color="#333333";
}


let wrap3=document.querySelector(".catalog__wrap3")
let wrap31=document.querySelector(".catalog__wrap31")
wrap3.addEventListener("mouseover",addcolor3)
wrap3.addEventListener("mouseout",removecolor3)
function addcolor3(){
  wrap31.style.color="#7943A4";
}
function removecolor3(){
  wrap31.style.color="#333333";
}

let wrap4=document.querySelector(".catalog__wrap4")
let wrap41=document.querySelector(".catalog__wrap41")
wrap4.addEventListener("mouseover",addcolor4)
wrap4.addEventListener("mouseout",removecolor4)
function addcolor4(){
  wrap41.style.color="#7943A4";
}
function removecolor4(){
  wrap41.style.color="#333333";
}

let wrap5=document.querySelector(".catalog__wrap5")
let wrap51=document.querySelector(".catalog__wrap51")
wrap5.addEventListener("mouseover",addcolor5)
wrap5.addEventListener("mouseout",removecolor5)
function addcolor5(){
  wrap51.style.color="#7943A4";
}
function removecolor5(){
  wrap51.style.color="#333333";
}

let wrap6=document.querySelector(".catalog__wrap6")
let wrap61=document.querySelector(".catalog__wrap61")
wrap6.addEventListener("mouseover",addcolor6)
wrap6.addEventListener("mouseout",removecolor6)
function addcolor6(){
  wrap61.style.color="#7943A4";
}
function removecolor6(){
  wrap61.style.color="#333333";
}

let wrap7=document.querySelector(".catalog__wrap7")
let wrap71=document.querySelector(".catalog__wrap71")
wrap7.addEventListener("mouseover",addcolor7)
wrap7.addEventListener("mouseout",removecolor7)
function addcolor7(){
  wrap71.style.color="#7943A4";
}
function removecolor7(){
  wrap71.style.color="#333333";
}

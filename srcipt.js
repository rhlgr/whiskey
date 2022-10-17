const swiper = new Swiper('.swiper', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

var menu = document.querySelector(".men");
var cross = document.querySelector("i");
var overlay = document.querySelector(".overlay");


menu.addEventListener("click", function () {
  overlay.style.transform = "translateX(0%)";
  document.querySelector('.container').style.overflow = 'hidden';
});

cross.addEventListener("click", function () {
  overlay.style.transform = "translateX(100%)";
  document.querySelector('.container').style.overflow = 'initial';
});

 var tl= gsap.timeline()

 tl.from(".b1top",{
      opacity:0,
      y:-100,
      duration:1
 })
 .from(".a",{
  opacity:0,
  y:300,
  duration:1,
  delay:.1
 })

 .from(".content h1",{
  opacity:0,
  y:300,
  duration:1,
  delay:.1
 })

 .from(".content h2",{
  opacity:0,
  y:300,
  duration:1,
  delay:.1
 })

 .from(".content p ,.arrow",{
  opacity:0,
  y:300,
  duration:1,
  delay:.1
 })

gsap.from(".b2left img",{
  opacity:0,
  y:300,
  duration:1,
  delay:.5,
  scrollTrigger:{
    scroller:"body",
    trigger:".b2left img",
    // markers:true,
    // start:"top 60%",
    //  end:"top 100%"
  }
},2)

gsap.from("b2right h1",{
  opacity:0,
  y:300,
  duration:1,
  delay:.5,
  scrollTrigger:{
    trigger:".b2right h1",
    scroller:"body",
    markers:false,
    // start:"top 60%",
    //  end:"top 100%"
  }
})

gsap.from(".box3 h1",{
  opacity:0,
  y:100,
  duration:1,
  delay:.5,
  scrollTrigger:{
    scroller:"body",
    trigger:".box3 h1",
    // markers:false,
    // start:"top 90%"
  }
})


gsap.from(".box3 h2",{
  opacity:0,
  y:300,
  duration:1,
  delay:.5,
  scrollTrigger:{
    scroller:"body",
    trigger:".box3 h2",
    // markers:false,
    // start:"top 50%"
  }
})
gsap.from(".box3 .swiper",{
  opacity:0,
  y:300,
  duration:1,
  delay:1,
  scrollTrigger:{
    scroller:"body",
    trigger:".box3 .swiper",
    // markers:false,
    // start:"top 60%"

  }
})
gsap.from(".box4 .b4top h1",{
  opacity:0,
  y:300,
  duration:1,
  delay:1,
  scrollTrigger:{
    scroller:"body",
    trigger:".b4top h1",
    // markers:true,
    // start:"top 10%"

  }
})
gsap.from(".box4 .b4top1",{
  opacity:0,
  y:300,
  duration:1,
  delay:1.5,
  scrollTrigger:{
    scroller:"body",
    trigger:".b4top1",
    // markers:true,
    // start:"top 10%"

  }
})
  
gsap.from(".b4middle",{
  opacity:0,
  y:300,
  duration:1,
  delay:1,
  scrollTrigger:{
    scroller:"body",
    trigger:".b4middle",
    // markers:true,
    // start:"top 20%"

  }
})
gsap.from(".overlay .oleft",{
  opacity:0,
  // y:300,
  duration:2,
  delay:1.5,
scrollTrigger:".oleft"
})

  
            
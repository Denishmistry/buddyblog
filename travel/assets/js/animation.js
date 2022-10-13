//====== AoS Animation Start ======//


AOS.init({
  offset: 120,
});
$(window).on("load", function () {
  AOS.refresh();
});
(function ($, undefined) {
  "use strict";
  var defaults = {
    timedelay: 0.05,
    animationclass: "scaledown",
    splittingchar: true,
    nested: true,
  };
  $.fn.splittingcharfn = function (options) {
    var settings = $.extend(defaults, options);
    $(this).each(function () {
      if (settings.splittingchar) {
        var text = $(this).text().split("");
      } else {
        var text = $(this).text().split(" ");
      }
      for (var i = 0, len = text.length; i < len; i++) {
        var j = i + 1;
        if (settings.nested) {

          text[i] = `<span class="outer-text" data-aos="scalex"  data-aos-delay=" ${j * settings.timedelay}"> <span class= word-${i}  data-aos='${settings.animationclass}'   data-aos-delay="${j * (settings.timedelay)}" >${text[i]}</span></span>`;

        } else {
          text[i] = `<span class= word-${i}  data-aos='${settings.animationclass}' data-aos-easing="ease"  data-aos-delay="${j * (settings.timedelay)}" >${text[i]}</span>`;

        }
      }
      if (settings.splittingchar) {
        $(this).html(text.join(""));
      } else {
        $(this).html(text.join(" "));
      }
    });

  };
})(jQuery);
// call Function
//Below Code always call after function
$(".title-animation").splittingcharfn({
  timedelay: 1000,
  animationclass: "scaledown",
  splittingchar: false,
  nested: true,
});


// $(".character-anim").splittingcharfn({
//   timedelay: 100,
//   animationclass: "fade-left",
//   splittingchar: true,
//   nested:false,
// });
//====== AoS Animation Start ======//
// call Function
//Below Code always call after function


//====== AOS Animation End ======//



function ImageAnimation(imgSelector, divSelector, imgTransformY, divtransformY) {
  gsap.utils.toArray(imgSelector).forEach((box) => {
    gsap.set(box, {
      y: imgTransformY,

    });
    gsap.to(box, {
      ease: 'power1.out',
      scrollTrigger: {
        trigger: box,
        markers: false,
        scrub: 3,
        start: "0% 100%",
        end: "100% 50%",
      },
      y: 0,
    });
  });
  gsap.utils.toArray(divSelector).forEach((box) => {
    gsap.set(box, {
      y: divtransformY,

      ease: 'power1.out',
    });
    gsap.to(box, {
      scrollTrigger: {
        trigger: box,
        markers: false,
        scrub: 1,
        start: "0 80%",
        end: "100% 30%"
      },
      ease: 'power1.out',
      y: 0,

    });
  });
}
ImageAnimation(".image_cont img", ".image_cont", -100, 0);


//====== Image animation Animation End ======//



// var w = window.innerWidth;
// var c = $("section > .container").innerWidth();
// var paddingLeft = (((w - c) / 2) + 0);
// document.getElementsByClassName("pin-wrap")[0].style.paddingLeft = +paddingLeft + "px";

// window.addEventListener("load", function () {
//   let pinWrap = document.querySelector(".pin-wrap");
//   let pinWrapWidth = pinWrap.offsetWidth;
//   let horizontalScrollLength = pinWrapWidth - window.innerWidth;

//   // gsap.to(".pin-wrap", {
//   //   scrollTrigger: {
//   //     scrub: true,
//   //     trigger: "#sectionPin",
//   //     pin: "#sectionPin",
//   //     markers: true,
//   //     anticipatePin: 1,
//   //     start:"center center",
//   //     // start: "center 85%",
//   //     //  end: "bottom 50%"
//   //     end: pinWrapWidth
//   //   },
//   //   x: -horizontalScrollLength,
//   //   ease: "none"
//   // });
//   gsap.to(".pin-wrap", {
//     scrollTrigger: {
//       scrub: true,
//       trigger: ".pin-wrap",
//       markers: false,
//       start: "top 50%",
//       end: "80% 50%"
//     },
//     x: -horizontalScrollLength,
//     ease: "none"
//   });
// });
//====== Text scroll Animation======//
// function TextScrollFunction(selector,StartPositionX,EndPositionX){
//   window.addEventListener("load", function () {
//     gsap.utils.toArray(selector).forEach((textanim) => {
//       gsap.set(textanim, {
//         x: StartPositionX,
//       });
//       gsap.to(textanim, {
//         scrollTrigger: {
//           trigger: textanim,
//           pin: false,
//           scrub: true,
//           markers: true,
//           start: "top 100%",
//           end: "bottom 0%",
//         },
//         x: EndPositionX,
//         duration: 1000,
//         ease: "none",
//       });
//     });
//   });
// }
// TextScrollFunction(".text1","-100%","0%");
// TextScrollFunction(".text2","0%","-100%");
// TextScrollFunction(".text3","-100%","0%");

//====== Tilt effect======//
function TiltAnimation(ParentSection,Target){
  gsap.utils.toArray(ParentSection).forEach((element, i) => {
    let moveMe = element.querySelector(Target);
    let movement = 500000; //defoult rotationx 900
    let rotationx = 0; //defoult rotationx 50
    let rotationy = 0; //defoult rotationy 50
    let posYmove = 50; //defoult 250
    let posXmove = 50; //defoult 250
    gsap.set(moveMe, {
      transformPerspective: movement,
      transformOrigin: 'center center',
    })

    function mouseMoveAnim(e) {
      let xPos = (e.clientX / window.innerWidth - 0.5);
      let yPos = (e.clientY / window.innerHeight - 0.5);
      gsap.to(moveMe, {
        duration: 0.5,
        rotationY: rotationx * xPos,
        rotationX: -(rotationy) * yPos,
        x: -posXmove * xPos,
        y: -posYmove * yPos,
        overwrite: true,
      });
    }
    element.addEventListener("mousemove", mouseMoveAnim);
    element.addEventListener("mouseleave", e => gsap.to(moveMe, {
      delay: 0.1,
      duration: 0.2,
      rotationY: 0,
      rotationX: 0,
      x: 0,
      y: 0,
      ease: "power1.inOut"
    }));
  });
}
TiltAnimation(".hero-image",".hero-image .hero-img");
TiltAnimation(".animation-image",".animation-image .img-cover ");
// ==============
// Svg Call
// ==============
function sliderAnimation() {
  const doc = this.getSVGDocument();
  const selcetor = doc.querySelectorAll("svg path");

  function AnimationSVG() {
    gsap.from(selcetor, {
      opacity: 0,
      scaleX: 0.5,
      scaleY: 0.5,
      transformOrigin: "center",
      stagger: { // wrap advanced options in an object
        each: 0.05,
        from: "end",
        ease: "power2.inOut",
      }
    });
  }

  ScrollTrigger.create({
    trigger: '.adventure-slider',
    start: () => 'top 85%',
    end: () => 'top 85%',
    // markers:true,
    onEnter: () => {
      AnimationSVG();
    },
  });
  // $(".slick-arrow").click(function(){
  //   AnimationSVG();
  // });

  $(".adventure-slider").on("beforeChange", function (){
setTimeout(() => {
  AnimationSVG();
}, 3000);

    // alert("red");
  })

}

function HowItWork() {
  const doc = this.getSVGDocument();
  const selcetor = doc.querySelectorAll("svg>*");

  function AnimationSVG() {
    gsap.from(selcetor, {
      opacity: 0,
      scaleX: 0.5,
      scaleY: 0.5,
      transformOrigin: "center",
      stagger: { // wrap advanced options in an object
        each: 0.30,
        from: "end",
        ease: "power2.inOut",
      }
    });
  }
  ScrollTrigger.create({
    trigger: '.howitworksec',
    start: () => 'top 80%',
    end: () => 'top 80%',
    // markers:true,
    onEnter: () => {

      AnimationSVG();
    },
  })
}
function PlaningSvg() {
  const doc = this.getSVGDocument();
  const selcetor = doc.querySelectorAll("svg clipPath,svg g");

  function AnimationSVG() {
    gsap.from(selcetor, {
      opacity: 0,
      scaleX: 0.5,
      scaleY: 0.5,
      transformOrigin: "center",
      stagger: { // wrap advanced options in an object
        each: 0.08,
        from: "end",
        ease: "power2.inOut",
      }
    });
  }
  ScrollTrigger.create({
    trigger: '.planning',
    start: () => 'top 80%',
    end: () => 'top 80%',
    markers:false,
    onEnter: () => {

      AnimationSVG();
    },
  })
}
function Grid(Select) {
  const selcetor = document.querySelectorAll(Select);
  ScrollTrigger.batch(selcetor, {
    onEnter: elements => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 60,
        stagger: 0.15
      });
    },
    // once: true
  });
}
Grid(".grid>div");
Grid(".place-block>a");
Grid(".liveanywhere .detail-link");

// https://greensock.com/docs/v3/Staggers
// https://codepen.io/GreenSock/pen/dyGyopR/823312ec3785be7b25315ec2efd517d8?editors=1010
// https://codepen.io/akapowl/pen/YzxXrMR/e26c8669cb90500b27e682f32259fb0a?editors=1010
// https://greensock.com/docs/v3/Plugins/ScrollTrigger
const refs = [...document.querySelectorAll(`[data-svg]`)];
for (let i = 0; i < refs.length; i++) {
  refs[i].addEventListener("load", window[refs[i].getAttribute("data-svg")]);
  // console.log(refs[i].getAttribute("data-svg"));
  // console.log(window[refs[i].getAttribute("data-svg")]);
}

// https://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/


// ==============
// Svg Call
// ==============
// ================
// slide down
// ================
function SlideDown(selector) {
  const select2 = document.querySelectorAll(selector);
  gsap.utils.toArray(select2).forEach((slidedown) => {
    gsap.set(slidedown, {
      x: "0%",
      y: "-40",
      opacity:0.8,
    });
    gsap.to(slidedown, {
      scrollTrigger: {
        trigger: slidedown,
        scrub: 4,
        // markers: true,
        start: "top 80%",
        end: "bottom 80%",
      },
      x: "0",
      y: "0",
      opacity:1,
    });

  });
}
// SlideDown("header");
// SlideDown("section");
SlideDown(".memory-content");
SlideDown(".subscription.slidown");
SlideDown(".video");

// ================
// Fade up
// ================
function Fadedown(selector) {
  const select2 = document.querySelectorAll(selector);
  gsap.utils.toArray(select2).forEach((slidedown) => {
    gsap.set(slidedown, {
      x: "0%",
      y: "-10",
      scale:0,
      opacity:0,

    });
    gsap.to(slidedown, {
      scrollTrigger: {
        trigger: slidedown,
        scrub: 4,
        // markers: true,
        start: "top 80%",
        end: "bottom 80%",
      },
      scale:1,
      x: "0",
      y: "0",
      opacity:1,
    });

  });
}

Fadedown(".memory-content .badge");
Fadedown(".animation-image");
Fadedown(".filter-nav li");
Fadedown(".custom-slick-arrow");




// https://greensock.com/forums/topic/24303-delaysmooth-scroll-effect/
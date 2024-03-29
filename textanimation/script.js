wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset:0,
  mobile: true,
  live: true
});

new WOW().init();

(function ($, undefined) {
  "use strict";
  var defaults = {
    timedelay: 0.05,
    animationclass: "scaledown",
    splittingchar: true
  };
  $.fn.splittingcharfn = function (options) {
    var settings = $.extend(defaults, options);
    $(this).each(function () {
      // var text = $(this).text().split(' ');

      if (settings.splittingchar) {
        var text = $(this).text().split("");
      } else {
        var text = $(this).text().split(" ");
      }

      for (var i = 0, len = text.length; i < len; i++) {
        var j = i + 1;
        text[i] ='<span class="wow  scalex outer-text" data-wow-delay="' + j * settings.timedelay + 's"> <span class="wow ' + settings.animationclass + " word-" + i + '"  data-wow-delay="' + j * (settings.timedelay) + 's" >' + text[i] + "</span></span>";
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
$(".welcome").splittingcharfn({
  timedelay: 0.02,
  animationclass: "scaledown",
  splittingchar: false
});



// https://api.jquery.com/jquery.extend/

//if you want to split each character then remove white space from split(''); and also from join('')
// You can also try with animate.css



// https://github.com/graingert/wow


// data-wow-duration: Change the animation duration
// data-wow-delay: Delay before the animation starts
// data-wow-offset: Distance to start the animation (related to the browser bottom)
// data-wow-iteration: Number of times the animation is repeated

// smooth scroll
// var offset = 200;
// document.getElementsByClassName("main")[0].style.paddingTop = + offset + "px";
// gsap.utils.toArray("main").forEach((box) => {
//   gsap.set(box, {
//     y: -offset,
//     ease: "none",
//   });
//   gsap.to(box, {
//     ease: "none",
//     y: 0,
//     scrollTrigger: {
//       trigger: box,
//       markers: false,
//       scrub: 1,
//       invalidateOnRefresh: true

//     },

//   });
// });

// let container = document.querySelector("main");

// let height;
// function setHeight() {
//   height = container.clientHeight;
//   document.body.style.height = height + "px";
// }
// ScrollTrigger.addEventListener("refreshInit", setHeight);

// // smooth scrolling container
// gsap.to(container, {
//   y: () => -(height - document.documentElement.clientHeight),
//   ease: "none",
//   scrollTrigger: {
//     trigger: document.body,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 1,
//     invalidateOnRefresh: true
//   }
// });


gsap.utils.toArray(".image_cont img").forEach((box) => {
  gsap.set(box, {
    y: -200,

  });
  gsap.to(box, {
    ease: 'power1.out',
    scrollTrigger: {
      trigger: ".image-grid",
      markers: true,
      scrub: 3,
      start:"0% 100%",
      end:"100% 0%",

    },

    y: 0,
  });
});
gsap.utils.toArray(".image_cont").forEach((box) => {
  gsap.set(box, {
    y: 50,
    ease: 'power1.out',
  });
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      markers: false,
      scrub: 3,
      start:"0 100%",
      end:"100% 0%"
    },
    ease: 'power1.out',
    y: 0,
  });
});


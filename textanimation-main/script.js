wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: -200,
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
        text[i] = '<span class="wow  scalex outer-text" data-wow-delay="' + j * settings.timedelay + 's"> <span class="wow ' + settings.animationclass + " word-" + i + '"  data-wow-delay="' + j * (settings.timedelay) + 's" >' + text[i] + "</span></span>";
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

// var offset = 200;
// // document.getElementsByClassName("main").style.paddingTop = "50px";
// gsap.utils.toArray("main").forEach((box) => {
//   gsap.set(box, {
//     y: -offset,
//     ease: 'power1.out',
//   });
//   gsap.to(box, {
//     scrollTrigger: {
//       trigger: box,
//       markers: false,
//       scrub: 2,

//     },
//     ease: 'power1.out',
//     y: 0,
//   });
// });

// gsap.utils.toArray(".image_cont img").forEach((box) => {
//   gsap.set(box, {
//     y: -300,

//   });
//   gsap.to(box, {
//     scrollTrigger: {
//       trigger: box,
//       markers: false,
//       scrub: 2,
//       start: "30% 130%",
//       end: "130% 0%",

//     },

//     y: 0,
//   });
// });
// gsap.utils.toArray(".image_cont ").forEach((box) => {
//   gsap.set(box, {
//     y: 200,
//     ease: 'power1.out',
//   });
//   gsap.to(box, {
//     scrollTrigger: {
//       trigger: box,
//       markers: false,
//       scrub: 2,
//       start: "0 100%",
//       end: "100% 0%"
//     },
//     ease: 'power1.out',
//     y: 0,
//   });
// });




if ($(".image_cont").length > 0) {


  $(".image_cont img").hover(
    function () {
      $("body").addClass("custom-hover");
    },
    function () {
      $("body").removeClass("custom-hover");
    }
  );
  var cursor = document.querySelector(".cursor");
  var popoverbox = document.querySelectorAll(".popupebox");




  document.addEventListener('mousemove', (obj) => {
    popoverbox.forEach(pobox => {
      console.log(popoverbox);
      var x = obj.clientX;
      var y = obj.clientY;
      pobox.style.left = `calc(${obj.clientX}px - 0px)`;
      pobox.style.top = `calc(${obj.clientY}px + 20px)`;
    });

  });

  document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.marginLeft = `calc(${e.clientX}px - 0px)`;
    cursor.style.marginTop = `calc(${e.clientY}px + 1px)`;


  });
}
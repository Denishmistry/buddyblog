(function ($) {

    /* Document Ready State */
    jQuery(document).ready(function(){
        //show password
        $(".toggle-password").on("click", function() {
          $(this).toggleClass("bx-show bx-hide");
          var input = $($(this).attr("toggle"));
          if (input.attr("type") == "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
        });

        $('.js-example-basic-single').select2({
          placeholder: 'Select an option',
          // minimumResultsForSearch:-1,   //remove search
          // allowClear: true, // cleare selected data
        });
    });

})(jQuery);

// ==================
// Project theme
// ==================
const toggleSwitch = document.querySelector("#darkmode");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    addDarkClass();
  } else {
    addLightClass();
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    addDarkClass();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    addLightClass();
  }
}
function addDarkClass(currentTheme) {
  // $(".bg-light").addClass("bg-dark").removeClass("bg-light");
  // $(".btn-dark").addClass("btn-light").removeClass("btn-dark");
  // $(".text-light").addClass("text-dark").removeClass("text-light");
  // $(".text-dark").addClass("text-white").removeClass("text-dark");
  // $(".navbar-light").addClass("navbar-dark").removeClass("navbar-light");

}

function addLightClass(currentTheme) {
  // $(".btn-light").addClass("btn-dark").removeClass("btn-light");
  // $(".bg-dark").addClass("bg-light").removeClass("bg-dark");

  // $(".navbar-dark").addClass("navbar-light").removeClass("navbar-dark");
  // $(".text-dark").addClass("text-light").removeClass("text-dark");
  // $(".text-white").addClass("text-dark").removeClass("text-white");
}
toggleSwitch.addEventListener("change", switchTheme, false);

$(window).on("load", function () {
  if (currentTheme === null) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setTimeout(() => {
      addLightClass();
    }, 1000);
  }
});


// ================
//  slick slider
// ================

$('.adventure-slider').slick({
  dots: false,
  infinite: true,
  loop:true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {

        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {

        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ],
});

$('.browsbyslider').slick({
  dots: false,
  infinite: true,
  loop:true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.bprev'),
  nextArrow: $('.bnext'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ],
});
$('.hosts').slick({
  dots: false,
  infinite: true,
  loop:true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }
  ],
});
$('.catagory-slider').slick({
  dots: false,
  infinite: false,
  loop:false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    }
  ],
});

// ============
// filter div
// ============
$('.filters ul li').click(function(){
  $('.filters ul li').removeClass('active');
  $(this).addClass('active');

  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data
  })
});

var $grid = $(".grid").isotope({
  itemSelector: ".all",
  percentPosition: true,
  masonry: {
    columnWidth: ".all"
  }
})

// ================
// Video
// ================

var video = document.getElementById("myVideo");
var btn = document.getElementById("play");
$("#play").click(function(e){

  if (video.paused) {
    video.play();
    $("#play .bx-pause").show();
    $("#play .bx-play").hide();
    $(".ply-btn").addClass("play");
  } else {
    video.pause();
    $("#play .bx-pause").hide();
    $("#play .bx-play").show();
    $(".ply-btn").removeClass("play");
  }
});
// ================
// Mobile Menu
// ================

$('.toggle-menu').click(function() {
  $(this).toggleClass('active');
  $(".logo").toggleClass('active');
  $('#menu').toggleClass('open');
});
$('#menu ul a').click(function() {
  $('.toggle-menu').removeClass('active');
  $(".logo").removeClass('active');
  $('#menu').removeClass('open');
});
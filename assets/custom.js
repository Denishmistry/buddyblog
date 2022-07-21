//  ==================
//      Dark mode
//  ==================

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
  // console.log("theme set");
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

function addDarkClass() {
  $(".bg-light").addClass("bg-dark").removeClass("bg-light");
  $(".text-light").addClass("text-dark").removeClass("text-light");
  $(".navbar-light").addClass("navbar-dark").removeClass("navbar-light");
  $(".btn-dark").addClass("btn-light").removeClass("btn-dark");
  $(".text-dark").addClass("text-white").removeClass("text-dark");
}

function addLightClass() {
  $(".bg-dark").addClass("bg-light").removeClass("bg-dark");
  $(".text-dark").addClass("text-light").removeClass("text-dark");
  $(".navbar-dark").addClass("navbar-light").removeClass("navbar-dark");
  $(".btn-light").addClass("btn-dark").removeClass("btn-light");
  $(".text-white").addClass("text-dark").removeClass("text-white");
}
toggleSwitch.addEventListener("change", switchTheme, false);

$(window).on("load", function () {
  if (currentTheme === null) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setTimeout(() => {
      addLightClass();
    }, 1000);
    // console.log("No theme set");
  }
});

//  ==================
//      Pre-Loader
//  ==================
$(window).on("load", function () {
  $("#loading-mask").fadeOut();
});
//  ==================
//      Pre-Loader
//  ==================

//  ==================
//      BS-ToolTip
//  ==================
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//  ==================
//    Custom cursor
//  ==================
$(window).on("load resize", function () {
  if (window.innerWidth > 1200) {
    $(".catagoty-badge li,.blog-post").addClass("hover");
    const cursor = document.querySelector(".cursor");
    const links = document.querySelectorAll(
      "a , input,textarea,button,.hover,label"
    );
    window.addEventListener("mousemove", (e) => {
      let leftPosition = e.pageX + 10;
      let topPosition = e.pageY + 9;
      cursor.style.left = leftPosition + "px";
      cursor.style.top = topPosition + "px";
    });

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
      });
    });

    links.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
      });
    });
  }

  if (window.innerWidth < 768) {
    gsap.utils.toArray(".blogpost  .blogpost_preview").forEach((box) => {
      gsap.to(box, {
        scrollTrigger: {
          trigger: box,
          markers: false,
          opacity: 1,
          scrub: 2,
          toggleClass: "active",
          start: "0% 45%", // when the top of the trigger hits the top of the viewport
          end: "100% 45%",
        },
      });
    });
  }
  // Smooth scroll
  // https://codepen.io/artyor/pen/bGEGVZg?editors=1010
  // https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()
});
// Animation

//   navlinks.forEach((li, i) => {
//       li.style.animationDelay = 0 + i * 140 + "ms";
//   })

//  ==================
//      Search menu
//  ==================

$(".search-btn").on("click", function () {
  $(".l-search").addClass("open");
  $("body").addClass("model-open");
  $(".l-search").removeClass("close");
});
$(".search-close").on("click", function () {
  $(".l-search").addClass("close");
  $("body").removeClass("model-open");
  $(".l-search").removeClass("open");
});

//  ====================================
//     load delay (Smooth scrolling)
//  ====================================

// https://codepen.io/GreenSock/pen/YzNYmrq/c5c7d11d3c41b81ccb216f0186c42841?editors=1010
//

gsap.set("main", {
  y: 0,
  duration: 0.5,
  opacity: 0,
});
gsap.registerPlugin(ScrollTrigger);


setTimeout(function () {


  gsap.set("main", {
    opacity: 1,
  });
//
    // gsap.utils.toArray("main").forEach(box => {
        // gsap.utils.toArray(".blog-post ,.popular-post .section-title-large").forEach(box => {
//  gsap.utils.toArray(".blog-post ,.popular-post .section-title-large").forEach(box => {
gsap.utils.toArray("main > *").forEach((box) => {
    gsap.set(box, {
      y: 50,
    });
    gsap.to(box, {
      scrollTrigger: {
        trigger: box,
        markers: false,
        scrub: 3,
      },
      y: 0,
    });
  });
}, 800);

//  =============================
//    Responsive Image Function
//  =============================
$(window).on("load resize orientationchange", function () {
  ResponsiveImg(".image-preview", 380, 215);
});

function ResponsiveImg(imgname, imgwidth, imgheight) {
  var originalimgwidth = imgwidth;
  var originalimgheight = imgheight;
  var selector = imgname;

  var pimg = $(selector).width();
  var dyheight = pimg * (originalimgheight / originalimgwidth);
  var final = $(selector).css("height", dyheight);
}

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
gsap.utils.toArray("main").forEach((box) => {
    gsap.set(box, {
      y: 100,
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
  ResponsiveImg(".catagory-list .image-preview", 200, 175);
});

function ResponsiveImg(imgname, imgwidth, imgheight) {
  var originalimgwidth = imgwidth;
  var originalimgheight = imgheight;
  var selector = imgname;

  var pimg = $(selector).width();
  var dyheight = pimg * (originalimgheight / originalimgwidth);
  var final = $(selector).css("height", dyheight);
}


//=========================
    //  Header Sticky top
// ==========================

const showAnim = gsap.from('header', { 
  yPercent: -100,
  paused: true,
  duration: 0.2
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});


//=================
//  Home section
// ================

if(window.innerWidth > 1200){
  gsap.utils.toArray(".move-content").forEach(box => {
    gsap.to(box, {
         opacity:0,
         scrollTrigger: {
              trigger:box,
             //  pin:box,
              markers: false,  
              scrub:1 ,
              start: "40 200",
              end: "+=80",
         }
     });
   });
   gsap.utils.toArray(".move-picture").forEach(box => {
    gsap.to(box, {
         scrollTrigger: {
              trigger:box,
              scrub:1 ,
              scale: 1,
              markers:false,
              start: "100 200",
              end: "+=100",
         },
         zoom:0.7,
         x:"-50%", 
         y:"150",
     });
   });
}



gsap.utils.toArray(".whatido").forEach((box) => {
  gsap.set(box, {
    y:50,
    opacity:0.5,
  });
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      markers: false,
      scrub: 1,
  
      start: "30% 100%",
      end: "50% 100%",
    },
    opacity:1,
    y:0
  });
});



//======================
// expiriance section
// =====================

if(window.innerWidth > 1200){
gsap.utils.toArray(".expirince-list li").forEach((box) => {
  gsap.set(box, { 
    x:500,
  });
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      markers: false,
      scrub: 2,
      toggleClass: "active",
      start: "0% 100%",
      end: "100% 60%",
    },
    x:0,
    opacity:1,
  });
});


gsap.utils.toArray(".expirince-list li div").forEach((box) => {
  gsap.set(box, { 

    skewType:"simple",
    skewX:-90,
    opacity:0,

  });
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      markers: false,
      scrub: 4,
      start: "0% 70%", 
      end: "10% 70%",
    },
    skewX:0,
    opacity:1,
  });
});
}

// =============
// brain Image

// https://codepen.io/cassie-codes/pen/MWowWEK/ba15ec4c52300f13d3d109597471f021
// =============
function BrainImage(){
  const doc = this.getSVGDocument();
  const brain = doc.querySelector("#brain");
  const topbrain = doc.querySelector("#topline");
  const bottombrain = doc.querySelector("#bottomline");
  const brainmaintop = doc.querySelector("#top-mainline");
  const outline = doc.querySelector("#outerline");
  
  const triggerselector = document.querySelector(".expirince");
  gsap.utils.toArray(topbrain).forEach((box) => {
    gsap.set(box, { strokeDasharray: 330,strokeDashoffset: 330,opacity:0.1 });
    gsap.to(box, {
      scrollTrigger: {trigger: triggerselector, markers: false, scrub: 4, start: "0% 50%", end: "30% 30%", },

      strokeDashoffset:0,
    });
  });

  gsap.utils.toArray(brainmaintop).forEach((box) => {
    gsap.set(box, {strokeDasharray: 164, strokeDashoffset: 164,opacity:0.1});
    gsap.to(box, {
      scrollTrigger: {trigger: triggerselector, markers: false, scrub: 4, start: "40% 50%", end: "100% 30%", },
      strokeDashoffset:0,
      opacity:0.3
    });
  });
  gsap.utils.toArray(outline).forEach((box) => {
    gsap.set(box, { 
      strokeDasharray: 880,
      strokeDashoffset: 880,  
      opacity:0.1 
    });
    gsap.to(box, {
      scrollTrigger: {trigger: triggerselector, markers: false, scrub: 4, start: "40% 80%", end: "90% 50%", },
      strokeDashoffset:0,
    });
  });

  gsap.utils.toArray(bottombrain).forEach((box) => {
    gsap.set(box, {strokeDasharray: 227, strokeDashoffset: 227,opacity:0.1 });
    gsap.to(box, {
      scrollTrigger: {trigger: triggerselector, markers: false, scrub: 4, start: "70% 80%", end: "90% 50%", },

      strokeDashoffset:0,
    });
  });
}

const refs = [...document.querySelectorAll(`[data-svg]`)];
for (let i = 0; i < refs.length; i++) {
    refs[i].addEventListener("load", window[refs[i].getAttribute("data-svg")]);
    console.log(refs[i].getAttribute("data-svg"));
    console.log(window[refs[i].getAttribute("data-svg")]);
}

// var path = document.querySelector('#topline');
// var length = path.getTotalLength();
// console.log(length);

// stroke-dasharray: 878;
// 

// strokeDasharray
// strokeDashoffset

// Animation function
// var path = document.querySelector('path');

// TweenMax.set(path, {strokeDasharray: 1});
// TweenMax.set(path, {strokeDashoffset: 1});
// TweenMax.set(path, {attr:{pathLength: 1}});

// svg Animation


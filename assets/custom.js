

//  ==================
//      Dark mode
//  ==================

const toggleSwitch = document.querySelector('#darkmode');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        addDarkClass();
    }
} else {
    addLightClass();
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        addDarkClass();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        addLightClass();
    }
}

function addDarkClass() {
    $(".bg-light").addClass('bg-dark').removeClass("bg-light");
    $(".text-light").addClass('text-dark').removeClass("text-light");
    $(".navbar-light").addClass('navbar-dark').removeClass("navbar-light");
    $(".btn-dark").addClass('btn-light').removeClass("btn-dark");
   
}

function addLightClass() {
    $(".bg-dark").addClass('bg-light').removeClass("bg-dark");
    $(".text-dark").addClass('text-light').removeClass("text-dark");
    $(".navbar-dark").addClass('navbar-light').removeClass("navbar-dark");
    $(".btn-light").addClass('btn-dark').removeClass("btn-light");
   
}

toggleSwitch.addEventListener('change', switchTheme, false);

//  ==================
//      Pre-Loader
//  ==================
$(window).on('load', function(){
  $('#loading-mask').fadeOut(3000);
});

//  ==================
//      Pre-Loader
//  ==================
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


//  ==================
//    Custom cursor
//  ==================
  const cursor = document.querySelector(".cursor");
  const links = document.querySelectorAll("a , input,textarea,button,.hover,label");

  document.addEventListener("mousemove", (e) => {
      let leftPosition = e.pageX + 10;
      let topPosition = e.pageY + 9;
  
      cursor.style.left = leftPosition + "px";
      cursor.style.top = topPosition + "px";
  })
  
  links.forEach(link => {
      link.addEventListener("mouseenter", () => {
          cursor.classList.add("large");
      })
  })
  
  links.forEach(link => {
      link.addEventListener("mouseleave", () => {
          cursor.classList.remove("large");
      })
  })
  
  // Animation
  
//   navlinks.forEach((li, i) => {
//       li.style.animationDelay = 0 + i * 140 + "ms";
//   }) 


// Search menu //

$(".search-btn").on('click',function(){
    $(".l-search").addClass("open");
    $(".l-search").removeClass("close");
  
});
$(".search-close").on('click',function(){
    $(".l-search").addClass("close");
    $(".l-search").removeClass("open");
});



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
    }else {
        addLightClass();
    }
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
    $(".text-dark").addClass('text-white').removeClass("text-dark");
    
}

function addLightClass() {
    $(".bg-dark").addClass('bg-light').removeClass("bg-dark");
    $(".text-dark").addClass('text-light').removeClass("text-dark");
    $(".navbar-dark").addClass('navbar-light').removeClass("navbar-dark");
    $(".btn-light").addClass('btn-dark').removeClass("btn-light");
    $(".text-white").addClass('text-dark').removeClass("text-white");
   
}

toggleSwitch.addEventListener('change', switchTheme, false);

//  ==================
//      Pre-Loader
//  ==================
$(window).on('load', function(){
  $('#loading-mask').fadeOut();
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
    $(window).on('load resize' ,function(){
        
        if(window.innerWidth > 1200){
            $(".catagoty-badge li").addClass("hover");
            const cursor = document.querySelector(".cursor");
            const links = document.querySelectorAll("a , input,textarea,button,.hover,label");
            window.addEventListener("mousemove", (e) => {
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
        }


        if(window.innerWidth < 768){
            gsap.utils.toArray(".blogpost  .blogpost_preview").forEach(box => {
                // gsap.set(box, { scale: 3,
                //     opacity:0,});
               gsap.to(box, {
                   
                    scrollTrigger: {
                         trigger:box,
                         // pin:box,
                         markers: false,  
                         opacity:1,
                         scrub: 3,
                         scale: 1,
                         toggleClass: "active",
                         start: "35% 40%", // when the top of the trigger hits the top of the viewport
                         end: "+=80",
                        //  end: "400px 300px",
                         // start: "170% 180%",
                         // end: "180% 170%",
                         // transformOrigin:"top"
                        // end: "top 0px",
                    },
                  scale: 1,
                    opacity:1,
                });
              });
        }
    });
    
    

 
   
  // Animation
  
//   navlinks.forEach((li, i) => {
//       li.style.animationDelay = 0 + i * 140 + "ms";
//   }) 


//  ==================
//      Search menu
//  ==================

$(".search-btn").on('click',function(){
    $(".l-search").addClass("open");
    $(".l-search").removeClass("close");
});
$(".search-close").on('click',function(){
    $(".l-search").addClass("close");
    $(".l-search").removeClass("open");
});






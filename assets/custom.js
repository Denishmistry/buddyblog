

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
}

function addLightClass() {
    $(".bg-dark").addClass('bg-light').removeClass("bg-dark");
    $(".text-dark").addClass('text-light').removeClass("text-dark");
    $(".navbar-dark").addClass('navbar-light').removeClass("navbar-dark");
}

toggleSwitch.addEventListener('change', switchTheme, false);

//  ==================
//      Pre-Loader
//  ==================
$(window).on('load', function(){
  $('#loading-mask').fadeOut(1000);
});
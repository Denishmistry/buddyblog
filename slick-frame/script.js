


var sliderToshowValue = 5;
$(".slider").slick({
        infinite: true,
        arrows: true,
        dots: false,
        centerMode:true,
        centerPadding:"50",
        autoplay: false,
        speed: 2000,
        autoplaySpeed:800,
        slidesToShow: sliderToshowValue,
        slidesToScroll: 1
    });
    // first manually find the width of Frame : In My case is 115%
   $(".frame").css({"width": 'calc(112% / '+sliderToshowValue+')'});




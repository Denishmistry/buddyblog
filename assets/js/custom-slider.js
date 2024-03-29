
        gsap.registerPlugin(ScrollToPlugin);
(function ($, undefined) {
    "use strict";
    var Defaults = {
      NoItemLg: 1,
      NoItemMd: 1,
      NoItemSm: 1,
      SlidtoScroll: false,
      ItemtoSlide: 1
    };
  
    $.fn.slider = function (Options) {
      if (Options === undefined) {
        var Settings = Defaults;
      } else {
        var Settings = Options;
      }
  
      // ====================
      //  Warpper contentent
      // ====================
      var TargetName = this;
      var Finddiv = $(this).children("div");
      Finddiv.addClass("items");
      Finddiv.wrapAll(
        "<div class='slider-main'><div class='landing-wrapper'><div class='landing-inner-content'></div></div></div>"
      );
      $(this)
        .find(".slider-main")
        .append(
          " <div class='arrow-main'><span class='arrow  arrow-left'><i class='bx bxs-chevron-left'></i></span><span class='arrow  arrow-right'><i class='bx bxs-chevron-right'></i></span></div>"
        );
  
      // ====================
      //  Declaration
      // ====================
 

      function Refresh(Settings, Target) {
        var LandingWrapper = Target.find(".landing-wrapper");
        var LandingInnerContent = Target.find(".landing-inner-content");
        var NumberOfItem; //Number of item to show
  
        if (Settings.NoItemLg && $(window).width() > 1024) {
          NumberOfItem = Settings.NoItemLg;
        } else if (
          Settings.NoItemMd &&
          $(window).width() > 450 &&
          $(window).width() <= 1024
        ) {
          NumberOfItem = Settings.NoItemMd;
        } else if (Settings.NoItemSm && $(window).width() <= 992) {
          NumberOfItem = Settings.NoItemSm;
        } else {
          var NumberOfItem = 1;
        }
  
        var TimeOffSet = 80; //Lower the time faster the speed
        var logpress = 3; // example: TimeOffSet / 3 => increase th speed 3 time from initial value
        var ArrowClickSlide = 2; // Arrow click Event time for slider animation
  
        //Arrow variable declaration
        var Leftarrow = Target.find(".arrow-left");
        var Rightarrow = Target.find(".arrow-right");
        // Dynamic Get width of outer div
        var ContentWidth = LandingWrapper.width();
  
        // Dynamic Get width of box/item
        var Itemwidth = ContentWidth / NumberOfItem;
        var Item = Target.find(".items").css("width", Itemwidth);
        var Slides = Target.find(".items");
        var NumSlides = Slides.length; // count total number of slide
  
        var TotalWidth = Itemwidth * NumSlides;
  
        var OwterWrraperWidth = LandingInnerContent.css(
          "width",
          Itemwidth * NumSlides
        );
  
        // ===================
        //    Arrow condition
        // ===================
        if (NumberOfItem < NumSlides && $(window).width() >= 768) {
          $(Leftarrow).css("display", "flex");
          $(Rightarrow).css("display", "flex");
  
          // console.log("arrow block");
        } else {
          $(Leftarrow).css("display", "none");
          $(Rightarrow).css("display", "none");
          // console.log("arrow none");
        }
  
        // ===================
        //   Function Event
        // ===================

        function slidertoscrollright() {
          var left = gsap.to(LandingWrapper, ArrowClickSlide, {
            scrollTo: {
              x: "+=" + Itemwidth * Settings.ItemtoSlide
            }
          });
        }
  
        function slidertoscrollleft() {
          var left = gsap.to(LandingWrapper, ArrowClickSlide, {
            scrollTo: {
              x: "-=" + Itemwidth * Settings.ItemtoSlide
            }
          });
        }
  
        function clickleft() {
          var left = gsap.to(LandingWrapper, TimeOffSet / logpress, {
            scrollTo: {
              x: "-=" + ContentWidth * 3
            }
          });
        }
  
        function clickright() {
          var right = gsap.to(LandingWrapper, TimeOffSet / logpress, {
            scrollTo: {
              x: "+=" + ContentWidth * 3
            }
          });
        }
  
        // function clickleft() {
        //     var left = gsap.to(LandingWrapper, 5, {
        //         scrollTo: {
        //             x: "-=" + TotalWidth
        //         }
        //     });
        // }
  
        // function clickright() {
        //     var right = gsap.to(LandingWrapper, 5, {
        //         scrollTo: {
        //             x: "+=" + TotalWidth
        //         }
        //     });
        // }
  
        function right() {
          var right = gsap.to(LandingWrapper, TimeOffSet, {
            scrollTo: {
              x: "+=" + TotalWidth
            }
          });
        }
  
        function left() {
          var left = gsap.to(LandingWrapper, TimeOffSet, {
            scrollTo: {
              x: "-=" + TotalWidth
            }
          });
        }
  
        function right() {
          var right = gsap.to(LandingWrapper, TimeOffSet, {
            scrollTo: {
              x: "+=" + TotalWidth
            }
          });
        }
  
        function stop() {
          var stop = gsap.to(LandingWrapper, TimeOffSet, {
            scrollTo: {
              x: "+=0"
            }
          });
        }
        // ===================
        //   Function Call Event
        // ===================
        var sevslide = Settings.SlidtoScroll;
        if (sevslide === true) {
          Leftarrow.on("click ", function (e) {
            slidertoscrollleft();
          });
          Rightarrow.on("click ", function (e) {
            slidertoscrollright();
          });
        } else {
          Leftarrow.on("mousedown ", function (e) {
            clickleft();
          });
          Rightarrow.on("mousedown ", function (e) {
            clickright();
          });
  
          Leftarrow.on("mouseover mouseup ", function (e) {
            left();
          });
          Leftarrow.on("mouseout ", function (e) {
            stop();
          });
          Rightarrow.on("mouseover mouseup ", function (e) {
            right();
          });
          Rightarrow.on("mouseout ", function (e) {
            stop();
          });
        }
        LandingWrapper.scroll(function () {
          if (LandingWrapper.scrollLeft() > 0) {
            Leftarrow.addClass("show-left-arrow");
          } else {
            Leftarrow.removeClass("show-left-arrow");
          }
        });
  
        LandingWrapper.scroll(function () {
          if (
            LandingWrapper.scrollLeft() >
            LandingInnerContent.width() - LandingWrapper.width() - 10
          ) {
            Rightarrow.addClass("hide-right-arrow");
          } else {
            Rightarrow.removeClass("hide-right-arrow");
          }
        });
      }
      Refresh(Settings, TargetName);
      $(window).on("resize orientationchange", function (e) {
        Refresh(Settings, TargetName);
      });
    };
  })(jQuery);
  
  $(document).ready(function () {
    $(".related-sldier").slider({
      NoItemLg: 2.2,
      NoItemSm:1.1,
      SlidtoScroll: false,
      ItemtoSlide: 2
    });

  });
  
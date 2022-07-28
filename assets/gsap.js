// console.log(document.getElementById("section02").offsetHeight);
// MotionPathPlugin.convertToPath('#circlePath'); 

// gsap.timeline({
//   scrollTrigger: {
//     trigger: '#section02',
//     start: 'top top',
//     end: '+=3000',
//     pin: true,
//     scrub: 1,
//     markers:true,

//   },
//   defaults:{duration:1, ease:'none'}
// })
//   .to('#small',{
//   motionPath: {
//     path: "#circlePath",
//     align: "#circlePath",
//     alignOrigin: [0.5, 0.5],
//     start: 0.90,  
//     end: 0.5
//   },
// })
//   .to('#small',{
//   motionPath: {
//     path: "#circlePath",
//     align: "#circlePath",
//     alignOrigin: [0.5, 0.5],
//     start: 0.5,
//     end: 0.10
//   },
// }, '+=1') // start 1 sec after last tween

// // just for fun
//   .to('.text', {autoAlpha:1, duration:0.5, repeat:1, yoyo:true}, '-=2')






















// MotionPathPlugin.convertToPath('#circlePath'); 

// gsap.utils.toArray("#section02").forEach(section => {
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: 'top bottom',
//         end: () => "+=" + section.offsetHeight,
//         pin: true,
//         anticipatePin: 1,
//         scrub: 1,
//         markers:true,
//       },
//       defaults:{duration:1, ease:'none'}
//     })
//       .to('#small',{
//       motionPath: {
//         path: "#circlePath",
//         align: "#circlePath",
//         alignOrigin: [0.5, 0.5],
//         start: 0.90,  
//         end: 0.5
//       },
//     })
//       .to('#small',{
//       motionPath: {
//         path: "#circlePath",
//         align: "#circlePath",
//         alignOrigin: [0.5, 0.5],
//         start: 0.5,
//         end: 0.10
//       },
//     }, '+=1') // start 1 sec after last tween
    
//     // just for fun
//       .to('.text', {autoAlpha:1, duration:0.5, repeat:1, yoyo:true}, '-=2')
//     });





















    //=====================
//  expirince section
// =====================


// https://codepen.io/mikeK/pen/eYNaxxd
// https://greensock.com/forums/topic/23549-circular-menu/
// https://codepen.io/mauroie31/pen/dyXaXod
// https://codepen.io/mikeK/pen/NWrVVRR/6cb1afa6beafbd765d9def51e90fd297
// https://codepen.io/mikeK/pen/NWrVVRR/6cb1afa6beafbd765d9def51e90fd297?editors=1100
// https://greensock.com/forums/topic/23549-circular-menu/

// https://greensock.com/forums/topic/26246-multiple-motionpath-and-scrolltrigger-animation-sequentially-on-same-element/

// ===================

// gsap.utils.toArray(".expirience").forEach((box) => {
//   gsap.to(box, {
//     scrollTrigger: {
//       trigger: box,
//       markers: false,
//       opacity: 1,
//       scrub: 2,
//       toggleClass: "active",
//       start: "0% 45%", // when the top of the trigger hits the top of the viewport
//       end: "100% 45%",
//     },
//   });
// });


// new code






$(window).on('load',function(){
    var height = $("#circle").innerHeight();
     console.log(height);
 });


var circleSVG = document.querySelector("#svg");


gsap.set('#circleWrap, #svg', {xPercent:-50, yPercent:-50})
MotionPathPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

var circlePath = document.querySelector("#circle");
const items = document.querySelectorAll('.item');


gsap.set(items, {motionPath: { // see 001
  path: circlePath,
  align: circlePath,
  alignOrigin: [0.5, 0.5],
  autoRotate:-90,
  end: i => i / (items.length)
}});




gsap.timeline({
  scrollTrigger: {
    trigger: '.expirience',
    start: 'top center',
    end: '=+500',
    pin: true,
    scrub: 1,
    markers:true
  },
  defaults:{duration:1, ease:'none'}
}).set('#circleWrap', {rotation:90}).to('#circleWrap', {rotation:-270, transformOrigin:'center', duration:1, ease:'none'});



// 001 https://greensock.com/forums/topic/23014-invalid-position/?tab=comments#comment-108638

// https://greensock.com/forums/topic/30098-how-to-pin-section-in-scrolltrigger/






// gsap.set(items, {motionPath: { 
//   path: circlePath,
//   align: circlePath,
//   alignOrigin: [0.5, 0.5],
//   autoRotate:-90,
//   end: i => i / items.length
// }});


 



// imp
// https://greensock.com/forums/topic/29440-make-text-animation-circle-when-scroll/
// https://codepen.io/mikeK/pen/powWwMm?editors=0110




// MotionPathPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

// gsap.set('#circle', {rotation:90, transformOrigin:'center'});




// let action = gsap.timeline({ 
//   paused:true
// })
// .to('.text', {
//   attr:{startOffset:565},
//   duration:1, ease:'none'
// })



// ScrollTrigger.create({
//   trigger: "svg",
//   pin:true,
//   scrub:true,
//   animation: action,
//   start: "top top",
//   end: "+=8000",
//   onUpdate: (self) => {
//     //  info for position
//     console.log(self.progress)
//   }
// });
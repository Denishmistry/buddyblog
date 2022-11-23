"use strict";


/* ===== Stickyfill ===== */
/* Ref: https://github.com/wilddeer/stickyfill */
// Add browser support to position: sticky

var elements = document.querySelectorAll('.sticky');
Stickyfill.add(elements);

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Initialize Gumshoe
// var spy = new Gumshoe('#doc-nav a', {
//     offset: 150,

// });
// console.log(spy);

var spy = new Gumshoe('#doc-nav a', {
	// Active classes
	navClass: 'active', // applied to the nav list item
	contentClass: 'active', // applied to the content

	// Nested navigation
	nested: false, // if true, add classes to parents of active link
	nestedClass: 'active', // applied to the parent items

	// Offset & reflow
	offset: 200, // how far from the top of the page to activate a content area
	reflow: false, // if true, listen for reflows

	// Event support
	events: true // if true, emit custom events

});




/* ====== SimpleLightbox Plugin ======= */
/*  Ref: https://github.com/andreknieriem/simplelightbox */
// var lightbox = new SimpleLightbox('.simplelightbox-gallery-1 a', {
//     /* options */ });
// var lightbox = new SimpleLightbox('.simplelightbox-gallery-2 a', {
//     /* options */ });
// var lightbox = new SimpleLightbox('.simplelightbox-gallery-3 a', {
//     /* options */ });
// var lightbox = new SimpleLightbox('.simplelightbox-gallery-4 a', {
//     /* options */ });
// var lightbox = new SimpleLightbox('.simplelightbox-gallery-5 a', {
//     /* options */ });
// var lightbox = new SimpleLightbox('.simplelightbox-gallery-6 a', {
//     /* options */ });
// var lightbox = new SimpleLightbox('.simplelightbox-gallery-7 a', {
//     /* options */ });






/* search lightbox */
/* Ref: http://ashleydw.github.io/lightbox/ */

// let cards = document.querySelectorAll('.doc-sub-menu li');
let cards = document.querySelectorAll('.doc-menu  li');

function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
    console.log(cards.length);
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    // var sidebar=document.getElementsByClassName('doc-nav')[0];
    for (var i = 0; i < cards.length; i++) {

        if (cards[i].textContent.toLowerCase().includes(search_query.toLowerCase())) {

            cards[i].classList.remove("is-hidden");
            // console.log(sidebar);
            // sidebar[i].classList.remove("search-result");
        } else {
            cards[i].classList.add("is-hidden");
            // console.log(sidebar);
            // sidebar[i].classList.add("search-result");
        }
    }
}

//A little delay
let typingTimer;
let typeInterval = 200;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});

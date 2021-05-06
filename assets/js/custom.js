// wow js
// wow = new WOW(
//     {
//       animateClass: 'animated',
//       offset: 100
//     }
//   );
// wow.init();


// smooth navbar spy
var $navbara = $('#navbar_id a');
  
$navbara.click(function(e){
  //prevent the page from refreshing
  e.preventDefault();
  //set the top offset animation and speed
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
},1000);
  // hash($(this).attr('href'));
});


// swipe slider  js
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    clickable: true,
    // direction: 'vertical',
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
          spaceBetween: 5
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });
/**
* Utility function to calculate the current theme setting.
* Look for a local storage value.
* Fall back to system setting.
* Fall back to light mode.
*/
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/**
* Utility function to update the button text and aria-label.
*/
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "" : "";
  // use an aria-label if you are omitting text on the button
  // and using a sun/moon icon, for example
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

/**
* Utility function to update the theme setting on the html tag
*/
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}


/**
* On page load:
*/

/**
* 1. Grab what we need from the DOM and system settings on page load
*/
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/*
* 2. Work out the current site settings
*/
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

/**
* 3. Update the theme setting and button text accoridng to current settings
*/
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

/**
* 4. Add an event listener to toggle the theme
*/
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});

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

$navbara.click(function (e) {
  //prevent the page from refreshing
  e.preventDefault();
  //set the top offset animation and speed
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000);
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
    // when window width is >= 700px
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

/*
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
*/

//slider heading h2
$(window).scroll(function () {
  inViewport();
});


function inViewport() {
  //video
  $('.video').each(function () {
    var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

    if (divPos < topOfWindow + 700) {
      $(this).addClass('slide-right');
    }
  });

  //video-content
  $('.video_content').each(function () {
    var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

    if (divPos < topOfWindow + 700) {
      $(this).addClass('slide-left');
    }
  });

  //video-content
  $('.funding_content').each(function () {
    var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

    if (divPos < topOfWindow + 700) {
      $(this).addClass('fade-left');
    }
  });

  //video-content
  $('.fund-img').each(function () {
    var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

    if (divPos < topOfWindow + 700) {
      $(this).addClass('fade-right');
    }
  });

  //video-content
  $('.logo-img').each(function () {
    var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

    if (divPos < topOfWindow + 700) {
      $(this).addClass('slide-left');
    }
  });

  //video-content
  $('.mission_content').each(function () {
    var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

    if (divPos < topOfWindow + 700) {
      $(this).addClass('slide-right');
    }
  });

  //video-content
  $('.lm_content').each(function () {
    var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

    if (divPos < topOfWindow + 700) {
      $(this).addClass('slide-left');
    }
  });

  //video-content
  $('.shield-img').each(function () {
    var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

    if (divPos < topOfWindow + 700) {
      $(this).addClass('slide-right');
    }
  });

}

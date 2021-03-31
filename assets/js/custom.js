
// side menu css
function toggleMenu(e) {
    e.classList.toggle("active");
    document.querySelector("aside").classList.toggle("active");
   
}

// $('.toggle-wrap').click(){;
//         $(this).find('i').toggleClass('fa-ellipsis-v fa-times');
//     });


// slick slider js starts

$('.interview_section ul').slick({
    dots: false,
    infinite: true,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    // speed: 2500,
});

// slick slider hero section js ends

// playslist slider js
$('.playlist_slider ul').slick({
    dots: false,
    infinite: false,
    arrows:  true,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    autoplaySpeed: 1500,
    variableWidth: false,
    centerMode: false,
    fade: false,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

// twitter slider js
$('.twitter_slider ul').slick({
    dots: false,
    infinite: false,
    arrows:  true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    autoplaySpeed: 1500,
    variableWidth: false,
    centerMode: false,
    fade: false,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2.5,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// instagram slider

$('.instagram_slider ul').slick({
    dots: false,
    infinite: false,
    arrows:  false,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    autoplaySpeed: 1500,
    variableWidth: false,
    centerMode: false,
    fade: false,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});






// scroll top js
var btn = $('#topbutton');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
btn.addClass('show');
} else {
btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});

// navbar collapse js
$('.navbar-toggler').on('click', function() {
    $('#collapsibleNavbar').show();
    $("header.nav_wrapper .navbar").css({ 'mix-blend-mode' : 'unset'});

    $('html, body').css({
overflow: 'hidden',
height: '100%',
});
});

$('.close,  #kontakt_scrol').click(function() {

// $('.overlay').hide();
$('html, body').css({
overflow: 'auto',
height: 'auto'
});
$('#collapsibleNavbar').hide();
$("header.nav_wrapper .navbar").css({ 'mix-blend-mode' : 'multiply'});
});

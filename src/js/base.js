
// navbar
$(function () {
    var fixblock_pos = $('#fixblock').position().top;
    $(window).scroll(function () {

        if ($(window).scrollTop() > fixblock_pos) {
            $('#fixblock').css({
                'position': 'fixed',
                'top': '0px',
                'background': 'white',
                'width': '100%',
                'z-index': '999999999999',
                'box-shadow': '0 0 15px 0 rgba(0, 0, 0, 0.5)',
                'transition': 'all 0.5s ease-out'
            });
        } else {
            $('#fixblock').css({
                'position': 'static',
                'background': 'none',
                'box-shadow': 'none',
                'transition': 'all 0.5s ease-out'
            });
        }
    })
});


var items = $('header nav ul li');
items.css('opacity', 0);
for (var i = 0; i < items.length; i++) {
    $(items[i]).delay(i * 500).animate({
        opacity: 1
    }, 500);
}


$(document).ready(function () {
    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1500);
    });
});


$(document).ready(function () {
    $("nav", ".header_logo a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1500);
    });
});


function slowScroll(id) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1500);
    return false;
}


// accordion
$(document).ready(function () {
    $(".question").on('click', ShowAnswer);
});

function ShowAnswer() {
    $(".info").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
    $(this).toggleClass("active");
    $(".question").not($(this)).removeClass("active");
}


// carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            481: {
                items: 2,
                nav: false,
            },
            992: {
                items: 3,
                loop: false,
            }
        }
    });
});
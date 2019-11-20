// carousel
var slides = document.querySelectorAll('.caption');
var prevBtn = document.querySelector('.left-button');
var nextBtn = document.querySelector('.right-button');
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'flex';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prevBtn.onclick = function () {
    plusSlides(-1);
}

nextBtn.onclick = function () {
    plusSlides(1);
}


// navbar
$(function () {
    var fixblock_pos = $('#fixblock').position().top;
    $(window).scroll(function () {

        if ($(window).scrollTop() > fixblock_pos) {
            $('#fixblock').css({
                'position': 'fixed',
                'top': '0px',
                'background': 'white',
                'width': '100%'
            });
        } else {
            $('#fixblock').css({
                'position': 'static',
                'background': 'none'
            });

        }
    })
});

var items = $('nav ul li');
items.css('opacity', 0);
for (var i = 0; i < items.length; i++) {
    $(items[i]).delay(i * 400).animate({
        opacity: 1
    }, 400);
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
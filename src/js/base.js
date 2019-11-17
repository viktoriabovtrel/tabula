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

/* для адаптивки*/
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

/*
var captionRight = document.querySelector('.caption-right');
var captionLeft = document.querySelector('.caption-left');

var leftBtn = document.querySelector('.left-button');
var rightBtn = document.querySelector('.right-button');

leftBtn.addEventListener('click', typeme);
rightBtn.addEventListener('click', typeme);


function typeme() {
    captionRight.toggleAttribute('hidden');
}
*/

var items = $('nav ul li');
items.css('opacity', 0);
for (var i = 0; i < items.length; i++) {
  $(items[i]).delay(i * 400).animate({ opacity: 1 }, 400);
}

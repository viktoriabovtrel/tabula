/* для адаптивки
var slides = document.querySelectorAll('.caption_item');
var prevBtn = document.getElementById('left-button');
var nextBtn = document.getElementById('right-button');
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n){
    showSlides(slideIndex += n);
}

prevBtn.onclick = function (){
    plusSlides(-1);
}

nextBtn.onclick = function (){
    plusSlides(1);
}*/


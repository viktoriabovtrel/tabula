var slides=document.querySelectorAll(".caption"),prevBtn=document.querySelector(".left-button");console.log(prevBtn);var nextBtn=document.querySelector(".right-button"),slideIndex=1;function showSlides(e){e<1?slideIndex=slides.length:e>slides.length&&(slideIndex=1);for(var l=0;l<slides.length;l++)slides[l].style.display="none";slides[slideIndex-1].style.display="block"}function plusSlides(e){showSlides(slideIndex+=e)}showSlides(slideIndex),prevBtn.onclick=function(){plusSlides(-1)},nextBtn.onclick=function(){plusSlides(1)};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2xpZGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJldkJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwibmV4dEJ0biIsInNsaWRlSW5kZXgiLCJzaG93U2xpZGVzIiwibiIsImxlbmd0aCIsImkiLCJzdHlsZSIsImRpc3BsYXkiLCJwbHVzU2xpZGVzIiwib25jbGljayJdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBSUEsT0FBU0MsU0FBU0MsaUJBQWlCLFlBQ25DQyxRQUFVRixTQUFTRyxjQUFjLGdCQUNyQ0MsUUFBUUMsSUFBSUgsU0FDWixJQUFJSSxRQUFVTixTQUFTRyxjQUFjLGlCQUNqQ0ksV0FBYSxFQUdqQixTQUFTQyxXQUFXQyxHQUNaQSxFQUFJLEVBQ0pGLFdBQWFSLE9BQU9XLE9BQ2JELEVBQUlWLE9BQU9XLFNBQ2xCSCxXQUFhLEdBRWpCLElBQUksSUFBSUksRUFBSSxFQUFHQSxFQUFJWixPQUFPVyxPQUFRQyxJQUM5QlosT0FBT1ksR0FBR0MsTUFBTUMsUUFBVSxPQUU5QmQsT0FBT1EsV0FBYSxHQUFHSyxNQUFNQyxRQUFVLFFBRzNDLFNBQVNDLFdBQVdMLEdBQ2hCRCxXQUFXRCxZQUFjRSxHQWY3QkQsV0FBV0QsWUFrQlhMLFFBQVFhLFFBQVUsV0FDZEQsWUFBWSxJQUdoQlIsUUFBUVMsUUFBVSxXQUNkRCxXQUFXIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiDQtNC70Y8g0LDQtNCw0L/RgtC40LLQutC4Ki9cclxudmFyIHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXB0aW9uJyk7XHJcbnZhciBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtYnV0dG9uJyk7XHJcbmNvbnNvbGUubG9nKHByZXZCdG4pO1xyXG52YXIgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1idXR0b24nKTtcclxudmFyIHNsaWRlSW5kZXggPSAxO1xyXG5zaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xyXG5cclxuZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbiAgICBpZiAobiA8IDEpIHtcclxuICAgICAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aDtcclxuICAgIH0gZWxzZSBpZiAobiA+IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICBzbGlkZUluZGV4ID0gMTtcclxuICAgIH1cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgc2xpZGVzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufVxyXG5cclxuZnVuY3Rpb24gcGx1c1NsaWRlcyhuKXtcclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSBuKTtcclxufVxyXG5cclxucHJldkJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCl7XHJcbiAgICBwbHVzU2xpZGVzKC0xKTtcclxufVxyXG5cclxubmV4dEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCl7XHJcbiAgICBwbHVzU2xpZGVzKDEpO1xyXG59XHJcblxyXG4vKlxyXG5cclxudmFyIGNhcHRpb25SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0aW9uLXJpZ2h0Jyk7XHJcbnZhciBjYXB0aW9uTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0aW9uLWxlZnQnKTtcclxuXHJcbnZhciBsZWZ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtYnV0dG9uJyk7XHJcbnZhciByaWdodEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1idXR0b24nKTtcclxuXHJcbmxlZnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0eXBlbWUpO1xyXG5yaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHR5cGVtZSk7XHJcblxyXG5cclxuZnVuY3Rpb24gdHlwZW1lKCkge1xyXG4gICAgY2FwdGlvblJpZ2h0LnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcbn1cclxuKi8iXX0=

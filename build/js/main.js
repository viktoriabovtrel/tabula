function makeFixedBlock(){var e=$("#fixblock").position().top;$(window).scroll(function(){$(window).scrollTop()>e?$("#fixblock").css({position:"fixed",top:"0px",background:"white",width:"100%","z-index":"999999999999","box-shadow":"0 0 15px 0 rgba(0, 0, 0, 0.5)",transition:"all 0.5s ease-out"}):$("#fixblock").css({position:"static",background:"none","box-shadow":"none",transition:"all 0.5s ease-out"})})}function slowScroll(e){return event.preventDefault(),$("html, body").animate({scrollTop:$(e).offset().top},1500),!1}function ShowAnswer(){$(".info").not($(this).next()).slideUp(500),$(this).next().slideToggle(500),$(this).toggleClass("active"),$(".question").not($(this)).removeClass("active")}function showMenu(){$(".burger-menu__nav").is(":hidden")?$(".burger-menu__nav").slideDown(1e3):$(".burger-menu__nav").slideUp(1e3),$(".burger-menu__button").toggleClass("active")}window.matchMedia("(max-width: 992px)"),$(document).ready(function(){$("nav").on("click","a",function(e){e.preventDefault();var t=$(this).attr("href"),o=$(t).offset().top;$("body, html").animate({scrollTop:o},1500)})}),$(document).ready(function(){$("nav",".header_logo a").on("click",function(e){e.preventDefault();var t=$(this).attr("href");$("html, body").animate({scrollTop:$(t).offset().top},1500)})}),$(document).ready(function(){$(".question").on("click",ShowAnswer)}),$(document).ready(function(){$(".owl-carousel").owlCarousel({autoplay:!0,nav:!0,loop:!0,responsive:{0:{items:1,nav:!1},481:{items:2,nav:!1},992:{items:3,loop:!1}}})}),$(".burger-menu__button").on("click",showMenu),$(".nav_link").on("click",showMenu),(new WOW).init(),$(".phone_with_ddd").mask("+375(00)000-00-00");var msg,sendMsg=$(".form_button"),firstName=$(".name"),mobileTel=$(".phone_with_ddd"),email=$(".email"),select=$(".select"),message=$(".message"),form=$("#form"),text=$(".text");function checkInputs(){var e=$("#form input");for(i=0;i<e.length;i++)e.val()||e.addClass("empty")}sendMsg.on("click",function(){if(checkInputs(),!firstName.val()||!mobileTel.val())return!1;msg="Name: "+firstName.val()+" ; Tel: "+mobileTel.val()+" ; Email: "+email.val()+" ; Курсы: "+select.val()+" ; Сообщение:"+message.val()+" ",fetch("https://api.telegram.org/bot990544176:AAHPjG6kAOzqy7sRMNeObkE7wty8zlj8MfU/sendMessage?chat_id=496675570&text="+msg),form.addClass("hidden"),sendMsg.addClass("hidden"),text.removeClass("hidden")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibWFrZUZpeGVkQmxvY2siLCJmaXhibG9ja19wb3MiLCIkIiwicG9zaXRpb24iLCJ0b3AiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJjc3MiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJ6LWluZGV4IiwiYm94LXNoYWRvdyIsInRyYW5zaXRpb24iLCJzbG93U2Nyb2xsIiwiaWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsIm9mZnNldCIsIlNob3dBbnN3ZXIiLCJub3QiLCJ0aGlzIiwibmV4dCIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzaG93TWVudSIsImlzIiwic2xpZGVEb3duIiwibWF0Y2hNZWRpYSIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImF0dHIiLCJvd2xDYXJvdXNlbCIsImF1dG9wbGF5IiwibmF2IiwibG9vcCIsInJlc3BvbnNpdmUiLCIwIiwiaXRlbXMiLCI0ODEiLCI5OTIiLCJXT1ciLCJpbml0IiwibWFzayIsIm1zZyIsInNlbmRNc2ciLCJmaXJzdE5hbWUiLCJtb2JpbGVUZWwiLCJlbWFpbCIsInNlbGVjdCIsIm1lc3NhZ2UiLCJmb3JtIiwidGV4dCIsImNoZWNrSW5wdXRzIiwiaW5wdXRzIiwiaSIsImxlbmd0aCIsInZhbCIsImFkZENsYXNzIiwiZmV0Y2giXSwibWFwcGluZ3MiOiJBQUtBLFNBQVNBLGlCQUNMLElBQUlDLEVBQWVDLEVBQUUsYUFBYUMsV0FBV0MsSUFDN0NGLEVBQUVHLFFBQVFDLE9BQU8sV0FFVEosRUFBRUcsUUFBUUUsWUFBY04sRUFDeEJDLEVBQUUsYUFBYU0sSUFBSSxDQUNmTCxTQUFZLFFBQ1pDLElBQU8sTUFDUEssV0FBYyxRQUNkQyxNQUFTLE9BQ1RDLFVBQVcsZUFDWEMsYUFBYyxnQ0FDZEMsV0FBYyxzQkFHbEJYLEVBQUUsYUFBYU0sSUFBSSxDQUNmTCxTQUFZLFNBQ1pNLFdBQWMsT0FDZEcsYUFBYyxPQUNkQyxXQUFjLHdCQThCOUIsU0FBU0MsV0FBV0MsR0FLaEIsT0FKQUMsTUFBTUMsaUJBQ05mLEVBQUUsY0FBY2dCLFFBQVEsQ0FDcEJYLFVBQVdMLEVBQUVhLEdBQUlJLFNBQVNmLEtBQzNCLE9BQ0ksRUFTWCxTQUFTZ0IsYUFDTGxCLEVBQUUsU0FBU21CLElBQUluQixFQUFFb0IsTUFBTUMsUUFBUUMsUUFBUSxLQUN2Q3RCLEVBQUVvQixNQUFNQyxPQUFPRSxZQUFZLEtBQzNCdkIsRUFBRW9CLE1BQU1JLFlBQVksVUFDcEJ4QixFQUFFLGFBQWFtQixJQUFJbkIsRUFBRW9CLE9BQU9LLFlBQVksVUErQjVDLFNBQVNDLFdBQ0QxQixFQUFFLHFCQUFxQjJCLEdBQUcsV0FDMUIzQixFQUFFLHFCQUFxQjRCLFVBQVUsS0FFakM1QixFQUFFLHFCQUFxQnNCLFFBQVEsS0FFbkN0QixFQUFFLHdCQUF3QndCLFlBQVksVUE1R3RDckIsT0FBTzBCLFdBQVcsc0JBOEJ0QjdCLEVBQUU4QixVQUFVQyxNQUFNLFdBQ2QvQixFQUFFLE9BQU9nQyxHQUFHLFFBQVMsSUFBSyxTQUFVbEIsR0FDaENBLEVBQU1DLGlCQUNOLElBQUlGLEVBQUtiLEVBQUVvQixNQUFNYSxLQUFLLFFBQ2xCL0IsRUFBTUYsRUFBRWEsR0FBSUksU0FBU2YsSUFDekJGLEVBQUUsY0FBY2dCLFFBQVEsQ0FDcEJYLFVBQVdILEdBQ1osVUFLWEYsRUFBRThCLFVBQVVDLE1BQU0sV0FDZC9CLEVBQUUsTUFBTyxrQkFBa0JnQyxHQUFHLFFBQVMsU0FBVWxCLEdBQzdDQSxFQUFNQyxpQkFDTixJQUFJRixFQUFLYixFQUFFb0IsTUFBTWEsS0FBSyxRQUN0QmpDLEVBQUUsY0FBY2dCLFFBQVEsQ0FDcEJYLFVBQVdMLEVBQUVhLEdBQUlJLFNBQVNmLEtBQzNCLFVBZVhGLEVBQUU4QixVQUFVQyxNQUFNLFdBQ2QvQixFQUFFLGFBQWFnQyxHQUFHLFFBQVNkLGNBWS9CbEIsRUFBRThCLFVBQVVDLE1BQU0sV0FDZC9CLEVBQUUsaUJBQWlCa0MsWUFBWSxDQUMzQkMsVUFBVSxFQUNWQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsV0FBWSxDQUNSQyxFQUFHLENBQ0NDLE1BQU8sRUFDUEosS0FBSyxHQUVUSyxJQUFLLENBQ0RELE1BQU8sRUFDUEosS0FBSyxHQUVUTSxJQUFLLENBQ0RGLE1BQU8sRUFDUEgsTUFBTSxRQU10QnJDLEVBQUUsd0JBQXdCZ0MsR0FBRyxRQUFTTixVQUN0QzFCLEVBQUUsYUFBYWdDLEdBQUcsUUFBU04sV0FZM0IsSUFBSWlCLEtBQU1DLE9BSVY1QyxFQUFFLG1CQUFtQjZDLEtBQUsscUJBRTFCLElBUUlDLElBUkFDLFFBQVUvQyxFQUFFLGdCQUNaZ0QsVUFBWWhELEVBQUUsU0FDZGlELFVBQVlqRCxFQUFFLG1CQUNka0QsTUFBUWxELEVBQUUsVUFDVm1ELE9BQVNuRCxFQUFFLFdBQ1hvRCxRQUFVcEQsRUFBRSxZQUNacUQsS0FBT3JELEVBQUUsU0FDVHNELEtBQU90RCxFQUFFLFNBaUJiLFNBQVN1RCxjQUNMLElBQUlDLEVBQVN4RCxFQUFFLGVBQ2YsSUFBS3lELEVBQUksRUFBR0EsRUFBSUQsRUFBT0UsT0FBUUQsSUFDdEJELEVBQU9HLE9BQ1JILEVBQU9JLFNBQVMsU0FsQjVCYixRQUFRZixHQUFHLFFBQVMsV0FFaEIsR0FEQXVCLGVBQ0lQLFVBQVVXLFFBQVNWLFVBQVVVLE1BUTdCLE9BQU8sRUFQUGIsSUFBTSxTQUFXRSxVQUFVVyxNQUFRLFdBQWtCVixVQUFVVSxNQUFRLGFBQW9CVCxNQUFNUyxNQUFRLGFBQW9CUixPQUFPUSxNQUFRLGdCQUF1QlAsUUFBUU8sTUFBUSxJQUVuTEUsTUFEYyxnSEFBa0hmLEtBRWhJTyxLQUFLTyxTQUFTLFVBQ2RiLFFBQVFhLFNBQVMsVUFDakJOLEtBQUs3QixZQUFZIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuYXZiYXJcclxuaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA5OTJweCknKSkge1xyXG4gICAgbWFrZUZpeGVkQmxvY2s7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VGaXhlZEJsb2NrKCkge1xyXG4gICAgdmFyIGZpeGJsb2NrX3BvcyA9ICQoJyNmaXhibG9jaycpLnBvc2l0aW9uKCkudG9wO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBmaXhibG9ja19wb3MpIHtcclxuICAgICAgICAgICAgJCgnI2ZpeGJsb2NrJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgICAndG9wJzogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZCc6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTk5OTk5OTknLFxyXG4gICAgICAgICAgICAgICAgJ2JveC1zaGFkb3cnOiAnMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSknLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb24nOiAnYWxsIDAuNXMgZWFzZS1vdXQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNmaXhibG9jaycpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kJzogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ2JveC1zaGFkb3cnOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbic6ICdhbGwgMC41cyBlYXNlLW91dCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufTtcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwibmF2XCIpLm9uKFwiY2xpY2tcIiwgXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdG9wXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIm5hdlwiLCBcIi5oZWFkZXJfbG9nbyBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChpZCkub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gc2xvd1Njcm9sbChpZCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6ICQoaWQpLm9mZnNldCgpLnRvcFxyXG4gICAgfSwgMTUwMCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG4vLyBhY2NvcmRpb25cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5xdWVzdGlvblwiKS5vbignY2xpY2snLCBTaG93QW5zd2VyKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBTaG93QW5zd2VyKCkge1xyXG4gICAgJChcIi5pbmZvXCIpLm5vdCgkKHRoaXMpLm5leHQoKSkuc2xpZGVVcCg1MDApO1xyXG4gICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoNTAwKTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAkKFwiLnF1ZXN0aW9uXCIpLm5vdCgkKHRoaXMpKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuXHJcbi8vIGNhcm91c2VsXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNDgxOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoJy5idXJnZXItbWVudV9fYnV0dG9uJykub24oJ2NsaWNrJywgc2hvd01lbnUpO1xyXG4kKCcubmF2X2xpbmsnKS5vbignY2xpY2snLCBzaG93TWVudSk7XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd01lbnUoKSB7XHJcbiAgICBpZiAoJCgnLmJ1cmdlci1tZW51X19uYXYnKS5pcygnOmhpZGRlbicpKSB7XHJcbiAgICAgICAgJCgnLmJ1cmdlci1tZW51X19uYXYnKS5zbGlkZURvd24oMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5idXJnZXItbWVudV9fbmF2Jykuc2xpZGVVcCgxMDAwKTtcclxuICAgIH1cclxuICAgICQoJy5idXJnZXItbWVudV9fYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5uZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuLy9mb3JtIFxyXG5cclxuJCgnLnBob25lX3dpdGhfZGRkJykubWFzaygnKzM3NSgwMCkwMDAtMDAtMDAnKTtcclxuXHJcbnZhciBzZW5kTXNnID0gJCgnLmZvcm1fYnV0dG9uJyksXHJcbiAgICBmaXJzdE5hbWUgPSAkKCcubmFtZScpLFxyXG4gICAgbW9iaWxlVGVsID0gJCgnLnBob25lX3dpdGhfZGRkJyksXHJcbiAgICBlbWFpbCA9ICQoJy5lbWFpbCcpLFxyXG4gICAgc2VsZWN0ID0gJCgnLnNlbGVjdCcpLFxyXG4gICAgbWVzc2FnZSA9ICQoJy5tZXNzYWdlJyksXHJcbiAgICBmb3JtID0gJCgnI2Zvcm0nKSxcclxuICAgIHRleHQgPSAkKCcudGV4dCcpLFxyXG4gICAgbXNnO1xyXG5cclxuc2VuZE1zZy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjaGVja0lucHV0cygpO1xyXG4gICAgaWYgKGZpcnN0TmFtZS52YWwoKSAmJiBtb2JpbGVUZWwudmFsKCkpIHtcclxuICAgICAgICBtc2cgPSAnTmFtZTogJyArIGZpcnN0TmFtZS52YWwoKSArICcgJyArICc7IFRlbDogJyArIG1vYmlsZVRlbC52YWwoKSArICcgJyArICc7IEVtYWlsOiAnICsgZW1haWwudmFsKCkgKyAnICcgKyAnOyDQmtGD0YDRgdGLOiAnICsgc2VsZWN0LnZhbCgpICsgJyAnICsgJzsg0KHQvtC+0LHRidC10L3QuNC1OicgKyBtZXNzYWdlLnZhbCgpICsgJyAnO1xyXG4gICAgICAgIHZhciBib3RMaW5rID0gJ2h0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Q5OTA1NDQxNzY6QUFIUGpHNmtBT3pxeTdzUk1OZU9ia0U3d3R5OHpsajhNZlUvc2VuZE1lc3NhZ2U/Y2hhdF9pZD00OTY2NzU1NzAmdGV4dD0nICsgbXNnO1xyXG4gICAgICAgIGZldGNoKGJvdExpbmspO1xyXG4gICAgICAgIGZvcm0uYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIHNlbmRNc2cuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRleHQucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xyXG4gICAgdmFyIGlucHV0cyA9ICQoJyNmb3JtIGlucHV0JylcclxuICAgIGZvciAoaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIWlucHV0cy52YWwoKSkge1xyXG4gICAgICAgICAgICBpbnB1dHMuYWRkQ2xhc3MoJ2VtcHR5Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyJdfQ==

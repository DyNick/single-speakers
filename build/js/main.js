$(document).ready(function(e){e(".container-buy__button__link ").on("click",function(t){t.preventDefault(),e(".popup-section").addClass("is-visible")}),e(".popup-section").on("click",function(t){(e(t.target).is(".fa-close")||e(t.target).is(".cd-popup"))&&(t.preventDefault(),e(this).removeClass("is-visible"))}),e(document).keyup(function(t){"27"==t.which&&e(".popup-section").removeClass("is-visible")})}),$(function(){$(".youtube").each(function(){$(this).css("background-image","url(http://i.ytimg.com/vi/"+this.id+"/sddefault.jpg)"),$(this).append($("<div/>",{class:"play"})),$(document).delegate("#"+this.id,"click",function(){var e="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1";$(this).data("params")&&(e+="&"+$(this).data("params"));var t=$("<iframe/>",{frameborder:"0",src:e,width:$(this).width(),height:$(this).height()});$(this).replaceWith(t)})})}),$(document).ready(function(){$("#phone").mask("+38(099) 999-99-99")}),function(e){e.fn.typewrite=function(t){var i=e.extend({speed:12,blinkSpeed:2,showCursor:!0,blinkingCursor:!0,cursor:"|",selectedBackground:"#F1F1F1",selectedText:"#333333"},t);i.blinkSpeed=1e3/i.blinkSpeed,i.showCursor?(e(this).html('<span></span><span class="blinkingCursor">'+i.cursor+"</span>"),i.blinkingCursor&&setInterval(function(){e(".blinkingCursor").toggle()},i.blinkSpeed)):e(this).html("<span></span>"),i.mainel=this,i.el=e(this).children("span")[0],i.speed=1e3/i.speed;var n=t.actions;i.queue=n.length,e(i.mainel).trigger("typewriteStarted"),n.forEach(function(t,n){"select"!==Object.keys(t)[0]&&function(){if(e(".typewriteSelected").length>0){var t=e(".typewriteSelected").text();e(".typewriteSelected").replaceWith(t)}}(),"type"===Object.keys(t)[0]&&("<br>"===t.type?e(i.el).delay(i.speed).queue(function(t){var n=e(this).html().substring(0,e(this).html().length-1);e(this).html(n+"<br>"),t(),i.queue=i.queue-1,e(i.mainel).trigger("typewriteNewLine")}):function(t){var n=t.split("");n.forEach(function(t,l){e(i.el).delay(i.speed).queue(function(s){var r=e(this).html()+t;e(this).html(r),s(),l===n.length-1&&(i.queue=i.queue-1,e(i.mainel).trigger("typewriteTyped",r))})},this)}(e("<div/>").html(t.type).text())),"delay"===Object.keys(t)[0]&&function(t){e(i.el).delay(t).queue(function(t){t(),i.queue=i.queue-1,e(i.mainel).trigger("typewriteDelayEnded")})}(t.delay),"speed"===Object.keys(t)[0]&&(i.speed=1e3/t.speed),"remove"===Object.keys(t)[0]&&function(t){var n=new Array(t.num+1).join(" ").split(""),l=void 0!==t.type?t.type:"stepped";"stepped"!==l&&"whole"!==l&&(l="stepped"),"stepped"===l&&n.forEach(function(l,s){e(i.el).delay(i.speed).queue(function(l){e(i.el).html(e(i.el).html().replace(/<br.*?>/g," \n "));var r=e(this).text().substring(0,e(this).text().length-1);e(this).html(r.replace(/ \n /g,"<br>")),l(),s===n.length-1&&(i.queue=i.queue-1,e(i.mainel).trigger("typewriteRemoved",t))})},this),"whole"===l&&e(i.el).delay(i.speed).queue(function(n){e(i.el).html(e(i.el).html().replace(/<br.*?>/g," \n "));var l=e(this).text().substring(0,e(this).text().length-t.num);e(this).html(l.replace(/ \n /g,"<br>")),n(),i.queue=i.queue-1,e(i.mainel).trigger("typewriteRemoved",t)})}(t.remove),"select"===Object.keys(t)[0]&&function(t,n){var l=t.to-t.from,s='<span class="typewriteSelected" style="background-color:'+i.selectedBackground+"; color: "+i.selectedText+'">',r=new Array(l+1).join(" ").split("");r.forEach(function(n,l){e(i.el).delay(i.speed).queue(function(n){l++;var u=t.to-l;e(i.el).html(e(i.el).html().replace(/<br.*?>/g," \n "));var a=e(i.el).text(),c=a.slice(0,u),o=a.slice(u,t.to),p=a.slice(t.to,a.length),h=c+s+o+"</span>"+p;e(this).html(h.replace(/ \n /g,"<br>")),n(),l===r.length-1&&(i.queue=i.queue-1,e(i.mainel).trigger("typewriteSelected",t))})})}(t.select)});var l=setInterval(function(){0===i.queue&&(clearInterval(l),e(i.mainel).trigger("typewriteComplete"))},500)}}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZGRDbGFzcyIsInRhcmdldCIsImlzIiwidGhpcyIsInJlbW92ZUNsYXNzIiwia2V5dXAiLCJ3aGljaCIsImVhY2giLCJjc3MiLCJpZCIsImFwcGVuZCIsImNsYXNzIiwiZGVsZWdhdGUiLCJpZnJhbWVfdXJsIiwiZGF0YSIsImlmcmFtZSIsImZyYW1lYm9yZGVyIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJyZXBsYWNlV2l0aCIsIm1hc2siLCJmbiIsInR5cGV3cml0ZSIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImV4dGVuZCIsInNwZWVkIiwiYmxpbmtTcGVlZCIsInNob3dDdXJzb3IiLCJibGlua2luZ0N1cnNvciIsImN1cnNvciIsInNlbGVjdGVkQmFja2dyb3VuZCIsInNlbGVjdGVkVGV4dCIsImh0bWwiLCJzZXRJbnRlcnZhbCIsInRvZ2dsZSIsIm1haW5lbCIsImVsIiwiY2hpbGRyZW4iLCJhY3Rpb25zIiwicXVldWUiLCJsZW5ndGgiLCJ0cmlnZ2VyIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsIk9iamVjdCIsImtleXMiLCJzZWxlY3Rpb25UZXh0IiwidGV4dCIsInJlbW92ZVNlbGVjdGlvbiIsInR5cGUiLCJkZWxheSIsIm5leHQiLCJjdXJyVGV4dE5vQ3VyciIsInN1YnN0cmluZyIsImNoYXJzIiwic3BsaXQiLCJjaGFyIiwidHlwZVRleHQiLCJ0aW1lIiwicmVtb3ZlIiwiQXJyYXkiLCJudW0iLCJqb2luIiwicmVtb3ZlVHlwZSIsInJlcGxhY2UiLCJjdXJyVGV4dCIsImFjdGlvbiIsImNhbGxiYWNrIiwiY2hhckxlbiIsInRvIiwiZnJvbSIsInNwYW5PcGVuIiwibmV3VG8iLCJjdXJyZW50U3RyaW5nIiwiZmlyc3RQYXJ0Iiwic2xpY2UiLCJzZWxlY3RQYXJ0IiwibGFzdFBhcnQiLCJuZXdTdHJpbmci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LEVBQU9HLEdBQUcxQixFQUFNcEQsRUFBRStCLEVBQVNhLElBQUlKLEtBQUt4QyxFQUFFK0IsRUFBU2EsSUFBSUosT0FBT2lDLFFBQVEsV0FBVyxTQUFTLElBQUlTLEVBQWNsRixFQUFFK0IsRUFBU2EsSUFBSVksT0FBVzJCLEVBQVVELEVBQWNFLE1BQU0sRUFBRUgsR0FBV0ksRUFBV0gsRUFBY0UsTUFBTUgsRUFBTU4sRUFBT0csSUFBUVEsRUFBU0osRUFBY0UsTUFBTVQsRUFBT0csR0FBR0ksRUFBY2xDLFFBQVl1QyxFQUFVSixFQUFVSCxFQUFTSyxFQUFXLFVBQVVDLEVBQVN0RixFQUFFUyxNQUFNK0IsS0FBSytDLEVBQVVkLFFBQVEsUUFBUSxTQUFTYixJQUFVUixJQUFRVyxFQUFNZixPQUFPLElBQUdqQixFQUFTZ0IsTUFBTWhCLEVBQVNnQixNQUFNLEVBQUUvQyxFQUFFK0IsRUFBU1ksUUFBUU0sUUFBUSxvQkFBb0IwQixRQUFoaUNhLENBQU9yQyxFQUFRcUMsVUFBVyxJQUFJQyxFQUFLaEQsWUFBWSxXQUErQixJQUFqQlYsRUFBU2dCLFFBQVcyQyxjQUFjRCxHQUFNekYsRUFBRStCLEVBQVNZLFFBQVFNLFFBQVEsdUJBQXVCLE1BQXp5QyxDQUFzbUkwQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCl7XHJcbiAgICAvL29wZW4gcG9wdXBcclxuICAgICQoJy5jb250YWluZXItYnV5X19idXR0b25fX2xpbmsgJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLnBvcHVwLXNlY3Rpb24nKS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jbG9zZSBwb3B1cFxyXG4gICAgJCgnLnBvcHVwLXNlY3Rpb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgaWYoICQoZXZlbnQudGFyZ2V0KS5pcygnLmZhLWNsb3NlJykgfHwgJChldmVudC50YXJnZXQpLmlzKCcuY2QtcG9wdXAnKSApIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9jbG9zZSBwb3B1cCB3aGVuIGNsaWNraW5nIHRoZSBlc2Mga2V5Ym9hcmQgYnV0dG9uXHJcbiAgICAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgaWYoZXZlbnQud2hpY2g9PScyNycpe1xyXG4gICAgICAgICAgICAkKCcucG9wdXAtc2VjdGlvbicpLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09eW91dHViZT09PT09PT09Ki9cclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLnlvdXR1YmVcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBCYXNlZCBvbiB0aGUgWW91VHViZSBJRCwgd2UgY2FuIGVhc2lseSBmaW5kIHRoZSB0aHVtYm5haWwgaW1hZ2VcclxuICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoaHR0cDovL2kueXRpbWcuY29tL3ZpLycgKyB0aGlzLmlkICsgJy9zZGRlZmF1bHQuanBnKScpO1xyXG5cclxuICAgICAgICAvLyBPdmVybGF5IHRoZSBQbGF5IGljb24gdG8gbWFrZSBpdCBsb29rIGxpa2UgYSB2aWRlbyBwbGF5ZXJcclxuICAgICAgICAkKHRoaXMpLmFwcGVuZCgkKCc8ZGl2Lz4nLCB7J2NsYXNzJzogJ3BsYXknfSkpO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnIycrdGhpcy5pZCwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbiBpRnJhbWUgd2l0aCBhdXRvcGxheSBzZXQgdG8gdHJ1ZVxyXG4gICAgICAgICAgICB2YXIgaWZyYW1lX3VybCA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIgKyB0aGlzLmlkICsgXCI/YXV0b3BsYXk9MSZhdXRvaGlkZT0xXCI7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ3BhcmFtcycpKSBpZnJhbWVfdXJsKz0nJicrJCh0aGlzKS5kYXRhKCdwYXJhbXMnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoZSBoZWlnaHQgYW5kIHdpZHRoIG9mIHRoZSBpRnJhbWUgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIHBhcmVudFxyXG4gICAgICAgICAgICB2YXIgaWZyYW1lID0gJCgnPGlmcmFtZS8+JywgeydmcmFtZWJvcmRlcic6ICcwJywgJ3NyYyc6IGlmcmFtZV91cmwsICd3aWR0aCc6ICQodGhpcykud2lkdGgoKSwgJ2hlaWdodCc6ICQodGhpcykuaGVpZ2h0KCkgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIFlvdVR1YmUgdGh1bWJuYWlsIHdpdGggWW91VHViZSBIVE1MNSBQbGF5ZXJcclxuICAgICAgICAgICAgJCh0aGlzKS5yZXBsYWNlV2l0aChpZnJhbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09Ly95b3V0dWJlPT09PT09PT0qL1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICQoJyNwaG9uZScpLm1hc2soJyszOCgwOTkpIDk5OS05OS05OScpO1xyXG5cclxufSk7XG4oZnVuY3Rpb24oJCl7JC5mbi50eXBld3JpdGU9ZnVuY3Rpb24ob3B0aW9ucyl7dmFyIHNldHRpbmdzPSQuZXh0ZW5kKHtzcGVlZDoxMixibGlua1NwZWVkOjIsc2hvd0N1cnNvcjp0cnVlLGJsaW5raW5nQ3Vyc29yOnRydWUsY3Vyc29yOlwifFwiLHNlbGVjdGVkQmFja2dyb3VuZDpcIiNGMUYxRjFcIixzZWxlY3RlZFRleHQ6XCIjMzMzMzMzXCJ9LG9wdGlvbnMpO3NldHRpbmdzLmJsaW5rU3BlZWQ9MWUzL3NldHRpbmdzLmJsaW5rU3BlZWQ7aWYoc2V0dGluZ3Muc2hvd0N1cnNvcil7JCh0aGlzKS5odG1sKCc8c3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XCJibGlua2luZ0N1cnNvclwiPicrc2V0dGluZ3MuY3Vyc29yK1wiPC9zcGFuPlwiKTtpZihzZXR0aW5ncy5ibGlua2luZ0N1cnNvcil7c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXskKFwiLmJsaW5raW5nQ3Vyc29yXCIpLnRvZ2dsZSgpfSxzZXR0aW5ncy5ibGlua1NwZWVkKX19ZWxzZXskKHRoaXMpLmh0bWwoXCI8c3Bhbj48L3NwYW4+XCIpfXNldHRpbmdzLm1haW5lbD10aGlzO3NldHRpbmdzLmVsPSQodGhpcykuY2hpbGRyZW4oXCJzcGFuXCIpWzBdO3NldHRpbmdzLnNwZWVkPTFlMy9zZXR0aW5ncy5zcGVlZDt2YXIgYWN0aW9ucz1vcHRpb25zLmFjdGlvbnM7c2V0dGluZ3MucXVldWU9YWN0aW9ucy5sZW5ndGg7JChzZXR0aW5ncy5tYWluZWwpLnRyaWdnZXIoXCJ0eXBld3JpdGVTdGFydGVkXCIpO2FjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LGluZGV4KXtpZihPYmplY3Qua2V5cyhlbGVtZW50KVswXSE9PVwic2VsZWN0XCIpe3JlbW92ZVNlbGVjdGlvbigpfWlmKE9iamVjdC5rZXlzKGVsZW1lbnQpWzBdPT09XCJ0eXBlXCIpe2lmKGVsZW1lbnQudHlwZT09PVwiPGJyPlwiKXtuZXdMaW5lKCl9ZWxzZXt2YXIgdGV4dD0kKFwiPGRpdi8+XCIpLmh0bWwoZWxlbWVudC50eXBlKS50ZXh0KCk7dHlwZVRleHQodGV4dCxzZXR0aW5ncyl9fWlmKE9iamVjdC5rZXlzKGVsZW1lbnQpWzBdPT09XCJkZWxheVwiKXtkZWxheShlbGVtZW50LmRlbGF5KX1pZihPYmplY3Qua2V5cyhlbGVtZW50KVswXT09PVwic3BlZWRcIil7c2V0dGluZ3Muc3BlZWQ9MWUzL2VsZW1lbnQuc3BlZWR9aWYoT2JqZWN0LmtleXMoZWxlbWVudClbMF09PT1cInJlbW92ZVwiKXtyZW1vdmUoZWxlbWVudC5yZW1vdmUpfWlmKE9iamVjdC5rZXlzKGVsZW1lbnQpWzBdPT09XCJzZWxlY3RcIil7c2VsZWN0KGVsZW1lbnQuc2VsZWN0KX19KTt2YXIgZG9uZT1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2lmKHNldHRpbmdzLnF1ZXVlPT09MCl7Y2xlYXJJbnRlcnZhbChkb25lKTskKHNldHRpbmdzLm1haW5lbCkudHJpZ2dlcihcInR5cGV3cml0ZUNvbXBsZXRlXCIpfX0sNTAwKTtmdW5jdGlvbiBzZWxlY3QoYWN0aW9uLGNhbGxiYWNrKXt2YXIgY2hhckxlbj1hY3Rpb24udG8tYWN0aW9uLmZyb207dmFyIHNwYW5PcGVuPSc8c3BhbiBjbGFzcz1cInR5cGV3cml0ZVNlbGVjdGVkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrc2V0dGluZ3Muc2VsZWN0ZWRCYWNrZ3JvdW5kK1wiOyBjb2xvcjogXCIrc2V0dGluZ3Muc2VsZWN0ZWRUZXh0KydcIj4nO3ZhciBibGFua3N0cj1uZXcgQXJyYXkoY2hhckxlbisxKS5qb2luKFwiIFwiKTt2YXIgY2hhcnM9YmxhbmtzdHIuc3BsaXQoXCJcIik7Y2hhcnMuZm9yRWFjaChmdW5jdGlvbihjaGFyLGluZGV4KXskKHNldHRpbmdzLmVsKS5kZWxheShzZXR0aW5ncy5zcGVlZCkucXVldWUoZnVuY3Rpb24obmV4dCl7aW5kZXgrKzt2YXIgbmV3VG89YWN0aW9uLnRvLWluZGV4OyQoc2V0dGluZ3MuZWwpLmh0bWwoJChzZXR0aW5ncy5lbCkuaHRtbCgpLnJlcGxhY2UoLzxici4qPz4vZyxcIiBcXG4gXCIpKTt2YXIgY3VycmVudFN0cmluZz0kKHNldHRpbmdzLmVsKS50ZXh0KCk7dmFyIGZpcnN0UGFydD1jdXJyZW50U3RyaW5nLnNsaWNlKDAsbmV3VG8pO3ZhciBzZWxlY3RQYXJ0PWN1cnJlbnRTdHJpbmcuc2xpY2UobmV3VG8sYWN0aW9uLnRvKTt2YXIgbGFzdFBhcnQ9Y3VycmVudFN0cmluZy5zbGljZShhY3Rpb24udG8sY3VycmVudFN0cmluZy5sZW5ndGgpO3ZhciBuZXdTdHJpbmc9Zmlyc3RQYXJ0K3NwYW5PcGVuK3NlbGVjdFBhcnQrXCI8L3NwYW4+XCIrbGFzdFBhcnQ7JCh0aGlzKS5odG1sKG5ld1N0cmluZy5yZXBsYWNlKC8gXFxuIC9nLFwiPGJyPlwiKSk7bmV4dCgpO2lmKGluZGV4PT09Y2hhcnMubGVuZ3RoLTEpe3NldHRpbmdzLnF1ZXVlPXNldHRpbmdzLnF1ZXVlLTE7JChzZXR0aW5ncy5tYWluZWwpLnRyaWdnZXIoXCJ0eXBld3JpdGVTZWxlY3RlZFwiLGFjdGlvbil9fSl9KX1mdW5jdGlvbiBkZWxheSh0aW1lKXskKHNldHRpbmdzLmVsKS5kZWxheSh0aW1lKS5xdWV1ZShmdW5jdGlvbihuZXh0KXtuZXh0KCk7c2V0dGluZ3MucXVldWU9c2V0dGluZ3MucXVldWUtMTskKHNldHRpbmdzLm1haW5lbCkudHJpZ2dlcihcInR5cGV3cml0ZURlbGF5RW5kZWRcIil9KX1mdW5jdGlvbiByZW1vdmUocmVtb3ZlKXt2YXIgYmxhbmtzdHI9bmV3IEFycmF5KHJlbW92ZS5udW0rMSkuam9pbihcIiBcIik7dmFyIGNoYXJzPWJsYW5rc3RyLnNwbGl0KFwiXCIpO3ZhciByZW1vdmVUeXBlPXR5cGVvZiByZW1vdmUudHlwZSE9PVwidW5kZWZpbmVkXCI/cmVtb3ZlLnR5cGU6XCJzdGVwcGVkXCI7aWYocmVtb3ZlVHlwZSE9PVwic3RlcHBlZFwiJiZyZW1vdmVUeXBlIT09XCJ3aG9sZVwiKXtyZW1vdmVUeXBlPVwic3RlcHBlZFwifWlmKHJlbW92ZVR5cGU9PT1cInN0ZXBwZWRcIil7Y2hhcnMuZm9yRWFjaChmdW5jdGlvbihjaGFyLGluZGV4KXskKHNldHRpbmdzLmVsKS5kZWxheShzZXR0aW5ncy5zcGVlZCkucXVldWUoZnVuY3Rpb24obmV4dCl7JChzZXR0aW5ncy5lbCkuaHRtbCgkKHNldHRpbmdzLmVsKS5odG1sKCkucmVwbGFjZSgvPGJyLio/Pi9nLFwiIFxcbiBcIikpO3ZhciBjdXJyVGV4dD0kKHRoaXMpLnRleHQoKS5zdWJzdHJpbmcoMCwkKHRoaXMpLnRleHQoKS5sZW5ndGgtMSk7JCh0aGlzKS5odG1sKGN1cnJUZXh0LnJlcGxhY2UoLyBcXG4gL2csXCI8YnI+XCIpKTtuZXh0KCk7aWYoaW5kZXg9PT1jaGFycy5sZW5ndGgtMSl7c2V0dGluZ3MucXVldWU9c2V0dGluZ3MucXVldWUtMTskKHNldHRpbmdzLm1haW5lbCkudHJpZ2dlcihcInR5cGV3cml0ZVJlbW92ZWRcIixyZW1vdmUpfX0pfSx0aGlzKX1pZihyZW1vdmVUeXBlPT09XCJ3aG9sZVwiKXskKHNldHRpbmdzLmVsKS5kZWxheShzZXR0aW5ncy5zcGVlZCkucXVldWUoZnVuY3Rpb24obmV4dCl7JChzZXR0aW5ncy5lbCkuaHRtbCgkKHNldHRpbmdzLmVsKS5odG1sKCkucmVwbGFjZSgvPGJyLio/Pi9nLFwiIFxcbiBcIikpO3ZhciBjdXJyVGV4dD0kKHRoaXMpLnRleHQoKS5zdWJzdHJpbmcoMCwkKHRoaXMpLnRleHQoKS5sZW5ndGgtcmVtb3ZlLm51bSk7JCh0aGlzKS5odG1sKGN1cnJUZXh0LnJlcGxhY2UoLyBcXG4gL2csXCI8YnI+XCIpKTtuZXh0KCk7c2V0dGluZ3MucXVldWU9c2V0dGluZ3MucXVldWUtMTskKHNldHRpbmdzLm1haW5lbCkudHJpZ2dlcihcInR5cGV3cml0ZVJlbW92ZWRcIixyZW1vdmUpfSl9fWZ1bmN0aW9uIHR5cGVUZXh0KHRleHQpe3ZhciBjaGFycz10ZXh0LnNwbGl0KFwiXCIpO2NoYXJzLmZvckVhY2goZnVuY3Rpb24oY2hhcixpbmRleCl7JChzZXR0aW5ncy5lbCkuZGVsYXkoc2V0dGluZ3Muc3BlZWQpLnF1ZXVlKGZ1bmN0aW9uKG5leHQpe3ZhciB0ZXh0PSQodGhpcykuaHRtbCgpK2NoYXI7JCh0aGlzKS5odG1sKHRleHQpO25leHQoKTtpZihpbmRleD09PWNoYXJzLmxlbmd0aC0xKXtzZXR0aW5ncy5xdWV1ZT1zZXR0aW5ncy5xdWV1ZS0xOyQoc2V0dGluZ3MubWFpbmVsKS50cmlnZ2VyKFwidHlwZXdyaXRlVHlwZWRcIix0ZXh0KX19KX0sdGhpcyl9ZnVuY3Rpb24gbmV3TGluZSgpeyQoc2V0dGluZ3MuZWwpLmRlbGF5KHNldHRpbmdzLnNwZWVkKS5xdWV1ZShmdW5jdGlvbihuZXh0KXt2YXIgY3VyclRleHROb0N1cnI9JCh0aGlzKS5odG1sKCkuc3Vic3RyaW5nKDAsJCh0aGlzKS5odG1sKCkubGVuZ3RoLTEpOyQodGhpcykuaHRtbChjdXJyVGV4dE5vQ3VycitcIjxicj5cIik7bmV4dCgpO3NldHRpbmdzLnF1ZXVlPXNldHRpbmdzLnF1ZXVlLTE7JChzZXR0aW5ncy5tYWluZWwpLnRyaWdnZXIoXCJ0eXBld3JpdGVOZXdMaW5lXCIpfSl9ZnVuY3Rpb24gcmVtb3ZlU2VsZWN0aW9uKCl7aWYoJChcIi50eXBld3JpdGVTZWxlY3RlZFwiKS5sZW5ndGg+MCl7dmFyIHNlbGVjdGlvblRleHQ9JChcIi50eXBld3JpdGVTZWxlY3RlZFwiKS50ZXh0KCk7JChcIi50eXBld3JpdGVTZWxlY3RlZFwiKS5yZXBsYWNlV2l0aChzZWxlY3Rpb25UZXh0KX19fX0pKGpRdWVyeSk7Il19

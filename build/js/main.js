var lastScrollTop=0,w=$(window).width(),h=$(window).height();console.log("w is "+w+", h is "+h);var hidden=!0;function move_sycle(t,e,o){var s=$(t).offset().left,i=$(t).offset().top,r=e*Math.PI/180,n=Math.tan(r),a=100,l=!1,f=2*$(t).width();setInterval(function(){0<e&&e<=90&&$(t).offset(function(t,e){return{top:e.top-a*n,left:e.left-a}}),90<e&&e<=180&&$(t).offset(function(t,e){return{top:e.top+a*n,left:e.left+a}}),180<e&&e<=270&&$(t).offset(function(t,e){return{top:e.top+a*n,left:e.left+a}}),270<e&&e<=360&&$(t).offset(function(t,e){return{top:e.top-a*n,left:e.left-a}}),l&&(l=!1,$(t).offset(function(t,e){return{top:i,left:s}})),($(t).offset().top<0||$(t).offset().left<0-f||$(t).offset().left>w+f)&&(l=!0,$(t).css({visibility:"hidden"})),l||$(t).css({visibility:"visible"})},o)}function move_some_shit(t,e){var o=e*Math.PI/180,s=Math.tan(o),i=10;0<e&&e<=90&&$(t).offset(function(t,e){return{top:e.top-i*s,left:e.left-i}}),90<e&&e<=180&&$(t).offset(function(t,e){return{top:e.top+i*s,left:e.left+i}}),180<e&&e<=270&&$(t).offset(function(t,e){return{top:e.top+i*s,left:e.left+i}}),270<e&&e<=360&&$(t).offset(function(t,e){return{top:e.top-i*s,left:e.left-i}})}function get_dx(){var t=$("section.stars").height(),e=($("section.stars").width(),$("section.stars").offset().top+t/2),o=$(window).scrollTop(),s=$("div.ship").width();return w/h*(e-o)-s}function detect(t){var e=$(t).offset().top,o=$(t).offset().top+$(t).height(),s=$(window).height(),i=$(window).scrollTop();return e-s<i&&i<o}$(document).ready(function(){var t={width:w,height:parseInt(h,10),autoResize:!0,autoResizeMinWidth:w,autoResizeMaxWidth:w,autoResizeMinHeight:parseInt(h,10),autoResizeMaxHeight:parseInt(h,10),addMouseControls:!0,addTouchControls:!0,hideContextMenu:!0,starCount:2222,starBgCount:1111,starBgColor:{r:100,g:255,b:218},starBgColorRangeMin:10,starBgColorRangeMax:40,starColor:{r:132,g:255,b:255},starColorRangeMin:70,starColorRangeMax:100,starfieldBackgroundColor:{r:42,g:42,b:46},starDirection:1,starSpeed:25,starSpeedMax:150,starSpeedAnimationDuration:2,starFov:200,starFovMin:250,starFovAnimationDuration:2,starRotationPermission:!0,starRotationDirection:-1,starRotationSpeed:0,starRotationSpeedMax:1.5,starRotationAnimationDuration:8,starWarpLineLength:1,starWarpTunnelDiameter:1e3,starFollowMouseSensitivity:.015,starFollowMouseXAxis:!1,starFollowMouseYAxis:!1};$("#warp").warpDrive(t);$(".buttons-array").children("p").click(function(){$("p").removeClass("selected"),$(this).addClass("selected");var t=$(this).attr("id");$("div.gallery-items").removeClass("flex"),$("#i"+t).addClass("flex")}),$(window).scroll(function(t){var e=$(this).scrollTop();detect($("section.stars"))&&(dx=get_dx(),lastScrollTop<e?($("div.ship").removeClass("rotated"),$("div.ship").offset(function(t,e){return{top:e.top,left:dx}})):($("div.ship").addClass("rotated"),$("div.ship").offset(function(t,e){return{top:e.top,left:dx}}))),lastScrollTop=e}),$(".menu-toggler").click(function(t){hidden?(hidden=!1,$(".sidebar-header").removeClass("sidebar-hidden")):(hidden=!0,$(".sidebar-header").addClass("sidebar-hidden"))}),$(".sidebar-menu").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),o=$(e).offset().top-50;$("ul.sidebar-menu li a").removeClass("li-selected"),$(this).addClass("li-selected"),$("body,html").animate({scrollTop:o},1500)}),$(".bulb").on("click",function(t){$(this).hasClass("offline")?$(this).removeClass("offline"):$(this).addClass("offline")}),parameters={duration:3e3,progress:function(t,e){$("#progress").width(parseInt(100*e)+"%").text(parseInt(100*e)+"%")},complete:function(){$("#progress").css("width","0%").text("0%")}},p={duration:1e3,queue:!1,progress:function(t,e){$("#progress").width(parseInt(100*e)+"%")}},$(".workspace-form").hide(),$("#engage").on("click",function(t){$(".workspace-form").toggle(p)})}),$(window).scroll(function(t){detect($("section.statistics-section"))&&$(".stat-column").removeClass("no-height")}),move_sycle("div.meteor-mov-15",15,1e3),move_sycle("div.meteor-mov-17",17,1e3),move_sycle("div.meteor-mov-23",23,1e3),move_sycle("div.meteor-mov-333",333,1e3),move_sycle("div.meteor-mov-341",341,1e3);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibGFzdFNjcm9sbFRvcCIsInciLCIkIiwid2luZG93Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImhpZGRlbiIsIm1vdmVfc3ljbGUiLCJlbGVtIiwiZGVncmVlIiwiaW50ZXJ2YWwiLCJzdGFydF94Iiwib2Zmc2V0IiwibGVmdCIsInN0YXJ0X3kiLCJ0b3AiLCJyYWQiLCJNYXRoIiwiUEkiLCJ0ZyIsInRhbiIsImMiLCJUIiwiaHVsbCIsInNldEludGVydmFsIiwiaSIsInZhbCIsImNzcyIsInZpc2liaWxpdHkiLCJtb3ZlX3NvbWVfc2hpdCIsImdldF9keCIsInN0YXJzX2giLCJzaCIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzaGlwIiwiZGV0ZWN0IiwiYl90b3AiLCJiX2JvdCIsImhnaHQiLCJkb2N1bWVudCIsInJlYWR5Iiwic2V0dGluZ3MyIiwicGFyc2VJbnQiLCJhdXRvUmVzaXplIiwiYXV0b1Jlc2l6ZU1pbldpZHRoIiwiYXV0b1Jlc2l6ZU1heFdpZHRoIiwiYXV0b1Jlc2l6ZU1pbkhlaWdodCIsImF1dG9SZXNpemVNYXhIZWlnaHQiLCJhZGRNb3VzZUNvbnRyb2xzIiwiYWRkVG91Y2hDb250cm9scyIsImhpZGVDb250ZXh0TWVudSIsInN0YXJDb3VudCIsInN0YXJCZ0NvdW50Iiwic3RhckJnQ29sb3IiLCJyIiwiZyIsImIiLCJzdGFyQmdDb2xvclJhbmdlTWluIiwic3RhckJnQ29sb3JSYW5nZU1heCIsInN0YXJDb2xvciIsInN0YXJDb2xvclJhbmdlTWluIiwic3RhckNvbG9yUmFuZ2VNYXgiLCJzdGFyZmllbGRCYWNrZ3JvdW5kQ29sb3IiLCJzdGFyRGlyZWN0aW9uIiwic3RhclNwZWVkIiwic3RhclNwZWVkTWF4Iiwic3RhclNwZWVkQW5pbWF0aW9uRHVyYXRpb24iLCJzdGFyRm92Iiwic3RhckZvdk1pbiIsInN0YXJGb3ZBbmltYXRpb25EdXJhdGlvbiIsInN0YXJSb3RhdGlvblBlcm1pc3Npb24iLCJzdGFyUm90YXRpb25EaXJlY3Rpb24iLCJzdGFyUm90YXRpb25TcGVlZCIsInN0YXJSb3RhdGlvblNwZWVkTWF4Iiwic3RhclJvdGF0aW9uQW5pbWF0aW9uRHVyYXRpb24iLCJzdGFyV2FycExpbmVMZW5ndGgiLCJzdGFyV2FycFR1bm5lbERpYW1ldGVyIiwic3RhckZvbGxvd01vdXNlU2Vuc2l0aXZpdHkiLCJzdGFyRm9sbG93TW91c2VYQXhpcyIsInN0YXJGb2xsb3dNb3VzZVlBeGlzIiwid2FycERyaXZlIiwiY2hpbGRyZW4iLCJjbGljayIsInJlbW92ZUNsYXNzIiwidGhpcyIsImFkZENsYXNzIiwiJGlkIiwiYXR0ciIsInNjcm9sbCIsImV2ZW50Iiwic3QiLCJkeCIsIm9uIiwicHJldmVudERlZmF1bHQiLCJpZGhyZWYiLCJzY3JvbGx0byIsImFuaW1hdGUiLCJoYXNDbGFzcyIsInBhcmFtZXRlcnMiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwiYW5pbWF0aW9uIiwidGV4dCIsImNvbXBsZXRlIiwicCIsInF1ZXVlIiwiaGlkZSIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsY0FBZ0IsRUFDaEJDLEVBQUlDLEVBQUVDLFFBQVFDLFFBQ2RDLEVBQUlILEVBQUVDLFFBQVFHLFNBQ2xCQyxRQUFRQyxJQUFJLFFBQVFQLEVBQUUsVUFBVUksR0FDaEMsSUFBSUksUUFBTyxFQTBKWCxTQUFTQyxXQUFXQyxFQUFNQyxFQUFRQyxHQUVoQyxJQUFJQyxFQUFVWixFQUFFUyxHQUFNSSxTQUFTQyxLQUMzQkMsRUFBVWYsRUFBRVMsR0FBTUksU0FBU0csSUFDM0JDLEVBQU1QLEVBQVNRLEtBQUtDLEdBQUcsSUFDdkJDLEVBQUtGLEtBQUtHLElBQUlKLEdBQ2RLLEVBQUksSUFDSkMsR0FBSSxFQUNKQyxFQUF5QixFQUFsQnhCLEVBQUVTLEdBQU1QLFFBRW5CdUIsWUFBWSxXQUlFLEVBQVRmLEdBQWNBLEdBQVUsSUFDekJWLEVBQUVTLEdBQU1JLE9BQU8sU0FBU2EsRUFBR0Ms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QUFVLFNBQVVDLEVBQVdELEdBQzNCdEcsRUFBRSxhQUNHRSxNQUFNMEMsU0FBb0IsSUFBWDBELEdBQWtCLE9BSzFDdEcsRUFBRSxtQkFBbUI0RyxPQUVyQjVHLEVBQUUsV0FBVzhGLEdBQUcsUUFBUyxTQUFVSCxHQUVqQzNGLEVBQUUsbUJBQW1CNkcsT0FBT0gsT0FNOUIxRyxFQUFFQyxRQUFReUYsT0FBTyxTQUFTQyxHQUNyQnRELE9BQU9yQyxFQUFFLGdDQUNWQSxFQUFFLGdCQUFnQnFGLFlBQVksZUFJcEM3RSxXQUFXLG9CQUFxQixHQUFJLEtBQ3BDQSxXQUFXLG9CQUFxQixHQUFJLEtBQ3BDQSxXQUFXLG9CQUFxQixHQUFJLEtBQ3BDQSxXQUFXLHFCQUFzQixJQUFLLEtBQ3RDQSxXQUFXLHFCQUFzQixJQUFLIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbnZhciB3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbnZhciBoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG5jb25zb2xlLmxvZyhcIncgaXMgXCIrdytcIiwgaCBpcyBcIitoKTtcclxudmFyIGhpZGRlbj10cnVlO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBzZXR0aW5nczIgPSB7XHJcblxyXG4gICAgICB3aWR0aDogdyxcclxuICAgICAgaGVpZ2h0OiBwYXJzZUludChoLCAxMCksXHJcbiAgICAgIGF1dG9SZXNpemU6IHRydWUsXHJcbiAgICAgIGF1dG9SZXNpemVNaW5XaWR0aDogdyxcclxuICAgICAgYXV0b1Jlc2l6ZU1heFdpZHRoOiB3LFxyXG4gICAgICBhdXRvUmVzaXplTWluSGVpZ2h0OiBwYXJzZUludChoLCAxMCksXHJcbiAgICAgIGF1dG9SZXNpemVNYXhIZWlnaHQ6IHBhcnNlSW50KGgsIDEwKSxcclxuICAgICAgYWRkTW91c2VDb250cm9sczogdHJ1ZSxcclxuICAgICAgYWRkVG91Y2hDb250cm9sczogdHJ1ZSxcclxuICAgICAgaGlkZUNvbnRleHRNZW51OiB0cnVlLFxyXG4gICAgICBzdGFyQ291bnQ6IDIyMjIsXHJcbiAgICAgIHN0YXJCZ0NvdW50OiAxMTExLFxyXG4gICAgICBzdGFyQmdDb2xvcjogeyByOjEwMCwgZzoyNTUsIGI6MjE4IH0sXHJcbiAgICAgIHN0YXJCZ0NvbG9yUmFuZ2VNaW46IDEwLFxyXG4gICAgICBzdGFyQmdDb2xvclJhbmdlTWF4OiA0MCxcclxuICAgICAgc3RhckNvbG9yOiB7IHI6MTMyLCBnOjI1NSwgYjoyNTUgfSxcclxuICAgICAgc3RhckNvbG9yUmFuZ2VNaW46IDcwLFxyXG4gICAgICBzdGFyQ29sb3JSYW5nZU1heDogMTAwLFxyXG4gICAgICBzdGFyZmllbGRCYWNrZ3JvdW5kQ29sb3I6IHsgcjo0MiwgZzo0MiwgYjo0NiB9LFxyXG4gICAgICBzdGFyRGlyZWN0aW9uOiAxLFxyXG4gICAgICBzdGFyU3BlZWQ6IDI1LFxyXG4gICAgICBzdGFyU3BlZWRNYXg6IDE1MCxcclxuICAgICAgc3RhclNwZWVkQW5pbWF0aW9uRHVyYXRpb246IDIsXHJcbiAgICAgIHN0YXJGb3Y6IDIwMCxcclxuICAgICAgc3RhckZvdk1pbjogMjUwLFxyXG4gICAgICBzdGFyRm92QW5pbWF0aW9uRHVyYXRpb246IDIsXHJcbiAgICAgIHN0YXJSb3RhdGlvblBlcm1pc3Npb246IHRydWUsXHJcbiAgICAgIHN0YXJSb3RhdGlvbkRpcmVjdGlvbjogLTEsXHJcbiAgICAgIHN0YXJSb3RhdGlvblNwZWVkOiAwLjAsXHJcbiAgICAgIHN0YXJSb3RhdGlvblNwZWVkTWF4OiAxLjUsXHJcbiAgICAgIHN0YXJSb3RhdGlvbkFuaW1hdGlvbkR1cmF0aW9uOiA4LFxyXG4gICAgICBzdGFyV2FycExpbmVMZW5ndGg6IDEuMCxcclxuICAgICAgc3RhcldhcnBUdW5uZWxEaWFtZXRlcjogMTAwMCxcclxuICAgICAgc3RhckZvbGxvd01vdXNlU2Vuc2l0aXZpdHk6IDAuMDE1LFxyXG4gICAgICBzdGFyRm9sbG93TW91c2VYQXhpczogZmFsc2UsXHJcbiAgICAgIHN0YXJGb2xsb3dNb3VzZVlBeGlzOiBmYWxzZVxyXG5cclxuICB9O1xyXG5cclxuICAgIHZhciB3YXJwZHJpdmUyID0gJCggJyN3YXJwJyApLndhcnBEcml2ZSggc2V0dGluZ3MyICk7XHJcblxyXG4gICQoXCIuYnV0dG9ucy1hcnJheVwiKS5jaGlsZHJlbihcInBcIikuY2xpY2soZnVuY3Rpb24oKSB7IC8vIGdhbGxlcnlcclxuICAgICQoXCJwXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7Ly8uYW5pbWF0ZSgge29wYWNpdHk6ICcwLjEnfSwgXCJzbG93XCIpLmFuaW1hdGUoIHtvcGFjaXR5OiAnMS4wJ30sIFwiZmFzdFwiKTtcclxuICAgIHZhciAkaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICQoXCJkaXYuZ2FsbGVyeS1pdGVtc1wiKS5yZW1vdmVDbGFzcyhcImZsZXhcIik7XHJcbiAgICAkKFwiI2lcIiskaWQpLmFkZENsYXNzKFwiZmxleFwiKTtcclxuICB9KTtcclxuXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihldmVudCkgeyAvLyBzcGFjZSBzaGlwXHJcblxyXG4gICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZihkZXRlY3QoJChcInNlY3Rpb24uc3RhcnNcIikpICkge1xyXG5cclxuICAgICAgZHggPSBnZXRfZHgoKTtcclxuXHJcbiAgICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICQoXCJkaXYuc2hpcFwiKS5yZW1vdmVDbGFzcyhcInJvdGF0ZWRcIik7XHJcbiAgICAgICAgICAkKFwiZGl2LnNoaXBcIikub2Zmc2V0KGZ1bmN0aW9uKGksIHZhbCkgeyByZXR1cm4ge3RvcDp2YWwudG9wLCBsZWZ0OiBkeH07IH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJChcImRpdi5zaGlwXCIpLmFkZENsYXNzKFwicm90YXRlZFwiKTtcclxuICAgICAgICAgICQoXCJkaXYuc2hpcFwiKS5vZmZzZXQoZnVuY3Rpb24oaSwgdmFsKSB7IHJldHVybiB7dG9wOnZhbC50b3AsIGxlZnQ6IGR4fTsgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBsYXN0U2Nyb2xsVG9wID0gc3Q7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIubWVudS10b2dnbGVyXCIpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXsgLy9uYXZiYXIgdG9nZ2xlXHJcbiAgICBpZihoaWRkZW4pIHtcclxuICAgICAgaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICQoXCIuc2lkZWJhci1oZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLWhpZGRlblwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBoaWRkZW4gPSB0cnVlO1xyXG4gICAgICAkKFwiLnNpZGViYXItaGVhZGVyXCIpLmFkZENsYXNzKFwic2lkZWJhci1oaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKFwiLnNpZGViYXItbWVudVwiKS5vbihcImNsaWNrXCIsXCJhXCIsIGZ1bmN0aW9uIChldmVudCkgeyAvL3Njcm9sbFxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHZhciBpZGhyZWYgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcblx0XHRzY3JvbGx0byA9ICQoaWRocmVmKS5vZmZzZXQoKS50b3AgLSA1MDtcclxuICAgICQoXCJ1bC5zaWRlYmFyLW1lbnUgbGkgYVwiKS5yZW1vdmVDbGFzcyhcImxpLXNlbGVjdGVkXCIpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcyhcImxpLXNlbGVjdGVkXCIpO1xyXG5cdFx0JCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzY3JvbGx0b30sIDE1MDApO1xyXG5cdH0pO1xyXG5cclxuICAkKFwiLmJ1bGJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgIC8vYWxlcnQoJCh0aGlzKS5oYXNDbGFzcyhcIm9mZmxpbmVcIikpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmhhc0NsYXNzKFwib2ZmbGluZVwiKSApIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm9mZmxpbmVcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm9mZmxpbmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHBhcmFtZXRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAoYW5pbWF0aW9uLCBwcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNwcm9ncmVzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53aWR0aChwYXJzZUludChwcm9ncmVzcyAqIDEwMCkgKyAnJScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHBhcnNlSW50KHByb2dyZXNzICogMTAwKSArICclJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjcHJvZ3Jlc3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcwJScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KCcwJScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5wID0ge1xyXG4gIGR1cmF0aW9uOiAxMDAwLFxyXG4gIHF1ZXVlOiBmYWxzZSxcclxuICBwcm9ncmVzczogZnVuY3Rpb24gKGFuaW1hdGlvbiwgcHJvZ3Jlc3MpIHtcclxuICAgICAgJCgnI3Byb2dyZXNzJylcclxuICAgICAgICAgIC53aWR0aChwYXJzZUludChwcm9ncmVzcyAqIDEwMCkgKyAnJScpO1xyXG4gICAgICAgICAgLy8udGV4dChwYXJzZUludChwcm9ncmVzcyAqIDEwMCkgKyAnJScpO1xyXG4gIH1cclxufVxyXG5cclxuICAkKFwiLndvcmtzcGFjZS1mb3JtXCIpLmhpZGUoKTtcclxuXHJcbiAgJChcIiNlbmdhZ2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vJChcIi53b3Jrc3BhY2UtZm9ybVwiKS53aWR0aChmdW5jdGlvbihpLHZhbCl7IHJldHVybiB2YWwrMTA7IH0pO1xyXG4gICAgJChcIi53b3Jrc3BhY2UtZm9ybVwiKS50b2dnbGUocCk7XHJcbiAgICAvL2FsZXJ0KFwiIVwiKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZihkZXRlY3QoJChcInNlY3Rpb24uc3RhdGlzdGljcy1zZWN0aW9uXCIpKSApIHtcclxuICAgICAgJChcIi5zdGF0LWNvbHVtblwiKS5yZW1vdmVDbGFzcyhcIm5vLWhlaWdodFwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbm1vdmVfc3ljbGUoXCJkaXYubWV0ZW9yLW1vdi0xNVwiLCAxNSwgMTAwMCk7XHJcbm1vdmVfc3ljbGUoXCJkaXYubWV0ZW9yLW1vdi0xN1wiLCAxNywgMTAwMCk7XHJcbm1vdmVfc3ljbGUoXCJkaXYubWV0ZW9yLW1vdi0yM1wiLCAyMywgMTAwMCk7XHJcbm1vdmVfc3ljbGUoXCJkaXYubWV0ZW9yLW1vdi0zMzNcIiwgMzMzLCAxMDAwKTtcclxubW92ZV9zeWNsZShcImRpdi5tZXRlb3ItbW92LTM0MVwiLCAzNDEsIDEwMDApO1xyXG5cclxuZnVuY3Rpb24gbW92ZV9zeWNsZShlbGVtLCBkZWdyZWUsIGludGVydmFsKSB7XHJcblxyXG4gIHZhciBzdGFydF94ID0gJChlbGVtKS5vZmZzZXQoKS5sZWZ0O1xyXG4gIHZhciBzdGFydF95ID0gJChlbGVtKS5vZmZzZXQoKS50b3A7XHJcbiAgdmFyIHJhZCA9IGRlZ3JlZSAqIE1hdGguUEkvMTgwO1xyXG4gIHZhciB0ZyA9IE1hdGgudGFuKHJhZCk7XHJcbiAgdmFyIGMgPSAxMDA7XHJcbiAgdmFyIFQgPSBmYWxzZTtcclxuICB2YXIgaHVsbCA9ICQoZWxlbSkud2lkdGgoKSAqIDI7XHJcblxyXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vJChlbGVtKS5jc3Moe3Zpc2liaWxpdHk6IFwidmlzaWJsZVwifSk7XHJcblxyXG4gICAgaWYoZGVncmVlID4gMCAmJiBkZWdyZWUgPD0gOTApIHtcclxuICAgICAgJChlbGVtKS5vZmZzZXQoZnVuY3Rpb24oaSwgdmFsKSB7IHJldHVybiB7dG9wOiB2YWwudG9wIC0gKGMgKiB0ZyksIGxlZnQ6IHZhbC5sZWZ0IC0gY307IH0pO1xyXG4gICAgfVxyXG4gICAgaWYoZGVncmVlID4gOTAgJiYgZGVncmVlIDw9IDE4MCkge1xyXG4gICAgICAkKGVsZW0pLm9mZnNldChmdW5jdGlvbihpLCB2YWwpIHsgcmV0dXJuIHt0b3A6IHZhbC50b3AgKyAoYyAqIHRnKSwgbGVmdDogdmFsLmxlZnQgKyBjfTsgfSk7XHJcbiAgICB9XHJcbiAgICBpZihkZWdyZWUgPiAxODAgJiYgZGVncmVlIDw9IDI3MCkge1xyXG4gICAgICAkKGVsZW0pLm9mZnNldChmdW5jdGlvbihpLCB2YWwpIHsgcmV0dXJuIHt0b3A6IHZhbC50b3AgKyAoYyAqIHRnKSwgbGVmdDogdmFsLmxlZnQgKyBjfTsgfSk7XHJcbiAgICB9XHJcbiAgICBpZihkZWdyZWUgPiAyNzAgJiYgZGVncmVlIDw9IDM2MCkge1xyXG4gICAgICAkKGVsZW0pLm9mZnNldChmdW5jdGlvbihpLCB2YWwpIHsgcmV0dXJuIHt0b3A6IHZhbC50b3AgLSAoYyAqIHRnKSwgbGVmdDogdmFsLmxlZnQgLSBjfTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoVCkge1xyXG4gICAgICBUID0gZmFsc2U7XHJcbiAgICAgICQoZWxlbSkub2Zmc2V0KGZ1bmN0aW9uKGksIHZhbCkgeyByZXR1cm4ge3RvcDogc3RhcnRfeSwgbGVmdDogc3RhcnRfeH07IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCQoZWxlbSkub2Zmc2V0KCkudG9wIDwgMCB8fCAkKGVsZW0pLm9mZnNldCgpLmxlZnQgPCAwIC0gaHVsbCB8fCAkKGVsZW0pLm9mZnNldCgpLmxlZnQgPiB3ICsgaHVsbCkge1xyXG4gICAgICBUID0gdHJ1ZTtcclxuICAgICAgJChlbGVtKS5jc3Moe3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZighVCkge1xyXG4gICAgICAkKGVsZW0pLmNzcyh7dmlzaWJpbGl0eTogXCJ2aXNpYmxlXCJ9KTtcclxuICAgIH1cclxuXHJcbiAgfSwgaW50ZXJ2YWwpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZV9zb21lX3NoaXQoZWxlbSwgZGVncmVlKSB7XHJcbiAgdmFyIHJhZCA9IGRlZ3JlZSAqIE1hdGguUEkvMTgwO1xyXG4gIHZhciB0ZyA9IE1hdGgudGFuKHJhZCk7XHJcbiAgdmFyIGMgPSAxMDtcclxuICBpZihkZWdyZWUgPiAwICYmIGRlZ3JlZSA8PSA5MCkge1xyXG4gICAgJChlbGVtKS5vZmZzZXQoZnVuY3Rpb24oaSwgdmFsKSB7IHJldHVybiB7dG9wOiB2YWwudG9wIC0gKGMgKiB0ZyksIGxlZnQ6IHZhbC5sZWZ0IC0gY307IH0pO1xyXG4gIH1cclxuICBpZihkZWdyZWUgPiA5MCAmJiBkZWdyZWUgPD0gMTgwKSB7XHJcbiAgICAkKGVsZW0pLm9mZnNldChmdW5jdGlvbihpLCB2YWwpIHsgcmV0dXJuIHt0b3A6IHZhbC50b3AgKyAoYyAqIHRnKSwgbGVmdDogdmFsLmxlZnQgKyBjfTsgfSk7XHJcbiAgfVxyXG4gIGlmKGRlZ3JlZSA+IDE4MCAmJiBkZWdyZWUgPD0gMjcwKSB7XHJcbiAgICAkKGVsZW0pLm9mZnNldChmdW5jdGlvbihpLCB2YWwpIHsgcmV0dXJuIHt0b3A6IHZhbC50b3AgKyAoYyAqIHRnKSwgbGVmdDogdmFsLmxlZnQgKyBjfTsgfSk7XHJcbiAgfVxyXG4gIGlmKGRlZ3JlZSA+IDI3MCAmJiBkZWdyZWUgPD0gMzYwKSB7XHJcbiAgICAkKGVsZW0pLm9mZnNldChmdW5jdGlvbihpLCB2YWwpIHsgcmV0dXJuIHt0b3A6IHZhbC50b3AgLSAoYyAqIHRnKSwgbGVmdDogdmFsLmxlZnQgLSBjfTsgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0X2R4KCkge1xyXG4gIHZhciBzdGFyc19oID0gJChcInNlY3Rpb24uc3RhcnNcIikuaGVpZ2h0KCk7XHJcbiAgdmFyIHN0YXJzX3cgPSAkKFwic2VjdGlvbi5zdGFyc1wiKS53aWR0aCgpO1xyXG4gIHZhciBzaCA9ICQoXCJzZWN0aW9uLnN0YXJzXCIpLm9mZnNldCgpLnRvcCArIChzdGFyc19oIC8gMik7XHJcbiAgdmFyIGN1cnJlbnQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgdmFyIHNoaXAgPSAkKFwiZGl2LnNoaXBcIikud2lkdGgoKTtcclxuICB2YXIgZHggPSAoc2ggLSBjdXJyZW50KSAqICh3L2gpIC0gc2hpcDtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhcInNfdyBpcyBcIisgc3RhcnNfdyArXCIsIHNfaCBpcyBcIisgc3RhcnNfaCArXCIsIHNoIGlzIFwiKyBzaCArXCIsIGN1ciBpcyBcIisgY3VycmVudCk7XHJcbiAgcmV0dXJuIGR4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXRlY3QoZWxlbSkge1xyXG4gIHZhciBiX3RvcCA9ICQoZWxlbSkub2Zmc2V0KCkudG9wO1xyXG4gIHZhciBiX2JvdCA9ICQoZWxlbSkub2Zmc2V0KCkudG9wICsgJChlbGVtKS5oZWlnaHQoKTtcclxuICB2YXIgaGdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuICB2YXIgY3VycmVudCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICBpZiAoY3VycmVudCA+IGJfdG9wIC0gaGdodCAmJiBjdXJyZW50IDwgYl9ib3QpIHJldHVybiB0cnVlO1xyXG4gIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG59Il19

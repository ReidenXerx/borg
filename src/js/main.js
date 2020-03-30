var lastScrollTop = 0;
var w = $(window).width();
var h = $(window).height();
console.log("w is "+w+", h is "+h);
var hidden=true;

$(document).ready(function() {

  var settings2 = {

      width: w,
      height: parseInt(h, 10),
      autoResize: true,
      autoResizeMinWidth: w,
      autoResizeMaxWidth: w,
      autoResizeMinHeight: parseInt(h, 10),
      autoResizeMaxHeight: parseInt(h, 10),
      addMouseControls: true,
      addTouchControls: true,
      hideContextMenu: true,
      starCount: 2222,
      starBgCount: 1111,
      starBgColor: { r:100, g:255, b:218 },
      starBgColorRangeMin: 10,
      starBgColorRangeMax: 40,
      starColor: { r:132, g:255, b:255 },
      starColorRangeMin: 70,
      starColorRangeMax: 100,
      starfieldBackgroundColor: { r:42, g:42, b:46 },
      starDirection: 1,
      starSpeed: 25,
      starSpeedMax: 150,
      starSpeedAnimationDuration: 2,
      starFov: 200,
      starFovMin: 250,
      starFovAnimationDuration: 2,
      starRotationPermission: true,
      starRotationDirection: -1,
      starRotationSpeed: 0.0,
      starRotationSpeedMax: 1.5,
      starRotationAnimationDuration: 8,
      starWarpLineLength: 1.0,
      starWarpTunnelDiameter: 1000,
      starFollowMouseSensitivity: 0.015,
      starFollowMouseXAxis: false,
      starFollowMouseYAxis: false

  };

    var warpdrive2 = $( '#warp' ).warpDrive( settings2 );

  $(".buttons-array").children("p").click(function() { // gallery
    $("p").removeClass("selected");
    $(this).addClass("selected");//.animate( {opacity: '0.1'}, "slow").animate( {opacity: '1.0'}, "fast");
    var $id = $(this).attr("id");
    $("div.gallery-items").removeClass("flex");
    $("#i"+$id).addClass("flex");
  });

  $(window).scroll(function(event) { // space ship

    var st = $(this).scrollTop();

    if(detect($("section.stars")) ) {

      dx = get_dx();

      if (st > lastScrollTop) {
          $("div.ship").removeClass("rotated");
          $("div.ship").offset(function(i, val) { return {top:val.top, left: dx}; });
      } else {
          $("div.ship").addClass("rotated");
          $("div.ship").offset(function(i, val) { return {top:val.top, left: dx}; });
      }

    }
    lastScrollTop = st;
  });

  $(".menu-toggler").click(function(event){ //navbar toggle
    if(hidden) {
      hidden = false;
      $(".sidebar-header").removeClass("sidebar-hidden");
    }
    else {
      hidden = true;
      $(".sidebar-header").addClass("sidebar-hidden");
    }

  });

  $(".sidebar-menu").on("click","a", function (event) { //scroll
		event.preventDefault();
		var idhref  = $(this).attr('href'),
		scrollto = $(idhref).offset().top - 50;
    $("ul.sidebar-menu li a").removeClass("li-selected");
    $(this).addClass("li-selected");
		$('body,html').animate({scrollTop: scrollto}, 1500);
	});

  $(".bulb").on("click", function(event) {

    //alert($(this).hasClass("offline"));

    if( $(this).hasClass("offline") ) {
      $(this).removeClass("offline");
    }
    else {
      $(this).addClass("offline");
    }
  });

  parameters = {
                duration: 3000,
                progress: function (animation, progress) {
                    $('#progress')
                        .width(parseInt(progress * 100) + '%')
                        .text(parseInt(progress * 100) + '%');
                },
                complete: function () {
                    $('#progress')
                        .css('width', '0%')
                        .text('0%');
                }
            }

p = {
  duration: 1000,
  queue: false,
  progress: function (animation, progress) {
      $('#progress')
          .width(parseInt(progress * 100) + '%');
          //.text(parseInt(progress * 100) + '%');
  }
}

  $(".workspace-form").hide();

  $("#engage").on("click", function (event) {
    //$(".workspace-form").width(function(i,val){ return val+10; });
    $(".workspace-form").toggle(p);
    //alert("!");
  });

});

  $(window).scroll(function(event) {
    if(detect($("section.statistics-section")) ) {
      $(".stat-column").removeClass("no-height");
    }
  });

move_sycle("div.meteor-mov-15", 15, 1000);
move_sycle("div.meteor-mov-17", 17, 1000);
move_sycle("div.meteor-mov-23", 23, 1000);
move_sycle("div.meteor-mov-333", 333, 1000);
move_sycle("div.meteor-mov-341", 341, 1000);

function move_sycle(elem, degree, interval) {

  var start_x = $(elem).offset().left;
  var start_y = $(elem).offset().top;
  var rad = degree * Math.PI/180;
  var tg = Math.tan(rad);
  var c = 100;
  var T = false;
  var hull = $(elem).width() * 2;

  setInterval(function() {

    //$(elem).css({visibility: "visible"});

    if(degree > 0 && degree <= 90) {
      $(elem).offset(function(i, val) { return {top: val.top - (c * tg), left: val.left - c}; });
    }
    if(degree > 90 && degree <= 180) {
      $(elem).offset(function(i, val) { return {top: val.top + (c * tg), left: val.left + c}; });
    }
    if(degree > 180 && degree <= 270) {
      $(elem).offset(function(i, val) { return {top: val.top + (c * tg), left: val.left + c}; });
    }
    if(degree > 270 && degree <= 360) {
      $(elem).offset(function(i, val) { return {top: val.top - (c * tg), left: val.left - c}; });
    }

    if(T) {
      T = false;
      $(elem).offset(function(i, val) { return {top: start_y, left: start_x}; });
    }

    if($(elem).offset().top < 0 || $(elem).offset().left < 0 - hull || $(elem).offset().left > w + hull) {
      T = true;
      $(elem).css({visibility: "hidden"});
    }

    if(!T) {
      $(elem).css({visibility: "visible"});
    }

  }, interval);

}

function move_some_shit(elem, degree) {
  var rad = degree * Math.PI/180;
  var tg = Math.tan(rad);
  var c = 10;
  if(degree > 0 && degree <= 90) {
    $(elem).offset(function(i, val) { return {top: val.top - (c * tg), left: val.left - c}; });
  }
  if(degree > 90 && degree <= 180) {
    $(elem).offset(function(i, val) { return {top: val.top + (c * tg), left: val.left + c}; });
  }
  if(degree > 180 && degree <= 270) {
    $(elem).offset(function(i, val) { return {top: val.top + (c * tg), left: val.left + c}; });
  }
  if(degree > 270 && degree <= 360) {
    $(elem).offset(function(i, val) { return {top: val.top - (c * tg), left: val.left - c}; });
  }

}

function get_dx() {
  var stars_h = $("section.stars").height();
  var stars_w = $("section.stars").width();
  var sh = $("section.stars").offset().top + (stars_h / 2);
  var current = $(window).scrollTop();
  var ship = $("div.ship").width();
  var dx = (sh - current) * (w/h) - ship;

  //console.log("s_w is "+ stars_w +", s_h is "+ stars_h +", sh is "+ sh +", cur is "+ current);
  return dx;
}

function detect(elem) {
  var b_top = $(elem).offset().top;
  var b_bot = $(elem).offset().top + $(elem).height();
  var hght = $(window).height();
  var current = $(window).scrollTop();
  if (current > b_top - hght && current < b_bot) return true;
  else return false;
}

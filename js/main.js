$(document).ready(function() {

  "use strict";

  $('a').click(function (e) {
    e.preventDefault();
  });

  // BODY
  var $body = $("html, body");
  var winWidth = $(window).outerWidth();

  // resize Events
  $(window).resize(function () {
     var resizeWidth = $(window).outerWidth();
    console.log('resizeWidth' + resizeWidth);
  })

  //  HEADER
  var $gnb = $("#gnb"),
      $gnb_li = $gnb.children('li'),
      $gnb_li_a = $gnb_li.children('a'),
      $sub = $gnb_li.children("ul"),
      $sub_li = $sub.children("li");


  // #nav
  var heightArr = [],
      maxHeight = 0,
      $gnbWidth = $gnb.width(),
      $gnbLeft = $(".bg_gnb").offset().left;

  console.log($body.width());
  console.log($gnbWidth);
  console.log($gnbLeft);


  function navEvent() {
    getSubHeight();

    $gnb.on("mouseenter", onSub);
    $(".bg_gnb").on("mouseenter", onSub);
    $gnb.on("mouseleave", offSub);
    $(".bg_gnb").on("mouseleave", offSub);
  }

  function getSubHeight() {
    $gnb_li.each(function (i) {
      var subHeight = $(this).children('ul').height();
      heightArr.push(subHeight);
      maxHeight = Math.max(maxHeight, heightArr[i]);

      console.log('maxHeight ' + maxHeight);
    });
  };

  function onSub() {
    $(".bg_gnb").css({height: maxHeight + 80});

    $sub.stop().slideDown(500);
    $(".bg_gnb").stop().slideDown(500);
  };
  
  function offSub() {
    $sub.stop().slideUp(200);
    $(".bg_gnb").stop().slideUp(400);
  };

  navEvent();


  // .lang_area
  $(".lang_area>a").on('click', function () {
    $(this).siblings('.lang_box').css('display', 'block').on('mouseleave', function (){
      $(this).css('display', 'none');
    });
  });
  
  // #ham_menu
  $('.ham_btn').on('click', function () {
    var $mGnb = $('#m_gnb');

    $(this).toggleClass('is-active');

    if (!$mGnb.hasClass('active')) {
      $mGnb.fadeIn().toggleClass('active');
      $mGnb.on('scroll touchmove mousewheel', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    } else {
      $mGnb.fadeOut().removeClass('active');
      $mGnb.off('scroll touchmove mousewheel');
    }
  });

  // #ham_menu => .lang_area
  $(".lang").on('click', function () {
    $(this).children('.lang_box').css('display', 'block').on('mouseleave', function (){
      $(this).css('display', 'none');
    });
  });
  
  // CONTAINER
  
  // MAIN VISUAL 슬라이드
  
  // #slide_main_wrap, slide
  var bannerCount = $('.slide_main>li').length;
  var showBanner = 0,
  clonedBanner = $(".slide_main>.s_main1").clone();
  $(".slide_main").append(clonedBanner);
  $(".slide_main").width(600+"%");
  $(".slide_main>li").width(100/6+"%");
  console.log(100/6+"%");

  function slideBanner() {
    if (showBanner == bannerCount) {
      showBanner = 0;
      $(".slide_main").css("margin-left", 0);
    }
    showBanner++;
    $(".slide_main").stop().animate({
      marginLeft: -showBanner * 100 + "%"
    }, 2000)
  }

  // #slide_info_wrap, fadein
  var showBanner2 = 0;
  $(".slide_info>li").eq(0).css("diaplay", "block").siblings().css("display", "none");

  function fadeBanner() {
    if (showBanner2 < 4) {
      showBanner2++;
    } else {
      showBanner2 = 0;
    }
    $(".slide_info>li").eq(showBanner2).fadeIn(2000).siblings().fadeOut(1600);
  }

  var setSlide = setInterval(slideBanner, 4000);
  var setFade = setInterval(fadeBanner, 4000);



  // CONTENT philosophy
  // parallax

  function philoScroll() {
    winWidth = $(window).outerWidth();
    var $passion = $(".phil_wrap_passion"),
      passion_end = $passion.position().top,
      $export = $(".phil_wrap_export"),
      $research = $(".phil_wrap_research");

    if (winWidth > 797) {
      $(window).on("scroll", function () {
        var posY = $(this).scrollTop();
        $passion.css("top", -posY * 0.5 + 820 + "px");
        $export.css("top", -posY * 0.3 + 900 + "px");
        $research.css("top", -posY * 0.6 + 2520 + "px");
      });
    };
  };

  philoScroll();


  // mouseover zoom event - passion, product_search
  $('.img_wrap').mouseenter(function () {
    if (winWidth > 480) {
      $(this).children('img').css('transform', 'scale(1.15)');
    }
  })
  $('.img_wrap').mouseout(function () {
    if (winWidth >480) {
      $(this).children('img').css({
        'transform': 'scale(1)',
        'transition': '0.6s'
      });
    }
  })


  // PRODUCT VIDEO
  $(function () {
    switchable({
      $element: $('#slides')
      , interval: 3500
      , animateSpeed: 1500
    });
  });

  // PRODUCT SEARCH
  $('.search_list>li').click(function (e) {
    var showList = $(this).index();
    console.log(showList);
    $(this).addClass('active').siblings().removeClass('active');
    $('.product_list_wrap>ul').eq(showList).removeClass('diselected').siblings().addClass('diselected');
  })
  

  // footer FAMILYSITE
  var $familySite = $('.familysite_wrap'),
      $familyList = $familySite.children('.familysite_list');

  $familySite.children('a').on('click', function () {
    $familyList.css('display', 'block');
  });
  $familySite.on('mouseleave', function () {
    $familyList.css('display', 'none');
  });

  // ASIDE

  // scrollTop
  function goTopEvent() {
    $('.go-top').on('click', function () {
      var yPos = $body.offset().top;
      $body.animate({
        scrollTop: yPos
      }, 1000);
    });
  }

  goTopEvent();
  
})




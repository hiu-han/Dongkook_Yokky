///////////////////////////////////////////////////////////////////////////////////
  // const $prevArrow = $('.arrow>.prev-btn');
  // const $nextArrow = $('.arrow>.next-btn');

  // .arrow>.prev-btn, .next-btn 클릭 시 main 한장 슬라이드, info 한장 페이드 인아웃.
  // .prev-btn 클릭 시

  // ---------- next는 의도대로 되지만 prev의 경우, fadeBanner을 해결하는데 시간이 많이 걸려서
  // 화살표가 아닌 발뮤다 하단 bar 처럼 만든다.
  // 향후 이를 버튼처럼 이용??

  // 그리고 영상은 썸네일로 교체하고 링크를 해당 유튜브 페이지로

  // $nextArrow.click(function () { // 두 버튼 영역에 클릭 시 인터벌 딜레이 작성하기
  //   // console.log(bannerCount);
  //   if (showBanner == bannerCount) {
  //   showBanner = 0;
  //     $(".slide_main").css("margin-left", 0);
  //   }
  //   // showBanner++;
  //   slideBanner();
  //   fadeBanner();
  //   // setTimeout(setInterval(slideBanner, 4000), 2000);
  // })

  // $prevArrow.click(function () {
  //   if (showBanner == 0) {
  //     showBanner = bannerCount;
  //     $('.slide_main').css('margin-left', -showBanner * 100 + '%');
  //   }
  //   showBanner--;
  //   slideBanner();
  // })
  // // 메인 -> 한장씩 왼쪽으로 슬라이드, if showBanner가 0일때, 마지막 페이지로
  // // 메인 -> slideBanner 실행??
  // // 인포 -> fadeBanner 실행


  // $('.arrow').on({
  //   'mouseenter': function () {
  //     clearInterval(setSlide),
  //     clearInterval(setFade);
  //   },
  //   'mouseleave': function () {
  //     setInterval(slideBanner, 4000),
  //     setInterval(fadeBanner, 4000);
  //   }
  // })
///////////////////////////////////////////////////////////////////////////////////
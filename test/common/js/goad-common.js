$(document).ready(function () {
  //탭메뉴

  //
  $(".jq_btn").each(function () {
    var $this = $(this);
    var $item = $this.find(".item");
    $item.on("click", function () {
      $item.removeClass("on");
      $(this).addClass("on");
    });
  });

  $(".jq_checkbox li").click(function () {
      var $this = $(this);
      if ($(this).attr("class") == "item on") {
          $(this).removeClass("on");
      }
      else {
          $(this).addClass("on");
      }
    });

  //검색필터 클릭
  $(".search_sec .filter").on("click", function () {
    $(this).toggleClass("on");
    $(".filter_popup").toggleClass("on");
    //
    $(".date_sec .box").removeClass("on");
    $(".date_popup").removeClass("on");
  });

  //광고기간클릭
  $(".date_sec .box").on("click", function () {
    //  rd.show();
    //$(this).toggleClass("on");
    //$(".date_popup").toggleClass("on");
    //$(".search_sec .filter").removeClass("on");
    //$(".filter_popup").removeClass("on");
  });


  //검색클릭시 그림자
  $(".search_sec input[type=text]")
    .on("mouseenter", function () {
      $(this).parent().addClass("on");
    })
    .on("mouseleave", function () {
      $(this).parent().removeClass("on");
    });

  //날짜팝업 확인
  $(".date_popup .btn_confirm").on("click", function () {
    console.log($(this));
    alert($(this)[0].className);
    $(".date_popup").removeClass("on");
  });

  //라이트박스
  (function () {
    var $lightboxG_bg = $(".lightboxG_bg");
    var $lightboxG = $(".lightboxG");
    var $lightboxG_year = $(".lightboxG.year");
    var $lightboxG_month = $(".lightboxG.month");
    var $lightboxG_day = $(".lightboxG.day");
    var $lightboxG_yearmonth = $(".lightboxG.yearmonth");
    var current;
    $(".date_popup .year, .date_popup .month, .date_popup .day").on(
      "click",
      function () {
        $lightboxG_bg.addClass("on");
        current = $(this).parents(".con").attr("data-con");
        var className = $(this)[0].className;
        if (className == "year") {
          $lightboxG_year.addClass("on");
        }
        if (className == "month") {
          $lightboxG_month.addClass("on");
        }
        if (className == "day") {
          $lightboxG_day.addClass("on");
        }
      }
    );

    $(".date_popup_yearmonth").on("click", function () {
      $lightboxG_bg.addClass("on");
      current = $(this).attr("data-con");
      var className = $(this)[0].className;
      if (className == "date_popup_yearmonth") {
        $lightboxG_yearmonth.addClass("on");
      }
      //console.log(current,className)
    });

    $(".lightboxG .btn_confirm").on("click", function () {
      alert(current + "," + $(this).parents(".lightboxG").attr("data-date"));
      console.log($lightboxG_bg);
      $lightboxG_bg.removeClass("on");
      $lightboxG.removeClass("on");
    });
  })();


  // 250907 상단 고정방식 css로 동작하는 걸로 수정

  // window.addEventListener("scroll", function () {
  //   //console.log(window.location);
  //   const pop_mywork = this.document.querySelector(".pop_none_mywork");
  //   const pop_detail = this.document.querySelector(".pop_none_detail");
  //   const pop_main = this.document.querySelector(".pop_none");
  //   if (window.pageYOffset >= 300 && pop_detail) {
  //     pop_detail.classList.add("pop_div");
  //   }

  //   if (window.pageYOffset <= 299 && pop_detail) {
  //     pop_detail.classList.remove("pop_div");
  //   }
  //   if (window.pageYOffset >= 450 && pop_main) {
  //     pop_main.classList.add("pop_div");
  //   }
  //   if (window.pageYOffset <= 449 && pop_main) {
  //     pop_main.classList.remove("pop_div");
  //   }
  //   if (window.pageYOffset >= 300 && pop_mywork) {
  //     pop_mywork.classList.add("pop_div");
  //   }

  //   if (window.pageYOffset <= 299 && pop_mywork) {
  //     pop_mywork.classList.remove("pop_div");
  //   }
  // });

});

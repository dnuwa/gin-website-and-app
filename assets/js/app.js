$(document).ready(function () {
    $(".tabs__item_indie").click(function () {
      $(".indie").fadeOut(function () {
            $(".indie").text(($(".indie").text() == '9,90€') ? '9,08€' : '9,90€').fadeIn();
        });
      $(".indie_remark").fadeOut(function () {
            $(".indie_remark").text(($(".indie_remark").text() == 'PER YEAR') ? 'PER MONTH' : 'PER YEAR').fadeIn();
        });
      $("[data-price-plan='monthly']").toggleClass("active");
      $("[data-price-plan='yearly']").toggleClass("active");
    } );

    $(".tabs__item_pro").click(function () {
      $(".proo").fadeOut(function () {
            $(".proo").text(($(".proo").text() == '48€') ? '44,08€' : '48€').fadeIn();
        });
      $(".pro_remark").fadeOut(function () {
            $(".pro_remark").text(($(".pro_remark").text() == 'PER YEAR') ? 'PER MONTH' : 'PER YEAR').fadeIn();
        });
      $("[data-price-plan='monthly-b']").toggleClass("active");
      $("[data-price-plan='yearly-b']").toggleClass("active");
    } );

    $(".tabs__item_executive").click(function () {
      $(".executy").fadeOut(function () {
            $(".executy").text(($(".executy").text() == '99€') ? '74,20€' : '99€').fadeIn();
        });
      $("[data-price-plan='monthly-c']").toggleClass("active");
      $("[data-price-plan='yearly-c']").toggleClass("active");
    } );
  } );  
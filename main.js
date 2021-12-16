

// Open up the dropdown menu
document.querySelector(".nav__right__search__button").addEventListener("click", openMenu);

function openMenu() {
  document.querySelector(".nav__right__search__button__menu").classList.toggle("active"); //classList allow you to access to CSS class.
}

// Change the magnify icon's background color
document.querySelector(".nav__right__search__button").addEventListener("click", changeColor);

function changeColor() {
  document.querySelector(".nav__right__search__button").classList.toggle("active");
}




//slider
// 1つ目
// slick slider for main_visual
$(document).ready(function () {
  $('.main_visual__wrapper').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

    // lazyLoad:'progressive',
    speed: 4000,
    cssEase: 'ease-in-out',
    fade: true,
    easing: 'ease-in-out',
    swipe: false,
    responsive: [
      {
        breakpoint: 750, //767px以下のサイズに適用
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});


// 2つ目（Top画像の中の文字）
$(document).ready(function () {
  $('.main_visual__textArea').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

    speed: 3000,
    fade: true,
    easing: 'linear',
    swipe: false,
    responsive: [
      {
        breakpoint: 750, //767px以下のサイズに適用
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});



// 3つ目
//slick slider for topics_container__slider
$(document).ready(function () {
  $('.topics_container__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="slick-arrow_prev"><img src="imgs/prev_on.png"></span>',
    nextArrow: '<span class="slick-arrow_next"><img src="imgs/next_on.png"></span>',
    responsive: [
      {
        breakpoint: 767, //767px以下のサイズに適用
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});





// zoom effect(個人のお客さま)
$(function () {
  $(".article__wrapper__img--site").hover(
    function () {
      $(this).find(".article__wrapper__img--img").addClass('extra');
    },
    function () {
      $(this).find(".article__wrapper__img--img").removeClass("extra");
    }
  );
});




// for footer.
//  PC size = static /Under tablet size = slider
$(document).ready(function () {
  $('.footer__slider__wrapper').slick({
  });
});

$(function () {
  function sliderSetting() {

    var width = $(window).width();
    // 767pxより小さければ実行
    // .slick-initialized は slick.jsが実行された際に、スライド要素に自動で付与されるクラス
    if (width <= 769) {
      $('.footer__slider__wrapper').not('.slick-initialized').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="slick-arrow_left"><img src="imgs/prev_on.png"></span>',
        nextArrow: '<span class="slick-arrow_right"><img src="imgs/next_on.png"></span>',

        responsive: [
          {
            breakpoint: 530, //530px以下のサイズに適用
            settings: {
              slidesToShow: 2,
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              slidesToScroll: 1,
              arrows: true,
            }
          }
        ]
      });
    } else {//unslickという解除するオプション
      $('.footer__slider__wrapper.slick-initialized').slick('unslick');
    }
  }

  sliderSetting();

  $(window).resize(function () {
    sliderSetting();
  });
});





//Hamburger Menu
// 先に定義する
const open = document.querySelector('.open');// HTMLからidを取得してopenに格納
const overlay = document.querySelector('.hamburger__overlay');// HTMLからclassを取得してopenに格納
const close = document.querySelector(".close");


//class= openのタグがクリックされたら実行
open.addEventListener('click', () => {
  overlay.classList.add("show"); //CSSでこのshowのクラスを作って,このクラスをクリックした時追加する

  open.classList.add("hide"); //hideとういうクラスを追加する
});

//closeタグがクリックされたら実行
close.addEventListener('click', () => {
  overlay.classList.remove("show"); //追加されたクラスを取り除く

  open.classList.remove("hide"); ///追加されたクラスを取り除く
});


// accordion Menu
const dts = document.querySelectorAll('.hamburger__overlay--open')

// 上で取得したdt全てに処理をするのでforEachを使う
dts.forEach(dt => {
  dt.addEventListener("click", () => {
    dt.parentNode.classList.toggle('appear');//dtの親に対してクラスの付けはずしをしたい
  });
});

dts.forEach(EL => {
  if (dts !== EL) {
    EL.parentNode.classList.remove('appear');
  }
})





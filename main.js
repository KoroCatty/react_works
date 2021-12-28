

// Open up the dropdown menu
// document.querySelector(".nav__right__search__button").addEventListener("click", openMenu);

// function openMenu() {
//   document.querySelector(".nav__right__search__button__menu").classList.toggle("active"); //classList allow you to access to CSS class.
// }

// Change the magnify icon's background color
// document.querySelector(".nav__right__search__button").addEventListener("click", changeColor);

// function changeColor() {
//   document.querySelector(".nav__right__search__button").classList.toggle("active");
// }




//slider
// 1つ目
// slick slider for mainVisual
$(document).ready(function () {
  $('.mainVisual__wrapper').slick({
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
  $('.mainVisual__textArea').slick({
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
//slick slider for works (ポートフォリオ)
$(document).ready(function () {
  $('.worksContainer__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="slick-arrow_prev"><img src="imgs/prev_on.png"></span>',
    nextArrow: '<span class="slick-arrow_next"><img src="imgs/next_on.png"></span>',
    responsive: [
      {
        breakpoint: 410, //767px以下のサイズに適用
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});





// zoom effect
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





// スクロールアニメーション　for each section
const targets = document.querySelectorAll('.fadeIn');

function koro(cactus, finishObservation) {
  console.log(cactus);

  cactus.forEach(cat => {

    if (!cat.isIntersecting) {
      return;
    }

    cat.target.classList.add('appear');

    finishObservation.unobserve(cat.target);

  });
}

const milli = {
  // threshold: [0.2, 0.8],
  threshold: 0.13,
  // rootMargin: '0px 0px -100px',　rootの幅を自由に変えれる。（この場合はbottomが-100px）
}

const observer = new IntersectionObserver(koro, milli);


targets.forEach(target => {
  observer.observe(target);
});

// css
// .IOAPI__img.appear {
//   left: 0;
//   opacity: 1;
// }


// Top　へ戻るボタン
window.addEventListener("scroll", function () {
  let scroll = document.documentElement.scrollTop;
  // document.getElementsById("scrollValue").textContent = scroll;
  console.log(scroll);

  //スクロール値が２００を超えたらid=addingのあるタグにlink-pagetopを付け足し、ｃｓｓに予め記載されたものが起動
  if (scroll > 200) {
    document.getElementById("adding").classList.add("link-pagetop");
  }
  //200以下で上で付加したものを取り除く
  if (scroll < 200) {
    document.getElementById("adding").classList.remove("link-pagetop");
  }
}
);

const pagetopBtn = document.querySelector('#adding');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




export default class Slider {
  constructor() {
    this.init();
  }

  init() {

    let texts = [];

    let text = document.querySelectorAll('.main-slider__pagination-text');
    text.forEach(function(i) {
      let txt = i.getAttribute("data-text");
      texts.push(txt)
    });

    let mainSwiper = new Swiper(".js-main-slider", {
      init: true,
      effect: 'fade',
      //centeredSlides: true,
      speed: 1000,
      slidesPerView: 1,
      loop: false,
      direction: "horizontal",
      watchOverflow: true,
      pagination: {
        el: ".js-main-slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1024: {
          pagination: {
            el: ".js-main-slider-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<div class="' + className + '"><div class="main-slider__pagination-img main-slider__pagination-img--' + [index+1] + '"></div><span class="main-slider__pagination-text">' + (texts[index]) + '</span></div>';
            },
          },
        },
      }
    });

    // let bullet = document.querySelectorAll('.slider-pagination-bullet');
    // // console.log(bullet);

    // bullet.forEach(function(elem, i) {
    //   // console.log(bullet.length);
    //     elem.addEventListener('click', function(e) {
    //       let target = e.target;
    //       // console.log(target);

    //       // let x = document.querySelector('.slider-pagination-bullet');
    //       // Array.prototype.forEach.call(x, function(el) {
    //       //   el.closest('.slider-pagination-bullet').classList.remove('slider-pagination-bullet--active');
    //       // });

    //       // target.closest('.slider-pagination-bullet').classList.add('slider-pagination-bullet--active');
    //       mainSwiper.slideTo(i);
    //     });
    // });

    // let pagination = document.querySelector('.js-main-slider-pagination');

    // pagination.addEventListener('click', function(e) {
    //   // console.log('жмяк');
    //   let target = e.target;
    //   console.log(target);
    //   let items = document.querySelectorAll('.slider-pagination-bullet');
    //   items.forEach(function(item, i) {
    //     item.classList.remove('active');
    //   });
    //   console.log(items);
    //   target.closest('.slider-pagination-bullet').classList.add('active');
    // });

  }


}
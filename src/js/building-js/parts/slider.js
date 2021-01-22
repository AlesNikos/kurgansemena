import { ConsoleTransportOptions } from "winston/lib/winston/transports";

export default class Slider {
  constructor() {
    // this.seoLinks = document.querySelectorAll(".hidden-dlink");
    this.init();
  }

  init() {

    // let texts = [];

    // let text = document.querySelectorAll('.main-slider__pagination-text');
    // text.forEach(function(i) {
    //   let txt = i.getAttribute("data-text");
    //   console.log(txt);
    //   texts.push(txt)
    // })
    // console.log(texts);
    let mainSwiper = new Swiper(".js-main-slider", {
      init: true,
      effect: 'fade',
      //centeredSlides: true,
      speed: 1000,
      slidesPerView: 1,
      loop: false,
      direction: "horizontal",
      watchOverflow: true,
      // pagination: {
      //   el: ".js-main-slider-pagination",
      //   clickable: true,
      //   renderBullet: function (index, className) {
      //     return '<span class="' + className + '">' + (texts[index]) + '</span>';
      //   },
      // }
    });

    let bullet = document.querySelectorAll('.slider-pagination-bullet');
    console.log(bullet);

    bullet.forEach(function(elem, i) {
      console.log(bullet.length);
        elem.addEventListener('click', function(e) {
          let target = e.target;
          console.log(target);
          target.classList.add('active');
          mainSwiper.slideTo(i);
        });
    });

  }


}
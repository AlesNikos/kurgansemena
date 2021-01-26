import Seo from './parts/seo'
import Menu from './parts/menu'
import Burger from './parts/burger'
import Header_fixed from './parts/header-fixed'
import Slider from './parts/slider'
import Tabs from './parts/tabs'
import Popup from './parts/popup'
import Validation from './parts/validation'

document.addEventListener('DOMContentLoaded', () => {


  const seo = new Seo();
  const header_fixed = new Header_fixed();
  
  if(document.documentElement.clientWidth > 1024) {
    const header = new Menu();
  }

  if(document.querySelector(".burger")) {
    const burger = new Burger();
  }

  if(document.querySelector(".js-main-slider")) {
    const slider = new Slider();
  }
  if(document.querySelector(".js-news-slider")) {
    let newsSwiper = new Swiper(".js-news-slider", {
      init: true,
      speed: 500,
      slidesPerView: 3,
      loop: false,
      direction: "horizontal",
      navigation: {
        nextEl: ".js-news-slider-arrow-right",
        prevEl: ".js-news-slider-arrow-left",
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
        520: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
        1024: {
          spaceBetween: 42,
          slidesPerView: 3,
        },
      },
    });
  }

  if(document.querySelector('.js-tabs')) {
    const tabs = new Tabs();
  }

  const popup = new Popup();

  const validation = new Validation();

});
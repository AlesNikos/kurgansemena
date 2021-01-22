import Seo from './parts/seo'
import Menu from './parts/menu'
import Burger from './parts/burger'
import Header_fixed from './parts/header-fixed'
import Slider from './parts/slider'

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
      spaceBetween: 42,
      speed: 1000,
      slidesPerView: 3,
      loop: false,
      direction: "horizontal",
      watchOverflow: true,
    });
  }


});
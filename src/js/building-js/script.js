import Seo from './parts/seo'
import Menu from './parts/menu'
import Burger from './parts/burger'

document.addEventListener('DOMContentLoaded', () => {


  const seo = new Seo();
  if(document.documentElement.clientWidth > 1024) {
    const header = new Menu();
  }

  if(document.querySelector(".burger")) {
    const burger = new Burger();
  }

});
import Seo from './parts/seo'
import Menu from './parts/menu'
import Burger from './parts/burger'
import Header_fixed from './parts/header-fixed'

document.addEventListener('DOMContentLoaded', () => {


  const seo = new Seo();
  const header_fixed = new Header_fixed();
  
  if(document.documentElement.clientWidth > 1024) {
    const header = new Menu();
  }

  if(document.querySelector(".burger")) {
    const burger = new Burger();
  }

});
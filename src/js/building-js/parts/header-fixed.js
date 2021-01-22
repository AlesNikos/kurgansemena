export default class Header_fixed {
  constructor() {
    // this.header = document.querySelector('.header');
    this.init();
  }

  init() {

    let header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 1) {
        header.classList.add('header__fixed');
      } else {
        header.classList.remove('header__fixed');
      }
    });
  }

}

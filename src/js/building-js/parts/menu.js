export default class Menu {
  constructor() {
    this.menu = document.querySelector(".menu");
    this.menuItem = document.querySelectorAll('li.js-sub-open')
    this.init();
  }

  init() {
    console.log('test');
    this.menuItem.forEach(function(elem){
        elem.addEventListener('mouseenter', function(e) {
          let target = e.target;
          if(target.closest('.js-sub-open')) {
            target.closest('.js-sub-open').classList.add('open');
          }
        });
        elem.addEventListener('mouseleave', function(e) {
          let target = e.target;
          if(target.closest('.js-sub-open')) {
            target.closest('.js-sub-open').classList.remove('open');
          }
        });
    });

  }


}
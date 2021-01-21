export default class Burger {
  constructor() {
    this.burgerButton = document.querySelector(".burger");;
    this.init();
  }

  init() {
    this.burgerButton.addEventListener("click", changeMenuState);

    function changeMenuState(){
        document.body.classList.toggle("js-burger-menu-is-open");
    };

  }


}
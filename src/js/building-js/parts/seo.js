export default class Seo {
  constructor() {
    this.seoLinks = document.querySelectorAll(".hidden-dlink");
    this.init();
  }

  init() {
    this.seoLinks .forEach(function(i){
        let href = i.getAttribute("data-al");
        i.setAttribute("href", href);
    });

  }


}
export default class Seo {
  constructor() {
    this.seoLinks = document.querySelectorAll(".hidden-dlink");
    this.init();
  }

  init() {
    // var links = document.querySelectorAll(".hidden-dlink");
    this.seoLinks .forEach(function(i){
        let href = i.getAttribute("data-al");
        i.setAttribute("href", href);
    });
    // document.addEventListener("DOMContentLoaded", function(event) {
    // });

  }


}
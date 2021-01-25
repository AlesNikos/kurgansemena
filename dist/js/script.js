"use strict";

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./src/js/building-js/parts/burger.js":
    /*!********************************************!*\
      !*** ./src/js/building-js/parts/burger.js ***!
      \********************************************/

    /***/
    function srcJsBuildingJsPartsBurgerJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Burger\n/* harmony export */ });\nclass Burger {\r\n  constructor() {\r\n    this.burgerButton = document.querySelector(\".burger\");\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    this.burgerButton.addEventListener(\"click\", changeMenuState);\r\n\r\n    function changeMenuState(){\r\n        document.body.classList.toggle(\"js-burger-menu-is-open\");\r\n    };\r\n\r\n  }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://template_for_dev/./src/js/building-js/parts/burger.js?");
      /***/
    },

    /***/
    "./src/js/building-js/parts/header-fixed.js":
    /*!**************************************************!*\
      !*** ./src/js/building-js/parts/header-fixed.js ***!
      \**************************************************/

    /***/
    function srcJsBuildingJsPartsHeaderFixedJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Header_fixed\n/* harmony export */ });\nclass Header_fixed {\r\n  constructor() {\r\n    // this.header = document.querySelector('.header');\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n\r\n    let header = document.querySelector('.header');\r\n    window.addEventListener('scroll', function() {\r\n      if (window.pageYOffset > 1) {\r\n        header.classList.add('header__fixed');\r\n      } else {\r\n        header.classList.remove('header__fixed');\r\n      }\r\n    });\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://template_for_dev/./src/js/building-js/parts/header-fixed.js?");
      /***/
    },

    /***/
    "./src/js/building-js/parts/menu.js":
    /*!******************************************!*\
      !*** ./src/js/building-js/parts/menu.js ***!
      \******************************************/

    /***/
    function srcJsBuildingJsPartsMenuJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Menu\n/* harmony export */ });\nclass Menu {\r\n  constructor() {\r\n    this.menu = document.querySelector(\".menu\");\r\n    this.menuItem = document.querySelectorAll('li.js-sub-open')\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    console.log('test');\r\n    this.menuItem.forEach(function(elem){\r\n        elem.addEventListener('mouseenter', function(e) {\r\n          let target = e.target;\r\n          if(target.closest('.js-sub-open')) {\r\n            target.closest('.js-sub-open').classList.add('open');\r\n          }\r\n        });\r\n        elem.addEventListener('mouseleave', function(e) {\r\n          let target = e.target;\r\n          if(target.closest('.js-sub-open')) {\r\n            target.closest('.js-sub-open').classList.remove('open');\r\n          }\r\n        });\r\n    });\r\n\r\n  }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://template_for_dev/./src/js/building-js/parts/menu.js?");
      /***/
    },

    /***/
    "./src/js/building-js/parts/seo.js":
    /*!*****************************************!*\
      !*** ./src/js/building-js/parts/seo.js ***!
      \*****************************************/

    /***/
    function srcJsBuildingJsPartsSeoJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Seo\n/* harmony export */ });\nclass Seo {\r\n  constructor() {\r\n    this.seoLinks = document.querySelectorAll(\".hidden-dlink\");\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    // var links = document.querySelectorAll(\".hidden-dlink\");\r\n    this.seoLinks .forEach(function(i){\r\n        let href = i.getAttribute(\"data-al\");\r\n        i.setAttribute(\"href\", href);\r\n    });\r\n    // document.addEventListener(\"DOMContentLoaded\", function(event) {\r\n    // });\r\n\r\n  }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://template_for_dev/./src/js/building-js/parts/seo.js?");
      /***/
    },

    /***/
    "./src/js/building-js/parts/slider.js":
    /*!********************************************!*\
      !*** ./src/js/building-js/parts/slider.js ***!
      \********************************************/

    /***/
    function srcJsBuildingJsPartsSliderJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Slider\n/* harmony export */ });\n\r\n\r\nclass Slider {\r\n  constructor() {\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n\r\n    let texts = [];\r\n\r\n    let text = document.querySelectorAll('.main-slider__item-wrapper');\r\n    text.forEach(function(i) {\r\n      let txt = i.getAttribute(\"data-text\");\r\n      texts.push(txt)\r\n    });\r\n\r\n    let mainSwiper = new Swiper(\".js-main-slider\", {\r\n      init: true,\r\n      effect: 'fade',\r\n      //centeredSlides: true,\r\n      speed: 1000,\r\n      slidesPerView: 1,\r\n      loop: false,\r\n      direction: \"horizontal\",\r\n      watchOverflow: true,\r\n      pagination: {\r\n        el: \".js-main-slider-pagination\",\r\n        clickable: true,\r\n      },\r\n      breakpoints: {\r\n        1024: {\r\n          pagination: {\r\n            el: \".js-main-slider-pagination\",\r\n            clickable: true,\r\n            renderBullet: function (index, className) {\r\n              return '<div class=\"' + className + '\"><div class=\"main-slider__pagination-img main-slider__pagination-img--' + [index+1] + '\"></div><span class=\"main-slider__pagination-text\">' + (texts[index]) + '</span></div>';\r\n            },\r\n          },\r\n        },\r\n      }\r\n    });\r\n\r\n    // let bullet = document.querySelectorAll('.slider-pagination-bullet');\r\n    // // console.log(bullet);\r\n\r\n    // bullet.forEach(function(elem, i) {\r\n    //   // console.log(bullet.length);\r\n    //     elem.addEventListener('click', function(e) {\r\n    //       let target = e.target;\r\n    //       // console.log(target);\r\n\r\n    //       // let x = document.querySelector('.slider-pagination-bullet');\r\n    //       // Array.prototype.forEach.call(x, function(el) {\r\n    //       //   el.closest('.slider-pagination-bullet').classList.remove('slider-pagination-bullet--active');\r\n    //       // });\r\n\r\n    //       // target.closest('.slider-pagination-bullet').classList.add('slider-pagination-bullet--active');\r\n    //       mainSwiper.slideTo(i);\r\n    //     });\r\n    // });\r\n\r\n    // let pagination = document.querySelector('.js-main-slider-pagination');\r\n\r\n    // pagination.addEventListener('click', function(e) {\r\n    //   // console.log('жмяк');\r\n    //   let target = e.target;\r\n    //   console.log(target);\r\n    //   let items = document.querySelectorAll('.slider-pagination-bullet');\r\n    //   items.forEach(function(item, i) {\r\n    //     item.classList.remove('active');\r\n    //   });\r\n    //   console.log(items);\r\n    //   target.closest('.slider-pagination-bullet').classList.add('active');\r\n    // });\r\n\r\n  }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://template_for_dev/./src/js/building-js/parts/slider.js?");
      /***/
    },

    /***/
    "./src/js/building-js/parts/tabs.js":
    /*!******************************************!*\
      !*** ./src/js/building-js/parts/tabs.js ***!
      \******************************************/

    /***/
    function srcJsBuildingJsPartsTabsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Tabs\n/* harmony export */ });\nclass Tabs {\r\n    constructor() {\r\n    // this.seoLinks = document.querySelectorAll(\".hidden-dlink\");\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n\r\n    let tabsContainers = document.querySelectorAll(\".js-tabs\");\r\n    if(tabsContainers){\r\n        for(let i = 0; i < tabsContainers.length; i++){\r\n            let tabs = new TabsInit(tabsContainers[i]);\r\n        };\r\n    };\r\n\r\n    // Инициализирует табы\r\n    function TabsInit(tabsContainer){\r\n\r\n        let tabButtons = tabsContainer.querySelectorAll(\"[data-tab]\");\r\n        if(tabButtons){\r\n            for(let i = 0; i < tabButtons.length; i++){\r\n                tabButtons[i].addEventListener(\"click\", changeTabState.bind(null, tabsContainer, tabButtons[i]));\r\n            };\r\n        };\r\n\r\n        // Находим кнопку активного таба\r\n        let activeTabButton = tabsContainer.querySelector(\".tabs__item--active\").firstElementChild;\r\n\r\n        // Выводим контент активного таба\r\n        changeContent(activeTabButton, tabsContainer);\r\n    };\r\n\r\n    // Меняет активный таб\r\n    function changeTabState(tabsContainer, tabButton){\r\n\r\n        // Находим в корневой группе текущий активный таб и переназначаем\r\n        tabsContainer.querySelector(\".tabs__item--active\").classList.remove(\"tabs__item--active\");\r\n        tabButton.parentElement.classList.add(\"tabs__item--active\");\r\n        \r\n\r\n        // Выводим контент активного таба\r\n        changeContent(tabButton, tabsContainer)\r\n    };\r\n\r\n    // Выводит контент активного таба\r\n    function changeContent(tabButton, tabsContainer){\r\n\r\n        // Находим контент для текущей группы табов\r\n        let tabsContent = document.querySelector(\"[data-tabs-content=\" + tabsContainer.getAttribute(\"data-tabs\") + \"]\");\r\n        \r\n        // Если контент найден\r\n        if(tabsContent){\r\n\r\n            // Находим все группы или элементы контента\r\n            let tabsContentItems = tabsContent.querySelectorAll(\"[data-tab-content]\");\r\n\r\n            if(tabButton.getAttribute(\"data-tab\") == \"all\"){\r\n                for(let i = 0; i < tabsContentItems.length; i++){\r\n                    if(tabsContentItems[i].classList.contains(\"js-content-is-hidden\")){\r\n                        tabsContentItems[i].classList.remove(\"js-content-is-hidden\");\r\n                    };  \r\n                };\r\n            }else{\r\n                // Проверяем принадлежность каждого элемента к текущему активному табу\r\n                for(let i = 0; i < tabsContentItems.length; i++){\r\n\r\n                    // Если элемент относится к текущему табу, делаем его видимым\r\n                    if(tabsContentItems[i].getAttribute(\"data-tab-content\").includes(tabButton.getAttribute(\"data-tab\"))){\r\n                        if(tabsContentItems[i].classList.contains(\"js-content-is-hidden\")){\r\n                            tabsContentItems[i].classList.remove(\"js-content-is-hidden\");\r\n                        };\r\n                    // Если элемент не относится к текущему табу, скрываем\r\n                    }else{\r\n                        if(!tabsContentItems[i].classList.contains(\"js-content-is-hidden\")){\r\n                            tabsContentItems[i].classList.add(\"js-content-is-hidden\");\r\n                        };\r\n                    };\r\n                    \r\n                };\r\n            };\r\n\r\n        };\r\n    };\r\n\r\n  }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://template_for_dev/./src/js/building-js/parts/tabs.js?");
      /***/
    },

    /***/
    "./src/js/building-js/script.js":
    /*!**************************************!*\
      !*** ./src/js/building-js/script.js ***!
      \**************************************/

    /***/
    function srcJsBuildingJsScriptJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_seo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/seo */ \"./src/js/building-js/parts/seo.js\");\n/* harmony import */ var _parts_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/menu */ \"./src/js/building-js/parts/menu.js\");\n/* harmony import */ var _parts_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/burger */ \"./src/js/building-js/parts/burger.js\");\n/* harmony import */ var _parts_header_fixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/header-fixed */ \"./src/js/building-js/parts/header-fixed.js\");\n/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/slider */ \"./src/js/building-js/parts/slider.js\");\n/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/tabs */ \"./src/js/building-js/parts/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n\r\n  const seo = new _parts_seo__WEBPACK_IMPORTED_MODULE_0__.default();\r\n  const header_fixed = new _parts_header_fixed__WEBPACK_IMPORTED_MODULE_3__.default();\r\n  \r\n  if(document.documentElement.clientWidth > 1024) {\r\n    const header = new _parts_menu__WEBPACK_IMPORTED_MODULE_1__.default();\r\n  }\r\n\r\n  if(document.querySelector(\".burger\")) {\r\n    const burger = new _parts_burger__WEBPACK_IMPORTED_MODULE_2__.default();\r\n  }\r\n\r\n  if(document.querySelector(\".js-main-slider\")) {\r\n    const slider = new _parts_slider__WEBPACK_IMPORTED_MODULE_4__.default();\r\n  }\r\n  if(document.querySelector(\".js-news-slider\")) {\r\n    let newsSwiper = new Swiper(\".js-news-slider\", {\r\n      init: true,\r\n      spaceBetween: 42,\r\n      speed: 1000,\r\n      slidesPerView: 3,\r\n      loop: false,\r\n      direction: \"horizontal\",\r\n      watchOverflow: true,\r\n    });\r\n  }\r\n\r\n  if(document.querySelector('.js-tabs')) {\r\n    const tabs = new _parts_tabs__WEBPACK_IMPORTED_MODULE_5__.default();\r\n  }\r\n\r\n\r\n});\n\n//# sourceURL=webpack://template_for_dev/./src/js/building-js/script.js?");
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    if (__webpack_module_cache__[moduleId]) {
      /******/
      return __webpack_module_cache__[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /************************************************************************/

  /******/
  // startup

  /******/
  // Load entry module

  /******/


  __webpack_require__("./src/js/building-js/script.js");
  /******/
  // This entry module used 'exports' so it can't be inlined

  /******/

})();
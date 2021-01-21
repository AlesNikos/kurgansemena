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
    "./src/js/building-js/script.js":
    /*!**************************************!*\
      !*** ./src/js/building-js/script.js ***!
      \**************************************/

    /***/
    function srcJsBuildingJsScriptJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_seo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/seo */ \"./src/js/building-js/parts/seo.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n\r\n  const seo = new _parts_seo__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n  console.log(typeof 'NTcn' == 'string');\r\n\r\n  let getMessage = (text, name) => {\r\n    console.log(`${text}, ${name}`);\r\n  }\r\n\r\n  setTimeout(getMessage, 500, 'Hi', 'Vasya');\r\n\r\n});\n\n//# sourceURL=webpack://template_for_dev/./src/js/building-js/script.js?");
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
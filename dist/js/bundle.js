/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n\r\n\r\n\r\n\r\nconst slides = document.querySelectorAll('.slider__slide');\r\nconst next = document.querySelector('.slider__buttons--next');\r\nconst prev = document.querySelector('.slider__buttons--prev');\r\n\r\nconst nav = document.querySelector('.navigation-main');\r\nconst whiteSlide = document.querySelector('.slider__white');\r\n\r\nconst auto = true;\r\nconst intervalTime = 4000;\r\nlet slideInterval;\r\n\r\nif (next) {\r\n  next.addEventListener('click', e => {\r\n    Object(_slider__WEBPACK_IMPORTED_MODULE_0__[\"nextSlide\"])()\r\n    if (auto) {\r\n      clearInterval(slideInterval);\r\n      slideInterval = setInterval(_slider__WEBPACK_IMPORTED_MODULE_0__[\"nextSlide\"], intervalTime);\r\n    }\r\n  })\r\n}\r\n\r\nif (prev) {\r\n\r\n  prev.addEventListener('click', e => {\r\n    Object(_slider__WEBPACK_IMPORTED_MODULE_0__[\"prevSlide\"])()\r\n    if (auto) {\r\n      clearInterval(slideInterval);\r\n      slideInterval = setInterval(_slider__WEBPACK_IMPORTED_MODULE_0__[\"nextSlide\"], intervalTime);\r\n    }\r\n  })\r\n}\r\n\r\nif (auto) {\r\n  slideInterval = setInterval(_slider__WEBPACK_IMPORTED_MODULE_0__[\"nextSlide\"], intervalTime);\r\n}\r\n\r\nconst observer = new MutationObserver(mutations => {\r\n  mutations.forEach((mutation) => {\r\n    if (mutation.target.classList.contains('slider__current') && mutation.target.classList.contains('slider__white')) {\r\n      //console.log(mutation.target.classList)\r\n      nav.style.color = 'black';\r\n    } else {\r\n      nav.style.color = 'white';\r\n    }\r\n  })\r\n});\r\n\r\nobserver.observe(whiteSlide, {\r\n  attributes  : true\r\n})\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! exports provided: nextSlide, prevSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextSlide\", function() { return nextSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prevSlide\", function() { return prevSlide; });\n/*const slides = document.querySelectorAll('.slider__slide');\r\nconst next = document.querySelector('.slider__buttons--next');\r\nconst prev = document.querySelector('.slider__buttons--prev');*/\r\n/*\r\nconst auto = true;\r\nconst intervalTime = 4000;\r\nlet slideInterval;\r\n*/\r\n\r\nconst nextSlide = () => {\r\n\r\n  const current = document.querySelector('.slider__current');\r\n\r\n  current.classList.remove('slider__current');\r\n\r\n  if (current.nextElementSibling) {\r\n    current.nextElementSibling.classList.add('slider__current');\r\n  } else {\r\n    slides[0].classList.add('slider__current');\r\n  }\r\n  setTimeout(() => current.classList.remove('slider__current'));\r\n}\r\n\r\n\r\nconst prevSlide = () => {\r\n\r\n  const current = document.querySelector('.slider__current');\r\n\r\n  current.classList.remove('slider__current');\r\n\r\n  if (current.previousElementSibling) {\r\n    current.previousElementSibling.classList.add('slider__current');\r\n  } else {\r\n    slides[slides.length - 1].classList.add('slider__current');\r\n  }\r\n  setTimeout(() => current.classList.remove('slider__current'));\r\n}\r\n/*\r\nnext.addEventListener('click', e => {\r\n  nextSlide()\r\n  if (auto) {\r\n    clearInterval(slideInterval);\r\n    slideInterval = setInterval(nextSlide, intervalTime);\r\n  }\r\n})\r\n\r\nprev.addEventListener('click', e => {\r\n  prevSlide()\r\n  if (auto) {\r\n    clearInterval(slideInterval);\r\n    slideInterval = setInterval(nextSlide, intervalTime);\r\n  }\r\n})\r\n\r\nif (auto) {\r\n  slideInterval = setInterval(nextSlide, intervalTime);\r\n}\r\n\r\n\r\n// We wanted the 'MutationObserver' to keep observing the 'whiteSlide' element and as soon as the 'slider__current' gets added into its 'classList' we want to change the color of the 'nav' elements font\r\n//color to black and remove it if it doesn't contains that class.\r\n/*\r\nconst nav = document.querySelector('.navigation-main');\r\nconst whiteSlide = document.querySelector('.slider__white');*/\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ })

/******/ });
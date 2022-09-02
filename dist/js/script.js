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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener("DOMContentLoaded", () => {
  // TABS
  const tabs = document.querySelectorAll(".tabcontent"),
        active = document.querySelectorAll(".tabheader__item"),
        wrapper = document.querySelector(".tabheader__items");

  function hideTabsContent() {
    tabs.forEach(items => {
      items.style.display = "none";
    });
    active.forEach(items => {
      items.classList.remove("tabheader__item_active");
    });
  }

  function showTabsContent(i = 0) {
    tabs[i].style.display = "block";
    active[i].classList.add("tabheader__item_active");
  }

  hideTabsContent();
  showTabsContent();
  wrapper.addEventListener("click", event => {
    if (event.target && event.target.classList.contains("tabheader__item")) {
      active.forEach((items, i) => {
        if (event.target == items) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  }); //

  const deadline = "2022-09-10";

  function dead(editline) {
    let days, hours, minutes, seconds;
    const t = Date.parse(editline) - Date.parse(new Date());

    if (t <= 0) {
      days = 0, hours = 0, minutes = 0, seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24)), hours = Math.floor(t / (1000 * 60 * 60) % 24), minutes = Math.floor(t / 1000 / 60 % 60), seconds = Math.floor(t / 1000 % 60);
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(editline) {
    days = document.querySelector("#days"), hours = document.querySelector("#hours"), minutes = document.querySelector("#minutes"), seconds = document.querySelector("#seconds");
    timeinterval = setInterval(updateCloce, 1000);
    updateCloce();

    function updateCloce() {
      const t = dead(editline);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }

      days.innerHTML = getZero(t.days), hours.innerHTML = getZero(t.hours), minutes.innerHTML = getZero(t.minutes), seconds.innerHTML = getZero(t.seconds);
    }
  }

  setClock(deadline); // trigger modal

  const DataModal = document.querySelectorAll("[data-modal]"),
        close = document.querySelector("[data-close]"),
        modal = document.querySelector(".modal");

  function showModal() {
    DataModal.forEach(item => {
      item.addEventListener("click", () => {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
      });
    });
  }

  showModal();
  modal.addEventListener("click", e => {
    if (e.target == modal) {
      setHide();
    }
  });

  function setHide() {
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "auto";
  }

  close.addEventListener("click", setHide);
  document.addEventListener("keydown", e => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      setHide();
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
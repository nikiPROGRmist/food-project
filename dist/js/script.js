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
  }); // class

  class MyCart {
    constructor(options, ...rest) {
      this.image = options.image, this.alt = options.alt, this.title = options.title, this.description = options.description, this.price = options.price, this.change = 8, this.document = document.querySelector(" .menu .container"), this.rest = rest;
      this.changePrice();
    }

    changePrice() {
      this.price = this.price * this.change;
    }

    render() {
      const element = document.createElement("div");

      if (this.rest.length === 0) {
        element.classList.add("menu__item");
      } else {
        this.rest.forEach(item => element.classList.add(item));
      }

      element.innerHTML = `
                    <img src=${this.image} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}"</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div>
      `;
      this.document.append(element);
    }

  }

  new MyCart({
    image: "img/tabs/vegy.jpg",
    alt: "vegy",
    title: 'Меню "Фитнес"',
    description: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    price: 9
  }).render();
  new MyCart({
    image: "img/tabs/elite.jpg",
    alt: "elite",
    title: "Меню “Премиум”",
    description: "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    price: 7
  }).render();
  new MyCart({
    image: "img/tabs/post.jpg",
    alt: "post",
    title: 'Меню "Постное"',
    description: "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    price: 13
  }).render(); // slider

  const slideImg = document.querySelectorAll(".offer__slide"),
        current = document.querySelector("#current"),
        total = document.querySelector("#total"),
        prew = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next");
  let slideIndex = 1;
  showSlide(slideIndex);

  if (slideImg.length < 10) {
    total.textContent = `0${slideImg.length}`;
  } else {
    total.textContent = slideImg.length;
  }

  function showSlide(n) {
    if (n > slideImg.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slideImg.length;
    }

    slideImg.forEach(item => {
      item.style.display = "none";
    });
    slideImg[slideIndex - 1].style.display = "block";

    if (slideImg.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function prewSlide(n) {
    showSlide(slideIndex += n);
  }

  next.addEventListener("click", () => {
    prewSlide(1);
  });
  prew.addEventListener("click", () => {
    prewSlide(-1);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
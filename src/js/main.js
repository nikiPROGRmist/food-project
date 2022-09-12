window.addEventListener("DOMContentLoaded", () => {
  // TABS
  const tabs = document.querySelectorAll(".tabcontent"),
    active = document.querySelectorAll(".tabheader__item"),
    wrapper = document.querySelector(".tabheader__items");
  function hideTabsContent() {
    tabs.forEach((items) => {
      items.style.display = "none";
    });
    active.forEach((items) => {
      items.classList.remove("tabheader__item_active");
    });
  }

  function showTabsContent(i = 0) {
    tabs[i].style.display = "block";
    active[i].classList.add("tabheader__item_active");
  }
  hideTabsContent();
  showTabsContent();

  wrapper.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("tabheader__item")) {
      active.forEach((items, i) => {
        if (event.target == items) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });

  //

  const deadline = "2022-09-10";

  function dead(editline) {
    let days, hours, minutes, seconds;
    const t = Date.parse(editline) - Date.parse(new Date());

    if (t <= 0) {
      (days = 0), (hours = 0), (minutes = 0), (seconds = 0);
    } else {
      (days = Math.floor(t / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((t / 1000 / 60) % 60)),
        (seconds = Math.floor((t / 1000) % 60));
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
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
    (days = document.querySelector("#days")),
      (hours = document.querySelector("#hours")),
      (minutes = document.querySelector("#minutes")),
      (seconds = document.querySelector("#seconds"));
    timeinterval = setInterval(updateCloce, 1000);
    updateCloce();

    function updateCloce() {
      const t = dead(editline);
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
      (days.innerHTML = getZero(t.days)),
        (hours.innerHTML = getZero(t.hours)),
        (minutes.innerHTML = getZero(t.minutes)),
        (seconds.innerHTML = getZero(t.seconds));
    }
  }
  setClock(deadline);

  // trigger modal

  const DataModal = document.querySelectorAll("[data-modal]"),
    close = document.querySelector("[data-close]"),
    modal = document.querySelector(".modal");

  function showModal() {
    DataModal.forEach((item) => {
      item.addEventListener("click", () => {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
      });
    });
  }
  showModal();

  modal.addEventListener("click", (e) => {
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

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      setHide();
    }
  });

  // class

  class MyCart {
    constructor(options, ...rest) {
      (this.image = options.image),
        (this.alt = options.alt),
        (this.title = options.title),
        (this.description = options.description),
        (this.price = options.price),
        (this.change = 8),
        (this.document = document.querySelector(" .menu .container")),
        (this.rest = rest);
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
        this.rest.forEach((item) => element.classList.add(item));
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
    description:
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    price: 9,
  }).render();

  new MyCart({
    image: "img/tabs/elite.jpg",
    alt: "elite",
    title: "Меню “Премиум”",
    description:
      "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    price: 7,
  }).render();

  new MyCart({
    image: "img/tabs/post.jpg",
    alt: "post",
    title: 'Меню "Постное"',
    description:
      "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    price: 13,
  }).render();
});

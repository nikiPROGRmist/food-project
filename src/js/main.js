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
});

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabcontent"),
    active = document.querySelectorAll(".tabheader__item"),
    wrapper = document.querySelector(".tabheader__items");
  console.log(active);

  function hideTabsContent() {
    tabs.forEach((items) => {
      items.style.display = "none";
    });
    active.forEach((items) => {
      items.classList.remove("tabheader__item_active");
    });
  }

  function showTabsContent(i) {
    tabs[i].style.display = "block";
    active[i].classList.add("tabheader__item_active");
  }

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
});

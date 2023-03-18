$(function () {
  // tabs list
  document.querySelectorAll(".filters .rest-tabs__btn").forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      const filters = document.querySelectorAll(".filters .rest-tabs__btn");
      const tabs = document.querySelectorAll(".tabs__list .rest-tabs__items");

      filters.forEach(function (tab) {
        tab.classList.remove("rest-tabs_active-btn");
      });
      this.classList.add("rest-tabs_active-btn");

      tabs.forEach(function (tabContent) {
        tabContent.classList.remove("rest-tabs_active-btn");
      });
      tabs[index].classList.add("rest-tabs_active-btn");

    });
  });


  // uPTop
  // $('.back-to-top').click(function () {
  //   $('body,html').animate({scrollTop: 0}, 800); // 800 - Скорость анимации
  // });
})
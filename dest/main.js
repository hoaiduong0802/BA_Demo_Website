const swiper = new Swiper(".swiper", {
  speed: 1000,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

var elem = document.querySelector(".combotHot .combotHot_wrap");
var flkty = new Flickity(elem, {
  cellAlign: "left",
  prevNextButtons: true,
  contain: true,
  wrapAround: true,
  pageDots: false,
  selectedAttraction: 0.04,
  groupCells: true,
});

var elem2 = document.querySelector(".beautiful .beautiful_wrap");
var flkty = new Flickity(elem2, {
  cellAlign: "left",
  prevNextButtons: false,
  contain: true,
  wrapAround: true,
  pageDots: true,
  selectedAttraction: 0.04,
  groupCells: true,
});

var elem1 = document.querySelector(".detailProduct_slider");
var flkty = new Flickity(elem1, {
  cellAlign: "left",
  prevNextButtons: false,
  contain: true,
  wrapAround: true,
  pageDots: true,
  selectedAttraction: 0.04,
  // groupCells: true,
  fullscreen: true,
  lazyLoad: 1,
});

const btnSideBar = document.querySelector(".menuSideBar");
btnSideBar?.addEventListener("click", (e) => {
  document.querySelector(".sliderBar").classList.toggle("openSidebar");
  btnSideBar.classList.toggle("open");
});

const categoryItem = document.querySelector(".AllProduct_category ul li");
categoryItem?.addEventListener("click", (e) => {
  document
    .querySelector(".AllProduct_category .dropdown")
    .classList.toggle("active");
});

const tabLi = document.querySelectorAll(".description__tabs li");
const tabItem = document.querySelectorAll(".description__item");

tabLi.forEach((item, index) => {
  const prevItem = tabItem[(index + tabItem.length - 1) % tabItem.length];
  const prevTab = tabLi[(index + tabLi.length - 1) % tabLi.length];
  item.addEventListener("click", (e) => {
    prevTab.classList.remove("active");
    prevItem.classList.remove("active");
    item.classList.add("active");
    tabItem[index].classList.add("active");
  });
});

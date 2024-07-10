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

var elem = document.querySelector(".beautiful .beautiful_wrap");
var flkty = new Flickity(elem, {
  cellAlign: "left",
  prevNextButtons: false,
  contain: true,
  wrapAround: true,
  pageDots: true,
  selectedAttraction: 0.04,
  groupCells: true,
});

const btnSideBar = document.querySelector(".menuSideBar");
btnSideBar.addEventListener("click", (e) => {
  document.querySelector(".sliderBar").classList.toggle("openSidebar");
  btnSideBar.classList.toggle("open");
});

const categoryItem = document.querySelector(".AllProduct_category ul li");
categoryItem.addEventListener("click", (e) => {
  const clicked = e.target;
  document
    .querySelector(".AllProduct_category .dropdown")
    .classList.toggle("active");
});

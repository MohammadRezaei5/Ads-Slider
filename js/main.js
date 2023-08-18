var swiper = new Swiper(".mySwiper", {
  // cssMode: true,
  slidesPerView: 1,
  // spaceBetween: 30,
  // grabCursor: true,
  // loop: true,
  // fade: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // mousewheel: true,
  // keyboard: true,
});

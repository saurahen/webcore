let swiperBrand;
let swiperTechnics;
let swiperPrice;
function initSwiperBrand() {
  swiperBrand = new Swiper('.swiper-brand', {
    pagination: {
      el: '.swiper-pagination-brand',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 1,
  });
}
function initSwiperTechnics() {
  swiperTechnics = new Swiper('.swiper-technics', {
    pagination: {
      el: '.swiper-pagination-technics',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 1,
  });
}
function initSwiperPrice() {
  swiperPrice = new Swiper('.swiper-price', {
    pagination: {
      el: '.swiper-pagination-price',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 1,
  });
}

if (matchMedia) {
  let screen = window.matchMedia('(max-width: 767px)');
  screen.addListener(changes);
  changes(screen);
}

function changes(screen) {
  if (screen.matches) {
    initSwiperBrand();
    initSwiperTechnics();
    initSwiperPrice();
  } else if (!screen.matches) {
    if (swiperBrand !== undefined) {
      swiperBrand.destroy(true, true);
      swiperTechnics.destroy(true, true);
      swiperPrice.destroy(true, true);
    }
  }
}

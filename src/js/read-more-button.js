const showMoreBtn = document.querySelector('.read-more-button');
const aboutCompanyText = document.querySelector('.about-company__text');
const brandBtn = document.querySelector('.brand-btn');
const brandWrapper = document.querySelector('.swiper-brand__wrapper');
const technicsBtn = document.querySelector('.technics-btn');
const technicsWrapper = document.querySelector('.swiper-technics__wrapper');

showMoreBtn.addEventListener('click', function () {
  showMoreBtn.classList.toggle('read-more-button--active');
  aboutCompanyText.classList.toggle('about-company__text--hidden');
  if (showMoreBtn.classList.contains('read-more-button--active')) {
    showMoreBtn.textContent = 'Скрыть';
  } else {
    showMoreBtn.textContent = 'Читать далее';
  }
});

brandBtn.addEventListener('click', function () {
  brandBtn.classList.toggle('brand-btn-button--active');
  brandWrapper.classList.toggle('swiper-brand__wrapper--open');
  if (brandBtn.classList.contains('brand-btn-button--active')) {
    brandBtn.textContent = 'Скрыть';
  } else {
    brandBtn.textContent = 'Показать все';
  }
});

technicsBtn.addEventListener('click', function () {
  technicsBtn.classList.toggle('technics-btn-button--active');
  technicsWrapper.classList.toggle('swiper-technics__wrapper--open');
  if (technicsBtn.classList.contains('technics-btn-button--active')) {
    technicsBtn.textContent = 'Скрыть';
  } else {
    technicsBtn.textContent = 'Показать все';
  }
});

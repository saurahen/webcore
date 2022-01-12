const showMorebtn = document.querySelector('.read-more-button');
const aboutCompanyText = document.querySelector('.about-company__text');

showMorebtn.addEventListener('click', function () {
  showMorebtn.classList.toggle('read-more-button--active');
  aboutCompanyText.classList.toggle('about-company__text--hiden');
  if (showMorebtn.classList.contains('read-more-button--active')) {
    showMorebtn.textContent = 'Скрыть';
  } else {
    showMorebtn.textContent = 'Читать далее';
  }
});

const modal = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const burgerOverlay = document.querySelector('.burger__overlay');
const burgerBtnOpen = document.querySelector('.header__burger');
const burgerBtnClose = document.querySelector('.burger__close-button');
const feedback = document.querySelector('.feedback');
const call = document.querySelector('.modal-call');
const closeBtnAll = document.querySelectorAll('.close-button');
const chatBtnAll = document.querySelectorAll('.chat');
const callBtnAll = document.querySelectorAll('.call');
const body = document.querySelector('body');
const modalClose = document.querySelector('.modal-close');

for (let i = 0; i < closeBtnAll.length; i++) {
  let closeBtn = closeBtnAll[i];
  closeBtn.addEventListener('click', function () {
    feedback.classList.remove('feedback--open');
    call.classList.remove('modal-call--open');
    overlay.classList.remove('o--open');
    burgerOverlay.classList.remove('o--open');
    body.classList.remove('body--overflow');
    modalClose.classList.remove('modal-close--visible');
  });
}

// Close Overlay

overlay.addEventListener('click', function () {
  feedback.classList.remove('feedback--open');
  call.classList.remove('modal-call--open');
  body.classList.remove('body--overflow');
  burgerOverlay.classList.remove('o--open');
  modalClose.classList.remove('modal-close--visible');
});
burgerOverlay.addEventListener('click', function () {
  burgerOverlay.classList.remove('o--open');
  feedback.classList.remove('feedback--open');
  call.classList.remove('modal-call--open');
  overlay.classList.remove('o--open');
  body.classList.remove('body--overflow');
  modalClose.classList.remove('modal-close--visible');
});

// BURGER
burgerBtnOpen.addEventListener('click', function () {
  modal.classList.add('burger--open');
  overlay.classList.add('o--open');
  body.classList.add('body--overflow');
});
burgerBtnClose.addEventListener('click', function () {
  modal.classList.remove('burger--open');
  overlay.classList.remove('o--open');
  burgerOverlay.classList.remove('o--open');
  body.classList.remove('body--overflow');
});
overlay.addEventListener('click', function () {
  modal.classList.remove('burger--open');
  overlay.classList.remove('o--open');
  burgerOverlay.classList.remove('o--open');
  body.classList.remove('body--overflow');
});

// FEEDBACK
for (let i = 0; i < chatBtnAll.length; i++) {
  let btn = chatBtnAll[i];
  btn.addEventListener('click', function () {
    feedback.classList.add('feedback--open');
    overlay.classList.add('o--open');
    body.classList.add('body--overflow');
    modal.classList.remove('burger--open');
    call.classList.remove('modal-call--open');
    burgerOverlay.classList.add('o--open');
    modalClose.classList.add('modal-close--visible');
  });
}

// CALL
for (let i = 0; i < callBtnAll.length; i++) {
  let btn = callBtnAll[i];
  btn.addEventListener('click', function () {
    call.classList.add('modal-call--open');
    overlay.classList.add('o--open');
    body.classList.add('body--overflow');
    modal.classList.remove('burger--open');
    feedback.classList.remove('feedback--open');
    modalClose.classList.add('modal-close--visible');
    burgerOverlay.classList.add('o--open');
  });
}

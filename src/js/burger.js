const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const burgerBtnOpen = document.querySelector('.header__burger');
const burgerBtnClose = document.querySelector('.burger__close-button');
const feedback = document.querySelector('.feedback');
const call = document.querySelector('.modal-call');
const closeBtnAll = document.querySelectorAll('.close-button');
const chatBtnAll = document.querySelectorAll('.chat');
const callBtnAll = document.querySelectorAll('.call');

for (let i = 0; i < closeBtnAll.length; i++) {
  let closeBtn = closeBtnAll[i];
  closeBtn.addEventListener('click', function () {
    feedback.classList.remove('feedback--open');
    call.classList.remove('modal-call--open');
    overlay.classList.remove('o--open');
  });
}

overlay.addEventListener('click', function () {
  feedback.classList.remove('feedback--open');
  call.classList.remove('modal-call--open');
});

// BURGER
burgerBtnOpen.addEventListener('click', function () {
  burger.classList.add('burger--open');
  overlay.classList.add('o--open');
});
burgerBtnClose.addEventListener('click', function () {
  burger.classList.remove('burger--open');
  overlay.classList.remove('o--open');
});
overlay.addEventListener('click', function () {
  burger.classList.remove('burger--open');
  overlay.classList.remove('o--open');
});

// FEEDBACK
for (let i = 0; i < chatBtnAll.length; i++) {
  let btn = chatBtnAll[i];
  btn.addEventListener('click', function () {
    feedback.classList.add('feedback--open');
    overlay.classList.add('o--open');
    burger.classList.remove('burger--open');
  });
}

// CALL
for (let i = 0; i < callBtnAll.length; i++) {
  let btn = callBtnAll[i];
  btn.addEventListener('click', function () {
    call.classList.add('modal-call--open');
    overlay.classList.add('o--open');
    burger.classList.remove('burger--open');
  });
}

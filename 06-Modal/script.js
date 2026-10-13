'use strict';

let modal = document.querySelector('.modal');
let colseBtn = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');
let showModalBtns = document.querySelectorAll('.show-modal');

let openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModalBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

colseBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

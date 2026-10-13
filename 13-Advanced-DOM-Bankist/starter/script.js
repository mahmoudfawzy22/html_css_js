'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const massage = document.createElement('div');
massage.innerHTML = `We use cookied for improved funcionality and analytics. <button class="btn btn--close-cookie">Got it! </button>`;
const header = document.querySelector('.header');
header.append(massage);

// //Style
// massage.style.backgroundColor = "#333";
// massage.style.width = "120%";
// console.log(getComputedStyle(massage).height);

// massage.style.height = `${Number.parseFloat(getComputedStyle(massage).height) + 40}px`;

// console.log(massage.style.height)

// document.documentElement.style.setProperty('--color-primary', "red")

const logo = document.querySelector('.nav__logo');
const navLinks = document.querySelectorAll('.nav__link');
const BtnScrollTo = document.querySelector('.btn--scroll-to');
const sectionOne = document.querySelector('#section--1');
const navLinksP = document.querySelector('.nav__links');
const tabContainer = document.querySelector('.operations__tab-container');
const tabOperations = document.querySelectorAll('.operations__tab');
const tabOperationsContent = document.querySelectorAll('.operations__content');
const sections = document.querySelectorAll('.section');
const imgTarget = document.querySelectorAll('img[data-src]');
const nav = document.querySelector('.nav');

tabContainer.addEventListener('click', function (e) {
  // select the clicked one
  const clicked = e.target.closest('.operations__tab');
  if (!clicked.classList.contains('operations__tab')) return;
  const index = clicked.dataset.tab;

  // remove the active class
  tabOperations.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabOperationsContent.forEach(op =>
    op.classList.remove('operations__content--active')
  );

  // add the active class to the selected one
  tabOperations[index - 1].classList.add('operations__tab--active');
  tabOperationsContent[index - 1].classList.add('operations__content--active');
});

BtnScrollTo.addEventListener('click', function () {
  const s1coords = sectionOne.getBoundingClientRect();
  // window.scrollTo({
  //   left: s1coords.x + window.scrollX,
  //   top: s1coords.y + window.scrollY,
  //   behavior: 'smooth',
  // })
  sectionOne.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const sectionOneD = document.querySelector('.section__description');

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

// navLinks.forEach((nav, i)=>{
//   nav.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = nav.getAttribute("href");
//     console.log(id);
//     const sectionSelected = document.querySelector(id);
//     sectionSelected.scrollIntoView({behavior: "smooth"});
//   })
// })

// Impelemantion event delegation
navLinksP.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    const sectionSelected = document.querySelector(id);
    sectionSelected.scrollIntoView({ behavior: 'smooth' });
  }
});

// const handler = function (e) {
//   const link = e.target.closest('.nav__link');
//   if (!link) return;

//   const siblings = link.closest('.nav').querySelectorAll('.nav__link');

//   siblings.forEach(slib => {
//     if (slib !== link) slib.style.opacity = this;
//   });

//   logo.style.opacity = this;
// };

// navLinksP.addEventListener('mouseover', handler.bind(0.5));

// navLinksP.addEventListener('mouseout', handler.bind(1));

// const initialCoords = sectionOne.getBoundingClientRect();

// window.addEventListener('scroll', function(){
//   if(this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky')
// })
// const obsCallBack = function(entries, observe){
//   console.log(entries);
// }
// const obsOptions = {
//   root: unll,
//   threshold: 0.1,
// }
// const observe = new IntersectionObserver(obsCallBack, obsOptions);
// observe.observe(sectionOne); // the element that will observe it

nav.classList.remove('sticky');
const navHeight = nav.getBoundingClientRect().height;
function stickyNav(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}
const headerOpctions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const haederObs = new IntersectionObserver(stickyNav, headerOpctions);

haederObs.observe(header);

// Reavel sections
const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const reavelObs = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach(section => {
  reavelObs.observe(section);
  section.classList.add('section--hidden');
});

// img lazy loading
const imgLoad = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
  });
};

const imgObserve = new IntersectionObserver(imgLoad, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTarget.forEach(img => imgObserve.observe(img));

// Slider
const slides = document.querySelectorAll('.slide');
const sliderLeftBtn = document.querySelector('.slider__btn--left');
const sliderRightBtn = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
const slidesLength = slides.length;

const goToSlide = function (slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
  });
};

const activeDots = function (currentSlide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${currentSlide}"]`)
    .classList.add('dots__dot--active');
};



const nextSlide = function () {
  currentSlide++;
  if (currentSlide === slidesLength) currentSlide = 0;
  goToSlide(currentSlide);
};

const previousSlide = function () {
  currentSlide--;
  if (currentSlide < 0) currentSlide = slidesLength - 1;
  goToSlide(currentSlide);
};

goToSlide(0);
sliderRightBtn.addEventListener('click', nextSlide);
sliderLeftBtn.addEventListener('click', previousSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') previousSlide();
  e.key === 'ArrowRight' && nextSlide();
});

const createDots = function () {
  slides.forEach(function (_, i) {
    const dot = `<button class="dots__dot" data-slide="${i}"></button>`;
    dotsContainer.insertAdjacentHTML('beforeend', dot);
  });
};

createDots();
activeDots(0);

dotsContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('dots__dot')) return;

  currentSlide = Number(e.target.dataset.slide);
  goToSlide(currentSlide);
  activeDots(currentSlide);
});

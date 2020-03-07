
import {nextSlide, prevSlide} from './slider';


const slides = document.querySelectorAll('.slider__slide');
console.log(slides);
const next = document.querySelector('.slider__buttons--next');
const prev = document.querySelector('.slider__buttons--prev');

const nav = document.querySelector('.navigation-main');
const whiteSlide = document.querySelector('.slider__white');

const auto = true;
const intervalTime = 4000;
let slideInterval;

if (next) {
  next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  })
}

if (prev) {

  prev.addEventListener('click', e => {
    prevSlide()
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  })
}

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

const observer = new MutationObserver(mutations => {
  mutations.forEach((mutation) => {
    if (mutation.target.classList.contains('slider__current') && mutation.target.classList.contains('slider__white')) {
      //console.log(mutation.target.classList)
      nav.style.color = 'black';
    } else {
      nav.style.color = 'white';
    }
  })
});

observer.observe(whiteSlide, {
  attributes  : true
})
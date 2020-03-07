const slides = document.querySelectorAll('.slider__slide');
const next = document.querySelector('.slider__buttons--next');
const prev = document.querySelector('.slider__buttons--prev');

const auto = true;
const intervalTime = 4000;
let slideInterval;


const nextSlide = () => {

  const current = document.querySelector('.slider__current');

  current.classList.remove('slider__current');

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('slider__current');
  } else {
    slides[0].classList.add('slider__current');
  }
  setTimeout(() => current.classList.remove('slider__current'));
}


const prevSlide = () => {

  const current = document.querySelector('.slider__current');

  current.classList.remove('slider__current');

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('slider__current');
  } else {
    slides[slides.length - 1].classList.add('slider__current');
  }
  setTimeout(() => current.classList.remove('slider__current'));
}

next.addEventListener('click', e => {
  nextSlide()
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
})

prev.addEventListener('click', e => {
  prevSlide()
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
})

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}


// We wanted the 'MutationObserver' to keep observing the 'whiteSlide' element and as soon as the 'slider__current' gets added into its 'classList' we want to change the color of the 'nav' elements font
//color to black and remove it if it doesn't contains that class.

const nav = document.querySelector('.navigation-main');
const whiteSlide = document.querySelector('.slider__white');

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





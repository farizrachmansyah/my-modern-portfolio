class UI {
  constructor() {
    this.body = document.querySelector('body');
    this.nav = document.querySelector('.header__nav');
    this.burgerBtn = document.querySelector('.burger');
    this.mobileNav = document.querySelector('.overlay');
    this.scrollBtn = document.querySelector('.scroll');
    this.aboutSection = document.querySelector('.introduction');
    this.prevBtn = document.querySelector('.prev');
    this.nextBtn = document.querySelector('.next');
    this.slides = document.querySelectorAll('.showcase__slide');
    this.counter = 0;
  }

  showNav() {
    if (this.nav.classList.contains('open')) {
      this.mobileNav.style.width = '0';
      this.nav.classList.remove('open');
      this.body.classList.remove('noscroll');
    } else {
      this.body.classList.add('noscroll');
      this.nav.classList.add('open');
      this.mobileNav.style.width = '100%';
    }
  }

  changeShowcaseSlide(e) {
    if (e.target.classList.contains('next')) {
      this.counter++;
      this.doChange(this.counter);
    } else {
      this.counter--;
      this.doChange(this.counter);
    }
  }

  doChange(counter) {
    const slides = this.slides;

    // plying with buttons
    if (counter < slides.length - 1) {
      this.nextBtn.style.color = 'inherit';
      this.nextBtn.style.pointerEvents = 'inherit';
    } else {
      this.nextBtn.style.color = '#bbb';
      this.nextBtn.style.pointerEvents = 'none';
    }

    if (counter > 0) {
      this.prevBtn.style.color = '#fff';
      this.prevBtn.style.pointerEvents = 'inherit';
    } else {
      this.prevBtn.style.color = 'inherit';
      this.prevBtn.style.pointerEvents = 'none';
    }

    slides.forEach(slide => {
      slide.style.transform = `translateX(-${counter * 100}%)`
    });
  }

  scrollAppear() {
    let animatedScrollAppear = document.querySelectorAll('.put-animation');
    animatedScrollAppear.forEach(element => {
      let thePosition = element.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.5;

      if (thePosition < screenPosition) {
        element.classList.add('show-animation');
      }
    })
  }
}

function eventListener() {
  // button elements
  const burgerBtn = document.querySelector('.burger');
  const scrollBtn = document.querySelector('.scroll');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // instance UI class
  const ui = new UI();

  // Setup the left position of each slide
  const slides = ui.slides;
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  // click events for every button
  burgerBtn.addEventListener('click', function () {
    ui.showNav();
  });
  scrollBtn.addEventListener('click', function () {
    smoothScroll('#introduction', 1000);
  });
  prevBtn.addEventListener('click', function (e) {
    ui.changeShowcaseSlide(e);
  });
  nextBtn.addEventListener('click', function (e) {
    ui.changeShowcaseSlide(e);
  });

  // scroll events
  window.addEventListener('scroll', function () {
    ui.scrollAppear();
  })
}

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTIme = null;

  function animation(currentTime) {
    if (startTIme === null) startTIme = currentTime;
    var timeElapsed = currentTime - startTIme;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

function closeNav() {
  const ui = new UI();

  ui.mobileNav.style.width = '0';
  ui.body.classList.remove('noscroll');
  ui.nav.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  eventListener();
})
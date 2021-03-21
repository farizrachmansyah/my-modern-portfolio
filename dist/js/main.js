class UI {
  constructor() {
    this.burgerBtn = document.querySelector('.burger');
    this.scrollBtn = document.querySelector('.scroll');
    this.prevBtn = document.querySelector('.prev');
    this.nextBtn = document.querySelector('.next');
    this.slides = document.querySelectorAll('.showcase__slide');
    this.counter = 0;
  }

  showNav() {
    console.log('nav opened');
  }

  gotoIntroduction() {
    console.log('take off');
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

    // setting up the buttons
    if (counter < slides.length - 1) {
      this.nextBtn.style.color = 'inherit';
      this.nextBtn.style.pointerEvents = 'inherit';
    } else {
      this.nextBtn.style.color = '#ccc';
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
  burgerBtn.addEventListener('click', function (e) {
    ui.showNav();
  });
  scrollBtn.addEventListener('click', function (e) {
    ui.gotoIntroduction();
  });
  prevBtn.addEventListener('click', function (e) {
    ui.changeShowcaseSlide(e);
  });
  nextBtn.addEventListener('click', function (e) {
    ui.changeShowcaseSlide(e);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  eventListener();
})
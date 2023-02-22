const slider = () => {
  const SLIDER = document.querySelector('.undersection__slider');
  SLIDER.addEventListener('click', (e) => {
    const TARGET = e.target.closest('.undersection__slide-title-block');
    const SLIDE = TARGET.nextElementSibling;
    const OPEN_SLIDE = document.querySelector('._show');
    if (SLIDE !== OPEN_SLIDE) {
      OPEN_SLIDE.classList.remove('_show');
      SLIDE.classList.add('_show');
    }
  });
};

export default slider;

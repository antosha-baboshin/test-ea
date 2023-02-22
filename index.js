import startTimer from './components/timer.js';
import validateForm from './components/validation.js';
import switchPage from './components/pageSwither.js';
import slider from './components/slider.js';

document.addEventListener('DOMContentLoaded', () => {
  startTimer();
  validateForm();
  switchPage();
  slider();
});

import startTimer from './components/timer.js';
import validateForm from './components/validation.js';
import switchPage from './components/pageSwither.js';

document.addEventListener('DOMContentLoaded', () => {
  startTimer();
  validateForm();
  switchPage();
});

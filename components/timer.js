const startTimer = () => {
  const DAYS = document.querySelector('.main__time_days');
  const HOURS = document.querySelector('.main__time_hours');
  const MINUTES = document.querySelector('.main__time_minutes');
  const SECONDS = document.querySelector('.main__time_seconds');

  const DEADLINE = new Date(2023, 5, 31);

  const countdown = () => {
    const CURRENT_TIME = DEADLINE - new Date();
    const CURRENT_DAYS = CURRENT_TIME > 0 ? Math.floor(CURRENT_TIME / 1000 / 60 / 60 / 24) : 0;
    const CURRENT_HOURS = CURRENT_TIME > 0 ? Math.floor(CURRENT_TIME / 1000 / 60 / 60) % 24 : 0;
    const CURRENT_MINUTES = CURRENT_TIME > 0 ? Math.floor(CURRENT_TIME / 1000 / 60) % 60 : 0;
    const CURRENT_SECONDS = CURRENT_TIME > 0 ? Math.floor(CURRENT_TIME / 1000) % 60 : 0;

    DAYS.innerHTML = CURRENT_DAYS < 10 ? `0${CURRENT_DAYS}` : CURRENT_DAYS;
    HOURS.innerHTML = CURRENT_HOURS < 10 ? `0${CURRENT_HOURS}` : CURRENT_HOURS;
    MINUTES.innerHTML = CURRENT_MINUTES < 10 ? `0${CURRENT_MINUTES}` : CURRENT_MINUTES;
    SECONDS.innerHTML = CURRENT_SECONDS < 10 ? `0${CURRENT_SECONDS}` : CURRENT_SECONDS;
  };
  setInterval(countdown, 1000);
};

export default startTimer;

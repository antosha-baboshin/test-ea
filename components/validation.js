const validateForm = () => {
  const FORM = document.querySelector('.footer__frame');
  const FORM_INPUT = document.querySelector('.footer__input');
  const URL = 'http://localhost:3000/notification';

  const checkEmail = () => {
    const EMAIL = FORM_INPUT.value;
    return !/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i.test(EMAIL);
  };

  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const blackout = () => {
    
  }
  const sendForm = async () => {
    const ERROR = checkEmail();
    const EMAIL = FORM_INPUT.value;

    if (ERROR) {
      FORM.classList.add('_invalid');
      FORM_INPUT.classList.add('_invalid');
    } else {
      FORM.classList.remove('_invalid');
      FORM_INPUT.classList.remove('_invalid');

      postData(URL, { email: EMAIL }).then(() => {
        blackout();
      }).catch('Error');
    }
  };

  const FORM_BUTTON = document.querySelector('.footer__button');
  FORM_BUTTON.addEventListener('click', sendForm);
};

export default validateForm;

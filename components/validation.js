const validateForm = () => {
  const FORM = document.querySelector('.footer__frame');
  const FORM_INPUT = document.querySelector('.footer__input');

  const checkEmail = () => {
    const EMAIL = FORM_INPUT.value;
    return /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i.test(EMAIL);
  };

  const sendForm = async () => {
    const ERROR = checkEmail();
    // const EMAIL = FORM_INPUT.value;

    if (!ERROR) {
      FORM.classList.add('_invalid');
      FORM_INPUT.classList.add('_invalid');
    } else {
      FORM.classList.remove('_invalid');
      FORM_INPUT.classList.remove('_invalid');
    }
  };

  const FORM_BUTTON = document.querySelector('.footer__button');
  FORM_BUTTON.addEventListener('click', sendForm);
};

export default validateForm;

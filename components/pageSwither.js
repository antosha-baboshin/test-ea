const switchPage = () => {
  const changePage = () => {
    const BODY = document.querySelector('.body');
    BODY.style.top = '-100vh';
  };
  const PAGE_BUTTON = document.querySelector('.footer__page-block');
  PAGE_BUTTON.addEventListener('click', changePage);
};

export default switchPage;

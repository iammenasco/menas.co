const rerunButton = document.querySelector('.rerun');
const i = document.querySelector('.i');
const am = document.querySelector('.am');
const menasco = document.querySelector('.menasco');

const init = () => {
  i.classList.remove('i-animate');
  am.classList.remove('am-animate');
  menasco.classList.remove('menasco-animate');
  rerunButton.classList.remove('rerun-animate');

  const trick = rerunButton.offsetWidth;

  i.classList.add('i-animate');
  am.classList.add('am-animate');
  menasco.classList.add('menasco-animate');
  rerunButton.classList.add('rerun-animate');

  return trick;
};

rerunButton.addEventListener('click', init);

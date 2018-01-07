const rerunButton = document.querySelector('.rerun');
const i = document.querySelector('.i');
const am = document.querySelector('.am');
const menasco = document.querySelector('.menasco');
const auroral = document.getElementById('auroral');

const aurorals = [
  'agrabah',
  'northern',
  'northern-intense',
  'northern-dimmed',
  'northern-dusk',
  'northern-warm'
]

const rerunAnimation = () => {
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

const randomAuroral = () => {
  const colorScheme = aurorals[Math.floor(Math.random() * aurorals.length)];
  auroral.className = `auroral-${colorScheme}`;
};

rerunButton.addEventListener('click', rerunAnimation);
document.addEventListener('DOMContentLoaded', randomAuroral);

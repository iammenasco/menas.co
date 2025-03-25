const iammenasco = document.querySelector('.iammenasco');
const i = document.querySelector('.i');
const am = document.querySelector('.am');
const menasco = document.querySelector('.menasco');
const links = document.querySelector('.links');

const auroral = document.getElementById('auroral');

const aurorals = [
  'agrabah',
  'northern',
  'northern-intense',
  'northern-dimmed',
  'northern-dusk',
  'northern-warm'
];

const randomAuroral = () => {
  const colorScheme = aurorals[Math.floor(Math.random() * aurorals.length)];
  auroral.className = `auroral-${colorScheme}`;
};

const rerunAnimation = () => {
  i.classList.remove('i-animate');
  am.classList.remove('am-animate');
  menasco.classList.remove('menasco-animate');
  links.classList.remove('menasco-animate');

  const trick = iammenasco.offsetWidth;

  i.classList.add('i-animate');
  am.classList.add('am-animate');
  menasco.classList.add('menasco-animate');
  links.classList.add('menasco-animate');

  randomAuroral();

  return trick;
};

// ensure execution at most once per interval
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const throttledRerunAnimation = throttle(rerunAnimation, 500);

iammenasco.addEventListener('click', throttledRerunAnimation);
document.addEventListener('DOMContentLoaded', randomAuroral);

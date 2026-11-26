const iammenasco = document.getElementById('iammenasco');
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
  'northern-warm',
];

const randomAuroral = () => {
  const current = auroral.className.replace(/^auroral-/, '');
  const choices = aurorals.filter((name) => name !== current);
  const pool = choices.length > 0 ? choices : aurorals;
  const colorScheme = pool[Math.floor(Math.random() * pool.length)];
  auroral.className = `auroral-${colorScheme}`;
};

const rerunAnimation = () => {
  i.classList.remove('i-animate');
  am.classList.remove('am-animate');
  menasco.classList.remove('menasco-animate');
  links.classList.remove('menasco-animate');

  void iammenasco.offsetWidth;

  i.classList.add('i-animate');
  am.classList.add('am-animate');
  menasco.classList.add('menasco-animate');
  links.classList.add('menasco-animate');

  randomAuroral();
};

iammenasco.addEventListener('click', rerunAnimation);
iammenasco.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    rerunAnimation();
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', randomAuroral);
} else {
  randomAuroral();
}

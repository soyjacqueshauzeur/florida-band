document.addEventListener('contextmenu', e => e.preventDefault());

const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav');

const closeMenu = () => {
  burger.classList.remove('active');
  nav.classList.remove('open');
};

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) closeMenu();
});

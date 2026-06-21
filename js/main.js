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

const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section');

if (topSection && bottomSection) {
  let syncing = false;

  topSection.addEventListener('scroll', () => {
    if (syncing) return;
    syncing = true;
    bottomSection.scrollLeft = topSection.scrollLeft * 0.7;
    requestAnimationFrame(() => { syncing = false; });
  });

  bottomSection.addEventListener('scroll', () => {
    if (syncing) return;
    syncing = true;
    topSection.scrollLeft = bottomSection.scrollLeft / 0.7;
    requestAnimationFrame(() => { syncing = false; });
  });
}

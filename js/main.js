document.addEventListener('contextmenu', e => e.preventDefault());

const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
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

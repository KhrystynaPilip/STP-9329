const openBtnEl = document.querySelector('[data-action="open"]');
const closeElements = document.querySelectorAll('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-menu-visible]');
const backDropEl = document.querySelector('[data-backdrop-visible]');

function openMenu() {
  burgerMenuEl.dataset.menuVisible = 'true';
  backDropEl.dataset.backdropVisible = 'true';
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}

function closeMenu() {
  burgerMenuEl.dataset.menuVisible = 'false';
  backDropEl.dataset.backdropVisible = 'false';
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

openBtnEl.addEventListener('click', openMenu);

closeElements.forEach(element => element.addEventListener('click', closeMenu));

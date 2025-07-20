const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-menu-visible]');

function openMenu() {
  burgerMenuEl.dataset.menuVisible = 'true';
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  burgerMenuEl.dataset.menuVisible = 'false';
  document.body.style.overflow = '';
}

openBtnEl.addEventListener('click', openMenu);

closeBtnEl.addEventListener('click', closeMenu);

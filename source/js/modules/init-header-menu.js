import {ScrollLock} from '../utils/scroll-lock.js';

const scrollLock = new ScrollLock();
const menu = document.querySelector('[data-menu]');
const menuToggle = document.querySelector('[data-menu-toggle]')
const breakpointMedia = window.matchMedia('(min-width: 768px)');

const openMenu = () => {
  menu.classList.add('is-active');
  scrollLock.disableScrolling();
};

const closeMenu = () => {
  menu.classList.remove('is-active');
  scrollLock.enableScrolling();
};

const breakpointChecker = () => {
  if (breakpointMedia.matches) {
    if (menu.classList.contains('is-active')) {
      closeMenu();
    }
  }
  breakpointMedia.addListener(breakpointChecker);
};

const initHeaderMenu = () => {
  if (!menu) {
    return
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (menu.classList.contains('is-active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  breakpointChecker();
};

export {initHeaderMenu};

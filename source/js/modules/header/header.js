import {ScrollLock} from '../../utils/scroll-lock.js';
import {FocusLock} from '../../utils/focus-lock.js';

export class Header {
  constructor() {
    this._header = document.querySelector('[data-header]');
    this._toggle = document.querySelector('[data-toggle-menu]');
    this._scrollLock = new ScrollLock();
    this._focusLock = new FocusLock();
    this._isMenuOpen = false;

    this._onToggleClick = this._onToggleClick.bind(this);
    this._onDocumentKeydown = this._onDocumentKeydown.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }

  init() {
    if (!this._toggle) {
      return;
    }

    this._toggle.addEventListener('click', this._onToggleClick);
  }

  _openMenu() {
    this._isMenuOpen = true;
    this._header.classList.add('is-active');
    this._scrollLock.disableScrolling();
    document.addEventListener('keydown', this._onDocumentKeydown);
    document.addEventListener('click', this._onDocumentClick);
    this._focusLock.lock('[data-header]');
  }

  _closeMenu() {
    this._isMenuOpen = false;
    this._header.classList.remove('is-active');
    this._scrollLock.enableScrolling();
    document.removeEventListener('keydown', this._onDocumentKeydown);
    document.removeEventListener('click', this._onDocumentClick);
    this._focusLock.unlock('[data-header]');
  }

  _onToggleClick() {
    if (this._isMenuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  _onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      this._closeMenu();
    }
  }

  _onDocumentClick(evt) {
    if (evt.target.hasAttribute('[data-close-menu]')) {
      this._closeMenu();
    }
  }
}

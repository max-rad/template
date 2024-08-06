import {initAccordion} from './modules/accordion/init-accordion';
import {initCustomSelect} from './modules/custom-select/init-custom-select';
import {initHeader} from './modules/header/init-header';
import {initModals} from './modules/modal/init-modals';
import {initPhoneMask} from './modules/init-phone-mask';
import {initPhoneValidation} from './modules/init-phone-validation';
import {initTabs} from './modules/tabs/init-tabs';


window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initModals();
  initAccordion();
  initTabs();
  window.addEventListener('load', () => {
    initCustomSelect();
    initPhoneMask();
    initPhoneValidation();
  });
});

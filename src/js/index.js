// src/js/index.js

import { initializeBurgerMenu } from './partials/burger-menu.js';
import { initializeSwiper } from './partials/swiper.js';
import { initializeModalWindows } from './partials/modal-more-about-the-teacher.js';

export function initializeApp() {
  initializeBurgerMenu();
  initializeSwiper();
  initializeModalWindows();
}

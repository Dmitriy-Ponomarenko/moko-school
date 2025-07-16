// src/js/index.js

import { initializeBurgerMenu } from './partials/burger-menu.js';
import { initializeSwiper } from './partials/swiper.js';

export function initializeApp() {
  initializeBurgerMenu();
  initializeSwiper();
}

// src/js/partials/swiper.

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initializeSwiper() {
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSwiper();
});

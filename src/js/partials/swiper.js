// src/js/partials/swiper.

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initializeSwiper() {
  new Swiper('.swiper-container', {
    spaceBetween: 20,
    slidesPerView: 1,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      hide: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '#swiper-next',
      nextEl: '#swiper-prev',
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },

    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1280: {
        spaceBetween: 40,
        slidesPerView: 4,
      },
    },
  });
}

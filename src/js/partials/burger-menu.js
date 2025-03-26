// src/js/partials/burger-menu.js

export function initializeBurgerMenu() {
  const burgerButton = document.getElementById('burger-button');
  const closeButton = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  if (burgerButton && closeButton && mobileMenu) {
    burgerButton.addEventListener('click', () => {
      mobileMenu.classList.add('open');
    });

    closeButton.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });

    mobileMenu.addEventListener('click', event => {
      if (event.target === mobileMenu) {
        mobileMenu.classList.remove('open');
      }
    });
  }
}

// src/js/partionals/burger-menu.js

document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.getElementById("burger-button");
  const closeButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burgerButton && closeButton && mobileMenu) {
    burgerButton.addEventListener("click", () => {
      mobileMenu.classList.add("open");
    });

    closeButton.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });

    // Закрытие при клике вне меню
    mobileMenu.addEventListener("click", (event) => {
      if (event.target === mobileMenu) {
        mobileMenu.classList.remove("open");
      }
    });
  }
});
// src/js/index.js

export function initializeApp() {
  // Здесь инициализация всех функций для приложения, в том числе для бургер-меню
  import('./partials/burger-menu.js')
    .then(module => {
      // Код после загрузки burger-menu.js
      console.log('Бургер-меню загружено и готово!');
    })
    .catch(error => {
      console.error('Ошибка при загрузке бургер-меню:', error);
    });
}

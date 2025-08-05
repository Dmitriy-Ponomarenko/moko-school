export function initializeModalWindows() {
  const openButtons = document.querySelectorAll('.learn-more-btn');
  const modals = document.querySelectorAll('.modal');

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.dataset.modal;
      const modal = document.getElementById(modalId);
      openModal(modal);
    });
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
    modal.setAttribute('aria-hidden', 'false');

    function onEsc(e) {
      if (e.key === 'Escape') closeModal(modal);
    }

    document.addEventListener('keydown', onEsc);

    modal.addEventListener(
      'click',
      e => {
        if (
          e.target.dataset.close ||
          e.target.classList.contains('modal-close')
        ) {
          closeModal(modal);
          document.removeEventListener('keydown', onEsc);
        }
      },
      { once: true }
    );
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.modal-tab');
    const tabContents = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.dataset.tab;

        tabButtons.forEach(btn => btn.classList.remove('active'));

        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');

        const targetPanel = document.querySelector(
          `.tab-panel[data-content="${target}"]`
        );
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  });
}

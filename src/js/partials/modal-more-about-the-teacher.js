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

    modal.addEventListener('click', e => {
      if (
        e.target.dataset.close ||
        e.target.classList.contains('modal-close')
      ) {
        closeModal(modal);
        document.removeEventListener('keydown', onEsc);
      }
    });
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.modal-tab');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const activePanel = document.querySelector('.tab-panel.active');
        if (activePanel) {
          activePanel.classList.remove('active');

          setTimeout(() => {
            panels.forEach(panel => {
              if (panel.dataset.content === target) {
                panel.classList.add('active');
              }
            });
          }, 300);
        }
      });
    });
  });
}

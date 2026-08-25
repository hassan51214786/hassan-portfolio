export function initModal() {
  const overlay = document.getElementById('dialog-overlay');
  const modal = document.getElementById('settings-dialog');
  const openBtn = document.getElementById('open-modal-btn');
  const closeBtn = document.getElementById('close-modal-btn');
  const saveBtn = document.getElementById('save-modal-btn');

  let triggerElement = null;

  function getFocusableElements(element) {
    return Array.from(
      element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled'));
  }

  function openModal() {
    triggerElement = document.activeElement;
    overlay.removeAttribute('hidden');
    
    // Trap focus setup
    const focusableElements = getFocusableElements(modal);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
    
    document.addEventListener('keydown', trapFocus);
  }

  function closeModal() {
    overlay.setAttribute('hidden', 'true');
    document.removeEventListener('keydown', trapFocus);
    
    // Return focus to trigger
    if (triggerElement) {
      triggerElement.focus();
    }
  }

  function trapFocus(e) {
    const focusableElements = getFocusableElements(modal);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    if (e.key === 'Tab') {
      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else { // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }

  // Event Listeners
  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  saveBtn.addEventListener('click', () => {
    // Simulate save
    closeModal();
  });

  // Close when clicking outside modal content
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });
}

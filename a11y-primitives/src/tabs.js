export function initTabs() {
  const tablist = document.querySelector('[role="tablist"]');
  const tabs = tablist.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');

  // Add keyboard navigation logic
  tablist.addEventListener('keydown', (e) => {
    const target = e.target;
    if (target.getAttribute('role') !== 'tab') return;

    let index = Array.prototype.indexOf.call(tabs, target);
    let dir = 0;

    if (e.key === 'ArrowLeft') {
      dir = -1;
    } else if (e.key === 'ArrowRight') {
      dir = 1;
    } else if (e.key === 'Home') {
      dir = null;
      index = 0;
    } else if (e.key === 'End') {
      dir = null;
      index = tabs.length - 1;
    }

    if (dir !== 0) {
      e.preventDefault();
      if (dir !== null) {
        index = index + dir;
      }
      
      // Wrap around
      if (index < 0) index = tabs.length - 1;
      if (index >= tabs.length) index = 0;

      switchTab(tabs[index]);
    }
  });

  // Add click logic
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      switchTab(e.currentTarget);
    });
  });

  function switchTab(newTab) {
    // Deactivate all
    tabs.forEach(t => {
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });

    panels.forEach(p => {
      p.setAttribute('hidden', 'true');
    });

    // Activate new
    newTab.setAttribute('aria-selected', 'true');
    newTab.removeAttribute('tabindex');
    newTab.focus();

    const panelId = newTab.getAttribute('aria-controls');
    document.getElementById(panelId).removeAttribute('hidden');
  }
}

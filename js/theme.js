const Theme = (() => {
  const STORAGE_KEY = 'chatInterface.theme.v1';

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      console.error('Theme: failed to persist state.', err);
    }
  }

  function getPreferredTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme, themeBtn, themeLabel) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeBtn) {
      themeBtn.setAttribute('aria-pressed', theme === 'dark');
    }
    if (themeLabel) {
      themeLabel.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
    }
  }

  function toggleTheme(themeBtn, themeLabel) {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, themeBtn, themeLabel);
    saveTheme(next);
  }

  function init() {
    const themeBtn = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');

    if (!themeBtn || !themeLabel) {
      return;
    }

    const storedTheme = getStoredTheme();
    const theme = storedTheme || getPreferredTheme();
    applyTheme(theme, themeBtn, themeLabel);

    themeBtn.addEventListener('click', () => toggleTheme(themeBtn, themeLabel));
  }

  return { init };
})();

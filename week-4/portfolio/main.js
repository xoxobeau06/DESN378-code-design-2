const themeGroup = document.querySelector('.theme-toggle');
const themeButtons = document.querySelectorAll('[data-set-theme]');

const THEME_MODE_KEY = 'theme-mode'; // 'light' | 'dark' | 'system'

// Helper: get OS preference
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Apply theme from a MODE
function applyThemeMode(mode) {
  const themeToApply = (mode === 'system') ? getSystemTheme() : mode;

  // This drives your CSS selectors like html[data-theme="dark"]
  document.documentElement.dataset.theme = themeToApply;

  // Optional: lets you style the active button if you want
  if (themeGroup) {
    themeGroup.dataset.activeMode = mode;
  }
}

// On page load: saved mode → default to system
const savedMode = localStorage.getItem(THEME_MODE_KEY) || 'system';
applyThemeMode(savedMode);

// On click: save mode + apply
themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.setTheme; // light/dark/system
    localStorage.setItem(THEME_MODE_KEY, mode);
    applyThemeMode(mode);
  });
});

// If in system mode, follow OS changes live (stretch goal)
const media = window.matchMedia('(prefers-color-scheme: dark)');
media.addEventListener('change', () => {
  const mode = localStorage.getItem(THEME_MODE_KEY) || 'system';
  if (mode === 'system') {
    applyThemeMode('system');
  }
});

const toggleBtn = document.querySelector('.theme-toggle');
const THEME_KEY = 'theme';

// Helper: apply theme + sync button state
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  // Only update button if it exists
  if (toggleBtn) {
    const isDark = theme === 'dark';
    toggleBtn.setAttribute('aria-pressed', String(isDark));
    toggleBtn.textContent = isDark ? 'Light mode' : 'Dark mode';
  }
}

// 1️⃣ On page load: user choice → system preference → default
const savedTheme = localStorage.getItem(THEME_KEY);

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(systemPrefersDark ? 'dark' : 'light');
}

// 2️⃣ On toggle click: switch + save
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme;

    // Ternary: if current theme is dark, switch to light; otherwise switch to dark
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });
}

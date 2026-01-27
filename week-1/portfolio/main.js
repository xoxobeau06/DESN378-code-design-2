const toggleBtn = document.querySelector('.theme-toggle');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    
    if (isDark) {
      document.body.classList.remove('light');
      toggleBtn.textContent = 'Light mode';
    } else {
      document.body.classList.add('light');
      toggleBtn.textContent = 'Dark mode';
    }
    
    toggleBtn.setAttribute('aria-pressed', String(isDark));
  });
}

/* ============================================
   Theme Dropdown (Light / Dark / System)
   - Stores: "light" | "dark" | "system"
   - Applies: html[data-theme="light" | "dark"]
   - System delegates to OS preference
   - Dropdown opens/closes + keyboard accessible
   ============================================ */

const THEME_MODE_KEY = "theme-mode"; // 'light' | 'dark' | 'system'
const root = document.documentElement;

// OS theme query
const media = window.matchMedia("(prefers-color-scheme: dark)");

// Dropdown elements
const dropdown = document.querySelector("[data-theme-dropdown]");
const trigger = dropdown?.querySelector(".theme-trigger");
const menu = dropdown?.querySelector(".theme-menu");
const items = dropdown?.querySelectorAll('[role="menuitem"][data-set-theme]');
const triggerIcon = dropdown?.querySelector(".theme-trigger-icon");

// ---- Theme helpers ----
function getSystemTheme() {
  return media.matches ? "dark" : "light";
}

/**
 * System is not a theme — it's delegation to OS.
 * We store the MODE (light/dark/system),
 * and apply either light/dark to data-theme.
 */
function applyThemeMode(mode) {
  const themeToApply = mode === "system" ? getSystemTheme() : mode;

  // This drives selectors like: html[data-theme="dark"]
  root.setAttribute("data-theme", themeToApply);

  // Optional hook for styling UI based on the *mode*
  root.setAttribute("data-theme-mode", mode);

  updateActiveUI(mode);
  updateTriggerIcon(mode);
}

function saveMode(mode) {
  localStorage.setItem(THEME_MODE_KEY, mode);
}

function loadMode() {
  return localStorage.getItem(THEME_MODE_KEY) || "system";
}

// ---- UI updates ----
function updateActiveUI(mode) {
  if (!items) return;

  items.forEach((item) => {
    const isActive = item.dataset.setTheme === mode;
    item.setAttribute("aria-checked", isActive ? "true" : "false");
  });
}

function updateTriggerIcon(mode) {
  // Clone the active menu SVG into the trigger for a "current selection" icon
  if (!dropdown || !triggerIcon) return;

  const activeSvg = dropdown.querySelector(
    `[data-set-theme="${mode}"] .menu-icon svg`
  );

  if (!activeSvg) return;

  triggerIcon.innerHTML = "";
  triggerIcon.appendChild(activeSvg.cloneNode(true));
}

// ---- Dropdown open/close ----
function openMenu() {
  if (!menu || !trigger) return;

  menu.hidden = false;
  trigger.setAttribute("aria-expanded", "true");

  // Focus the active item for keyboard flow
  const mode = loadMode();
  const activeItem = dropdown.querySelector(`[data-set-theme="${mode}"]`);
  activeItem?.focus?.();
}

function closeMenu() {
  if (!menu || !trigger) return;

  menu.hidden = true;
  trigger.setAttribute("aria-expanded", "false");
  trigger.focus();
}

function toggleMenu() {
  if (!menu) return;
  menu.hidden ? openMenu() : closeMenu();
}

// ---- Events ----

// Trigger click
trigger?.addEventListener("click", toggleMenu);

// Menu item click (IMPORTANT: uses data-set-theme)
items?.forEach((item) => {
  item.addEventListener("click", () => {
    const mode = item.dataset.setTheme; // light/dark/system
    saveMode(mode);
    applyThemeMode(mode);
    closeMenu();
  });
});

// Close dropdown on outside click
document.addEventListener("click", (e) => {
  if (!dropdown || !menu) return;
  if (!dropdown.contains(e.target) && !menu.hidden) closeMenu();
});

// Keyboard on trigger
trigger?.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
    e.preventDefault();
    openMenu();
  }
});

// Keyboard inside menu (stretch goal)
menu?.addEventListener("keydown", (e) => {
  const focusable = Array.from(items || []);
  const currentIndex = focusable.indexOf(document.activeElement);

  if (e.key === "Escape") {
    e.preventDefault();
    closeMenu();
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    const next = focusable[(currentIndex + 1) % focusable.length];
    next?.focus();
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    const prev = focusable[(currentIndex - 1 + focusable.length) % focusable.length];
    prev?.focus();
  }

  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    document.activeElement?.click();
  }
});

// Live update when OS theme changes (ONLY if mode === system)
media.addEventListener("change", () => {
  if (loadMode() === "system") applyThemeMode("system");
});

// ---- Init on page load ----
applyThemeMode(loadMode());
// If the OS theme changes while the page is open,
// update the site ONLY when the user chose "system"
media.addEventListener("change", () => {
  if (loadMode() === "system") {
    applyThemeMode("system");
  }
});


/**
 * "System" is not a theme.
 * It means: delegate theme choice to the operating system.
 *
 * We store "system" in localStorage,
 * then resolve it to "light" or "dark" using matchMedia().
 */
function applyThemeMode(mode) {
  const themeToApply = mode === "system"
    ? getSystemTheme()
    : mode;

  document.documentElement.setAttribute("data-theme", themeToApply);
}


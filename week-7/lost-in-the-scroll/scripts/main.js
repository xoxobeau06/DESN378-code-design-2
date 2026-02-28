// ----- GSAP Setup -----
if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  // (Optional) turn on markers while building, then set to false
  const DEBUG_MARKERS = false;

  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    ScrollTrigger.defaults({ markers: false });
  } else {
    ScrollTrigger.defaults({ markers: DEBUG_MARKERS });
  }
}
const root = document.documentElement;
const btn = document.getElementById("themeToggle");

const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);

btn?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
const cardBtn = document.getElementById("tapCard");
const stateEl = document.getElementById("tapState");

if (cardBtn) {
  cardBtn.addEventListener("click", () => {
    const isTapped = cardBtn.classList.toggle("is-tapped");
    cardBtn.setAttribute("aria-pressed", String(isTapped));

    if (stateEl) {
      stateEl.textContent = isTapped ? "tapped" : "untapped";
    }
  });
}
// --- localStorage: Archive Remembers ---
const STORAGE_KEY = "archiveScrolls";

const memoryList = document.getElementById("memoryList");
const clearBtn = document.getElementById("clearMemory");
const deckButtons = document.querySelectorAll(".scroll-card");

function loadMemory() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  return Array.isArray(saved) ? saved : [];
}

function saveMemory(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function renderMemory() {
  if (!memoryList) return;

  const items = loadMemory();
  memoryList.innerHTML = "";

  if (items.length === 0) {
    memoryList.innerHTML = `<p class="micro" style="color: var(--text-muted);">Nothing saved yet.</p>`;
    return;
  }

  items.forEach((name) => {
    const el = document.createElement("div");
    el.className = "memory-item";
    el.innerHTML = `
      <div class="memory-item__name">${name}</div>
      <div class="memory-item__meta">Saved in archive</div>
    `;
    memoryList.appendChild(el);
  });
}

deckButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-scroll");
    if (!name) return;

    const items = loadMemory();
    if (!items.includes(name)) items.push(name);
    saveMemory(items);
    renderMemory();
  });
});

clearBtn?.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  renderMemory();
});

renderMemory();
if (window.gsap) {
  gsap.from(".hero__content", {
    opacity: 0,
    y: 16,
    duration: 1.0,
    ease: "power2.out"
  });
}
if (window.gsap) {
  const titles = [
    ".headline",
    ".chapter-title",
    ".grimoire__title",
    ".fork__title",
    ".energy__title",
    ".schools__title",
    ".archive__title",
    ".closing__title"
  ].join(",");

  gsap.utils.toArray(titles).forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 18,
      duration: 0.7,
      ease: "power2.out"
    });
  });
}
if (window.gsap) {
  const panel = document.querySelector(".energy__panel");
  if (panel) {
    gsap.from(panel, {
      scrollTrigger: {
        trigger: panel,
        start: "top 75%"
      },
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: "power2.out"
    });
  }
}
if (window.gsap && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.to(".hero", {
    backgroundPosition: "50% 65%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
}
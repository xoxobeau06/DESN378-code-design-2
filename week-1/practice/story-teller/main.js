// =========
// Elements
// =========
const imageEl = document.querySelector('#storyImage');
const titleEl = document.querySelector('#storyTitle');
const captionEl = document.querySelector('#storyCaption');
const dots = document.querySelectorAll('.dot');

const nameInput = document.querySelector('#nameInput');
const saveNameBtn = document.querySelector('#saveNameBtn');
const resetBtn = document.querySelector('#resetBtn');
const nameStatus = document.querySelector('#nameStatus');

// =========
// Story Data (edit these for MLK or Valentine theme)
// =========
const steps = [
  {
    title: "Click to begin",
    caption: "Some nights arrive wrapped in light, waiting to be remembered.",
    alt: "Theme park lights glowing at dusk",
    image: "assets/images/image-1.jpg",
  },
  {
    title: "Step 1: Through the gates",
    caption: "The gates open. Music hums. The air sparkles with maybe.",
    alt: "Theme park entrance at night with lights",
    image: "assets/images/image-2.jpg",
  },
  {
    title: "Step 2: A sweeter crowd",
    caption: "Hand in hand, the park breathes softer — laughter drifting like confetti.",
    alt: "Couples walking through a theme park at night",
    image: "assets/images/image-3.jpg",
  },
  {
    title: "Step 3: A quiet in between",
    caption: "Away from the noise, a glance says everything words cannot.",
    alt: "Couple under string lights at night",
    image: "assets/images/image-4.jpg",
  },
  {
    title: "Step 4: When the sky listens",
    caption: "Fireworks bloom above us, sealing the night in light and promise.",
    alt: "Fireworks over a theme park at night",
    image: "assets/images/image-5.jpg",
  },
];

// =========
// State (with localStorage stretch goal)
// =========
const STORAGE_KEY_STEP = "storyTellerStep";
const STORAGE_KEY_NAME = "storyTellerName";

let currentStep = 0;
let userName = "";

// =========
// Helpers
// =========
function loadSavedState() {
  const savedStep = localStorage.getItem(STORAGE_KEY_STEP);
  const savedName = localStorage.getItem(STORAGE_KEY_NAME);

  if (savedStep !== null) {
    const parsed = Number(savedStep);
    if (!Number.isNaN(parsed)) currentStep = clamp(parsed, 0, steps.length - 1);
  }

  if (savedName !== null) {
    userName = savedName;
    nameInput.value = userName;
    if (userName.trim()) nameStatus.textContent = `Saved name: ${userName}`;
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function personalize(text) {
  const clean = userName.trim();
  if (!clean) return text;
  // simple personalization: insert name at the front sometimes
  return text.replace("You", `${clean}, you`);
}

function renderStep(stepIndex) {
  const step = steps[stepIndex];

  titleEl.textContent = personalize(step.title);
  captionEl.textContent = personalize(step.caption);

  imageEl.src = step.image;
  imageEl.alt = step.alt;

  updateProgress(stepIndex);

  // small visual effect (classList.toggle requirement)
  imageEl.classList.add('pop');
  setTimeout(() => imageEl.classList.remove('pop'), 180);

  // save progress (localStorage stretch goal)
  localStorage.setItem(STORAGE_KEY_STEP, String(stepIndex));
}

function updateProgress(stepIndex) {
  dots.forEach((dot, i) => {
    if (i <= stepIndex) dot.classList.add('active');
    else dot.classList.remove('active');
  });
}

function nextStep() {
  // advance but stop at last step
  if (currentStep < steps.length - 1) {
    currentStep += 1;
    renderStep(currentStep);
  } else {
    // fun "ending" behavior: loop back to start on next click
    currentStep = 0;
    renderStep(currentStep);
  }
}

function saveName() {
  userName = nameInput.value;
  localStorage.setItem(STORAGE_KEY_NAME, userName);

  if (userName.trim()) {
    nameStatus.textContent = `Saved! Hi, ${userName}.`;
  } else {
    nameStatus.textContent = "Name cleared.";
  }

  // re-render so text updates with name
  renderStep(currentStep);
}

function resetStory() {
  currentStep = 0;
  localStorage.setItem(STORAGE_KEY_STEP, "0");
  renderStep(currentStep);
}

// =========
// Events (addEventListener requirement)
// =========
imageEl.addEventListener('click', nextStep);
saveNameBtn.addEventListener('click', saveName);
resetBtn.addEventListener('click', resetStory);

// =========
// Init
// =========
loadSavedState();
renderStep(currentStep);

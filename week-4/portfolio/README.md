# Project 1: Signal & State — Designing for Preference

This project establishes the foundational design system for my portfolio.  
The site adapts to user preferences by responding to theme choices, system settings, and accessibility needs, using a token-based CSS architecture.

The goal of this project was not just to add a theme toggle, but to build a reusable system that will support all future portfolio projects this quarter.

---

## Design Token System

All visual decisions are centralized in `variables.css` using CSS custom properties (design tokens).

### Color Tokens
- Semantic tokens for surfaces, text, accents, and borders
- Light mode defaults defined in `:root`
- Dark mode overrides defined using `[data-theme="dark"]`
- Tokens are used throughout the site instead of hardcoded color values

### Typography Tokens
- Font families:
  - Display: Petit Formal Script
  - Body: Zilla Slab
- Multiple font size tokens derived from my Figma text styles
- Line-height tokens for consistent vertical rhythm
- Typography tokens are applied in `styles.css` for headings, body text, and UI elements

### Spacing Tokens
- A six-step spacing scale (`xs` → `2xl`)
- Spacing tokens are defined in `variables.css`
- Select spacing values are used in layout and components to demonstrate system usage

---

## Theme & Preference System

The site supports three theme modes:

- **Light**
- **Dark**
- **System** (follows the user’s operating system preference)

### Implementation Details
- Theme state is applied using a `data-theme` attribute on the `<html>` element
- CSS responds to theme changes through token overrides
- User-selected theme mode is saved to `localStorage`
- On first visit, the site defaults to the system’s preferred color scheme
- When System mode is active, the site updates if the OS theme changes

---

## Accessibility Considerations

- Theme buttons are keyboard accessible
- Interactive controls include `aria-label` attributes
- Focus states are visible
- A `prefers-reduced-motion` media query is implemented to reduce or remove decorative animations while preserving functional motion

---


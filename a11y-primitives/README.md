# A11y Primitives

A brutally simple, zero-dependency documentation site demonstrating accessible web patterns built from scratch.

**Concept:** To prove a deep understanding of the DOM, semantic HTML, and the WAI-ARIA authoring practices. In a world of heavily abstracted UI frameworks, this project strips everything away to show how things actually work at the browser level.

## Tech Stack
- Vanilla HTML5
- Vanilla CSS3 (Custom Properties, Flexbox)
- Vanilla JavaScript (ES Modules)
- Vite (Used *only* as a fast local development server and bundler, not for a framework)

## Project Structure
- `index.html` - Semantic markup holding the un-styled structure.
- `style.css` - Custom styling handling layouts and focus states (no Tailwind here, to show raw CSS skills).
- `/src/tabs.js` - Logic for arrow-key navigation and ARIA state toggling.
- `/src/modal.js` - Logic for focus-trapping (the 'roving tabindex' pattern) and returning focus to the trigger.

## How to Run Locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`
4. Put away your mouse and use the `Tab` and arrow keys to navigate!

## Key Features
- **Keyboard-Navigable Tabs:** Follows the strict W3C pattern. `Tab` focuses the tablist, left/right arrows switch tabs, and `Tab` again drops into the panel.
- **Focus-Trapped Modal:** Prevents keyboard users from tabbing out of an open dialog into the hidden document body. Correctly returns focus to the trigger button on close.
- **High Contrast Focus Rings:** Custom `focus-visible` styling ensures focus is always obvious.

## Screenshots
<!-- screenshot: A shot of the documentation site showing the tabs component with a clear blue focus ring on the active tab. -->
<!-- screenshot: A shot of the modal open, demonstrating the dark overlay and the focused input field. -->

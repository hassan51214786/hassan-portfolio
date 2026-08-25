# Architectural & Design Decisions

### 1. Zero Frameworks
I explicitly chose not to use React or Vue here. Building a focus-trapped modal or a roving-tabindex tablist is actually quite difficult in vanilla JS because you have to imperatively manage the DOM and attach/detach event listeners manually. Doing it this way proves a foundational understanding of the web platform that isn't masked by React's synthetic event system or `useEffect` hooks.

### 2. Using `hidden` Attribute instead of `display: none` classes
In `tabs.js` and `modal.js`, I toggle the HTML5 `hidden` attribute rather than adding/removing a `.d-none` CSS class. The `hidden` attribute is semantically understood by screen readers to mean "this content is not relevant right now," whereas CSS manipulation can sometimes be parsed incorrectly depending on the screen reader's verbosity settings.

### 3. Explicit `focus-visible` styling
Browsers have gotten better at focus rings, but relying on default browser styling often leads to inconsistent or low-contrast outlines. I globally overrode `*:focus-visible` with a custom CSS variable (`--focus-ring`) that provides a thick, high-contrast ring that only appears for keyboard users (not mouse clickers, which is why `focus-visible` is used over `:focus`).

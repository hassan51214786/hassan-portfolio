# Future Improvements

- [ ] **Accordion Component:** Add a custom accordion pattern that uses `aria-expanded` and `aria-controls`.
- [ ] **Custom Select Dropdown:** Build the holy grail of accessible UI—a custom styled `<select>` element (a combobox pattern) that works with the keyboard and screen readers (handling type-ahead, up/down arrows, and enter/escape).
- [ ] **Automated Testing:** Integrate `axe-core` via Playwright to run automated accessibility assertions against the components in a CI pipeline.
- [ ] **Reduced Motion Support:** Add a `@media (prefers-reduced-motion: reduce)` block to ensure that if I add any fade/slide animations to the modal opening, they are disabled for users who prefer no animation.

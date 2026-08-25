# Future Improvements

- [ ] **WebSocket Integration:** Replace the static `mockData.js` with a generic WebSocket hook (`useWebsocket`) to stream in live latency and traffic data, updating the Recharts payload in real-time.
- [ ] **Time-Range Selector:** Add a toggle in the UI (e.g., "1H", "24H", "7D") that filters the dataset, demonstrating complex state management and chart re-rendering.
- [ ] **Accessibility Audit:** Ensure the Recharts SVG elements have proper `aria-labels` and that the neon colors strictly meet WCAG AAA contrast ratios (currently they are high-contrast, but the pure cyan/magenta might need slight tweaking against the #121212 background for strict compliance).
- [ ] **Virtualize the System Log:** If the system log grows beyond 100 items, implement `react-window` to virtualize the list rendering and maintain 60fps scrolling.

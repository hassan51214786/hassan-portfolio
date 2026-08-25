# SynthOS.Admin

A high-contrast, cyberpunk-themed system monitoring dashboard visualizing generated time-series data. 

**Concept:** To demonstrate the ability to build data-dense, complex UI layouts that require careful attention to typography, spacing, and charting libraries, while committing fully to a specific aesthetic direction (dark mode/neon) without sacrificing accessibility and structure.

## Tech Stack
- React 18
- Vite
- Recharts (for lightweight, customizable SVG charts)
- CSS Modules (for scoped, predictable styling without polluting global scope)
- Lucide React (for crisp, scalable iconography)

## Project Structure
- `/src/components` - Isolated, reusable UI pieces (MetricsCard, NetworkGraph, SystemLog).
- `/src/utils` - Mock data generation keeping the component files clean.
- `/src/App.jsx` - The main layout orchestrator using CSS Grid.

## How to Run Locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

## Key Features
- **CSS Grid Layout:** A responsive, two-column layout that gracefully collapses to a single column on smaller viewports.
- **Data Visualization:** Integration of `recharts` with custom tooltips, axes, and gradients to match the harsh, neon aesthetic.
- **Component Isolation:** Use of CSS modules ensures that the styling for the `SystemLog` doesn't bleed into the `MetricsCard`.

## Screenshots
<!-- screenshot: A full-screen capture of the dashboard showing the charts and sidebar side-by-side on desktop. -->
<!-- screenshot: A mobile-width capture showing the stacked layout. -->

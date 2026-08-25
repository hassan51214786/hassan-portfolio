# Architectural & Design Decisions

### 1. CSS Modules over Tailwind
While Tailwind is excellent for rapid prototyping, I chose CSS Modules for this specific project. The cyberpunk aesthetic requires very specific, customized styling (glow effects, specific border transitions, strict color variables). CSS Modules allowed me to write clean, scoped, traditional CSS while maintaining a `var(--theme)` driven approach in `index.css` without cluttering the JSX with complex utility strings.

### 2. Disabling Recharts Animations on Mount
In `NetworkGraph.jsx`, I explicitly set `isAnimationActive={false}` on the `<Area />` chart. While Recharts' default animations are nice, they can cause hydration mismatches or layout jitter on initial load when dealing with static/mock data. A snappy, immediate render feels more aligned with a "mission-critical" admin dashboard.

### 3. CSS Grid for Main Layout
I used CSS Grid (`grid-template-areas`) in `App.module.css` instead of Flexbox. Grid is much better suited for macro-layouts (like a sidebar + main content area). It made the media query for mobile responsiveness trivial—I only had to redefine the `grid-template-areas` string rather than manually adjusting flex-directions and widths on individual containers.

### 4. Memoizing Mock Data
I wrapped the `timeSeriesData` import in a `useMemo` hook inside the chart components. Even though the data is currently static, this pattern ensures that if the parent `App` component re-renders, the charts won't be forced to undergo an expensive re-render due to receiving a "new" array reference. It sets up the component to be safely connected to a real WebSocket or context provider later.

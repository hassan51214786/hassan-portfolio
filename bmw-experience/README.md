# M-Series WebGL Showcase

A scroll-driven 3D car showcase mimicking high-end automotive and tech product pages (BMW, Apple).

## Setup
1. `npm install`
2. `npm run dev`
3. Navigate to `localhost:5180` (or whatever port Vite assigns).

## Tech Stack
* **React + Vite**: Fast component-based architecture and instant HMR.
* **Three.js & React Three Fiber**: Declarative 3D scene graph rendering a procedural low-poly M-Series car.
* **GSAP & ScrollTrigger**: Master timeline synced to the native browser scrollbar to manipulate the 3D camera and meshes.
* **Tailwind CSS v3**: Minimal, utility-first styling for the UI overlay.

## Scroll-Camera Architecture
Instead of hooking into a `onScroll` event listener and triggering React state updates (which causes massive render thrashing), this project leverages GSAP's `ScrollTrigger`.

The HTML structure contains a single long scrolling container (`OverlayUI`) that spans `600vh`. The 3D Canvas sits behind it, fixed to the viewport.
Inside the Canvas, a GSAP timeline maps the `0%` to `100%` scroll progress of the container directly to the Three.js camera position and the car's geometric rotations. These mutations happen imperatively to the Three.js objects (via `useRef`), bypassing React's reconciliation cycle entirely for buttery-smooth 60fps animations.

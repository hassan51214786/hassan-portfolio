# Orb

An interactive, physics-based particle system built on the HTML5 Canvas API.

**Concept:** To demonstrate creative coding, mathematics in JavaScript, and performance profiling. It breaks out of the standard "DOM element" box to show I can write performant, low-level render loops.

## Tech Stack
- Vanilla JavaScript
- HTML5 Canvas API
- RequestAnimationFrame

## Project Structure
- `/src/Particle.js` - Class representing an individual node, handling its own physics (velocity, friction, easing) and draw calls.
- `/src/Simulation.js` - The master controller orchestrating the render loop, mouse tracking, and the expensive line-connection algorithm.
- `main.js` - Simple bootstrap.

## How to Run Locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`
4. Move your mouse around to repel the particles. Click and hold to trigger an "explosion" force.

## Key Features
- **Custom Physics Engine:** Particles possess mass (density), friction, and easing calculations to smoothly return to their home coordinates after being disturbed by the mouse.
- **Dynamic Density:** The number of particles spawned is dynamically calculated based on the window's inner dimensions to ensure the canvas doesn't lag on massive 4k monitors or look sparse on mobile devices.
- **Connection Algorithm:** Calculates the distance between all particles in proximity and dynamically draws intersecting lines based on how close they are.

## Screenshots
<!-- screenshot: A still image of the web floating in its resting state. -->
<!-- screenshot: A GIF/video showing the mouse sweeping through the particles and causing them to scatter. -->

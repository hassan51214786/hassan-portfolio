# Architectural & Design Decisions

### 1. Raw Canvas API over Three.js/PixiJS
I could have used a library like PixiJS for a faster WebGL pipeline, but writing the 2D Context API from scratch demonstrates a deeper understanding of the rendering pipeline. It forces me to manually handle the `requestAnimationFrame` loop and understand *why* drawing 1,000 circles is expensive in the CPU.

### 2. O(N²) Collision Optimization
The line connection algorithm requires comparing every particle to every other particle. To prevent this from completely tanking the framerate, I optimized the loop:
- The inner loop `for (let b = a; ...)` starts at `a`, preventing redundant reverse checks (if A is checked against B, we don't need to check B against A).
- I omitted `Math.sqrt()` when calculating distance. I simply check the squared distance (`dx*dx + dy*dy`) against my squared threshold (`7000`), saving thousands of expensive square root operations per frame.

### 3. Separation of Concerns in Classes
Instead of dumping 200 lines of procedural code into one file, I separated the `Particle` entity from the `Simulation` orchestrator. This makes it trivially easy to inherit from `Particle` later if I want to introduce a `GravityParticle` or `RepelParticle` without touching the main render loop.

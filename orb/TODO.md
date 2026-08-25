# Future Improvements

- [ ] **Web Worker Offloading:** Move the O(N²) connection algorithm (the math part) off the main thread into a Web Worker so the main thread only handles the `.draw()` calls, preventing GC pauses.
- [ ] **Quadtree Spatial Partitioning:** Implement a QuadTree data structure to divide the canvas into regions. Instead of checking every particle against every other particle, particles would only check their immediate QuadTree neighbors.
- [ ] **Color Interpolation:** Make the particles and lines shift color based on their velocity (e.g., fast moving particles glow red, slow particles cool down to blue).

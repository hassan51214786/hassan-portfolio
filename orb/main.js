import { Simulation } from './src/Simulation.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('simulation-canvas');
  const sim = new Simulation(canvas);
  sim.animate();
});

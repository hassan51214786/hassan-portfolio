import { Particle } from './Particle.js';

export class Simulation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency
    this.particles = [];
    this.drawLines = true;
    
    this.mouse = {
      x: null,
      y: null,
      radius: 150,
      isPressed: false
    };

    this.init();
    this.bindEvents();
  }

  init() {
    this.resize();
    this.createParticles();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    // Calculate number of particles based on screen size to maintain performance
    let numberOfParticles = (this.canvas.width * this.canvas.height) / 9000;
    
    for (let i = 0; i < numberOfParticles; i++) {
      let x = Math.random() * this.canvas.width;
      let y = Math.random() * this.canvas.height;
      this.particles.push(new Particle(x, y, this.canvas.width, this.canvas.height));
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
      this.mouse.x = undefined;
      this.mouse.y = undefined;
    });

    window.addEventListener('mousedown', () => {
      this.mouse.isPressed = true;
    });

    window.addEventListener('mouseup', () => {
      this.mouse.isPressed = false;
    });

    const toggle = document.getElementById('toggle-lines');
    if (toggle) {
      toggle.addEventListener('change', (e) => {
        this.drawLines = e.target.checked;
      });
    }
  }

  connect() {
    let opacityValue = 1;
    for (let a = 0; a < this.particles.length; a++) {
      for (let b = a; b < this.particles.length; b++) {
        let dx = this.particles[a].x - this.particles[b].x;
        let dy = this.particles[a].y - this.particles[b].y;
        let distance = (dx * dx) + (dy * dy); // avoid Math.sqrt for perf

        if (distance < 7000) {
          opacityValue = 1 - (distance / 7000);
          this.ctx.strokeStyle = `rgba(100, 200, 255, ${opacityValue * 0.25})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
          this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
          this.ctx.stroke();
        }
      }
    }
  }

  animate() {
    // Fill with slight opacity for trailing effect, or solid for clear background
    this.ctx.fillStyle = '#0a0a0a'; 
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update(this.mouse);
      this.particles[i].draw(this.ctx);
    }

    if (this.drawLines) {
      this.connect();
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}

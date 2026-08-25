export class Particle {
  constructor(x, y, canvasWidth, canvasHeight) {
    this.x = x;
    this.y = y;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.size = Math.random() * 2 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 30) + 1;
    this.vx = 0;
    this.vy = 0;
    this.friction = 0.92;
    this.ease = 0.05;
  }

  draw(ctx) {
    // Calculate speed based on velocity vectors
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    // Map speed (typically 0 to 5) to a color intensity (0 to 1)
    const intensity = Math.min(speed / 3, 1);
    
    // Interpolate from deep blue to bright cyan based on speed
    const r = Math.floor(10 + intensity * 90);
    const g = Math.floor(10 + intensity * 240);
    const b = Math.floor(150 + intensity * 105);
    
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse) {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    // Repel from mouse
    if (distance < mouse.radius) {
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      
      // Calculate force based on how close mouse is (closer = stronger)
      let force = (mouse.radius - distance) / mouse.radius;
      let directionX = forceDirectionX * force * this.density;
      let directionY = forceDirectionY * force * this.density;

      // Apply explosive force if clicking
      let multiplier = mouse.isPressed ? 5 : 1;
      
      this.vx -= directionX * multiplier;
      this.vy -= directionY * multiplier;
    }

    // Apply friction and return to base
    this.vx *= this.friction;
    this.vy *= this.friction;
    
    let returnDx = this.baseX - this.x;
    let returnDy = this.baseY - this.y;
    
    this.vx += returnDx * this.ease;
    this.vy += returnDy * this.ease;

    this.x += this.vx;
    this.y += this.vy;
  }
}

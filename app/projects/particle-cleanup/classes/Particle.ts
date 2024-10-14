interface Position {
  x: number;
  y: number;
}

interface Vertex {
  x: number;
  y: number;
}

export interface Mouse {
  x: number;
  y: number;
  radius: number;
}

export class Particle {
  position: Position;
  size: number;
  color: string;
  weight: number;
  direction: Position;
  vertices: Vertex[];
  inCanvas: boolean;
  speedFactor: number;

  constructor(
    x: number,
    y: number,
    size: number,
    color: string,
    weight: number,
    speedFactor: number
  ) {
    this.position = { x, y };
    this.size = size;
    this.color = color;
    this.weight = weight;
    this.direction = { x: 0, y: 0 };
    this.vertices = this.generateVertices();
    this.inCanvas = true;
    this.speedFactor = speedFactor;
  }

  generateVertices(): Vertex[] {
    const vertices: Vertex[] = [];
    const numVertices = this.getRandomInt(3, 8);
    for (let i = 0; i < numVertices; i++) {
      const angle = (i / numVertices) * Math.PI * 2;
      const radius = this.size * (Math.random() * 0.5 + 0.5);
      vertices.push(this.getVertex(angle, radius));
    }
    return vertices;
  }

  getVertex(angle: number, radius: number): Vertex {
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.position.x + this.vertices[0].x, this.position.y + this.vertices[0].y);
    for (let i = 1; i < this.vertices.length; i++) {
      ctx.lineTo(this.position.x + this.vertices[i].x, this.position.y + this.vertices[i].y);
    }
    ctx.closePath();
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D, mouse: Mouse, canvas: HTMLCanvasElement): void {
    this.updateDirection(mouse);
    this.updatePosition();
    this.checkCanvasBounds(canvas);
    this.draw(ctx);
  }

  updateDirection(mouse: Mouse): void {
    const { x: mouseX, y: mouseY, radius: mouseRadius } = mouse;
    const dx = mouseX - this.position.x;
    const dy = mouseY - this.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseRadius) {
      this.applyMouseEffect(dx, dy, distance, mouseRadius);
    } else {
      this.dampenDirection();
    }
  }

  applyMouseEffect(dx: number, dy: number, distance: number, mouseRadius: number): void {
    const adjustedDistance = Math.max(distance, 50);
    const forceDirection = { x: -dx / adjustedDistance, y: -dy / adjustedDistance };
    const force = (mouseRadius - adjustedDistance) / mouseRadius + 0.5;
    const magnitude = force * this.weight * 5 * this.speedFactor;
    this.direction.x = forceDirection.x * magnitude;
    this.direction.y = forceDirection.y * magnitude;
  }

  dampenDirection(): void {
    this.direction.x *= 0.95 * this.speedFactor;
    this.direction.y *= 0.95 * this.speedFactor;
  }

  updatePosition(): void {
    this.position.x += this.direction.x;
    this.position.y += this.direction.y;
  }

  checkCanvasBounds(canvas: HTMLCanvasElement): void {
    const { width, height } = canvas;
    if (this.position.x < -7.4 || this.position.x > width + 7.4 ||
        this.position.y < -7.4 || this.position.y > height + 7.4) {
      this.inCanvas = false;
    }
  }
}
interface Point {
  x: number
  y: number
}

export interface Mouse extends Point {
  radius: number
}

export class Particle {
  position: Point
  size: number
  color: string
  weight: number
  direction: Point
  vertices: Point[]
  inCanvas: boolean
  speedFactor: number

  readonly canvasPadding = 7.4

  constructor(
    x: number,
    y: number,
    size: number,
    color: string,
    weight: number,
    speedFactor: number
  ) {
    this.position = { x, y }
    this.size = size
    this.color = color
    this.weight = weight
    this.direction = { x: 0, y: 0 }
    this.vertices = this.generateVertices()
    this.inCanvas = true
    this.speedFactor = speedFactor
  }

  generateVertices(): Point[] {
    const numVertices = this.getRandomInt(3, 8)
    return Array.from({ length: numVertices }, (_, i) => {
      const angle = (i / numVertices) * Math.PI * 2
      const radius = this.size * (0.5 + Math.random() * 0.5)
      return this.getVertex(angle, radius)
    })
  }

  getVertex(angle: number, radius: number): Point {
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    }
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  getAbsoluteVertex(vertex: Point): Point {
    return {
      x: this.position.x + vertex.x,
      y: this.position.y + vertex.y,
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color
    ctx.beginPath()
    const first = this.getAbsoluteVertex(this.vertices[0])
    ctx.moveTo(first.x, first.y)
    for (let i = 1; i < this.vertices.length; i++) {
      const absVertex = this.getAbsoluteVertex(this.vertices[i])
      ctx.lineTo(absVertex.x, absVertex.y)
    }
    ctx.closePath()
    ctx.fill()
  }

  update(
    ctx: CanvasRenderingContext2D,
    mouse: Mouse,
    canvas: HTMLCanvasElement
  ): void {
    this.updateDirection(mouse)
    this.updatePosition()
    this.checkCanvasBounds(canvas)
    this.draw(ctx)
  }

  updateDirection(mouse: Mouse): void {
    const dx = mouse.x - this.position.x
    const dy = mouse.y - this.position.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < mouse.radius) {
      this.applyMouseEffect(dx, dy, distance, mouse.radius)
    } else {
      this.dampenDirection()
    }
  }

  applyMouseEffect(
    dx: number,
    dy: number,
    distance: number,
    mouseRadius: number
  ): void {
    const adjustedDistance = Math.max(distance, 50)
    const forceDirection = {
      x: -dx / adjustedDistance,
      y: -dy / adjustedDistance,
    }
    const force = (mouseRadius - adjustedDistance) / mouseRadius + 0.5
    const magnitude = force * this.weight * 5 * this.speedFactor
    this.direction = {
      x: forceDirection.x * magnitude,
      y: forceDirection.y * magnitude,
    }
  }

  dampenDirection(): void {
    this.direction.x *= 0.95 * this.speedFactor
    this.direction.y *= 0.95 * this.speedFactor
  }

  updatePosition(): void {
    this.position.x += this.direction.x
    this.position.y += this.direction.y
  }

  checkCanvasBounds(canvas: HTMLCanvasElement): void {
    const { width, height } = canvas
    if (
      this.position.x < -this.canvasPadding ||
      this.position.x > width + this.canvasPadding ||
      this.position.y < -this.canvasPadding ||
      this.position.y > height + this.canvasPadding
    ) {
      this.inCanvas = false
    }
  }
}

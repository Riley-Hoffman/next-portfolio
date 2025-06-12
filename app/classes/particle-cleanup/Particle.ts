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
    this.vertices = this.generateStarVertices()
    this.inCanvas = true
    this.speedFactor = speedFactor
  }

  generateStarVertices(): Point[] {
    const numPoints = this.getRandomInt(5, 8)
    const vertices: Point[] = []
    const outerRadius = this.size * 0.8
    const innerRadius = outerRadius * (0.3 + Math.random() * 0.2)
    const noise = 0.1
    const rotation = Math.random() * Math.PI * 2

    for (let i = 0; i < numPoints * 2; i++) {
      const angle = (i / (numPoints * 2)) * Math.PI * 2 + rotation
      const radius = i % 2 === 0 ? outerRadius : innerRadius
      const noiseX = (Math.random() - 0.5) * noise * radius
      const noiseY = (Math.random() - 0.5) * noise * radius
      const vertex = this.getVertex(angle, radius)
      vertices.push({
        x: vertex.x + noiseX,
        y: vertex.y + noiseY,
      })
    }

    return vertices
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

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color
    ctx.beginPath()
    const first = this.getAbsoluteVertex(this.vertices[0])
    ctx.moveTo(first.x, first.y)

    for (let i = 1; i < this.vertices.length; i++) {
      const current = this.getAbsoluteVertex(this.vertices[i])
      const prev = this.getAbsoluteVertex(this.vertices[i - 1])

      const cp1x = prev.x + (current.x - prev.x) * 0.5
      const cp1y = prev.y + (current.y - prev.y) * 0.5

      ctx.quadraticCurveTo(cp1x, cp1y, current.x, current.y)
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
    this.inCanvas =
      this.position.x >= -this.canvasPadding &&
      this.position.x <= width + this.canvasPadding &&
      this.position.y >= -this.canvasPadding &&
      this.position.y <= height + this.canvasPadding
  }

  getAbsoluteVertex(vertex: Point): Point {
    return {
      x: this.position.x + vertex.x,
      y: this.position.y + vertex.y,
    }
  }
}

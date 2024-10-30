import { Particle, Mouse } from "../classes/Particle";

const mockCtx = {
  fillStyle: "",
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  closePath: jest.fn(),
  fill: jest.fn(),
};

const mockCanvas = {
  width: 500,
  height: 500,
} as HTMLCanvasElement;

describe("Particle class", () => {
  let particle: Particle;

  beforeEach(() => {
    particle = new Particle(100, 100, 10, "red", 1, 1);
  });

  test("should initialize particle properties correctly", () => {
    expect(particle.position).toEqual({ x: 100, y: 100 });
    expect(particle.size).toBe(10);
    expect(particle.color).toBe("red");
    expect(particle.weight).toBe(1);
    expect(particle.speedFactor).toBe(1);
    expect(particle.inCanvas).toBe(true);
  });

  test("generateVertices should create the correct number of vertices", () => {
    const vertices = particle.generateVertices();
    expect(vertices.length).toBeGreaterThanOrEqual(3);
    expect(vertices.length).toBeLessThanOrEqual(8);
  });

  test("updatePosition should change the position based on direction", () => {
    particle.direction = { x: 5, y: 5 };
    particle.updatePosition();
    expect(particle.position).toEqual({ x: 105, y: 105 });
  });

  test("updateDirection should adjust direction based on mouse proximity", () => {
    const mockMouse: Mouse = { x: 110, y: 110, radius: 50 };
    particle.updateDirection(mockMouse);
    expect(particle.direction.x).not.toBe(0);
    expect(particle.direction.y).not.toBe(0);
  });

  test("dampenDirection should reduce the direction by 5%", () => {
    particle.direction = { x: 10, y: 10 };
    particle.dampenDirection();
    expect(particle.direction.x).toBeCloseTo(9.5);
    expect(particle.direction.y).toBeCloseTo(9.5);
  });

  test("checkCanvasBounds should set inCanvas to false if the particle is out of bounds", () => {
    particle.position = { x: -10, y: -10 };
    particle.checkCanvasBounds(mockCanvas);
    expect(particle.inCanvas).toBe(false);
  });

  test("draw should correctly call canvas drawing methods", () => {
    particle.draw(mockCtx as unknown as CanvasRenderingContext2D);

    expect(mockCtx.beginPath).toHaveBeenCalled();
    expect(mockCtx.moveTo).toHaveBeenCalledWith(
      particle.position.x + particle.vertices[0].x,
      particle.position.y + particle.vertices[0].y,
    );
    expect(mockCtx.lineTo).toHaveBeenCalled();
    expect(mockCtx.closePath).toHaveBeenCalled();
    expect(mockCtx.fill).toHaveBeenCalled();
  });

  test("applyMouseEffect should adjust the direction based on the mouse distance", () => {
    const dx = 10;
    const dy = 10;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const mouseRadius = 50;

    particle.applyMouseEffect(dx, dy, distance, mouseRadius);
    expect(particle.direction.x).not.toBe(0);
    expect(particle.direction.y).not.toBe(0);
  });

  test("update should call appropriate methods and redraw the particle", () => {
    const mockMouse: Mouse = { x: 110, y: 110, radius: 50 };

    const spyUpdateDirection = jest.spyOn(particle, "updateDirection");
    const spyUpdatePosition = jest.spyOn(particle, "updatePosition");
    const spyCheckCanvasBounds = jest.spyOn(particle, "checkCanvasBounds");
    const spyDraw = jest.spyOn(particle, "draw");

    particle.update(
      mockCtx as unknown as CanvasRenderingContext2D,
      mockMouse,
      mockCanvas,
    );

    expect(spyUpdateDirection).toHaveBeenCalledWith(mockMouse);
    expect(spyUpdatePosition).toHaveBeenCalled();
    expect(spyCheckCanvasBounds).toHaveBeenCalledWith(mockCanvas);
    expect(spyDraw).toHaveBeenCalledWith(mockCtx);
  });
});

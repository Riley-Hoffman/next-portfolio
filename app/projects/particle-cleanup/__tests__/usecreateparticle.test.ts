import { renderHook } from "@testing-library/react"
import { useCreateParticle } from "../hooks/useCreateParticle"
import { Particle } from "../classes/Particle"
import { useGameData } from "../hooks/useGameData"

jest.mock("../classes/Particle", () => ({
  Particle: jest
    .fn()
    .mockImplementation((x, y, size, color, weight, speedFactor) => ({
      x,
      y,
      size,
      color,
      weight,
      speedFactor,
    })),
}))

jest.mock("../hooks/useGameData", () => ({
  useGameData: jest.fn(),
}))

describe("useCreateParticle", () => {
  const mockGameData: {} = {}

  it("should create a particle with random values", () => {
    ;(useGameData as jest.Mock).mockReturnValue([mockGameData, jest.fn()])

    const mockCanvas = { width: 800, height: 600 } as HTMLCanvasElement

    const { result } = renderHook(() => useCreateParticle())

    const particle = result.current(mockCanvas)

    expect(Particle).toHaveBeenCalledWith(
      expect.any(Number), // x position
      expect.any(Number), // y position
      expect.any(Number), // size
      expect.any(String), // color
      expect.any(Number), // weight
      expect.any(Number) // speedFactor
    )
  })

  it("should adjust speedFactor based on mobile vs desktop", () => {
    ;(useGameData as jest.Mock).mockReturnValue([mockGameData, jest.fn()])

    const mockCanvas = { width: 800, height: 600 } as HTMLCanvasElement

    global.innerWidth = 1024
    const { result: desktopResult } = renderHook(() => useCreateParticle())
    const desktopParticle = desktopResult.current(mockCanvas)

    expect(desktopParticle.speedFactor).toBeCloseTo(0.5)

    global.innerWidth = 600
    const { result: mobileResult } = renderHook(() => useCreateParticle())
    const mobileParticle = mobileResult.current(mockCanvas)

    expect(mobileParticle.speedFactor).toBeCloseTo(0.4)
  })

  it("should create a particle with a random color", () => {
    ;(useGameData as jest.Mock).mockReturnValue([mockGameData, jest.fn()])

    const mockCanvas = { width: 800, height: 600 } as HTMLCanvasElement
    const { result } = renderHook(() => useCreateParticle())

    const particle = result.current(mockCanvas)

    expect(["#A8A0D9", "#794E8D", "#ae4971"]).toContain(particle.color)
  })

  it("should create a particle with a size between 10 and 40", () => {
    ;(useGameData as jest.Mock).mockReturnValue([mockGameData, jest.fn()])

    const mockCanvas = { width: 800, height: 600 } as HTMLCanvasElement
    const { result } = renderHook(() => useCreateParticle())

    const particle = result.current(mockCanvas)

    expect(particle.size).toBeGreaterThanOrEqual(10)
    expect(particle.size).toBeLessThanOrEqual(40)
  })
})

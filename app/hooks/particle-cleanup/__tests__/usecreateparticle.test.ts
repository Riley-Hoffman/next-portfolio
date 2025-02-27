import { renderHook } from '@testing-library/react'
import { useCreateParticle } from '../useCreateParticle'
import { Particle } from '@/app/classes/particle-cleanup/Particle'
import { useGameData, GameData } from '../useGameData'

jest.mock('@/app/classes/particle-cleanup/Particle', () => ({
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

jest.mock('../useGameData', () => ({
  useGameData: jest.fn(),
}))

describe('useCreateParticle', () => {
  const mockGameData: GameData = {
    time: null,
    gameInProgress: false,
    cursorMessage: '',
    cursorMessageRead: false,
  }

  it('should create a particle with random values', () => {
    ;(useGameData as jest.Mock).mockReturnValue([mockGameData, jest.fn()])

    const mockCanvas = { width: 800, height: 600 } as HTMLCanvasElement

    const { result } = renderHook(() => useCreateParticle())

    result.current(mockCanvas)

    expect(Particle).toHaveBeenCalledWith(
      expect.any(Number), // x position
      expect.any(Number), // y position
      expect.any(Number), // size
      expect.any(String), // color
      expect.any(Number), // weight
      expect.any(Number) // speedFactor
    )
  })

  it('should adjust speedFactor based on mobile vs desktop', () => {
    ;(useGameData as jest.Mock).mockReturnValue([mockGameData, jest.fn()])

    const mockCanvas = { width: 800, height: 600 } as HTMLCanvasElement

    global.innerWidth = 1024
    const { result: desktopResult } = renderHook(() => useCreateParticle())
    const desktopParticle = desktopResult.current(mockCanvas)

    expect(desktopParticle.speedFactor).toBeCloseTo(0.65)

    global.innerWidth = 600
    const { result: mobileResult } = renderHook(() => useCreateParticle())
    const mobileParticle = mobileResult.current(mockCanvas)

    expect(mobileParticle.speedFactor).toBeCloseTo(0.53)
  })

  it('should create a particle with a random color', () => {
    ;(useGameData as jest.Mock).mockReturnValue([mockGameData, jest.fn()])

    const mockCanvas = { width: 800, height: 600 } as HTMLCanvasElement
    const { result } = renderHook(() => useCreateParticle())

    const particle = result.current(mockCanvas)

    expect(['#121226', '#21213b', '#363659', '#505077', '#6868a6']).toContain(
      particle.color
    )
  })

  it('should create a particle with a size between 10 and 40', () => {
    ;(useGameData as jest.Mock).mockReturnValue([mockGameData, jest.fn()])

    const mockCanvas = { width: 800, height: 600 } as HTMLCanvasElement
    const { result } = renderHook(() => useCreateParticle())

    const particle = result.current(mockCanvas)

    expect(particle.size).toBeGreaterThanOrEqual(10)
    expect(particle.size).toBeLessThanOrEqual(40)
  })
})

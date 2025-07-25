import { renderHook } from '@testing-library/react'
import 'jest-canvas-mock'
import { useInitializeAnimation } from '../useInitializeAnimation'
import { ParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanup.types'

describe('useInitializeAnimation', () => {
  let refs: React.RefObject<ParticleCleanupRefs>
  let initParticles: jest.Mock
  let animateParticles: jest.Mock

  beforeEach(() => {
    const containerElement = document.createElement('div')
    jest.spyOn(containerElement.classList, 'contains').mockReturnValue(false)
    jest
      .spyOn(containerElement.classList, 'remove')
      .mockImplementation(() => {})

    jest.spyOn(containerElement, 'getBoundingClientRect').mockReturnValue({
      width: 800,
      height: 600,
      top: 0,
      left: 0,
      right: 800,
      bottom: 600,
      x: 0,
      y: 0,
      toJSON: jest.fn(),
    })

    refs = {
      current: {
        canvas: document.createElement('canvas'),
        container: containerElement,
        particlesArray: [],
        animationFrameId: 0,
        allClean: false,
        startTime: null,
        elapsedTime: 0,
        cursorInsideCanvas: false,
      },
    }

    initParticles = jest.fn()
    animateParticles = jest.fn()
  })

  it('should initialize animation correctly', () => {
    const { result } = renderHook(() =>
      useInitializeAnimation(refs, initParticles, animateParticles)
    )

    const initializeAnimation = result.current

    initializeAnimation(false)

    expect(refs.current.container?.getBoundingClientRect).toHaveBeenCalled()
    expect(refs.current.canvas?.width).toBe(800)
    expect(refs.current.canvas?.height).toBe(600)

    expect(initParticles).toHaveBeenCalledWith(refs.current.canvas)
    expect(animateParticles).toHaveBeenCalledWith(
      refs.current.canvas?.getContext('2d'),
      refs.current.canvas
    )
  })

  it("should remove 'done' class if present when starting new game", () => {
    jest
      .spyOn(refs.current.container!.classList, 'contains')
      .mockReturnValueOnce(true)

    const { result } = renderHook(() =>
      useInitializeAnimation(refs, initParticles, animateParticles)
    )

    const initializeAnimation = result.current

    initializeAnimation(true)

    expect(refs.current.container?.classList.remove).toHaveBeenCalledWith(
      'done'
    )
  })

  it("should not remove 'done' class when not starting new game", () => {
    jest
      .spyOn(refs.current.container!.classList, 'contains')
      .mockReturnValueOnce(true)

    const { result } = renderHook(() =>
      useInitializeAnimation(refs, initParticles, animateParticles)
    )

    const initializeAnimation = result.current

    initializeAnimation(false)

    expect(refs.current.container?.classList.remove).not.toHaveBeenCalled()
  })
})

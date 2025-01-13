import { renderHook } from '@testing-library/react'
import { useInitializeAnimation } from '../hooks/useInitializeAnimation'

describe('useInitializeAnimation', () => {
  let refs: React.RefObject<any>
  let dispatch: jest.Mock
  let initParticles: jest.Mock
  let animateParticles: jest.Mock

  beforeEach(() => {
    refs = {
      current: {
        canvas: {
          getContext: jest.fn().mockReturnValue({
            clearRect: jest.fn(),
            fillRect: jest.fn(),
          }),
          width: 0,
          height: 0,
        },
        container: {
          classList: {
            contains: jest.fn().mockReturnValue(false),
            remove: jest.fn(),
          },
          getBoundingClientRect: jest.fn().mockReturnValue({
            width: 800,
            height: 600,
          }),
        },
        isMobile: false,
      },
    }

    dispatch = jest.fn()
    initParticles = jest.fn()
    animateParticles = jest.fn()
  })

  it('should initialize animation correctly', () => {
    const { result } = renderHook(() =>
      useInitializeAnimation(refs, dispatch, initParticles, animateParticles)
    )

    const initializeAnimation = result.current

    initializeAnimation()

    expect(refs.current.container?.getBoundingClientRect).toHaveBeenCalled()
    expect(refs.current.canvas?.width).toBe(800)
    expect(refs.current.canvas?.height).toBe(600)

    expect(refs.current.isMobile).toBe(window.innerWidth <= 768)

    expect(refs.current.container?.classList.contains).toHaveBeenCalledWith(
      'done'
    )
    expect(refs.current.container?.classList.remove).not.toHaveBeenCalled()

    expect(initParticles).toHaveBeenCalledWith(refs.current.canvas)
    expect(animateParticles).toHaveBeenCalledWith(
      refs.current.canvas.getContext('2d'),
      refs.current.canvas
    )
  })

  it("should remove 'done' class if present", () => {
    refs.current.container.classList.contains.mockReturnValueOnce(true)

    const { result } = renderHook(() =>
      useInitializeAnimation(refs, dispatch, initParticles, animateParticles)
    )

    const initializeAnimation = result.current

    initializeAnimation()

    expect(refs.current.container?.classList.remove).toHaveBeenCalledWith(
      'done'
    )
  })
})

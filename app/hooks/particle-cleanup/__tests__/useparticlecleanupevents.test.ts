/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react'
import { useParticleCleanupEvents } from '../useParticleCleanupEvents'
import { ParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanup.types'

describe('useParticleCleanupEvents', () => {
  let refs: React.RefObject<ParticleCleanupRefs>
  let handleInteraction: jest.Mock
  let handleOnScroll: jest.Mock
  let initializeAnimation: jest.Mock

  beforeEach(() => {
    refs = {
      current: {
        container: document.createElement('div'),
        canvas: document.createElement('canvas'),
        animationFrameId: 123,
        particlesArray: [],
        allClean: false,
        startTime: null,
        elapsedTime: 0,
        cursorInsideCanvas: false,
      },
    }
    handleInteraction = jest.fn()
    handleOnScroll = jest.fn()
    initializeAnimation = jest.fn()
  })

  it('should add and remove event listeners correctly', () => {
    if (refs.current.container) {
      const addEventListenerSpy = jest.spyOn(
        refs.current.container,
        'addEventListener'
      )
      const removeEventListenerSpy = jest.spyOn(
        refs.current.container,
        'removeEventListener'
      )
      const windowAddEventListenerSpy = jest.spyOn(window, 'addEventListener')
      const windowRemoveEventListenerSpy = jest.spyOn(
        window,
        'removeEventListener'
      )
      const cancelAnimationFrameSpy = jest.spyOn(window, 'cancelAnimationFrame')

      const { unmount } = renderHook(() =>
        useParticleCleanupEvents(
          refs,
          handleInteraction,
          handleOnScroll,
          initializeAnimation
        )
      )

      expect(addEventListenerSpy).toHaveBeenCalledTimes(5) // 'mousemove', 'mouseleave', 'touchmove', 'touchend', 'touchstart'
      expect(windowAddEventListenerSpy).toHaveBeenCalledWith(
        'wheel',
        handleOnScroll,
        { passive: false }
      )
      expect(windowAddEventListenerSpy).toHaveBeenCalledWith(
        'resize',
        expect.any(Function)
      )

      expect(initializeAnimation).toHaveBeenCalled()

      unmount()
      expect(removeEventListenerSpy).toHaveBeenCalledTimes(5)
      expect(windowRemoveEventListenerSpy).toHaveBeenCalledWith(
        'wheel',
        handleOnScroll
      )
      expect(windowRemoveEventListenerSpy).toHaveBeenCalledWith(
        'resize',
        expect.any(Function)
      )
      expect(cancelAnimationFrameSpy).toHaveBeenCalledWith(123)
    }
  })

  it('should call handleInteraction on event trigger', () => {
    if (refs.current.container) {
      renderHook(() =>
        useParticleCleanupEvents(
          refs,
          handleInteraction,
          handleOnScroll,
          initializeAnimation
        )
      )

      const mouseMoveEvent = new Event('mousemove')
      const mouseLeaveEvent = new Event('mouseleave')

      refs.current.container.dispatchEvent(mouseMoveEvent)
      refs.current.container.dispatchEvent(mouseLeaveEvent)

      expect(handleInteraction).toHaveBeenCalledWith(mouseMoveEvent, true) // isInside = true
      expect(handleInteraction).toHaveBeenCalledWith(mouseLeaveEvent, false) // isInside = false
    }
  })

  it('should call handleOnScroll on wheel event', () => {
    renderHook(() =>
      useParticleCleanupEvents(
        refs,
        handleInteraction,
        handleOnScroll,
        initializeAnimation
      )
    )

    const wheelEvent = new Event('wheel')
    window.dispatchEvent(wheelEvent)

    expect(handleOnScroll).toHaveBeenCalledWith(wheelEvent)
  })

  it('should resize the canvas on window resize', () => {
    if (refs.current.container) {
      renderHook(() =>
        useParticleCleanupEvents(
          refs,
          handleInteraction,
          handleOnScroll,
          initializeAnimation
        )
      )

      jest
        .spyOn(refs.current.container, 'getBoundingClientRect')
        .mockReturnValue({
          width: 500,
          height: 300,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          x: 0,
          y: 0,
          toJSON: function () {
            throw new Error('Function not implemented.')
          },
        })

      window.dispatchEvent(new Event('resize'))
      if (refs.current.canvas) {
        expect(refs.current.canvas.width).toBe(500)
        expect(refs.current.canvas.height).toBe(300)
      }
    }
  })
})

/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react"
import { useParticleCleanupEvents } from "../hooks/useParticleCleanupEvents"
import { MutableRefObject } from "react"

describe("useParticleCleanupEvents", () => {
  let refs: MutableRefObject<any>
  let handleInteraction: jest.Mock
  let handleScroll: jest.Mock
  let initializeAnimation: jest.Mock

  beforeEach(() => {
    refs = {
      current: {
        container: document.createElement("div"),
        canvas: document.createElement("canvas"),
        animationFrameId: 123,
      },
    }
    handleInteraction = jest.fn()
    handleScroll = jest.fn()
    initializeAnimation = jest.fn()
  })

  it("should add and remove event listeners correctly", () => {
    const addEventListenerSpy = jest.spyOn(
      refs.current.container,
      "addEventListener"
    )
    const removeEventListenerSpy = jest.spyOn(
      refs.current.container,
      "removeEventListener"
    )
    const windowAddEventListenerSpy = jest.spyOn(window, "addEventListener")
    const windowRemoveEventListenerSpy = jest.spyOn(
      window,
      "removeEventListener"
    )
    const cancelAnimationFrameSpy = jest.spyOn(window, "cancelAnimationFrame")

    const { unmount } = renderHook(() =>
      useParticleCleanupEvents(
        refs,
        handleInteraction,
        handleScroll,
        initializeAnimation
      )
    )

    expect(addEventListenerSpy).toHaveBeenCalledTimes(5) // 'mousemove', 'mouseleave', 'touchmove', 'touchend', 'touchstart'
    expect(windowAddEventListenerSpy).toHaveBeenCalledWith(
      "wheel",
      handleScroll,
      { passive: false }
    )
    expect(windowAddEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    )

    expect(initializeAnimation).toHaveBeenCalled()

    unmount()
    expect(removeEventListenerSpy).toHaveBeenCalledTimes(5)
    expect(windowRemoveEventListenerSpy).toHaveBeenCalledWith(
      "wheel",
      handleScroll
    )
    expect(windowRemoveEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    )
    expect(cancelAnimationFrameSpy).toHaveBeenCalledWith(123)
  })

  it("should call handleInteraction on event trigger", () => {
    const { result } = renderHook(() =>
      useParticleCleanupEvents(
        refs,
        handleInteraction,
        handleScroll,
        initializeAnimation
      )
    )

    const mouseMoveEvent = new Event("mousemove")
    const mouseLeaveEvent = new Event("mouseleave")

    refs.current.container.dispatchEvent(mouseMoveEvent)
    refs.current.container.dispatchEvent(mouseLeaveEvent)

    expect(handleInteraction).toHaveBeenCalledWith(mouseMoveEvent, true) // isInside = true
    expect(handleInteraction).toHaveBeenCalledWith(mouseLeaveEvent, false) // isInside = false
  })

  it("should call handleScroll on wheel event", () => {
    const { result } = renderHook(() =>
      useParticleCleanupEvents(
        refs,
        handleInteraction,
        handleScroll,
        initializeAnimation
      )
    )

    const wheelEvent = new Event("wheel")
    window.dispatchEvent(wheelEvent)

    expect(handleScroll).toHaveBeenCalledWith(wheelEvent)
  })

  it("should resize the canvas on window resize", () => {
    const { result } = renderHook(() =>
      useParticleCleanupEvents(
        refs,
        handleInteraction,
        handleScroll,
        initializeAnimation
      )
    )

    jest
      .spyOn(refs.current.container, "getBoundingClientRect")
      .mockReturnValue({
        width: 500,
        height: 300,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        x: 0,
        y: 0,
      })

    window.dispatchEvent(new Event("resize"))

    expect(refs.current.canvas.width).toBe(500)
    expect(refs.current.canvas.height).toBe(300)
  })
})

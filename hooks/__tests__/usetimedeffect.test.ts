import { renderHook, act } from "@testing-library/react"
import { useTimedEffect } from "../useTimedEffect"

jest.useFakeTimers()

describe("useTimedEffect", () => {
  it("should trigger the effect and reset after the specified duration", () => {
    const mockApplyEffect = jest.fn()
    const { result } = renderHook(() => useTimedEffect(1000))

    act(() => {
      result.current.triggerEffect(mockApplyEffect)
    })

    expect(mockApplyEffect).toHaveBeenCalledTimes(1)
    expect(mockApplyEffect).toHaveBeenCalledWith(true)

    jest.advanceTimersByTime(999)
    expect(mockApplyEffect).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(1)
    expect(mockApplyEffect).toHaveBeenCalledTimes(2)
    expect(mockApplyEffect).toHaveBeenCalledWith(false)
  })

  it("should not trigger the effect again while still counting", () => {
    const mockApplyEffect = jest.fn()
    const { result } = renderHook(() => useTimedEffect(1000))

    act(() => {
      result.current.triggerEffect(mockApplyEffect)
      result.current.triggerEffect(mockApplyEffect)
    })

    expect(mockApplyEffect).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(1000)
    expect(mockApplyEffect).toHaveBeenCalledTimes(2)
    expect(mockApplyEffect).toHaveBeenCalledWith(false)
  })

  it("should clean up the timeout when cleanup is called", () => {
    const mockApplyEffect = jest.fn()
    const { result } = renderHook(() => useTimedEffect(1000))

    act(() => {
      result.current.triggerEffect(mockApplyEffect)
    })

    act(() => {
      result.current.cleanup()
    })

    jest.advanceTimersByTime(1000)
    expect(mockApplyEffect).toHaveBeenCalledTimes(1)
  })
})

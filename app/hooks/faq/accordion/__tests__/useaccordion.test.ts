import { renderHook, act } from '@testing-library/react'
import { useAccordion } from '../useAccordion'
import { pxToRem } from '@/app/utils/pxToRem'

jest.mock('@/app/hooks/shared/useDebounce', () => ({
  useDebounce: jest.fn().mockImplementation((cb) => cb),
}))

describe('useAccordion', () => {
  const itemsLength = 3

  it('should initialize with the correct state', () => {
    const { result } = renderHook(() => useAccordion(itemsLength))

    expect(result.current.openIndex).toBeNull()
    expect(result.current.accOpen(0)).toBe(false)
  })

  it('should toggle openIndex when handleAccClick is called', () => {
    const { result } = renderHook(() => useAccordion(itemsLength))

    act(() => {
      result.current.handleAccClick(1)
    })

    expect(result.current.openIndex).toBe(1)

    act(() => {
      result.current.handleAccClick(1)
    })

    expect(result.current.openIndex).toBeNull()
  })

  it('should open content when index matches openIndex', () => {
    jest.useFakeTimers()

    const { result } = renderHook(() => useAccordion(itemsLength))

    const mockButtonRef = {
      classList: { contains: jest.fn(), toggle: jest.fn() },
    }
    const mockContentRef = {
      style: { maxHeight: '' },
      scrollHeight: 100,
    }

    result.current.buttonRefs[0].current =
      mockButtonRef as unknown as HTMLButtonElement

    result.current.contentRefs[0].current =
      mockContentRef as unknown as HTMLDivElement

    act(() => {
      result.current.handleAccClick(0)
    })

    jest.advanceTimersByTime(500)

    expect(mockContentRef.style.maxHeight).toBe(
      `${pxToRem(mockContentRef.scrollHeight) + 2.75}rem`
    )
    expect(mockButtonRef.classList.toggle).toHaveBeenCalledWith('init', false)

    act(() => {
      result.current.handleAccClick(0)
    })

    jest.advanceTimersByTime(500)

    expect(mockContentRef.style.maxHeight).toBe('0rem')
  })

  it('should toggle the "init" class on buttons when accordion is clicked', () => {
    jest.useFakeTimers()

    const { result } = renderHook(() => useAccordion(itemsLength))

    const mockButtonRef = {
      classList: { contains: jest.fn(), toggle: jest.fn() },
    }

    result.current.buttonRefs[0].current =
      mockButtonRef as unknown as HTMLButtonElement

    expect(mockButtonRef.classList.toggle).not.toHaveBeenCalled()

    act(() => {
      result.current.handleAccClick(0)
    })

    jest.advanceTimersByTime(500)

    expect(mockButtonRef.classList.toggle).toHaveBeenCalledWith('init', false)

    jest.clearAllMocks()

    act(() => {
      result.current.handleAccClick(0)
    })

    jest.advanceTimersByTime(500)
    expect(mockButtonRef.classList.toggle).toHaveBeenCalledWith('init', true)
  })

  it('should handle debouncing of handleAccClick', () => {
    jest.useFakeTimers()

    const { result } = renderHook(() => useAccordion(itemsLength))

    act(() => {
      result.current.handleAccClick(1)
    })

    jest.advanceTimersByTime(500)

    expect(result.current.openIndex).toBe(1)

    act(() => {
      result.current.handleAccClick(1)
    })

    jest.advanceTimersByTime(500)
    expect(result.current.openIndex).toBeNull()

    jest.useRealTimers()
  })
})

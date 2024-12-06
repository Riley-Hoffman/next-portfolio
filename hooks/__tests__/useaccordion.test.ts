import { renderHook, act } from "@testing-library/react"
import { useAccordion } from "../useAccordion"
import { pxToRem } from "../../lib/pxToRem"

jest.mock("../../lib/pxToRem", () => ({
  pxToRem: jest.fn((value: number) => value / 16),
}))

describe("useAccordion hook", () => {
  const itemsLength = 3

  it("should initialize with no open index", () => {
    const { result } = renderHook(() => useAccordion(itemsLength))
    expect(result.current.openIndex).toBeNull()
  })

  it("should toggle the openIndex on accordion click", () => {
    const { result } = renderHook(() => useAccordion(itemsLength))

    act(() => {
      result.current.handleAccordionClick(1)
    })
    expect(result.current.openIndex).toBe(1)

    act(() => {
      result.current.handleAccordionClick(1)
    })
    expect(result.current.openIndex).toBeNull()
  })

  it("should update button and content refs correctly", () => {
    const { result } = renderHook(() => useAccordion(itemsLength))

    const mockButtons = Array(itemsLength)
      .fill(null)
      .map(() => document.createElement("button"))
    const mockContents = Array(itemsLength)
      .fill(null)
      .map(() => document.createElement("div"))

    result.current.buttonRefs.current = mockButtons
    result.current.contentRefs.current = mockContents

    act(() => {
      result.current.handleAccordionClick(0)
    })

    setTimeout(() => {
      expect(mockButtons[0].classList.contains("init")).toBe(false)
      expect(mockButtons[1].classList.contains("init")).toBe(true)
      expect(mockContents[0].style.maxHeight).toBe(`${pxToRem(0)}rem`)
    }, 500)

    act(() => {
      result.current.handleAccordionClick(2)
    })

    setTimeout(() => {
      expect(mockContents[2].style.maxHeight).toBe("0rem")
    }, 500)
  })

  it("should reset maxHeight of closed items to 0rem", () => {
    const { result } = renderHook(() => useAccordion(itemsLength))

    const mockContents = Array(itemsLength)
      .fill(null)
      .map(() => document.createElement("div"))
    result.current.contentRefs.current = mockContents

    act(() => {
      result.current.handleAccordionClick(1)
    })

    expect(mockContents[1].style.maxHeight).not.toBe("0rem")

    act(() => {
      result.current.handleAccordionClick(2)
    })

    expect(mockContents[1].style.maxHeight).toBe("0rem")
  })
})

import { useEffect, useRef, MutableRefObject } from "react"

type HTMLElementWithDataset = HTMLElement & {
  dataset: DOMStringMap & {
    active?: string
    distance?: string
  }
}

export const useTriggerOnScroll = (): MutableRefObject<
  HTMLElementWithDataset[]
> => {
  const elementsRef = useRef<HTMLElementWithDataset[]>([])

  const getActiveState = (rect: DOMRect, distance: number) => {
    const isActive = rect.top < distance
    const newActiveState = isActive ? "true" : "false"

    if (!isActive) {
      return "false"
    }

    return newActiveState
  }

  useEffect(() => {
    const updateElementActivation = (
      element: HTMLElementWithDataset,
      rect: DOMRect,
      distance: number
    ) => {
      const newActiveState = getActiveState(rect, distance)

      if (element.dataset.active !== newActiveState) {
        element.dataset.active = newActiveState
      }
    }

    const updateTriggerOnScroll = () => {
      requestAnimationFrame(() => {
        elementsRef.current.forEach((element) => {
          const rect = element.getBoundingClientRect()
          const distance = parseInt(element.dataset.distance ?? "800", 10)
          updateElementActivation(element, rect, distance)
        })
      })
    }

    setTimeout(updateTriggerOnScroll, 100)

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", updateTriggerOnScroll)
      return () => {
        window.removeEventListener("scroll", updateTriggerOnScroll)
      }
    }
  }, [])

  return elementsRef
}

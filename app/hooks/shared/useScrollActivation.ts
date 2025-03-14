import { useRef, useCallback, RefObject } from 'react'
import { useScroll } from './useScroll'

type HTMLElementWithDistance = HTMLElement & {
  dataset: DOMStringMap & {
    distance?: string
  }
}

export const useScrollActivation =
  (): RefObject<HTMLElementWithDistance | null> => {
    const elementRef = useRef<HTMLElementWithDistance>(null)

    const checkActivation = useCallback(() => {
      const element = elementRef.current
      if (!element) return

      const { top } = element.getBoundingClientRect()
      const distance = parseInt(element.dataset.distance ?? '800', 10)
      element.classList.toggle('active', top < distance)
    }, [])

    useScroll(checkActivation)

    return elementRef
  }

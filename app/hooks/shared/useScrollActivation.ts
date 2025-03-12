import { useRef, useCallback, RefObject } from 'react'
import { useScroll } from './useScroll'

type HTMLElementWithDistance = HTMLElement & {
  dataset: DOMStringMap & {
    distance?: string
  }
}

type UseScrollActivationReturn = RefObject<HTMLElementWithDistance | null>

export const useScrollActivation = (): UseScrollActivationReturn => {
  const elementRef = useRef<HTMLElementWithDistance>(null)

  const updateActivation = useCallback(
    (element: HTMLElementWithDistance): void => {
      const rect = element.getBoundingClientRect()
      const distance = parseInt(element.dataset.distance ?? '800', 10)
      const isActive = rect.top < distance

      element.classList.toggle('active', isActive)
    },
    []
  )

  const handleOnScroll = () => {
    if (elementRef.current) {
      updateActivation(elementRef.current)
    }
  }

  useScroll(handleOnScroll, false)

  return elementRef
}

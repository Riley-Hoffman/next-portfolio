import { useRef, RefObject } from 'react'
import { useScrollHandler } from './useScrollHandler'

type HTMLElementWithDataset = HTMLElement & {
  dataset: DOMStringMap & {
    active?: string
    distance?: string
  }
}

type UseTriggerOnScrollReturn = RefObject<HTMLElementWithDataset | null>

export const useTriggerOnScroll = (): UseTriggerOnScrollReturn => {
  const elementsRef = useRef<HTMLElementWithDataset>(null)

  const getActiveState = (rect: DOMRect, distance: number): string => {
    return (rect.top < distance).toString()
  }

  const updateElementActivation = (element: HTMLElementWithDataset): void => {
    const rect = element.getBoundingClientRect()
    const distance = parseInt(element.dataset.distance ?? '800', 10)
    const newActiveState = getActiveState(rect, distance)

    if (element.dataset.active !== newActiveState) {
      element.dataset.active = newActiveState
    }
  }

  const handleScroll = () => {
    if (elementsRef.current) {
      updateElementActivation(elementsRef.current)
    }
  }

  useScrollHandler(handleScroll)

  return elementsRef
}

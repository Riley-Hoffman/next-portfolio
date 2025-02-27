import { useEffect, useRef, RefObject } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'

type HTMLElementWithDataset = HTMLElement & {
  dataset: DOMStringMap & {
    active?: string
    distance?: string
  }
}

export const useTriggerOnScroll = (): RefObject<HTMLElementWithDataset[]> => {
  const elementsRef = useRef<HTMLElementWithDataset[]>([])

  const getActiveState = (rect: DOMRect, distance: number): string => {
    return rect.top < distance ? 'true' : 'false'
  }

  useEffect(() => {
    const updateElementActivation = (element: HTMLElementWithDataset): void => {
      const rect = element.getBoundingClientRect()
      const distance = parseInt(element.dataset.distance ?? '800', 10)
      const newActiveState = getActiveState(rect, distance)

      if (element.dataset.active !== newActiveState)
        element.dataset.active = newActiveState
    }
    const updateTriggerOnScroll = () => {
      requestAnimationFrame(() => {
        elementsRef.current.forEach(updateElementActivation)
      })
    }
    updateTriggerOnScroll()

    if (isBrowser()) {
      window.addEventListener('scroll', updateTriggerOnScroll)
      return () => window.removeEventListener('scroll', updateTriggerOnScroll)
    }
  }, [])

  return elementsRef
}

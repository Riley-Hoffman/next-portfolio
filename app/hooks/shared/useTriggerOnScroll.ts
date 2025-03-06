import { useEffect, useRef, RefObject } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'

type HTMLElementWithDataset = HTMLElement & {
  dataset: DOMStringMap & {
    active?: string
    distance?: string
  }
}

export const useTriggerOnScroll =
  (): RefObject<HTMLElementWithDataset | null> => {
    const elementsRef = useRef<HTMLElementWithDataset>(null)

    const getActiveState = (rect: DOMRect, distance: number): string => {
      return (rect.top < distance).toString()
    }

    useEffect(() => {
      const distances = new Map<HTMLElementWithDataset, number>()

      const updateElementActivation = (
        element: HTMLElementWithDataset
      ): void => {
        const rect = element.getBoundingClientRect()
        let distance = distances.get(element)
        if (distance === undefined) {
          distance = parseInt(element.dataset.distance ?? '800', 10)
          distances.set(element, distance)
        }
        const newActiveState = getActiveState(rect, distance)

        if (element.dataset.active !== newActiveState) {
          element.dataset.active = newActiveState
        }
      }
      const updateTriggerOnScroll = () => {
        requestAnimationFrame(() => {
          if (elementsRef.current) {
            updateElementActivation(elementsRef.current)
          }
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

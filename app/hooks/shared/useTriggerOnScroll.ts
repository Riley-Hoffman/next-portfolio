import { useEffect, useRef, RefObject } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'
import { useDebounce } from './useDebounce'

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

    const updateElementActivation = (element: HTMLElementWithDataset): void => {
      const rect = element.getBoundingClientRect()
      const distance = parseInt(element.dataset.distance ?? '800', 10)
      const newActiveState = getActiveState(rect, distance)

      if (element.dataset.active !== newActiveState) {
        element.dataset.active = newActiveState
      }
    }

    const updateTriggerOnScroll = () => {
      requestAnimationFrame(() => {
        if (elementsRef.current) updateElementActivation(elementsRef.current)
      })
    }

    const debouncedUpdateTriggerOnScroll = useDebounce(
      updateTriggerOnScroll,
      100
    )

    useEffect(() => {
      if (isBrowser()) {
        window.addEventListener('scroll', debouncedUpdateTriggerOnScroll)
        debouncedUpdateTriggerOnScroll()
        return () => {
          window.removeEventListener('scroll', debouncedUpdateTriggerOnScroll)
        }
      }
    }, [debouncedUpdateTriggerOnScroll])

    return elementsRef
  }

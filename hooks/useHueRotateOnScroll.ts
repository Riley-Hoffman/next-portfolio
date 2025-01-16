import { useRef } from 'react'
import { useScrollHandler } from '@/hooks/useScrollHandler'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export const useHueRotateOnScroll = (
  sectionRef: React.RefObject<HTMLElement | null>
) => {
  const scrollRef = useRef<number>(0)
  const prefersReducedMotion = useReducedMotion()

  useScrollHandler(() => {
    if (
      typeof window === 'undefined' ||
      !sectionRef.current ||
      prefersReducedMotion
    ) {
      return
    }

    const scrollY = window.scrollY
    const newFilter = `hue-rotate(${scrollY / 2.7}deg)`

    if (scrollRef.current !== scrollY) {
      scrollRef.current = scrollY
    }

    if (sectionRef.current.style.filter !== newFilter) {
      sectionRef.current.style.filter = newFilter
    }
  })
}

import { useEffect, useRef, useCallback, useState } from 'react'
import { useScrollHandler } from './useScrollHandler'
import { useReducedMotion } from './useReducedMotion'

export const useHueRotateOnScroll = (
  hueElRef: React.RefObject<HTMLElement>
) => {
  const scrollRef = useRef<number>(0)
  const prefersReducedMotion = useReducedMotion()
  const [hueFilter, setHueFilter] = useState('')

  const updateHueRotation = useCallback(() => {
    if (typeof window === 'undefined' || prefersReducedMotion) return

    const scrollY = window.scrollY
    const hueRotation = scrollY / 2.7
    const newFilter = `hue-rotate(${hueRotation}deg)`

    if (scrollRef.current !== scrollY) {
      scrollRef.current = scrollY
      setHueFilter(newFilter)
    }
  }, [prefersReducedMotion])

  useScrollHandler(updateHueRotation)

  const prevFilterRef = useRef<string>('')

  useEffect(() => {
    const element = hueElRef.current
    if (element && prevFilterRef.current !== hueFilter) {
      element.style.filter = hueFilter
      prevFilterRef.current = hueFilter
    }
    return () => {
      if (element) element.style.filter = ''
    }
  }, [hueFilter, hueElRef])
}

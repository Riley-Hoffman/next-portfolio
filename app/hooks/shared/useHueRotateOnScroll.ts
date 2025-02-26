import { useEffect, useRef, useCallback, useState } from 'react'
import { useScrollHandler } from './useScrollHandler'
import { useReducedMotion } from './useReducedMotion'
import { useDebounce } from './useDebounce'

export const useHueRotateOnScroll = (
  hueElRef: React.RefObject<HTMLElement | null>
) => {
  const scrollRef = useRef<number>(0)
  const prefersReducedMotion = useReducedMotion()
  const [hueFilter, setHueFilter] = useState('')

  const applyHueRotate = useCallback(() => {
    if (typeof window === 'undefined' || prefersReducedMotion) return

    const scrollY = window.scrollY
    const newFilter = `hue-rotate(${scrollY / 2.7}deg)`

    if (scrollRef.current !== scrollY) {
      scrollRef.current = scrollY
      setHueFilter(newFilter)
    }
  }, [prefersReducedMotion])

  const debouncedApplyHueRotate = useDebounce(applyHueRotate, 100)
  useScrollHandler(debouncedApplyHueRotate)

  useEffect(() => {
    const element = hueElRef.current
    if (element) element.style.filter = hueFilter
    return () => {
      if (element) element.style.filter = ''
    }
  }, [hueFilter, hueElRef])
}

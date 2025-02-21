import { useEffect, useRef, useCallback, useState } from 'react'
import { useScrollHandler } from '@/hooks/useScrollHandler'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useDebounce } from '@/hooks/useDebounce'

export const useHueRotateOnScroll = (
  sectionRef: React.RefObject<HTMLElement | null>
) => {
  const scrollRef = useRef<number>(0)
  const prefersReducedMotion = useReducedMotion()
  const [hueFilter, setHueFilter] = useState<string>('')

  const applyHueRotate = useCallback(() => {
    if (typeof window === 'undefined' || prefersReducedMotion) {
      return
    }

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
    if (sectionRef.current) {
      sectionRef.current.style.filter = hueFilter
    }
  }, [hueFilter, sectionRef])

  useEffect(() => {
    const currentSection = sectionRef.current
    return () => {
      if (currentSection) {
        currentSection.style.filter = ''
      }
    }
  }, [sectionRef])
}

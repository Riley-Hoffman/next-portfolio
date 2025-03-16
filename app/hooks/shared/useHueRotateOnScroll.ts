import { useEffect, useRef, useCallback, useState } from 'react'
import { useScroll } from './useScroll'
import { useReducedMotion } from './useReducedMotion'

export const useHueRotateOnScroll = (
  hueElRef: React.RefObject<HTMLElement>
) => {
  const scrollRef = useRef<number>(0)
  const prefersReducedMotion = useReducedMotion()
  const [hueFilter, setHueFilter] = useState('')

  const updateHueRotation = useCallback(
    (scrollY: number = 0) => {
      if (typeof window === 'undefined' || prefersReducedMotion) return

      const hueRotation = scrollY / 2.7
      const newFilter = `hue-rotate(${hueRotation}deg)`

      if (scrollRef.current !== scrollY) {
        scrollRef.current = scrollY
        setHueFilter(newFilter)
      }
    },
    [prefersReducedMotion]
  )

  useScroll(updateHueRotation)

  const prevFilterRef = useRef<string>('')

  useEffect(() => {
    const element = hueElRef.current
    const elementStyle = element.style
    if (element && prevFilterRef.current !== hueFilter) {
      elementStyle.filter = hueFilter
      prevFilterRef.current = hueFilter
    }
    return () => {
      if (element) elementStyle.filter = ''
    }
  }, [hueFilter, hueElRef])
}

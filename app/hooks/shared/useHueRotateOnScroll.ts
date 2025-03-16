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
      let currentScrollRef = scrollRef.current
      if (typeof window === 'undefined' || prefersReducedMotion) return

      const hueRotation = scrollY / 2.7
      const newFilter = `hue-rotate(${hueRotation}deg)`

      if (currentScrollRef !== scrollY) {
        currentScrollRef = scrollY
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
    let prevHueFilter = prevFilterRef.current
    if (element && prevHueFilter !== hueFilter) {
      elementStyle.filter = hueFilter
      prevHueFilter = hueFilter
    }
    return () => {
      if (element) elementStyle.filter = ''
    }
  }, [hueFilter, hueElRef])
}

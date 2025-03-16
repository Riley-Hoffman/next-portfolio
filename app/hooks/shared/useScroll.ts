import { useEffect, useRef, useCallback } from 'react'

export const useScroll = (onScroll: (scrollY?: number) => void) => {
  const tickingRef = useRef(false)
  const animationFrameId = useRef<number | null>(null)

  const handleOnScroll = useCallback(() => {
    let isTicking = tickingRef.current
    if (!isTicking) {
      isTicking = true
      animationFrameId.current = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY
        onScroll(scrollY)
        isTicking = false
      })
    }
  }, [onScroll])

  useEffect(() => {
    let currentAnimFrame = animationFrameId.current
    window.addEventListener('scroll', handleOnScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleOnScroll)
      if (currentAnimFrame !== null) {
        window.cancelAnimationFrame(currentAnimFrame)
        currentAnimFrame = null
      }
    }
  }, [handleOnScroll, onScroll])
}

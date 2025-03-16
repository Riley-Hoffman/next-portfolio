import { useEffect, useRef, useCallback } from 'react'

export const useScroll = (onScroll: (scrollY?: number) => void) => {
  const tickingRef = useRef(false)
  const animationFrameId = useRef<number | null>(null)

  const handleOnScroll = useCallback(() => {
    if (!tickingRef.current) {
      tickingRef.current = true
      animationFrameId.current = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY
        onScroll(scrollY)
        tickingRef.current = false
      })
    }
  }, [onScroll])

  useEffect(() => {
    const currentAnimFrame = animationFrameId.current
    window.addEventListener('scroll', handleOnScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleOnScroll)
      if (currentAnimFrame !== null) {
        window.cancelAnimationFrame(currentAnimFrame)
        animationFrameId.current = null
      }
    }
  }, [handleOnScroll, onScroll])
}

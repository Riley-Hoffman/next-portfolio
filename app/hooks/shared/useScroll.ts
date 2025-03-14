import { useEffect, useRef, useCallback } from 'react'

export const useScroll = (onScroll: (scrollY?: number) => void) => {
  const ticking = useRef(false)
  const animationFrameId = useRef<number | null>(null)

  const handleOnScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true
      animationFrameId.current = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY
        onScroll(scrollY)
        ticking.current = false
      })
    }
  }, [onScroll])

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleOnScroll)
      if (animationFrameId.current !== null) {
        window.cancelAnimationFrame(animationFrameId.current)
        animationFrameId.current = null
      }
    }
  }, [handleOnScroll, onScroll])
}

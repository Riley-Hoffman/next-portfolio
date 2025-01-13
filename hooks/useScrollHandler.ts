import { useEffect, useRef } from 'react'

export const useScrollHandler = (onScroll: () => void) => {
  const ticking = useRef(false)
  const animationFrameId = useRef<number | null>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        animationFrameId.current = window.requestAnimationFrame(() => {
          onScroll()
          ticking.current = false
        })
        ticking.current = true
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
        if (animationFrameId.current !== null) {
          window.cancelAnimationFrame(animationFrameId.current)
        }
      }
    }
  }, [onScroll])
}

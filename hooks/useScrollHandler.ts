import { useEffect, useRef } from 'react'
import { isBrowser } from '@/lib/isBrowser'

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

    if (isBrowser()) {
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

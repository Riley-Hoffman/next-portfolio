import { useEffect, useRef } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'

export const useScrollHandler = (onScroll: () => void) => {
  const ticking = useRef(false)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    if (!isBrowser()) {
      return
    }

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        animationFrameId.current = window.requestAnimationFrame(() => {
          onScroll()
          ticking.current = false
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameId.current !== null) {
        window.cancelAnimationFrame(animationFrameId.current)
        animationFrameId.current = null
      }
    }
  }, [onScroll])
}

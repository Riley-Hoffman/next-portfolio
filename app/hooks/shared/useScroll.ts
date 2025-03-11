import { useEffect, useRef } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'

export const useScroll = (
  onScroll: (scrollY?: number) => void,
  returnScrollY = true
) => {
  const ticking = useRef(false)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    if (isBrowser()) {
      const handleOnScroll = () => {
        if (!ticking.current) {
          ticking.current = true
          animationFrameId.current = window.requestAnimationFrame(() => {
            const scrollY = returnScrollY ? window.scrollY : undefined
            onScroll(scrollY)
            ticking.current = false
          })
        }
      }

      window.addEventListener('scroll', handleOnScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleOnScroll)
        if (animationFrameId.current !== null) {
          window.cancelAnimationFrame(animationFrameId.current)
          animationFrameId.current = null
        }
      }
    }
  }, [onScroll, returnScrollY])
}

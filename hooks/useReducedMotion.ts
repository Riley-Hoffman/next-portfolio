import { useEffect, useState } from 'react'
import { isBrowser } from '@/lib/isBrowser'

export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  useEffect(() => {
    if (isBrowser()) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)

      const handler = (event: MediaQueryListEvent) => {
        setPrefersReducedMotion(event.matches)
      }

      mediaQuery.addEventListener('change', handler)
      return () => {
        mediaQuery.removeEventListener('change', handler)
      }
    }
  }, [])

  return prefersReducedMotion
}

import { useEffect, useState } from 'react'
import { isBrowser } from '@/lib/isBrowser'

export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    () => {
      if (isBrowser()) {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches
      }
      return false
    }
  )

  useEffect(() => {
    if (!isBrowser()) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handler)

    return () => {
      mediaQuery.removeEventListener('change', handler)
    }
  }, [])

  return prefersReducedMotion
}

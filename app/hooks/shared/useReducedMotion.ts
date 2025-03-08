import { useEffect, useState, useMemo } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'

export const useReducedMotion = (): boolean => {
  const initialPreference = useMemo(() => {
    if (isBrowser()) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  }, [])

  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState<boolean>(initialPreference)

  useEffect(() => {
    if (!isBrowser()) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

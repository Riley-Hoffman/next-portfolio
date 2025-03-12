import { useSyncExternalStore } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

const getReducedMotionPreference = (): boolean => {
  return isBrowser() ? window.matchMedia(REDUCED_MOTION_QUERY).matches : false
}

const getServerSnapshot = (): boolean => {
  return false
}

const subscribe = (callback: () => void): (() => void) => {
  if (!isBrowser()) return () => {}

  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)
  const handler = () => {
    callback()
  }

  mediaQuery.addEventListener('change', handler)

  return () => {
    mediaQuery.removeEventListener('change', handler)
  }
}

export const useReducedMotion = (): boolean => {
  const prefersReducedMotion = useSyncExternalStore(
    subscribe,
    getReducedMotionPreference,
    getServerSnapshot
  )

  return prefersReducedMotion
}

import { useRef, useCallback, useEffect } from 'react'

export const useTimedEffect = (duration: number = 1000) => {
  const isCountingRef = useRef(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const triggerEffect = useCallback(
    (applyEffect: (state: boolean) => void) => {
      if (!isCountingRef.current) {
        isCountingRef.current = true
        applyEffect(true)

        timeoutId.current = setTimeout(() => {
          isCountingRef.current = false
          applyEffect(false)
          timeoutId.current = null
        }, duration)
      }
    },
    [duration]
  )

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
        timeoutId.current = null
      }
    }
  }, [duration])

  const cleanup = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
      timeoutId.current = null
    }
  }, [])

  return {
    triggerEffect,
    cleanup,
  }
}

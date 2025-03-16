import { useRef, useCallback, useEffect } from 'react'

export const useTimedEffect = (duration: number = 1000) => {
  const isCounting = useRef(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const stopEffect = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
      timeoutId.current = null
    }
  }, [])

  const triggerEffect = useCallback(
    (applyEffect: (state: boolean) => void) => {
      if (isCounting.current) return

      isCounting.current = true
      applyEffect(true)

      timeoutId.current = setTimeout(() => {
        isCounting.current = false
        applyEffect(false)
        timeoutId.current = null
      }, duration)
    },
    [duration]
  )

  useEffect(() => {
    return stopEffect
  }, [stopEffect])

  return {
    triggerEffect,
    stopEffect,
  }
}

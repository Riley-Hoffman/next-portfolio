import { useRef, useCallback, useEffect } from 'react'

export const useTimedEffect = (duration: number = 1000) => {
  const isCounting = useRef(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const stopEffect = useCallback(() => {
    let timeout = timeoutId.current

    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }, [])

  const triggerEffect = useCallback(
    (applyEffect: (state: boolean) => void) => {
      let counting = isCounting.current

      if (counting) return

      counting = true
      applyEffect(true)

      timeoutId.current = setTimeout(() => {
        counting = false
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

import { useRef, useCallback } from 'react'

export const useDebounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  return useCallback(
    (...args: Parameters<T>) => {
      if (debounceRef.current) return

      func(...args)

      debounceRef.current = setTimeout(() => {
        debounceRef.current = null
      }, delay)
    },
    [func, delay]
  )
}

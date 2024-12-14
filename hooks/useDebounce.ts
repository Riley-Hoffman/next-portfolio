import { useRef, useCallback } from "react"

export function useDebounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  const debouncedFunction = useCallback(
    (...args: Parameters<T>) => {
      if (debounceRef.current) return

      func(...args)

      debounceRef.current = setTimeout(() => {
        debounceRef.current = null
      }, delay)
    },
    [func, delay]
  )

  return debouncedFunction
}

import { useRef, useCallback } from "react"

type DebounceJob = (...args: unknown[]) => void

export const useDebounce = (func: DebounceJob, delay: number): DebounceJob => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  const debouncedFunction = useCallback<DebounceJob>(
    (...args) => {
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

import { useEffect, useState } from "react"

export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)

      const handler = (event: MediaQueryListEvent) => {
        setPrefersReducedMotion(event.matches)
      }

      mediaQuery.addEventListener("change", handler)
      return () => {
        mediaQuery.removeEventListener("change", handler)
      }
    }
  }, [])

  return prefersReducedMotion
}

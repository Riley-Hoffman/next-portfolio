import { useEffect, useState } from "react"

export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  if (typeof window !== "undefined") {
    useEffect(() => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)

      const handler = (event: MediaQueryListEvent) => {
        setPrefersReducedMotion(event.matches)
      }

      mediaQuery.addEventListener("change", handler)
      return () => {
        mediaQuery.removeEventListener("change", handler)
      }
    }, [])
  }

  return prefersReducedMotion
}

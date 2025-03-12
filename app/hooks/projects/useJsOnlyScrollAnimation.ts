import { useEffect } from 'react'
import { useScrollActivation } from '@/app/hooks/shared/useScrollActivation'

export const useJsOnlyScrollAnimation = (animation?: string) => {
  const elementRef = useScrollActivation()

  useEffect(() => {
    const el = elementRef.current
    if (el && animation) {
      const animationClasses = animation.trim().split(/\s+/)
      animationClasses.forEach((className) => {
        if (!el.classList.contains(className)) {
          el.classList.add(className)
        }
      })
    }
  }, [elementRef, animation])

  const animatedElement = (el: HTMLElement | null) => {
    if (el && elementRef.current !== el) {
      elementRef.current = el as HTMLElement
    }
  }

  return animatedElement
}

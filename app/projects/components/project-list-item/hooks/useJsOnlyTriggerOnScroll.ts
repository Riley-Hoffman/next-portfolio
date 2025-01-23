import { useEffect } from 'react'
import { useTriggerOnScroll } from '@/hooks/useTriggerOnScroll'

export const useJsOnlyTriggerOnScroll = (animation?: string) => {
  const elementsRef = useTriggerOnScroll()

  useEffect(() => {
    if (elementsRef.current.length > 0 && animation) {
      elementsRef.current.forEach((element) => {
        const animationClasses = animation.trim().split(/\s+/)
        animationClasses.forEach((className) => {
          if (!element.classList.contains(className)) {
            element.classList.add(className)
          }
        })
      })
    }
  }, [elementsRef, animation])

  const animatedElement = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el as any)) {
      elementsRef.current.push(el as any)
    }
  }

  return animatedElement
}

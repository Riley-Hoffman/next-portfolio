import { useCallback, useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { useScrollHandler } from './useScrollHandler'
import { pxToRem } from '@/lib/pxToRem'

export const useParallax = (
  velocity: number = 0.1,
  externalRef?: React.RefObject<HTMLDivElement | null>
): React.RefObject<HTMLDivElement | null> => {
  const prefersReducedMotion = useReducedMotion()
  const internalRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const parallaxRef = externalRef ?? internalRef

  const updateImagePosition = useCallback(() => {
    if (parallaxRef.current && imgRef.current && !prefersReducedMotion) {
      const height = parallaxRef.current.offsetHeight - 18
      const translateX = -(height - window.scrollY) * velocity
      const translateY = -(height - window.scrollY) * (velocity + 0.1)
      imgRef.current.style.transform = `translate(${pxToRem(translateX)}rem, ${pxToRem(translateY)}rem)`
      imgRef.current.style.willChange = 'transform'
    }
  }, [parallaxRef, prefersReducedMotion, velocity])

  useScrollHandler(updateImagePosition)

  useEffect(() => {
    if (parallaxRef.current) {
      imgRef.current = parallaxRef.current.querySelector('img')
    }
    updateImagePosition()
  }, [parallaxRef, updateImagePosition])

  return parallaxRef
}

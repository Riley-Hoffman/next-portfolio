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
    if (!parallaxRef.current || !imgRef.current || prefersReducedMotion) {
      return
    }

    const height = parallaxRef.current.offsetHeight - 18
    const scrollY = window.scrollY

    if (scrollY < 0) return

    const translateX = -(height - scrollY) * velocity
    const translateY = -(height - scrollY) * (velocity + 0.1)

    if (Number.isFinite(translateX) && Number.isFinite(translateY)) {
      imgRef.current.style.transform = `translate(${pxToRem(translateX)}rem, ${pxToRem(translateY)}rem)`
      imgRef.current.style.willChange = 'transform'
    }
  }, [parallaxRef, prefersReducedMotion, velocity])

  useScrollHandler(updateImagePosition)

  useEffect(() => {
    const setImgRef = () => {
      if (parallaxRef.current) {
        const imgElement = parallaxRef.current.querySelector('img')
        if (imgElement) {
          imgRef.current = imgElement
        }
      }
    }

    setImgRef()
    updateImagePosition()

    return () => {
      if (imgRef.current) {
        imgRef.current.style.transform = ''
        imgRef.current.style.willChange = ''
      }
    }
  }, [parallaxRef, updateImagePosition])

  return parallaxRef
}

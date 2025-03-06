import { useCallback, useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { useScrollHandler } from './useScrollHandler'
import { pxToRem } from '@/app/utils/pxToRem'

export const useParallax = (
  velocity: number = 0.1,
  externalRef?: React.RefObject<HTMLDivElement | null>
): React.RefObject<HTMLDivElement | null> => {
  const prefersReducedMotion = useReducedMotion()
  const internalRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const parallaxRef = externalRef ?? internalRef

  const updateImagePosition = useCallback(() => {
    if (!parallaxRef.current) {
      console.warn('Parallax reference is not set.')
      return
    }
    if (!imgRef.current) {
      console.warn('Image reference is not set.')
      return
    }
    if (prefersReducedMotion) {
      console.info('User prefers reduced motion.')
      return
    }
    const height = parallaxRef.current.offsetHeight
    const scrollY = window.scrollY

    if (scrollY < 0) return

    const translate = -(height - scrollY) * velocity
    if (Number.isFinite(translate)) {
      const translateRem = pxToRem(translate)
      imgRef.current.style.transform = `translate(${translateRem}rem, ${translateRem}rem)`
      imgRef.current.style.willChange = 'transform'
    }
  }, [parallaxRef, prefersReducedMotion, velocity])

  useScrollHandler(updateImagePosition)

  useEffect(() => {
    const setImgRef = () => {
      if (parallaxRef.current) {
        const imgElement = parallaxRef.current.querySelector('img')
        if (imgElement !== null) {
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
  }, [parallaxRef, updateImagePosition, prefersReducedMotion])

  return parallaxRef
}

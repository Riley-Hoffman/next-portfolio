import { useCallback, useEffect, useRef, useMemo } from 'react'
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

  const parallaxRef = useMemo(
    () => externalRef ?? internalRef,
    [externalRef, internalRef]
  )

  const updateImagePosition = useCallback(() => {
    if (!parallaxRef.current) {
      console.error('Parallax reference is not set.')
      return
    }
    if (!imgRef.current) {
      console.error('Image reference is not set.')
      return
    }
    if (prefersReducedMotion) {
      console.warn('User prefers reduced motion.')
      return
    }
    const height = parallaxRef.current.offsetHeight
    const scrollY = window.scrollY
    if (scrollY < 0) {
      return
    }

    const translate = Math.max(
      -(height - scrollY) * velocity,
      -height * velocity
    )
    const translateRem = pxToRem(translate)
    requestAnimationFrame(() => {
      if (imgRef.current) {
        imgRef.current.style.cssText = `transform: translate(${translateRem}rem, ${translateRem}rem); will-change: transform;`
      }
    })
  }, [parallaxRef, prefersReducedMotion, velocity])

  useScrollHandler(updateImagePosition)

  useEffect(() => {
    const setImgRef = () => {
      if (parallaxRef.current) {
        const imgElement = parallaxRef.current.querySelector('img')
        if (imgElement !== null) {
          imgRef.current = imgElement
        } else {
          console.error('Image element not found in parallax container.')
        }
      }
    }

    setImgRef()
    updateImagePosition()

    return () => {
      if (imgRef.current) {
        imgRef.current.style.transform = ''
        imgRef.current.style.willChange = ''
        imgRef.current = null
      }
    }
  }, [parallaxRef, updateImagePosition, prefersReducedMotion])

  return parallaxRef
}

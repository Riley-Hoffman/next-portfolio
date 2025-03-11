import { useCallback, useEffect, useRef, useMemo } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { useScroll } from './useScroll'
import { pxToRem } from '@/app/utils/pxToRem'

const useParallaxRef = (externalRef?: React.RefObject<HTMLDivElement>) => {
  const internalRef = useRef<HTMLDivElement>(null)
  return useMemo(() => externalRef ?? internalRef, [externalRef, internalRef])
}

type UseParallaxReturn = React.RefObject<HTMLDivElement | null>

export const useParallax = (
  velocity: number = 0.1,
  externalRef?: React.RefObject<HTMLDivElement>
): UseParallaxReturn => {
  const prefersReducedMotion = useReducedMotion()
  const imgRef = useRef<HTMLImageElement | null>(null)
  const parallaxRef = useParallaxRef(externalRef)

  const updateImagePosition = useCallback(
    (scrollY: number = 0) => {
      if (prefersReducedMotion) {
        return
      }
      if (!parallaxRef.current) {
        console.error('Parallax reference is not set.')
        return
      }
      if (!imgRef.current) {
        console.error('Image reference is not set.')
        return
      }
      const height = parallaxRef.current.offsetHeight

      const translate = Math.max(
        -(height - scrollY) * velocity,
        -height * velocity
      )
      const translateRem = pxToRem(translate)
      requestAnimationFrame(() => {
        if (imgRef.current) {
          const cssText = `
        transform: translate(${translateRem}rem, ${translateRem}rem); 
        will-change: transform;
        `
          imgRef.current.style.cssText = cssText
        }
      })
    },
    [parallaxRef, prefersReducedMotion, velocity]
  )

  useScroll(updateImagePosition)

  useEffect(() => {
    const setImgRef = () => {
      if (parallaxRef.current) {
        const imgElement = parallaxRef.current.querySelector('img')
        if (imgElement !== null) {
          imgRef.current = imgElement
        } else {
          console.error(
            'Image element not found in parallax container. Current parallaxRef:',
            parallaxRef.current
          )
        }
      }
    }

    setImgRef()
    if (parallaxRef.current && imgRef.current) {
      updateImagePosition()
    }

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

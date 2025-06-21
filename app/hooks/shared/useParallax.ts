import { useCallback, useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { useScroll } from './useScroll'
import { pxToRem } from '@/app/utils/pxToRem'
import { UseParallaxProps } from '@/app/types/parallax/Parallax.types'

export const useParallax = ({
  velocity = 0.1,
  containerRef,
  imgRef,
}: UseParallaxProps): void => {
  const prefersReducedMotion = useReducedMotion()

  const updateImageStyles = useCallback(
    (transformValue: string, willChangeValue: string) => {
      const image = imgRef.current
      if (image) {
        image.style.transform = transformValue
        image.style.willChange = willChangeValue
      }
    },
    [imgRef]
  )

  const updateImagePosition = useCallback(
    (scrollY: number = 0) => {
      const container = containerRef.current
      if (prefersReducedMotion || !container || !imgRef.current) return

      const height = container.offsetHeight
      const translate = Math.max(
        -(height - scrollY) * velocity,
        -height * velocity
      )
      const translateRem = pxToRem(translate)
      const transformValue = `translate(${translateRem}rem, ${translateRem}rem)`

      requestAnimationFrame(() => {
        updateImageStyles(transformValue, 'transform')
      })
    },
    [containerRef, imgRef, prefersReducedMotion, updateImageStyles, velocity]
  )

  useEffect(() => {
    if (prefersReducedMotion) {
      updateImageStyles('', '')
      return
    }
    if (imgRef.current) {
      updateImagePosition()
    }
    return () => {
      updateImageStyles('', '')
    }
  }, [prefersReducedMotion, updateImagePosition, updateImageStyles, imgRef])

  useScroll(updateImagePosition)
}

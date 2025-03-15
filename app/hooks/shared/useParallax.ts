import { useCallback, useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion'
import { useScroll } from './useScroll'
import { pxToRem } from '@/app/utils/pxToRem'
import { UseParallaxProps } from '@/app/types/parallax/Parallax.types'

export const useParallax = ({
  velocity = 0.1,
  containerRef,
  imgRef,
}: UseParallaxProps): React.RefObject<HTMLDivElement> => {
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
      if (prefersReducedMotion || !containerRef.current || !imgRef.current) {
        return
      }

      const height = containerRef.current.offsetHeight
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
    [imgRef, containerRef, prefersReducedMotion, updateImageStyles, velocity]
  )

  useScroll(updateImagePosition)

  useEffect(() => {
    if (imgRef.current) {
      updateImagePosition()
    } else {
      console.error('Image element reference is null or undefined.')
    }

    return () => {
      updateImageStyles('', '')
    }
  }, [imgRef, updateImagePosition, prefersReducedMotion, updateImageStyles])

  return containerRef
}

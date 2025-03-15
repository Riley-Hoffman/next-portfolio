import { useParallax } from '@/app/hooks/shared/useParallax'
import { ParallaxRefs } from '@/app/types/parallax/Parallax.types'

const LazyUseParallax = ({ containerRef, imgRef }: ParallaxRefs) => {
  useParallax({
    containerRef: containerRef,
    imgRef: imgRef,
  })
  return null
}

export default LazyUseParallax

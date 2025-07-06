import { useParallax } from '@/app/hooks/shared/useParallax'
import { ParallaxRefs } from '@/app/types/parallax/Parallax.types'

const LazyUseParallax = ({ containerRef, imgRef, onReady }: ParallaxRefs) => {
  useParallax({
    containerRef: containerRef,
    imgRef: imgRef,
    onReady,
  })
  return null
}

export default LazyUseParallax

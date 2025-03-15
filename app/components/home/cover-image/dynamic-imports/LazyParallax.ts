import { useParallax, ParallaxRefs } from '@/app/hooks/shared/useParallax'

const LazyUseParallax = ({ containerRef, imgRef }: ParallaxRefs) => {
  useParallax({
    containerRef: containerRef,
    imgRef: imgRef,
  })
  return null
}

export default LazyUseParallax

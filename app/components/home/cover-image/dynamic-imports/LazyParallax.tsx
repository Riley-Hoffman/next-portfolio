import { useParallax } from '@/hooks/useParallax'

interface LazyParallaxProps {
  parallaxRef: React.RefObject<HTMLDivElement | null>
}

const LazyUseParallax = ({ parallaxRef }: LazyParallaxProps) => {
  useParallax(0.1, parallaxRef)
  return null
}

export default LazyUseParallax

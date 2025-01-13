import { useParallax } from '@/hooks/useParallax'

interface LazyUseParallaxProps {
  parallaxRef: React.RefObject<HTMLDivElement | null>
}

const LazyUseParallax = ({ parallaxRef }: LazyUseParallaxProps) => {
  useParallax(0.1, parallaxRef)
  return null
}

export default LazyUseParallax

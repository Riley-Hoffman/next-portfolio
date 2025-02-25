import { useParallax } from '@/app/hooks/shared/useParallax'

const LazyUseParallax = ({
  parallaxRef,
}: {
  parallaxRef: React.RefObject<HTMLDivElement | null>
}) => {
  useParallax(0.1, parallaxRef)
  return null
}

export default LazyUseParallax

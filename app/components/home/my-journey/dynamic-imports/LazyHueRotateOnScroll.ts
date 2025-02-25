import { useHueRotateOnScroll } from '@/app/hooks/shared/useHueRotateOnScroll'

const LazyHueRotateOnScroll = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLElement | null>
}) => {
  useHueRotateOnScroll(sectionRef)
  return null
}

export default LazyHueRotateOnScroll

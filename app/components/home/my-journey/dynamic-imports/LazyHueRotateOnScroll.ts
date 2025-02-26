import { useHueRotateOnScroll } from '@/app/hooks/shared/useHueRotateOnScroll'

const LazyHueRotateOnScroll = ({
  hueElRef,
}: {
  hueElRef: React.RefObject<HTMLElement | null>
}) => {
  useHueRotateOnScroll(hueElRef)
  return null
}

export default LazyHueRotateOnScroll

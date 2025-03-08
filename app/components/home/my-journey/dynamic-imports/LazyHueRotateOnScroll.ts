import { useHueRotateOnScroll } from '@/app/hooks/shared/useHueRotateOnScroll'

const LazyHueRotateOnScroll = ({
  hueElRef,
}: {
  hueElRef: React.RefObject<HTMLElement>
}) => {
  useHueRotateOnScroll(hueElRef)
  return null
}

export default LazyHueRotateOnScroll

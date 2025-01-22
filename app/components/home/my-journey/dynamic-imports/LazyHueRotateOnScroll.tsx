import { useHueRotateOnScroll } from '@/hooks/useHueRotateOnScroll'

interface LazyHueRotateOnScrollProps {
    sectionRef: React.RefObject<HTMLElement | null>
}

const LazyHueRotateOnScroll = ({ sectionRef }: LazyHueRotateOnScrollProps) => {
    useHueRotateOnScroll(sectionRef)
    return null
}

export default LazyHueRotateOnScroll

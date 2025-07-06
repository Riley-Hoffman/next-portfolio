export interface ParallaxRefs {
  containerRef: React.RefObject<HTMLDivElement>
  imgRef: React.RefObject<HTMLImageElement>
  onReady?: () => void
}

export interface UseParallaxProps extends ParallaxRefs {
  velocity?: number
}

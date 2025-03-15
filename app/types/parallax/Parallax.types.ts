export interface ParallaxRefs {
  containerRef: React.RefObject<HTMLDivElement>
  imgRef: React.RefObject<HTMLImageElement>
}

export interface UseParallaxProps extends ParallaxRefs {
  velocity?: number
}

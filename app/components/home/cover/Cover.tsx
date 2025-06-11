import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { CoverImageProps } from '@/app/types/home/CoverImage.interface'
import '@/app/styles/home/cover.css'
import { MD, LG } from '@/app/constants/breakpoints'

const LazyParallax = dynamic(() => import('./dynamic-imports/LazyParallax'), {
  ssr: false,
})

export const Cover = ({ coverImageData }: CoverImageProps) => {
  const parallaxContainerRef = useRef<HTMLDivElement>(null!)
  const parallaxImgref = useRef<HTMLImageElement>(null!)
  return (
    <section className="cover-container overlay" ref={parallaxContainerRef}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={coverImageData.highResSrc}
        srcSet={`${coverImageData.lowResSrc} ${MD}w, ${coverImageData.highResSrc} ${LG}w`}
        width={coverImageData.width}
        height={coverImageData.height}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        className="cover-image"
        ref={parallaxImgref}
      />
      <div>{coverImageData.children}</div>
      <LazyParallax
        containerRef={parallaxContainerRef}
        imgRef={parallaxImgref}
      />
    </section>
  )
}

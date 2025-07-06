import { useRef, useState } from 'react'
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
  const [parallaxReady, setParallaxReady] = useState(false)

  return (
    <section className="cover-container overlay" ref={parallaxContainerRef}>
      <noscript>
        <style>
          {`
            .cover-container {
              background-image: url('${coverImageData.highResSrc}');
              background-size: cover;
              background-position: center;
            }
          `}
        </style>
      </noscript>
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
        style={{
          opacity: parallaxReady ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      <div>{coverImageData.children}</div>
      <LazyParallax
        containerRef={parallaxContainerRef}
        imgRef={parallaxImgref}
        onReady={() => setParallaxReady(true)}
      />
    </section>
  )
}

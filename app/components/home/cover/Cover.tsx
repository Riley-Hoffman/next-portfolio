import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { CoverImageProps } from '@/app/types/home/CoverImage.interface'
import '@/app/styles/home/cover.css'
import { useReady } from '@/app/hooks/shared/useReady'

const LazyParallax = dynamic(() => import('./dynamic-imports/LazyParallax'), {
  ssr: false,
})

export const Cover = ({ coverImageData }: CoverImageProps) => {
  const parallaxContainerRef = useRef<HTMLDivElement>(null!)
  const parallaxImgref = useRef<HTMLImageElement>(null!)
  const [parallaxReady, onParallaxReady] = useReady()

  return (
    <section className="cover-container overlay" ref={parallaxContainerRef}>
      <noscript>
        <style>
          {`
            .cover-container {
              background-image: url('${coverImageData.src}');
              background-size: cover;
              background-position: center;
            }
          `}
        </style>
      </noscript>
      <Image
        src={coverImageData.src}
        width={coverImageData.width}
        height={coverImageData.height}
        alt=""
        fetchPriority="high"
        className="cover-image"
        sizes="100vw"
        ref={parallaxImgref}
        style={{
          opacity: parallaxReady ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        placeholder="blur"
        blurDataURL={coverImageData.blurDataUrl}
      />
      <div>{coverImageData.children}</div>
      <LazyParallax
        containerRef={parallaxContainerRef}
        imgRef={parallaxImgref}
        onReady={onParallaxReady}
      />
    </section>
  )
}

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { CoverImageProps } from '@/app/types/home/CoverImageProps.interface'
import '@/app/styles/home/cover-image.css'
import { MD, LG } from '@/app/constants/breakpoints'

const LazyParallax = dynamic(() => import('./dynamic-imports/LazyParallax'), {
  ssr: false,
})

export const CoverImage = ({ coverImageData }: CoverImageProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  return (
    <section
      className="overlay gradient-border inverted overflow-hidden border-b-4 border-solid"
      ref={parallaxRef}
    >
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
      />
      <div className="z-10 mx-auto min-h-[75vh] max-w-screen-xl pb-24 pt-[calc(18vh)] md:translate-y-5">
        {coverImageData.children}
      </div>
      <LazyParallax
        parallaxRef={parallaxRef as React.RefObject<HTMLDivElement>}
      />
    </section>
  )
}

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import '@/app/styles/home/cover-image.css'

const LazyParallax = dynamic(() => import('./dynamic-imports/LazyParallax'), {
  ssr: false,
})

export interface CoverImageProps {
  coverImageData: {
    width: number
    height: number
    highResSrc: string
    lowResSrc: string
    children: React.ReactNode
  }
}
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
        srcSet={`${coverImageData.lowResSrc} 768w, ${coverImageData.highResSrc} 1024w`}
        width={coverImageData.width}
        height={coverImageData.height}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        className="cover-image"
        style={{ transform: 'translate(-4.1rem, -8.2rem)' }}
      />
      <div className="z-10 mx-auto min-h-[75vh] max-w-screen-xl pb-24 pt-[calc(18vh)] md:translate-y-5">
        {coverImageData.children}
      </div>
      <LazyParallax parallaxRef={parallaxRef} />
    </section>
  )
}

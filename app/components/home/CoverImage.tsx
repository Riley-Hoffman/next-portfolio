import { useRef } from 'react'
import dynamic from 'next/dynamic'

const LazyUseParallax = dynamic(
  () => import('./dynamic-imports/LazyUseParallax'),
  {
    ssr: false,
  }
)

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
        className="absolute z-[1] h-[120vh] w-[130vw] max-w-none object-cover blur-[0.047rem] saturate-150 dark:hue-rotate-[266deg] sm:blur-0"
        style={{ transform: 'translate3d(-4rem, -8rem, 0px)' }}
      />
      <div className="z-10 mx-auto min-h-[75vh] max-w-screen-xl pb-24 pt-[calc(18vh)] md:translate-y-5">
        {coverImageData.children}
      </div>
      <LazyUseParallax parallaxRef={parallaxRef} />
    </section>
  )
}

import dynamic from "next/dynamic"
import { useRef } from "react"

const LazyUseParallax = dynamic(() => import("./LazyUseParallax"), {
  ssr: false,
})

export interface CoverImageProps {
  coverImageData: {
    width: number
    height: number
    srcImg: string
    srcImgMobile: string
    children: React.ReactNode
  }
}
export const CoverImage = ({ coverImageData }: CoverImageProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  return (
    <section
      className="inverted overlay gradient-border overflow-hidden border-b-4 border-solid before:bg-[radial-gradient(rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0.55)_100%),_linear-gradient(-30deg,_rgba(0,247,255,0.08)_0%,_#0000_15%,_#0000_80%,_rgba(0,247,255,0.08)_100%)]"
      ref={parallaxRef}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={coverImageData.srcImg}
        srcSet={`${coverImageData.srcImgMobile} 768w, ${coverImageData.srcImg} 1024w`}
        width={coverImageData.width}
        height={coverImageData.height}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 115vw, 130vw"
        alt=""
        fetchPriority="high"
        className="absolute -z-10 h-[120vh] w-[130vw] max-w-none object-cover blur-[0.047rem] saturate-[1.4] sm:blur-0"
      />
      <div className="min-h-[74vh] max-w-screen-xl py-[0.1px]">
        <div className="m-[18vh_1.25rem_6.625rem_0] py-5 text-left md:w-3/5 md:translate-y-[1.25rem]">
          {coverImageData.children}
        </div>
      </div>
      <LazyUseParallax parallaxRef={parallaxRef} />
    </section>
  )
}

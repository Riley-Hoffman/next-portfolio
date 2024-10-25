import dynamic from 'next/dynamic';
import { useRef } from 'react';

const LazyUseParallax = dynamic(() => import('./LazyUseParallax'), {
  ssr: false,
});

interface CoverImageProps {
    width: number,
    height: number,
    srcImg: string;
    srcImgMobile: string;
    children: React.ReactNode
}
export const CoverImage = ({ width, height, srcImg, srcImgMobile, children }: CoverImageProps) =>  {
    const parallaxRef = useRef<HTMLDivElement>(null);
    return (
        <section className="border-b-4 border-solid relative overlay overflow-hidden gradient-border inverted before:bg-[radial-gradient(rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0.55)_100%),_linear-gradient(-30deg,_rgba(0,247,255,0.08)_0%,_#0000_15%,_#0000_80%,_rgba(0,247,255,0.08)_100%)]" ref={parallaxRef}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={srcImg} srcSet={`${srcImgMobile} 768w, ${srcImg} 1024w`} width={width} height={height} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 115vw, 130vw" alt="" fetch-priority={true} className="max-w-none w-[130vw] h-[120vh] absolute -z-10 object-cover saturate-[1.4] blur-[0.047rem] sm:blur-0" />
            <div className="max-w-screen-xl min-h-[74vh] py-[0.1px]">
                <div className="m-[18vh_1.25rem_6.625rem_0] py-5 text-left md:w-3/5 md:translate-y-[1.25rem]">
                    {children}
                </div>
            </div>
            <LazyUseParallax parallaxRef={parallaxRef} />
        </section>
    );
};

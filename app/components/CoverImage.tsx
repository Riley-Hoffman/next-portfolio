'use client'
import Image from 'next/image';
import { useParallax } from '../../hooks/useParallax';


interface CoverImageProps {
    width: number,
    height: number,
    srcImg: string;
    children: React.ReactNode
}

export const CoverImage: React.FC<CoverImageProps> = ({ width, height, srcImg, children }) => {
    const parallaxRef = useParallax();
    return (
        <section className="border-b-4 border-solid relative overlay overflow-hidden gradient-border inverted before:bg-[radial-gradient(rgba(255,255,255,0.743)_0%,_rgba(255,255,255,0.498)_100%),_linear-gradient(-30deg,_rgba(0,247,255,0.08)_0%,_#0000_15%,_#0000_80%,_rgba(0,247,255,0.08)_100%)]" ref={parallaxRef}>
            <Image src={srcImg} width={width} height={height} sizes="(max-width: 768px) 130vw, 130vw" alt="" priority={true} className="max-w-none w-[130vw] h-[120vh] absolute z-[-1] object-cover" />
            <div className="max-w-screen-xl min-h-[74vh] py-[0.1px]">
                <div className="m-[18vh_1.25rem_6.625rem_0] py-5 bg-[radial-gradient(ellipse_closest-side_at_50%_50%,_#fff_0%,_transparent)] text-left md:w-3/5 md:translate-y-[1.25rem]">
                    {children}
                </div>
            </div>
        </section>
    );
};
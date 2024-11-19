"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, A11y, Mousewheel } from "swiper/modules"
import { CarouselButtons } from "./CarouselButtons"

interface Slide {
  src: string
  label: string
}

interface CarouselProps {
  slides: Slide[]
}

export const Carousel = ({ slides }: CarouselProps) => {
  const swiperContainerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const loadStyles = async () => {
      await Promise.all([
        import("swiper/css"),
        import("swiper/css/navigation"),
        import("swiper/css/pagination"),
        import("./styles/custom-swiper.css"),
      ])
    }
    loadStyles()
  }, [])

  return (
    <div className="relative max-w-7xl" ref={swiperContainerRef}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Mousewheel]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet tool-tip !h-6 !w-6 !mx-3",
          bulletActiveClass: "swiper-pagination-bullet-active",
          renderBullet: (index, className) =>
            `<button class="${className}" aria-label="${slides[index]?.label || `Slide ${index + 1}`}"></button>`,
        }}
        mousewheel={{
          forceToAxis: true,
        }}
        touchEventsTarget="container"
        touchRatio={1}
        touchReleaseOnEdges={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          900: {
            slidesPerView: 2,
          },
        }}
        a11y={{
          containerRole: "region",
          containerRoleDescriptionMessage:
            "Trainings & Certifications Carousel",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={slide.label}
              className="w-[56.25rem] max-w-full"
              width={900}
              height={695}
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div role="group" aria-label="Carousel controls">
        <CarouselButtons />
      </div>
    </div>
  )
}

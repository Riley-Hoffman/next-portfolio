'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y, Mousewheel } from 'swiper/modules'
import { CarouselButtons } from './CarouselButtons'
import { CarouselDataTypes } from './CarouselData'
import { NewTabContent } from '@/app/components/utils/NewTabContent'
import { carouselStyle } from './lib/carouselStyle'

interface CarouselProps {
  slides: CarouselDataTypes[]
}

export const Carousel = ({ slides }: CarouselProps) => {
  const swiperContainerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    carouselStyle()
  }, [])

  return (
    <div className="relative max-w-7xl" ref={swiperContainerRef}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Mousewheel]}
        navigation={{
          prevEl: '.carousel-button.prv',
          nextEl: '.carousel-button.nxt',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet md:tool-tip !size-6 !mx-3',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          renderBullet: (index, className) =>
            `<button class="${className}" aria-label="${slides[index]?.label || `Slide ${index + 1}`}"></button>`,
        }}
        mousewheel={{
          forceToAxis: true,
        }}
        touchEventsTarget="container"
        touchReleaseOnEdges={true}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          900: {
            slidesPerView: 2,
          },
        }}
        a11y={{
          containerRole: 'region',
          containerRoleDescriptionMessage:
            'Trainings & Certifications Carousel',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href={slide.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={slide.src}
                alt={slide.label}
                className="w-[56.25rem]"
                width={900}
                height={695}
                loading="eager"
              />
              <NewTabContent icon={false} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div role="group" aria-label="Carousel controls">
        <CarouselButtons />
      </div>
    </div>
  )
}

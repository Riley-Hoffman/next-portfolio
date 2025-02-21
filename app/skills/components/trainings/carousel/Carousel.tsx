'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y, Mousewheel } from 'swiper/modules'
import { CarouselButtons } from './CarouselButtons'
import { CarouselDataTypes } from './CarouselData'
import { NewTabContent } from '@/app/components/utils/NewTabContent'
import { carouselStyle } from './lib/carouselStyle'

export const Carousel = ({ slides }: { slides: CarouselDataTypes[] }) => {
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
          bulletClass: 'swiper-pagination-bullet !size-6 !mx-3',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          dynamicBullets: true,
          dynamicMainBullets: 2,
          renderBullet: (index, className) =>
            `<button class="${className}" aria-label="${`Slide ${index + 1}`}" title="${slides[index]?.label}"></button>`,
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.src}>
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

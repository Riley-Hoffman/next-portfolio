'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y, Mousewheel } from 'swiper/modules'
import { CarouselButtons } from './CarouselButtons'
import { SlideData } from '@/app/types/carousel/SlideData.interface'
import { NewTabContent } from '@/app/components/shared/NewTabContent'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'
import { carouselStyle } from '@/app/utils/carouselStyle'

export const Carousel = ({ slides }: { slides: SlideData[] }) => {
  useEffect(() => {
    ; (async () => {
      await carouselStyle()
    })()
  }, [])

  return (
    <div className="relative max-w-7xl">
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
        {slides.map(({ src, url, label }) => (
          <SwiperSlide key={src}>
            <a href={url} {...EXTERNAL_LINK_ATTR}>
              <Image
                src={src}
                alt={label}
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

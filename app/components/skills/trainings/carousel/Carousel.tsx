'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper'
import { Pagination, Navigation, A11y, Mousewheel } from 'swiper/modules'
import { CarouselButtons } from './CarouselButtons'
import { SlideData } from '@/app/types/carousel/SlideData.interface'
import { MD, LG } from '@/app/constants/breakpoints'
import { certificateBlurData } from '@/app/constants/blurDataUrls'
import { carouselStyle } from '@/app/utils/carouselStyle'
import { useReady } from '@/app/hooks/shared/useReady'
import { LinkWrapper } from '@/app/components/shared/LinkWrapper'

export const Carousel = ({ slides }: { slides: SlideData[] }) => {
  const swiperRef = useRef<SwiperInstance | null>(null)
  const [isReady, onReady] = useReady()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    ;(async () => {
      await carouselStyle()
    })()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!swiperRef.current) return

      switch (e.key) {
        case 'ArrowLeft':
          swiperRef.current.slidePrev()
          break
        case 'ArrowRight':
          swiperRef.current.slideNext()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div
      className={clsx('relative max-w-7xl', {
        'h- pointer-events-none max-h-72 opacity-0 sm:max-h-[589.3px] md:max-h-[487.2px]':
          !isReady,
      })}
      aria-busy={!isReady}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y, Mousewheel]}
        navigation={{
          prevEl: '.carousel-button.prv',
          nextEl: '.carousel-button.nxt',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          dynamicBullets: true,
          dynamicMainBullets: 2,
          renderBullet: (index, className) =>
            `<button class="${className}" aria-label="${`Slide ${index + 1}`}", title="${slides[index]?.label}"></button>`,
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
          itemRoleDescriptionMessage: 'slide',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          setActiveIndex(swiper.realIndex)
          onReady()
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex)
        }}
      >
        {slides.map(({ src, url, label }, index) => {
          const isActiveOrNearby =
            index === activeIndex ||
            index === (activeIndex + 1) % slides.length ||
            index === (activeIndex - 1 + slides.length) % slides.length

          return (
            <SwiperSlide key={src}>
              <LinkWrapper href={url}>
                <Image
                  src={src}
                  alt={label}
                  width={900}
                  height={695}
                  sizes={`(max-width: ${MD}px) 100vw, (max-width: ${LG}px) 49vw, 630px`}
                  placeholder="blur"
                  blurDataURL={certificateBlurData}
                  loading={isActiveOrNearby ? 'eager' : 'lazy'}
                />
              </LinkWrapper>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div role="group" aria-label="Carousel controls">
        <CarouselButtons />
      </div>
    </div>
  )
}

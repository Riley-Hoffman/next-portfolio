'use client';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/custom-swiper.css';
import { Pagination, Navigation, A11y, Mousewheel } from 'swiper/modules';
import { CarouselButtons } from './CarouselButtons';

interface Slide {
  src: StaticImageData;
  label: string;
}

interface CarouselProps {
  slides: Slide[];
}

export const Carousel = ({ slides }: CarouselProps) => {
  return (
    <div className="relative max-w-7xl overflow-hidden" role="listbox" aria-label="Trainings & Certifications">
      <Swiper
        modules={[Navigation, Pagination, A11y, Mousewheel]}
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          renderBullet: (index, className) =>
            `<button class="${className}" aria-label="Slide ${index + 1}"></button>`,
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
            slidesPerView: 2
          }
        }}
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          paginationBulletMessage: 'Go to slide {{index}}',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={slide.label}
              className="max-w-full w-[900px]"
              width="900"
              height="695"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div role="group" aria-label="Carousel controls">
        <CarouselButtons />
      </div>
    </div>
  );
};

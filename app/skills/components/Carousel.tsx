'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/custom-swiper.css';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Slide {
  src: StaticImageData;
  label: string;
}

interface CarouselProps {
  slides: Slide[];
}

export const Carousel = ({ slides }: CarouselProps) => {
  const commonClasses = 'absolute top-1/2 transform -translate-y-1/2 bg-pink-100 rounded-full py-1 px-4 shadow-lg border border-purple-100 z-10 hover:bg-offwhite hover:border-zinc focus-visible:bg-offwhite focus-visible:border-zinc';

  return (
    <div className="relative max-w-[700px] overflow-hidden" role="listbox" aria-label="Trainings & Certifications">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
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
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
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
        <button aria-label="Previous slide" className={`prev-btn left-4 ${commonClasses}`}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button aria-label="Next slide" className={`next-btn right-4 ${commonClasses}`}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

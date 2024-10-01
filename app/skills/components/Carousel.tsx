'use client';
import { useState, useEffect, useRef } from 'react';
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
  const commonClasses = 'absolute top-1/2 transform -translate-y-1/2 bg-pink-100 rounded-full py-1 px-4 shadow-lg border border-purple-100 hover:bg-offwhite hover:border-zinc focus-visible:bg-offwhite focus-visible:border-zinc';
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClickable, setIsClickable] = useState(true);
  const [noTransition, setNoTransition] = useState(false);
  const transitionDuration = 500;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;
  const wrappedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

  const debounceClick = (callback: () => void) => {
    if (isClickable) {
      setIsClickable(false);
      callback();
      setTimeout(() => setIsClickable(true), transitionDuration);
    }
  };

  const navigate = (direction: 'next' | 'prev') => {
    debounceClick(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => direction === 'next' ? prev + 1 : prev - 1);
      }
    });
  };

  const goToNext = () => navigate('next');
  const goToPrev = () => navigate('prev');

  useEffect(() => {
    if (currentIndex === totalSlides + 1 || currentIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setNoTransition(true);
        setCurrentIndex(currentIndex === totalSlides + 1 ? 1 : totalSlides);
      }, transitionDuration);
    } else {
      setIsTransitioning(false);
      setNoTransition(false);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, totalSlides]);

  return (
    <div className="relative max-w-[700px] overflow-hidden" role="listbox" aria-label="Trainings & Certifications">
      <ol
        className={`flex ${isTransitioning && !noTransition ? 'transition-transform duration-500' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {wrappedSlides.map((slide, index) => (
          <li key={index} className="min-w-full h-fit flex items-center justify-center bg-gray-200">
            <Image
              src={slide.src}
              alt={slide.label}
              className="max-w-full w-[900px]"
              width="900"
              height="695"
            />
          </li>
        ))}
      </ol>
      <div role="group" aria-label="Carousel controls"> 
        <button
          aria-label="Previous slide"
          onClick={goToPrev}
          disabled={!isClickable}
          className={`left-4 ${commonClasses}`}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          aria-label="Next slide"
          onClick={goToNext}
          disabled={!isClickable}
          className={`right-4 ${commonClasses}`}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              role="option"
              aria-selected={idx + 1 === currentIndex}
              aria-label={`Slide ${idx + 1} ${idx + 1 === currentIndex ? '(current)' : ''}`}
              key={idx}
              onClick={() => debounceClick(() => setCurrentIndex(idx + 1))}
              disabled={!isClickable}
              className={`w-3 h-3 mb-2 rounded-full ${idx + 1 === currentIndex ? 'bg-purple-200' : 'bg-zinc'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

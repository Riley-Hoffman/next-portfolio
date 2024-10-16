import { useCallback, useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';
import { useScrollHandler } from './useScrollHandler'; 

export const useParallax = (
  velocity: number = 0.1,
  externalRef?: React.RefObject<HTMLDivElement>
): React.RefObject<HTMLDivElement> => {
  const prefersReducedMotion = useReducedMotion();
  const internalRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number>(0);

  const parallaxRef = externalRef ?? internalRef;

  const updateImagePosition = useCallback(() => {
    if (parallaxRef.current && !prefersReducedMotion) {
      const img = parallaxRef.current.querySelector('img');
      if (img) {
        const height = parallaxRef.current.offsetHeight - 18;
        const translateX = -(height - scrollRef.current) * velocity;
        const translateY = -(height - scrollRef.current) * (velocity + 0.1);

        img.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
        img.style.willChange = 'transform';
      }
    }
  }, [parallaxRef, prefersReducedMotion, velocity]);

  useScrollHandler(() => {
    scrollRef.current = window.scrollY;
    updateImagePosition();
  });

  useEffect(() => {
    updateImagePosition();
  }, [updateImagePosition]);

  return parallaxRef;
};

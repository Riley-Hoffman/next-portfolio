import { useEffect, useRef } from 'react';
import { useScrollY } from './useScrollY';
import { useReducedMotion } from './useReducedMotion';

export const useParallax = (velocity: number = 0.1): React.RefObject<HTMLDivElement> => {
    const prefersReducedMotion = useReducedMotion();
    const parallaxRef = useRef<HTMLDivElement>(null);
    const scrollPos = useScrollY();

    useEffect(() => {
        const updateImagePosition = () => {
            if (parallaxRef.current && !prefersReducedMotion) {
                const img = parallaxRef.current.querySelector('img');
                if (img) {
                    const height = parallaxRef.current.offsetHeight - 18;
                    const translateX = -(height - scrollPos) * velocity;
                    const translateY = -(height - scrollPos) * (velocity + 0.1);
                    
                    img.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
                    img.style.willChange = 'transform';
                }
            }
        };

        updateImagePosition();
    }, [scrollPos, velocity, prefersReducedMotion]);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateImagePosition();
                    ticking = false;
                });
                ticking = true;
            }
        };

        const updateImagePosition = () => {
            if (parallaxRef.current && !prefersReducedMotion) {
                const img = parallaxRef.current.querySelector('img');
                if (img) {
                    const height = parallaxRef.current.offsetHeight - 18;
                    const translateX = -(height - scrollPos) * velocity;
                    const translateY = -(height - scrollPos) * (velocity + 0.1);
                    
                    img.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos, velocity, prefersReducedMotion]);

    return parallaxRef;
};

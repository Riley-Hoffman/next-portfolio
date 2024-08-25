import { useEffect, useRef, useState } from 'react';

export const useParallax = (velocity: number = 0.1): React.RefObject<HTMLDivElement> => {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const [scrollPos, setScrollPos] = useState<number>(0);

    useEffect(() => {
        const updateImagePosition = () => {
            if (parallaxRef.current) {
                const img = parallaxRef.current.querySelector('img');
                if (img) {
                    const height = parallaxRef.current.offsetHeight - 18;
                    img.style.left = `-${Math.round((height - scrollPos) * velocity)}px`;
                    img.style.top = `-${Math.round((height - scrollPos) * (velocity + 0.1))}px`;
                }
            }
        };

        updateImagePosition();
    }, [scrollPos, velocity]);

    useEffect(() => {
        let ticking = false;

        const updateScrollPosition = () => {
            setScrollPos(window.scrollY);
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return parallaxRef;
}
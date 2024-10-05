import { useEffect, useRef } from 'react';

export const useScrollHandler = (onScroll: () => void) => {
    const ticking = useRef(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    onScroll();
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onScroll]);
};

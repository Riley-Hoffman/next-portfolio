'use client';
import { useRef, useEffect} from 'react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { useScrollHandler } from '../../../hooks/useScrollHandler'; 

interface MyJourneyWrapperProps {
    children: React.ReactNode;
}

export const MyJourneyWrapper: React.FC<MyJourneyWrapperProps> = ({ children }) => {
    const prefersReducedMotion = useReducedMotion();
    const sectionRef = useRef<HTMLElement | null>(null);
    const scrollRef = useRef<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            scrollRef.current = window.scrollY;
        }
    }, []);

    useScrollHandler(() => {
        scrollRef.current = window.scrollY;
        if (sectionRef.current && !prefersReducedMotion) {
            sectionRef.current.style.filter = `hue-rotate(${scrollRef.current / 2.7}deg)`;
        };

    });

    return (
        <section ref={sectionRef} className="pt-16 pb-10 bg-diamonds contrast-more:bg-none scroll-color motion-reduce:scroll-color:hue-rotate-0" style={{ filter: `hue-rotate(0deg)` }}>
            {children}
        </section>
    );
};

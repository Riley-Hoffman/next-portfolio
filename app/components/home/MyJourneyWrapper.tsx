'use client';
import { useScrollY } from '../../../hooks/useScrollY';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface MyJourneyWrapperProps {
    children: React.ReactNode;
}

export const MyJourneyWrapper: React.FC<MyJourneyWrapperProps> = ({ children }) => {
    const prefersReducedMotion = useReducedMotion();
    const scrollY = useScrollY();
    return (
        <section className="pt-16 pb-10 bg-diamonds contrast-more:bg-none scroll-color motion-reduce:scroll-color:hue-rotate-0" style={{filter: 'hue-rotate(' + (!prefersReducedMotion ? (scrollY / 2.7) : 0) + 'deg)'}}>
            {children}
        </section>
    );
};
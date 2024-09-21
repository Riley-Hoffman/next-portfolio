import Link from 'next/link';
import { useTimedEffect } from '../../../hooks/useTimedEffect';
import { useRef } from 'react';

interface LinkedInButtonWrapperProps {
    children: React.ReactNode;
}

export const LinkedInButtonWrapper: React.FC<LinkedInButtonWrapperProps> = ({ children }) => {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const { triggerEffect } = useTimedEffect(1000);

    const applyEffect = (isCounting: boolean) => {
        buttonRef.current?.classList.toggle('motion-safe:animate-[wiggle_1s]', isCounting);
    };

    return (
        <Link
            ref={buttonRef}
            className="inline-block button group"
            href="https://www.linkedin.com/in/riley-hoffman-014623213"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => triggerEffect(applyEffect)}
        >
            {children}
        </Link>
    );
};

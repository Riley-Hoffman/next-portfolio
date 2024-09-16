'use client';
import Link from 'next/link';
import { useTimedEffect } from '../../../hooks/useTimedEffect';

interface LinkedInButtonWrapperProps {
    children: React.ReactNode;
}

export const LinkedInButtonWrapper: React.FC<LinkedInButtonWrapperProps> = ({ children }) => {
    const { isCounting, triggerEffect } = useTimedEffect(1000);        
    return (
        <Link className={`inline-block ${isCounting ? 'motion-safe:animate-[wiggle_1s]' : ''} button group`} href="https://www.linkedin.com/in/riley-hoffman-014623213" target="_blank" rel="noopener noreferrer" onMouseEnter={triggerEffect}>
            {children}
        </Link>
    );
};
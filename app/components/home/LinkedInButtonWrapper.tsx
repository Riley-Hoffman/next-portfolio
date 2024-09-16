'use client';
import { useState } from 'react';
import Link from 'next/link';

interface LinkedInButtonWrapperProps {
    children: React.ReactNode;
}

export const LinkedInButtonWrapper: React.FC<LinkedInButtonWrapperProps> = ({ children }) => {
        const [isAnimating, setIsAnimating] = useState(false);

        const handleMouseEnter = () => {
            setIsAnimating(true);
            setTimeout(() => {
              setIsAnimating(false);
            }, 1000);
          };
        
    return (
        <Link className={`inline-block ${isAnimating ? 'motion-safe:animate-[wiggle_1s]' : ''} button group`} href="https://www.linkedin.com/in/riley-hoffman-014623213" target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseEnter}>
            {children}
        </Link>
    );
};
'use client';
import { useEffect } from 'react';

interface LazyLoadLinkProps {
  href: string;
  rel: string;
  targetSelector: string;
}

export const LazyLoadLink: React.FC<LazyLoadLinkProps> = ({ href, rel, targetSelector }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const link = document.createElement('link');
          link.rel = rel;
          link.href = href;
          document.head.appendChild(link);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [href, rel, targetSelector]);

  return null;
};

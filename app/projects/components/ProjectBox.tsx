'use client';
import { useEffect } from 'react';
import { useTriggerOnScroll } from '../../../hooks/useTriggerOnScroll';

interface ProjectBoxProps {
  inverted?: string;
  animation?: string;
  isFirst?: boolean;
  children: React.ReactNode;
}

export const ProjectBox = ({ inverted, animation, isFirst, children, }: ProjectBoxProps) =>  { 
  const elementsRef = useTriggerOnScroll();

  useEffect(() => {
    if (elementsRef.current) {
      const element = elementsRef.current[elementsRef.current.length - 1];
      if (element && animation) {
        const animationClasses = animation.trim().split(/\s+/);
        animationClasses.forEach((className) => {
          element.classList.add(className);
        });
      }
    }
  }, [elementsRef, animation]);

  return (
    <li className={`relative my-28 border-t-8 border-solid gap-14 gradient-border ${inverted} transition-all duration-1000 ease ${isFirst ? 'mt-12' : 'mt-0'} [&.inverted]:flex-row-reverse md:flex group`} ref={(el) => { if (el) { elementsRef.current.push(el); } }}>
      {children}
      <div className="bg-purple-100 rounded-[50%] -z-10 opacity-10 absolute inset-0 top-[5%] oval" />
    </li>
  );
};

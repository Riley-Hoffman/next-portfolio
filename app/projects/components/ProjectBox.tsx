'use client';
import { useEffect } from 'react';
import { ProjectContent } from './ProjectContent';
import { useTriggerOnScroll } from '../../../hooks/useTriggerOnScroll';

interface ProjectBoxProps {
  title: string;
  skills: string;
  description: string;
  internal?: boolean;
  liveUrl: string;
  gitUrl?: string;
  imgAlt: string;
  imgUrl: string;
  animation?: string;
  inverted?: string;
  isFirst?: boolean;
}

export const ProjectBox: React.FC<ProjectBoxProps> = ({
  title,
  skills,
  description,
  internal,
  liveUrl,
  gitUrl,
  imgAlt,
  imgUrl,
  animation,
  inverted,
  isFirst,
}) => {
  const elementsRef = useTriggerOnScroll();

  useEffect(() => {
    if (elementsRef.current) {
      const element = elementsRef.current[elementsRef.current.length - 1];
      if (element) {
        element.classList.add('trigger-on-scroll');
      }
    }
  }, [elementsRef]);

  return (
    <li className={`relative my-28 border-t-8 border-solid gap-14 gradient-border ${inverted} ${animation} transition-all duration-1000 ease ${isFirst ? 'mt-12' : 'mt-0'} even:flex-row-reverse md:flex group`} ref={(el) => { if (el) { elementsRef.current.push(el); } }} >
      <ProjectContent title={title} skills={skills} description={description} internal={internal} liveUrl={liveUrl} gitUrl={gitUrl} imgAlt={imgAlt} imgUrl={imgUrl} isFirst={isFirst} />
      <div className={`bg-purple-100 rounded-[50%] z-[-1] opacity-10 absolute top-[5%] right-0 bottom-0 left-0 oval ${ inverted ? 'group-odd:left-[-100%]' : 'group-even:right-[-100%]' }`} />
    </li>
  );
};

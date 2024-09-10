'use client'
import { useTriggerOnScroll } from '../../hooks/useTriggerOnScroll';

interface Tech {
  name: string;
  logo: string;
  url: string;
}

interface SiteTechStackClientProps {
  technologies: Tech[];
}

export const SiteTechStack: React.FC<SiteTechStackClientProps> = ({ technologies }) => {
  const elementsRef = useTriggerOnScroll();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl min-h-40" aria-label="Site tech stack.">
      {technologies.map((tech) => (
        <li key={tech.name} className="overflow-hidden relative md:motion-safe:h-[0px] [&[data-active='true']]:h-[160px] transition-all first:duration-300 [&:nth-child(2)]:duration-500 [&:nth-child(3)]:duration-700 last:duration-1000 ease" ref={(el) => { if (el) { elementsRef.current.push(el); } }}>
            <a className="p-5 mx-auto w-fit min-w-[13.1rem] min-h-[9.5rem] no-underline block bg-pink-100 hover:bg-zinc hover:text-pink-100 transition-shadow duration-300" href={tech.url}  target="_blank" rel="noopener noreferrer">
              <i className={`${tech.logo} mx-auto text-7xl`} aria-hidden="true"></i>
              <p className="my-1 text-xl">{tech.name}</p>
            </a>
        </li>
      ))}
    </ul>
  );
};

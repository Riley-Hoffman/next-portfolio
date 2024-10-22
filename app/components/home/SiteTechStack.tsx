import { useMemo, useEffect } from 'react';
import { useTriggerOnScroll } from '../../../hooks/useTriggerOnScroll';

interface Tech {
  name: string;
  logo: string;
  url: string;
}

export const SiteTechStack = () => {
    const technologies: Tech[] = [
      { name: 'React', logo: 'devicon-react-original', url: 'https://react.dev' },
      { name: 'Next.js', logo: 'devicon-nextjs-plain', url: 'https://nextjs.org' },
      { name: 'TypeScript', logo: 'devicon-typescript-plain', url: 'https://www.typescriptlang.org' },
      { name: 'Tailwind CSS', logo: 'devicon-tailwindcss-original', url: 'https://tailwindcss.com' },
      { name: 'Firebase', logo: 'devicon-firebase-plain', url: 'https://firebase.google.com' },
    ];
    const elementsRef = useTriggerOnScroll();
    const animation = useMemo(() => [
      "md:motion-safe:h-[0px]",
      "[&[data-active='true']]:h-[160px]",
      "transition-all",
      "first:duration-150",
      "[&:nth-child(2)]:duration-300",
      "[&:nth-child(3)]:duration-500",
      "[&:nth-child(4)]:duration-700",
      "last:duration-1000",
      "ease"
    ], []);
    useEffect(() => {
      if (elementsRef.current) {
        elementsRef.current.forEach((element: HTMLElement) => {
          animation.forEach((className) => {
            element.classList.add(className);
          });
        });
      }
    }, [animation, elementsRef]);

    return (
    <>
      <h2 className="text-2xl font-inconsolata mb-8">Technologies Used To Build This Site</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 lg:gap-x-6 max-w-6xl min-h-40" aria-label="Site tech stack.">
        {technologies.map((tech, index) => (
          <li 
            key={tech.name} 
            className={`relative lg:col-auto sm:col-auto ${
            index === technologies.length - 2 && 'md:col-start-1'} ${index === technologies.length - 1 && 'md:col-start-3'}`} 
            ref={(el) => { if (el) { elementsRef.current.push(el); } }}
          >
              <a className="shadow-[#12121c_4px_4px_0_0] rounded-md p-5 mx-auto w-fit min-w-[13.1rem] min-h-[9.5rem] no-underline block bg-pink-100 hover:bg-zinc hover:text-pink-100 hover:shadow-none focus-visible:bg-zinc focus-visible:text-pink-100 focus-visible:shadow-none transition-shadow duration-400 active:min-h-fit" href={tech.url}  target="_blank" rel="noopener noreferrer">
                <i className={`${tech.logo} mx-auto text-7xl`} aria-hidden="true"></i>
                <p className="my-1 text-xl" translate="no">{tech.name}</p>
              </a>
          </li>
        ))}
      </ul>
    </>
  );
};

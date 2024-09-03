
interface Tech {
  name: string;
  logo: string;
  url: string;
}

const technologies: Tech[] = [
  {
    name: 'React',
    logo: 'devicon-react-original',
    url: 'https://react.dev',
  },
  {
    name: 'Next.js',
    logo: 'devicon-nextjs-original-wordmark',
    url: 'https://nextjs.org',
  },
  {
    name: 'TypeScript',
    logo: 'devicon-typescript-plain',
    url: 'https://www.typescriptlang.org',
  },
  {
    name: 'Tailwind CSS',
    logo: 'devicon-tailwindcss-original',
    url: 'https://tailwindcss.com',
  },
];

export const SiteTechStack: React.FC = () => {
  return (
    <section className="pt-8 pb-12 border-solid border-t-2 gradient-border" id="siteTechStack">
      <div className="max-w-screen-xl container mx-auto text-center">
        <h2 className="text-2xl font-inconsolata mb-8">Technologies Used To Build This Site</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl" aria-label="Site tech stack.">
          {technologies.map((tech) => (
            <li key={tech.name}>
                <a className="p-5 mx-auto w-fit min-w-[13.1rem] min-h-[9.5rem] no-underline block bg-pink-100 hover:bg-zinc hover:text-pink-100 transition-shadow duration-300" href={tech.url}  target="_blank" rel="noopener noreferrer">
                <i className={`${tech.logo} mx-auto text-7xl`} aria-hidden="true"></i>
                <p className="my-1 text-xl">{tech.name}</p>
                </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

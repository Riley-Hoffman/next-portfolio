import { Icon } from '@iconify/react'
import { NewTabContent } from '@/app/components/utils/NewTabContent'
import packageJson from '@/package.json'
import './styles/site-tech-stack.css'

interface Tech {
  name: string
  logo: string
  url: string
  version: string
}
const technologies: Tech[] = [
  {
    name: 'React',
    logo: 'cib:react',
    url: 'https://react.dev',
    version: packageJson.dependencies.react,
  },
  {
    name: 'Next.js',
    logo: 'devicon-plain:nextjs',
    url: 'https://nextjs.org',
    version: packageJson.dependencies.next,
  },
  {
    name: 'TypeScript',
    logo: 'cib:typescript',
    url: 'https://www.typescriptlang.org',
    version: packageJson.dependencies.typescript,
  },
  {
    name: 'Tailwind CSS',
    logo: 'bxl:tailwind-css',
    url: 'https://tailwindcss.com',
    version: packageJson.dependencies.tailwindcss,
  },
  {
    name: 'Firebase',
    logo: 'bxl:firebase',
    url: 'https://firebase.google.com',
    version: packageJson.dependencies.firebase,
  },
]

export const SiteTechStack = () => {
  return (
    <>
      <section className="gradient-border border-t-2 border-solid pb-12 pt-2 text-center">
        <h2 className="reg-caps mb-1 font-inconsolata text-2xl">
          Technologies Used To Build This Site
        </h2>
        <ul
          className="block min-h-40 max-w-6xl sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5"
          aria-label="Site tech stack."
        >
          {technologies.map((tech) => (
            <li key={tech.name} className="relative pt-8">
              <a
                className="tech-button"
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={tech.logo} className="text-7xl" />
                <span className="mt-2 block text-lg leading-none">
                  {tech.name}
                  <NewTabContent />
                </span>
                {tech.version}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

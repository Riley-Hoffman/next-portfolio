import packageJson from '@/package.json'
import { Tech } from '@/app/types/home/Tech.interface'

const dependencies = packageJson.dependencies

export const TECHNOLOGIES: Tech[] = [
  {
    name: 'React',
    logo: 'cib:react',
    url: 'https://react.dev',
    version: dependencies.react,
  },
  {
    name: 'Next.js',
    logo: 'devicon-plain:nextjs',
    url: 'https://nextjs.org',
    version: dependencies.next,
  },
  {
    name: 'TypeScript',
    logo: 'cib:typescript',
    url: 'https://www.typescriptlang.org',
    version: dependencies.typescript,
  },
  {
    name: 'Tailwind CSS',
    logo: 'bxl:tailwind-css',
    url: 'https://tailwindcss.com',
    version: dependencies.tailwindcss,
  },
  {
    name: 'Firebase',
    logo: 'bxl:firebase',
    url: 'https://firebase.google.com',
    version: dependencies.firebase,
  },
]

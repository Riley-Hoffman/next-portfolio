import packageJson from '@/package.json'
import { Tech } from '@/app/types/home/Tech.interface'

export const TECHNOLOGIES: Tech[] = [
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

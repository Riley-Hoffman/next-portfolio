import { TechItem } from './TechItem'
import { TECHNOLOGIES } from '@/app/constants/home/technologies'
import '@/app/styles/home/site-tech-stack.css'

const SiteTechStack = () => (
  <>
    <section className="gradient-border border-t-2 pb-12 pt-2 text-center">
      <h2 className="reg-caps mb-1 font-inconsolata text-2xl">
        Technologies Used To Build This Site
      </h2>
      <ul
        className="block min-h-40 max-w-6xl sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5"
        aria-label="Site tech stack."
      >
        {TECHNOLOGIES.map((tech) => (
          <TechItem key={tech.name} {...tech} />
        ))}
      </ul>
    </section>
  </>
)

export default SiteTechStack

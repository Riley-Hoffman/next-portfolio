import { TechItem } from './TechItem'
import { TECHNOLOGIES } from '@/app/constants/home/technologies'
import '@/app/styles/home/site-tech.css'

const SiteTech = () => (
  <>
    <section className="site-tech">
      <h2 className="reg-caps">Technologies Used To Build This Site</h2>
      <ul className="max-w-6xl" aria-label="Site tech stack.">
        {TECHNOLOGIES.map((tech) => (
          <TechItem key={tech.name} {...tech} />
        ))}
      </ul>
    </section>
  </>
)

export default SiteTech

import { SKILLS_DATA } from '@/app/constants/skills/skillsData'
import { SkillItem } from './SkillItem'
import '@/app/styles/skills/skills.css'
import '@/app/styles/shared/background-accent.css'

export const SkillsSection = () => (
  <>
    <h1 className="heading-one">Skills</h1>
    <section className="pb-16">
      <ul className="skills background-accent max-w-5xl" aria-label="Skills">
        {SKILLS_DATA.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </ul>
    </section>
  </>
)

import { SKILLS_DATA } from './SkillsData'
import { SkillItem } from './SkillItem'
import '@/app/styles/shared/background-accent.css'

export const SkillsSection = () => (
  <section className="pb-16">
    <h1 className="heading-one">Skills</h1>
    <div className="background-accent relative max-w-5xl after:inset-12 after:rounded-full">
      <ul
        className="mt-12 grid grid-cols-2 justify-items-center gap-x-6 gap-y-16 py-14 sm:grid-cols-3 md:grid-cols-4"
        aria-label="Skills"
      >
        {SKILLS_DATA.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </ul>
    </div>
  </section>
)

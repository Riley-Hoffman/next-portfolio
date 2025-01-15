import { skillsData } from './SkillsData'
import { SkillItem } from './SkillItem'
import { BackgroundAccent } from '@/app/components/decorative/BackgroundAccent'

export const SkillsSection = () => (
  <section className="pb-16">
    <h1 className="heading-one">Skills</h1>
    <div className="relative max-w-5xl">
      <ul
        className="mt-12 grid grid-cols-2 justify-items-center gap-x-6 gap-y-16 pb-12 pt-14 sm:grid-cols-3 md:grid-cols-4"
        aria-label="Skills"
      >
        {skillsData.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </ul>
      <BackgroundAccent classes="inset-x-[5%] bottom-[3%] top-[5%] rounded-full" />
    </div>
  </section>
)

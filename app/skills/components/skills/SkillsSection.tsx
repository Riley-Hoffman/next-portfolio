import { skillsData } from "./SkillsData"
import { SkillItem } from "./SkillItem"
import { OvalDecor } from "@/app/components/decorative/OvalDecor"

export const SkillsSection = () => (
  <section className="pb-16">
    <h1 className="heading-one">Skills</h1>
    <div className="relative max-w-screen-xl">
      <ul
        className="mt-12 grid max-w-5xl grid-cols-2 justify-items-center gap-x-6 gap-y-16 pb-12 pt-14 sm:grid-cols-3 md:grid-cols-4"
        aria-label="Skills"
      >
        {skillsData.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </ul>
      <OvalDecor />
    </div>
  </section>
)

import { Icon } from "@iconify/react"
import { Skill } from "./SkillsData"

export const SkillItem = ({ skill, icon, classes }: Skill) => (
  <li className="text-center">
    <div className="skill-icon-box flex min-h-11 items-center justify-center">
      {icon && (
        <Icon className={`text-5xl outline-black${classes}`} icon={icon} />
      )}
    </div>
    <p className="mt-1 text-xl" translate="no">
      {skill}
    </p>
  </li>
)

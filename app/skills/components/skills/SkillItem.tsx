import { Icon } from "@iconify/react"
import { Skill } from "./SkillsData"

export const SkillItem = ({ skill, icon, classes }: Skill) => (
  <li className="text-center min-h-11">
    {icon && (
      <Icon className={`text-5xl outline-black${classes}`} icon={icon} />
    )}
    <p className="mt-1 text-xl">{skill}</p>
  </li>
)

import clsx from 'clsx'
import { Icon } from '@iconify/react'
import { Skill } from '@/app/types/skills/Skill.interface'

export const SkillItem = ({ skill, icon, classes }: Skill) => (
  <li>
    {icon && (
      <div>
        <Icon className={clsx(classes)} icon={icon} />
      </div>
    )}
    <p>{skill}</p>
  </li>
)

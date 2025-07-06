import clsx from 'clsx'
import { Icon } from '@iconify/react'
import { Skill } from '@/app/types/skills/Skill.interface'

export const SkillItem = ({ skill, icon, classes }: Skill) => (
  <li className="min-h-24 text-center">
    {icon && (
      <div className="min-h-12">
        <Icon className={clsx('text-5xl', classes)} icon={icon} />
      </div>
    )}
    <p className="mb-4 mt-1 text-xl">{skill}</p>
  </li>
)

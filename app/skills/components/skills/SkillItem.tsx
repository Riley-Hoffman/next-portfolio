import clsx from 'clsx'
import { Icon } from '@iconify/react'
import { Skill } from './SkillsData'

export const SkillItem = ({ skill, icon, classes }: Skill) => (
  <li className="min-h-11 text-center">
    {icon && <Icon className={clsx('text-5xl', classes)} icon={icon} />}
    <p className="mt-1 text-xl">{skill}</p>
  </li>
)

import { Icon } from '@iconify/react'
import clsx from 'clsx'

interface MedalCriteriaProps {
  bgClass: string
  srText: string
  time: string
  icon?: string
}

export const MedalCriteria = ({
  bgClass,
  srText,
  time,
  icon,
}: MedalCriteriaProps) => (
  <li className={clsx('mr-9 before:text-[#fbfdff]', bgClass)}>
    <span className="sr-only">{srText}</span>
    <span aria-hidden={true}>
      {icon && <Icon icon={icon} />} {time}
    </span>
  </li>
)

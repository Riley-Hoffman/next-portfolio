import { Icon } from '@iconify/react'
import { MedalCriteriaData } from '@/app/types/particle-cleanup/Medal.types'

export const MedalCriteria = ({
  name,
  color,
  srText,
  time,
}: MedalCriteriaData) => (
  <li>
    <Icon icon="fa6-solid:medal" color={color} />
    <span className="sr-only">{`${name}, ${srText}.`}</span>
    <span aria-hidden={true}> {time}</span>
  </li>
)

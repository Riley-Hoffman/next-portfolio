import clsx from 'clsx'
import { MedalRequirements } from '@/app/types/particle-cleanup/Medal.types'

export const MedalCriteria = ({
  name,
  bgClass,
  srText,
  time,
}: MedalRequirements) => (
  <li
    className={clsx(
      'before:text-[#fbfdff]) mr-9 before:content-["✔"]',
      bgClass
    )}
  >
    <span className="sr-only">
      {name}, {srText}.
    </span>
    <span aria-hidden={true}>{time}</span>
  </li>
)

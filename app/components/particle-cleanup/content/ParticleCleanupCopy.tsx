import { MedalCriteria } from './MedalCriteria'
import '@/app/styles/shared/numbered-icons.css'
import { MEDAL_CONFIG } from '@/app/constants/particle-cleanup/medalConfig'

type MedalDisplayData = {
  bgClass: string
  srText: string
  time: string
  icon?: string
}
const goldConfig = MEDAL_CONFIG.gold
const silverConfig = MEDAL_CONFIG.silver
const bronzeConfig = MEDAL_CONFIG.bronze

const medalData: MedalDisplayData[] = [
  {
    bgClass: goldConfig.bgClass,
    srText: goldConfig.srText,
    time: goldConfig.time,
    icon: goldConfig.icon,
  },
  {
    bgClass: silverConfig.bgClass,
    srText: silverConfig.srText,
    time: silverConfig.time,
  },
  {
    bgClass: bronzeConfig.bgClass,
    srText: bronzeConfig.srText,
    time: bronzeConfig.time,
  },
]

export const ParticleCleanupCopy = () => (
  <>
    <h2>React, TSX, SCSS</h2>
    <p>
      How quickly can you clear all the stars from the board using your cursor
      or finger?
    </p>
    <ol
      className="numbered-icons mb-1 pl-10 pr-5 py-3 text-xl sm:flex md:text-2xl"
      aria-label="Medal Criteria"
    >
      {medalData.map(({ bgClass, srText, time, icon }) => (
        <MedalCriteria
          key={srText}
          bgClass={bgClass}
          srText={srText}
          time={time}
          icon={icon}
        />
      ))}
    </ol>
  </>
)

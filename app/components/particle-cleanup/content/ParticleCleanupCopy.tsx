import { MedalCriteria } from './MedalCriteria'
import '@/app/styles/shared/numbered-icons.css'
import { MEDAL_CONFIG } from '@/app/constants/particle-cleanup/medalConfig'

type MedalDisplayData = {
  bgClass: string
  srText: string
  time: string
  icon?: string
}

const medalData: MedalDisplayData[] = [
  {
    bgClass: MEDAL_CONFIG.gold.bgClass,
    srText: MEDAL_CONFIG.gold.srText,
    time: MEDAL_CONFIG.gold.time,
    icon: MEDAL_CONFIG.gold.icon,
  },
  {
    bgClass: MEDAL_CONFIG.silver.bgClass,
    srText: MEDAL_CONFIG.silver.srText,
    time: MEDAL_CONFIG.silver.time,
  },
  {
    bgClass: MEDAL_CONFIG.bronze.bgClass,
    srText: MEDAL_CONFIG.bronze.srText,
    time: MEDAL_CONFIG.bronze.time,
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
      className="numbered-icons icon-color mb-1 pl-10 pr-5 text-xl sm:flex md:text-2xl"
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

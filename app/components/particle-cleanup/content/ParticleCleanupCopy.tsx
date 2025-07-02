import { MedalCriteria } from './MedalCriteria'
import '@/app/styles/shared/custom-list.css'
import { MEDAL_CONFIG } from '@/app/constants/particle-cleanup/medalConfig'
import { MedalRequirements } from '@/app/types/particle-cleanup/Medal.types'

const medalData: MedalRequirements[] = [
  {
    name: MEDAL_CONFIG.gold.name,
    bgClass: MEDAL_CONFIG.gold.bgClass,
    srText: MEDAL_CONFIG.gold.srText,
    time: MEDAL_CONFIG.gold.time,
  },
  {
    name: MEDAL_CONFIG.silver.name,
    bgClass: MEDAL_CONFIG.silver.bgClass,
    srText: MEDAL_CONFIG.silver.srText,
    time: MEDAL_CONFIG.silver.time,
  },
  {
    name: MEDAL_CONFIG.bronze.name,
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
    <ul
      className="custom-bullet mb-1 py-3 pl-10 pr-5 text-xl sm:flex md:text-2xl"
      aria-label="Medal Criteria"
    >
      {medalData.map(({ name, bgClass, srText, time }) => (
        <MedalCriteria
          key={srText}
          name={name}
          bgClass={bgClass}
          srText={srText}
          time={time}
        />
      ))}
    </ul>
  </>
)

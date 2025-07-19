import { MedalCriteria } from './MedalCriteria'
import { getMedalCriteriaArray } from '@/app/constants/particle-cleanup/medalConfig'
import { MedalCriteriaData } from '@/app/types/particle-cleanup/Medal.types'

const medalData: MedalCriteriaData[] = getMedalCriteriaArray()

export const ParticleCleanupCopy = () => (
  <>
    <h2 className="particle-tech">React, TSX, Tailwind</h2>
    <p>
      How quickly can you clear all the stars from the board using your cursor
      or finger?
    </p>
    <ul aria-label="Medal Criteria">
      {medalData.map(({ name, color, srText, time }) => (
        <MedalCriteria
          key={name}
          name={name}
          color={color}
          srText={srText}
          time={time}
        />
      ))}
    </ul>
  </>
)

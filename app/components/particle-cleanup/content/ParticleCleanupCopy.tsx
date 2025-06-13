import { MedalCriteria } from './MedalCriteria'
import '@/app/styles/shared/numbered-icons.css'

const medalData = [
  {
    bgClass: 'before:bg-[#8a7400]',
    srText: 'Gold, Less Than 15 seconds.',
    time: '15s',
    icon: 'hugeicons:less-than',
  },
  {
    bgClass: 'before:bg-[#737373]',
    srText: 'Silver, 15 to 20 seconds.',
    time: '15s-20s',
  },
  {
    bgClass: 'before:bg-[#a2652a]',
    srText: 'Bronze, 21 to 25 seconds.',
    time: '21s-25s',
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

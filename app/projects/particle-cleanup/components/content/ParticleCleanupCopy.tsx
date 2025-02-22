import { MedalCriteria } from './MedalCriteria'
import '@/app/styles/numbered-icons.css'

export const ParticleCleanupCopy = () => (
  <>
    <h2>React, TSX, SCSS</h2>
    <p>
      How quickly can you clear all the particles from the board using your
      cursor or finger?
    </p>
    <ol
      className="numbered-icons icon-color mb-1 pl-10 pr-5 text-xl sm:flex md:text-2xl"
      aria-label="Medal Criteria"
    >
      <MedalCriteria
        bgClass="before:bg-[#8a7400]"
        srText="Gold, Less Than 15 seconds."
        ariaText="15s"
        icon="hugeicons:less-than"
      />
      <MedalCriteria
        bgClass="before:bg-[#737373]"
        srText="Silver, 15 to 20 seconds."
        ariaText="15s-20s"
      />
      <MedalCriteria
        bgClass="before:bg-[#a2652a]"
        srText="Bronze, 21 to 25 seconds."
        ariaText="21s-25s"
      />
    </ol>
  </>
)

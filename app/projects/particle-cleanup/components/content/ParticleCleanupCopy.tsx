import { Icon } from '@iconify/react'

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
      <li className="before:bg-[#8a7400] before:text-[#fbfdff]">
        <span className="sr-only">Gold, Less Than 15 seconds.</span>
        <span aria-hidden={true}>
          <Icon icon="hugeicons:less-than" /> 15s &nbsp;&nbsp;
        </span>
      </li>
      <li className="before:bg-[#737373] before:text-[#fbfdff]">
        <span className="sr-only">Silver, 15 to 20 seconds.</span>
        <span aria-hidden={true}>15s-20s &nbsp;&nbsp;</span>
      </li>
      <li className="before:bg-[#a2652a] before:text-[#fbfdff]">
        <span className="sr-only">Bronze, 21 to 25 seconds.</span>
        <span aria-hidden={true}>21s-25s &nbsp;&nbsp;</span>
      </li>
    </ol>
  </>
)

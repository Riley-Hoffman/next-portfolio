import { useState } from 'react'
import { useRoutes } from '@/hooks/useRoutes'
import { Hamburger } from './hamburger/Hamburger'
import { NavListItem } from './NavListItem'
import { useHideShowLinks } from './hooks/useHideShowLInks'

export const Nav = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const hide = useHideShowLinks(isExpanded, 500)

  return (
    <nav>
      <Hamburger expanded={setIsExpanded} />
      <ul
        className="shadow-[0_0.128px_1rem_-0.56rem] peer-aria-expanded:scale-100"
        aria-label="Menu Links"
      >
        {useRoutes('filtered').map(({ to, label }) => (
          <NavListItem key={to} to={to} label={label} hide={hide} />
        ))}
        <NavListItem resume="/riley-hoffman-resume.pdf" hide={hide} />
      </ul>
    </nav>
  )
}

import { useState } from 'react'
import { useRoutes } from '@/app/hooks/shared/useRoutes'
import { Hamburger } from './hamburger/Hamburger'
import { NavListItem } from './NavListItem'
import { useLinkVisibility } from '@/app/hooks/nav/useLinkVisibility'

export const Nav = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const MAIN_ROUTES = useRoutes('main')
  const hide = useLinkVisibility(isExpanded, 500)

  return (
    <nav>
      <Hamburger expanded={setIsExpanded} />
      <ul
        className="shadow-[0_0.128px_1rem_-0.56rem] peer-aria-expanded:scale-100"
        aria-label="Menu Links"
      >
        {MAIN_ROUTES.map(({ to, label }) => (
          <NavListItem key={to} to={to} label={label} hide={hide} />
        ))}
        <NavListItem resume="/riley-hoffman-resume.pdf" hide={hide} />
      </ul>
    </nav>
  )
}

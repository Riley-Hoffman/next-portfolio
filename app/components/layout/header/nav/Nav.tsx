import { useState } from 'react'
import { useRoutes } from '@/app/hooks/shared/useRoutes'
import { Hamburger } from './Hamburger'
import { NavListItem } from './NavListItem'
import { useLinkVisibility } from '@/app/hooks/nav/useLinkVisibility'

export const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const MAIN_ROUTES = useRoutes('main')
  const hide = useLinkVisibility(isExpanded, 500)

  return (
    <nav aria-label="Main menu">
      <Hamburger expanded={setIsExpanded} />
      <ul
        className="peer-aria-expanded:scale-100"
        aria-label="Main navigation links"
      >
        {MAIN_ROUTES.map(({ to, label }) => (
          <NavListItem key={to} to={to} label={label} hide={hide} />
        ))}
        <NavListItem resume="/riley-hoffman-resume.pdf" hide={hide} />
      </ul>
    </nav>
  )
}

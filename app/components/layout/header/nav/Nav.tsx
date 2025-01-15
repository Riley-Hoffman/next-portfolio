import { useState } from 'react'
import { useRoutes } from '@/hooks/useRoutes'
import { Hamburger } from './Hamburger'
import { NavListItem } from './NavListItem'
import { useHideShowLinks } from './hooks/useHideShowLInks'

export const Nav = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const hide = useHideShowLinks(isExpanded, 500)

  return (
    <nav className="h-10 min-w-36 md:order-2">
      <Hamburger expanded={setIsExpanded} />
      <ul
        className="w-38 relative right-0 top-6 z-20 m-0 origin-right scale-x-0 text-base shadow-[0_0.128px_1rem_-0.56rem] shadow-black transition-transform duration-200 ease-in-out peer-aria-expanded:scale-100 sm:w-52 md:static md:w-auto md:scale-x-100 md:shadow-none"
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

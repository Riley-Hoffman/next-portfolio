'use client'
import { useState, useEffect } from 'react'
import { useRoutes } from '@/hooks/useRoutes'
import { Hamburger } from './Hamburger'
import { NavListItem } from './NavListItem'

export const Nav = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [hide, setHide] = useState<boolean>(false)

  const handleHamburgerClick = (expanded: boolean) => {
    setIsExpanded(expanded)
  }

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    const handleHideShowLinks = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      if (window.innerWidth <= 700 && !isExpanded) {
        timeoutId = setTimeout(() => {
          setHide(true)
        }, 500)
      } else {
        setHide(false)
      }
    }

    window.addEventListener('resize', handleHideShowLinks)
    handleHideShowLinks()

    return () => {
      window.removeEventListener('resize', handleHideShowLinks)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isExpanded])

  return (
    <nav className="h-10 min-w-36 md:order-2">
      <Hamburger expanded={handleHamburgerClick} />
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

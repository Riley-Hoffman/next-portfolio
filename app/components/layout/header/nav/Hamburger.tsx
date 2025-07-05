import { useEffect } from 'react'
import { useHamburger } from '@/app/hooks/nav/useHamburger'
import { HamburgerProps } from '@/app/types/nav/Hamburger.interface'

export const Hamburger = ({ expanded }: HamburgerProps) => {
  const { isExpanded, toggleMenu, hamburgerRef } = useHamburger({ expanded })

  useEffect(() => {
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.remove('hidden')
    }
  }, [hamburgerRef])

  const commonClasses = `
    group-aria-expanded:w-0 
    group-aria-expanded:-rotate-45 
    group-aria-expanded:border-0 
    group-aria-expanded:transition-none
  `

  return (
    <>
      <button
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Close Menu' : 'Open Menu'}
        onClick={toggleMenu}
        ref={hamburgerRef}
        className="hamburger group peer hidden"
      >
        <span className={`hamburger-line ${commonClasses}`}></span>
        <span className="hamburger-line group-aria-expanded:-rotate-45"></span>
        <span className="hamburger-line group-aria-expanded:rotate-45"></span>
        <span className={`hamburger-line ${commonClasses}`}></span>
      </button>
      {isExpanded && (
        <button className="closer" onClick={toggleMenu} aria-hidden={true}>
          Close Menu on Background Click
        </button>
      )}
    </>
  )
}

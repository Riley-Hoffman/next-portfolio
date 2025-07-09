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

  return (
    <>
      <button
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Close Menu' : 'Open Menu'}
        onClick={toggleMenu}
        ref={hamburgerRef}
        className="hamburger group peer hidden"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span className="hamburger-line" key={i}></span>
        ))}
      </button>
      {isExpanded && (
        <button className="closer" onClick={toggleMenu} aria-hidden={true}>
          Close Menu on Background Click
        </button>
      )}
    </>
  )
}

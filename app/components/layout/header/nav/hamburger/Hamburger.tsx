import Head from 'next/head'
import { HamburgerLine } from './HamburgerLine'
import { useHamburger } from '@/app/hooks/nav/useHamburger'
import { HamburgerProps } from '@/app/types/nav/HamburgerProps.interface'

export const Hamburger = ({ expanded }: HamburgerProps) => {
  const { isExpanded, toggleMenu, hamburgerRef } = useHamburger({ expanded })

  const commonClasses = `
    group-aria-expanded:rotate-4 
    group-aria-expanded:left-3 
    group-aria-expanded:top-5 
    group-aria-expanded:w-0 
    group-aria-expanded:-rotate-45 
    group-aria-expanded:border-0 
    group-aria-expanded:transition-none
  `

  return (
    <>
      <Head>
        <noscript>
          <style>{`.hamburger { display: none; }`}</style>
        </noscript>
      </Head>
      <button
        id="hamburger"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Close Menu' : 'Open Menu'}
        onClick={toggleMenu}
        ref={hamburgerRef}
        className="hamburger group peer"
      >
        <HamburgerLine classes={commonClasses} />
        <HamburgerLine classes="group-aria-expanded:-rotate-45" />
        <HamburgerLine classes="group-aria-expanded:rotate-45" />
        <HamburgerLine classes={commonClasses} />
      </button>
      {isExpanded && (
        <button className="closer" onClick={toggleMenu} aria-hidden={true}>
          Close Menu on Background Click
        </button>
      )}
    </>
  )
}

import Head from 'next/head'
import { useHamburger } from '@/app/hooks/nav/useHamburger'

export interface HamburgerProps {
  expanded?: (isExpanded: boolean) => void
}

export const Hamburger = ({ expanded }: HamburgerProps) => {
  const { isExpanded, toggleMenu, hamburgerRef } = useHamburger({ expanded })

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
        {[...Array(4)].map((_, index) => (
          <span
            key={`line-${index}`}
            className="hamburger-line group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:left-3 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:top-5 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:w-0 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:border-0 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:transition-none group-aria-expanded:[&:nth-child(2)]:rotate-45 group-aria-expanded:[&:nth-child(3)]:-rotate-45"
          ></span>
        ))}
      </button>
      <button
        className="closer peer-aria-expanded:block"
        onClick={toggleMenu}
        aria-hidden={true}
      >
        Close Menu on Background Click
      </button>
    </>
  )
}

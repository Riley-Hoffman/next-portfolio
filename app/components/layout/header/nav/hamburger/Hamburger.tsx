import Head from 'next/head'
import { useHamburger } from './hooks/useHamburger'

interface HamburgerProps {
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
        className="hamburger group peer relative z-10 ml-auto block h-10 w-16 px-5 md:hidden"
      >
        {[...Array(4)].map((_, index) => (
          <span
            key={index}
            className="hamburger-line group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:left-3 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:top-5 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:w-0 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:border-0 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:transition-none group-aria-expanded:[&:nth-child(2)]:rotate-45 group-aria-expanded:[&:nth-child(3)]:-rotate-45"
          ></span>
        ))}
      </button>
      <button
        className="closer fixed inset-0 hidden size-full cursor-default text-transparent peer-aria-expanded:block"
        onClick={toggleMenu}
        aria-hidden={true}
      >
        Close Menu on Background Click
      </button>
    </>
  )
}

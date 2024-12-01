"use client"
import Head from "next/head";
import { usePathname } from "next/navigation"
import { useState, useRef, useCallback, useEffect } from "react"

interface HamburgerProps {
  expanded?: (isExpanded: boolean) => void
}

export const Hamburger = ({ expanded }: HamburgerProps) => {
  const [localIsExpanded, setLocalIsExpanded] = useState<boolean>(false)
  const hamburgerRef = useRef<HTMLButtonElement | null>(null)
  const location = usePathname()

  useEffect(() => {
    if (expanded) {
      expanded(localIsExpanded)
    }
  }, [localIsExpanded, expanded])

  const updateAttributes = useCallback((newIsExpanded: boolean) => {
    if (hamburgerRef.current) {
      const { current: hamburgerElement } = hamburgerRef
      hamburgerElement.setAttribute("aria-expanded", newIsExpanded.toString())
    }
  }, [])

  const toggleMenu = useCallback(() => {
    setLocalIsExpanded((prevState) => {
      const newIsExpanded = !prevState
      updateAttributes(newIsExpanded)
      return newIsExpanded
    })
  }, [updateAttributes])

  const handleResize = useCallback(() => {
    if (window.innerWidth > 700 && localIsExpanded) {
      setLocalIsExpanded(false)
      updateAttributes(false)
    }
  }, [localIsExpanded, updateAttributes])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  useEffect(() => {
    setLocalIsExpanded(false)
    updateAttributes(false)
  }, [location, updateAttributes])

  return (
    <>
      <Head>
        <noscript>
          <style>{`.hamburger { display: none; }`}</style>
        </noscript>
      </Head>
      <button
        id="hamburger"
        aria-expanded={localIsExpanded}
        aria-label={localIsExpanded ? "Close Menu" : "Open Menu"}
        onClick={toggleMenu}
        ref={hamburgerRef}
        className="group peer hamburger relative z-10 ml-auto block h-10 w-16 px-5 md:hidden"
      >
        {[...Array(4)].map((_, index) => (
          <span
            key={index}
            className="gradient-border line absolute top-4 block w-7 rotate-0 border-2 border-solid brightness-90 transition-all duration-200 ease-in-out first:top-2 last:top-6 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:left-[0.938rem] group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:top-[1.313rem] group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:w-0 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:border-0 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:transition-none group-aria-expanded:[&:nth-child(2)]:rotate-45 group-aria-expanded:[&:nth-child(3)]:-rotate-45"
          ></span>
        ))}
      </button>
      <button
        className="closer fixed inset-0 hidden h-full w-full cursor-default text-transparent peer-aria-expanded:block"
        onClick={toggleMenu}
        aria-hidden={true}
      >
        Close Menu on Background Click
      </button>
    </>
  )
}

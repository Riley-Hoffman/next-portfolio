"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { SkipToContent } from "./SkipToContent"
import { ThemeChanger } from "./ThemeChanger"
import { HeaderLogo } from "./HeaderLogo"
import { Hamburger } from "./Hamburger"
import { NavListItem } from "./NavListItem"
import { NoJsMenu } from "./NoJsMenu"

interface MenuLink {
  to: string
  label: string
}

export const Header = () => {
  const [jsEnabled, setJsEnabled] = useState(false)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [hide, setHide] = useState<boolean>(false)

  useEffect(() => {
    setJsEnabled(true)
  }, [])

  const handleHamburgerClick = (expanded: boolean) => {
    setIsExpanded(expanded)
  }

  const currentPath = usePathname()
  const isActive = (path: string) => {
    return currentPath === path
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

    window.addEventListener("resize", handleHideShowLinks)
    handleHideShowLinks()

    return () => {
      window.removeEventListener("resize", handleHideShowLinks)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isExpanded])

  const menuLinks: MenuLink[] = [
    { to: "/", label: "Home" },
    { to: "/projects/", label: "Projects" },
    { to: "/skills/", label: "Skills" },
    { to: "/faq/", label: "FAQ" },
    { to: "/contact/", label: "Contact" },
  ]

  return (
    <header className="shadow[0_0.063rem_0.188rem_-0.188rem_black] gradient-border sticky left-[0] right-[0] top-[-2.125rem] z-30 min-h-[7.75rem] border-b-2 border-t-[2.125rem] border-solid bg-[#f4eef6] py-6 shadow-textcolor contrast-more:bg-white dark:bg-[#0b1109] contrast-more:dark:bg-black">
      <SkipToContent />
      <div className="flex max-w-screen-xl items-center justify-between">
        <HeaderLogo />
        {jsEnabled && <ThemeChanger />}
        <nav className="h-10 min-w-36 md:order-2">
          <Hamburger expanded={handleHamburgerClick} />
          <ul
            className="w-38 relative right-0 top-[1.625rem] z-20 m-0 origin-right scale-x-0 text-base shadow-[0_0.008rem_1rem_-0.563rem_black] shadow-textcolor transition-transform duration-200 ease-in-out peer-aria-expanded:scale-100 sm:w-52 md:static md:w-auto md:scale-x-100 md:shadow-none"
            aria-label="Menu Links"
          >
            {menuLinks.map(({ to, label }) => (
              <NavListItem
                key={to}
                to={to}
                label={label}
                hide={hide}
                isActive={isActive(to)}
              />
            ))}
            <NavListItem
              resume="/riley-hoffman-resume.pdf"
              hide={hide}
              isActive={false}
            />
          </ul>
        </nav>
      </div>
      <NoJsMenu />
    </header>
  )
}

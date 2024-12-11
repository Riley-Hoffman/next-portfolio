"use client"
import { useState, useEffect } from "react"
import { SkipToContent } from "./SkipToContent"
import { ThemeChanger } from "./ThemeChanger"
import { HeaderLogo } from "./HeaderLogo"
import { Nav } from "./Nav"
import { NoJsMenu } from "./NoJsMenu"

export const Header = () => {
  const [jsEnabled, setJsEnabled] = useState(false)

  useEffect(() => {
    setJsEnabled(true)
  }, [])

  return (
    <header className="shadow[0_0.063rem_0.188rem_-0.188rem_black] gradient-border sticky left-[0] right-[0] top-[-2.125rem] z-30 min-h-[7.75rem] border-b-2 border-t-[2.125rem] border-solid bg-[#f4eef6] py-6 shadow-textcolor contrast-more:bg-white dark:bg-[#0b1109] contrast-more:dark:bg-black">
      <SkipToContent />
      <div className="flex max-w-screen-xl items-center justify-between">
        <HeaderLogo />
        {jsEnabled && <ThemeChanger />}
        <Nav />
      </div>
      <NoJsMenu />
    </header>
  )
}

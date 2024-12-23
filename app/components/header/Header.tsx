"use client"
import dynamic from "next/dynamic"
import { SkipToContent } from "./SkipToContent"
import { HeaderLogo } from "./HeaderLogo"
import { NoJsMenu } from "./nav/NoJsMenu"

const Nav = dynamic(() => import("./nav/Nav"), {
  ssr: false,
})

const ThemeChanger = dynamic(() => import("./ThemeChanger"), {
  ssr: false,
})

export const Header = () => (
  <header className="shadow[0_0.063rem_0.188rem_-0.188rem_black] gradient-border sticky left-[0] right-[0] top-[-2.125rem] z-30 min-h-[7.75rem] border-b-2 border-t-[2.125rem] border-solid bg-[#f4eef6] py-6 shadow-textcolor contrast-more:bg-white dark:bg-[#0b1109] contrast-more:dark:bg-black">
    <SkipToContent />
    <div className="flex max-w-screen-xl items-center justify-between">
      <HeaderLogo />
      <ThemeChanger />
      <Nav />
    </div>
    <NoJsMenu />
  </header>
)

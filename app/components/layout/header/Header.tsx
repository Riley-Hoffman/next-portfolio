'use client'
import dynamic from 'next/dynamic'
import { SkipToContent } from './SkipToContent'
import { HeaderLogo } from './HeaderLogo'
import { NoJsMenu } from './nav/NoJsMenu'

const ThemeChangerAndNav = dynamic(
  () => import('./dynamic-imports/ThemeChangerAndNav'),
  {
    ssr: false,
  }
)

export const Header = () => (
  <header className="shadow[0_0.063rem_0.188rem_-0.188rem_black] pad-wrap gradient-border sticky -top-8 left-0 right-0 z-30 flex min-h-28 items-center justify-between border-b-2 border-t-[2rem] border-solid bg-[#f4eef6] py-6 shadow-heading contrast-more:bg-white dark:bg-[#0b1109] contrast-more:dark:bg-black">
    <SkipToContent />
    <HeaderLogo />
    <ThemeChangerAndNav />
    <NoJsMenu />
  </header>
)

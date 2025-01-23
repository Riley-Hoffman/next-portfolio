'use client'
import dynamic from 'next/dynamic'
import './styles/header.css'

const ThemeChangerNav = dynamic(
  () => import('./dynamic-imports/ThemeChangerNav'),
  {
    ssr: false,
  }
)

const SkipToContentLogoNoJsMenu = dynamic(
  () => import('./dynamic-imports/SkipToContentLogoNoJsMenu')
)

export const Header = () => (
  <header className="shadow[0_0.063rem_0.188rem_-0.188rem_black] border-b-2 border-t-[2rem] bg-[#f4eef6] dark:bg-[#0b1109]">
    <SkipToContentLogoNoJsMenu />
    <ThemeChangerNav />
  </header>
)

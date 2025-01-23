'use client'
import dynamic from 'next/dynamic'
import './styles/header.css'

const ThemeChangerAndNav = dynamic(
  () => import('./dynamic-imports/ThemeChangerAndNav'),
  {
    ssr: false,
  }
)

const SkipToContentAndLogo = dynamic(
  () => import('./dynamic-imports/SkipToContentAndLogo')
)

export const Header = () => (
  <header className="shadow[0_0.063rem_0.188rem_-0.188rem_black] border-b-2 border-t-[2rem] bg-[#f4eef6] dark:bg-[#0b1109]">
    <SkipToContentAndLogo />
    <ThemeChangerAndNav />
  </header>
)

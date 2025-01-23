'use client'
import dynamic from 'next/dynamic'
import { SkipToContent } from './SkipToContent'
import { HeaderLogo } from './HeaderLogo'
import { NoJsMenu } from './nav/NoJsMenu'
import './styles/header.css'

const ThemeChangerAndNav = dynamic(
  () => import('./dynamic-imports/ThemeChangerNav'),
  {
    ssr: false,
  }
)

export const Header = () => (
  <header className="shadow[0_0.063rem_0.188rem_-0.188rem_black] border-b-2 border-t-[2rem] bg-[#f4eef6] dark:bg-[#0b1109]">
    <SkipToContent />
    <HeaderLogo />
    <ThemeChangerAndNav />
    <NoJsMenu />
  </header>
)

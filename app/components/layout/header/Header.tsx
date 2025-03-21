'use client'
import dynamic from 'next/dynamic'
import { SkipToContent } from './SkipToContent'
import { HeaderLogo } from './HeaderLogo'
import { NoJsMenu } from './nav/NoJsMenu'

const ThemeChangerAndNav = dynamic(
  () => import('./dynamic-imports/ThemeChangerNav'),
  {
    ssr: false,
  }
)

export const Header = () => (
  <header>
    <SkipToContent />
    <HeaderLogo />
    <ThemeChangerAndNav />
    <NoJsMenu />
  </header>
)

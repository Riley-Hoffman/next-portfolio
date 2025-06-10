import dynamic from 'next/dynamic'
import { Header } from './header/Header'
import { LayoutContentProps } from '@/app/types/layout/LayoutContent.interface'

const BackToTopAnalyticsFooter = dynamic(
  () => import('./dynamic-imports/BackToTopAnalyticsFooter')
)

export const LayoutContent = ({ children }: LayoutContentProps) => (
  <>
    <Header />
    <main id="main">{children}</main>
    <BackToTopAnalyticsFooter />
  </>
)

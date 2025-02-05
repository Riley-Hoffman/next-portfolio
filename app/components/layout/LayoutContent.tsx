import dynamic from 'next/dynamic'
import { Header } from './header/Header'

interface LayoutContentProps {
  children: React.ReactNode
}

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

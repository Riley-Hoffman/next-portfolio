import dynamic from 'next/dynamic'
import { Header } from './header/Header'

const BackToTopAnalyticsFooter = dynamic(
  () => import('./dynamic-imports/BackToTopAnalyticsFooter')
)

export const LayoutContent = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main id="main">{children}</main>
    <BackToTopAnalyticsFooter />
  </>
)

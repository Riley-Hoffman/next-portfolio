import dynamic from 'next/dynamic'
import { Header } from './header/Header'
import { Footer } from './Footer'

interface LayoutContentProps {
  children: React.ReactNode
}

const BackToTopAndAnalytics = dynamic(
  () => import('./dynamic-imports/BackToTopAndAnalytics')
)

export const LayoutContent = ({ children }: LayoutContentProps) => (
  <>
    <Header />
    <main id="main">
      {children}
    </main>
    <BackToTopAndAnalytics />
    <Footer />
  </>
)

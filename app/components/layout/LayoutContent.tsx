import dynamic from "next/dynamic"
import { Header } from "./header/Header"
import { Footer } from "./Footer"

interface LayoutContentProps {
  children: React.ReactNode
}

const BackToTopAndAnalytics = dynamic(() =>
  import("./dynamic-imports/BackToTopAndAnalytics").then((mod) => mod.BackToTopAndAnalytics)
)

export const LayoutContent = ({ children }: LayoutContentProps) => (
  <>
    <Header />
    <main>
      <a href="#content" id="content" className="tab-focus-button z-30">
        Start of main content
      </a>
      {children}
    </main>
    <BackToTopAndAnalytics />
    <Footer />
  </>
)

import dynamic from "next/dynamic"
import { Header } from "../components/header/Header"
import { Footer } from "../components/Footer"

interface LayoutContentProps {
  children: React.ReactNode
}
const DynamicImports = dynamic(() => import("../components/DynamicImports"))

export const LayoutContent = ({ children }: LayoutContentProps) => (
  <>
    <Header />
    <main>
      <a href="#content" id="content" className="tab-focus-button z-30">
        Start of main content
      </a>
      {children}
    </main>
    <DynamicImports />
    <Footer />
  </>
)

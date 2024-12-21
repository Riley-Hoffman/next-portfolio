import { useRoutes, Route } from "../../hooks/useRoutes"
import { Header } from "./header/Header"
import { Footer } from "./Footer"
import { NoJsMenu } from "./header/nav/NoJsMenu"

interface LayoutContentProps {
  children: React.ReactNode
}

export const LayoutContent = ({ children }: LayoutContentProps) => {
  const routes: Route[] = useRoutes()

  return (
    <>
      <Header />
      <NoJsMenu routes={routes} />
      <main>
        <a href="#content" id="content" className="tab-focus-button z-30">
          Start of main content
        </a>
        {children}
      </main>
      <Footer />
    </>
  )
}

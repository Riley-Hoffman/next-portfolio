import "./styles/globals.css"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ThemeProvider } from "./components/header/ThemeProvider"
import { Header } from "./components/header/Header"
import { Footer } from "./components/Footer"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import {
  getBaseUrl,
  getPageTitle,
  baseDescription,
  getImageUrl,
} from "../lib/constants"

config.autoAddCss = false

export const metadata: Metadata = {
  title: {
    template: `%s - ${getPageTitle()}`,
    default: getPageTitle(),
  },
  description: baseDescription,
  metadataBase: new URL(`${getBaseUrl()}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: getImageUrl(),
    title: {
      template: `%s - ${getPageTitle()}`,
      default: `${getPageTitle()}`,
    },
    url: getBaseUrl(),
  },
}

const DynamicImports = dynamic(() => import("./components/DynamicImports"))
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
            <a href="#content" id="content" className="tab-focus-button z-30">
              Start of main content
            </a>
            {children}
          </main>
          <DynamicImports />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

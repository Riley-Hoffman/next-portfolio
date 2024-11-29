import "./styles/globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "./components/ThemeProvider"
import { LayoutContent } from "./components/LayoutContent"
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
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
        <div className="nojslayout hidden">
          <LayoutContent>{children}</LayoutContent>
        </div>
        <noscript>
          <style>{`.nojslayout.hidden {display: block}`}</style>
        </noscript>
      </body>
    </html>
  )
}

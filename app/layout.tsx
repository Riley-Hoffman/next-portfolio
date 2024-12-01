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
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" sizes="512x512" href="/icons/android-chrome-256x256.png" />
        <link rel="icon" sizes="512x512" href="/icons/android-chrome-512x512.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#eee3f2" />
        <meta name="theme-color" content="#eee3f2" />
        <noscript>
          <style>{`.nojslayout.hidden {display: block}`}</style>
        </noscript>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
        <div className="nojslayout hidden">
          <LayoutContent>{children}</LayoutContent>
        </div>
      </body>
    </html>
  )
}

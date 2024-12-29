import type { Metadata } from "next"
import { ThemeProvider } from "@/app/components/ThemeProvider"
import { LayoutContent } from "@/app/components/LayoutContent"
import {
  getBaseUrl,
  getPageTitle,
  baseDescription,
  getImageUrl,
} from "@/constants/baseData"
import "@/app/styles/globals.css"

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
    type: "website",
    locale: "en_CA",
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
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          rel="icon"
          sizes="192x192"
          href="/icons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          sizes="512x512"
          href="/icons/android-chrome-256x256.png"
        />
        <link
          rel="icon"
          sizes="512x512"
          href="/icons/android-chrome-512x512.png"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#eee3f2"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0d191c"
        />
        <noscript>
          <style>{`.nojslayout.hidden {display: block}.hamburger {display: none}`}</style>
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

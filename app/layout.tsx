import type { Metadata } from 'next'
import { DynamicThemeProvider } from './components/theme/DynamicThemeProvider'
import { LayoutContent } from './components/layout/LayoutContent'
import { IconLinks } from './components/layout/icon-links/IconLinks'
import { iconLinksData } from './components/layout/icon-links/constants/IconLinksData'
import {
  getBaseUrl,
  getPageTitle,
  baseDescription,
  getImageUrl,
} from '@/constants/baseData'
import './styles/globals.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${getPageTitle()}`,
    default: getPageTitle(),
  },
  description: baseDescription,
  metadataBase: new URL(`${getBaseUrl()}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    images: getImageUrl(),
    title: {
      template: `%s - ${getPageTitle()}`,
      default: `${getPageTitle()}`,
    },
    url: getBaseUrl(),
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      {iconLinksData.map((icon, index) => (
        <IconLinks key={index} {...icon} />
      ))}
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
    </head>
    <body>
      <DynamicThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <LayoutContent>{children}</LayoutContent>
      </DynamicThemeProvider>
    </body>
  </html>
)

export default RootLayout

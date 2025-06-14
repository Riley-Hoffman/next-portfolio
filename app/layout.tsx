import type { Metadata } from 'next'
import { inconsolata, poppins, sourcesans, urbanist } from './fonts/fonts'
import { DynamicThemeProvider } from './components/theme/DynamicThemeProvider'
import { LayoutContent } from './components/layout/LayoutContent'
import { IconLinks } from './components/layout/IconLinks'
import { ICON_LINK_ATTRIBUTES } from './constants/icon-links/iconLinkAttributes'
import { getBaseUrl, getImageUrl, getPageTitle, BASE_DESCRIPTION } from '@/app/constants/baseData'
import './styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Riley Hoffman - Web Developer',
    template: '%s - Riley Hoffman - Web Developer',
  },
  description: BASE_DESCRIPTION,
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
      {ICON_LINK_ATTRIBUTES.map((icon, index) => (
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
    <body
      className={`${inconsolata.variable} ${poppins.variable} ${sourcesans.variable} ${urbanist.variable} antialiased contrast-more:subpixel-antialiased`}
    >
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

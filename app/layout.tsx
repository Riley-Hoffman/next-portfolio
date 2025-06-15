import type { Metadata } from 'next'
import { inconsolata, poppins, sourcesans, urbanist } from './fonts/fonts'
import { NextThemeProvider } from './components/theme/NextThemeProvider'
import { LayoutContent } from './components/layout/LayoutContent'
import {
  getBaseUrl,
  getImageUrl,
  getPageTitle,
  BASE_DESCRIPTION,
} from '@/app/constants/baseData'
import './styles/globals.css'

const ICONS_PATH = '/icons'

export const metadata: Metadata = {
  title: getPageTitle(),
  description: BASE_DESCRIPTION,
  metadataBase: new URL(getBaseUrl()),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    images: getImageUrl(),
    title: getPageTitle(),
    url: getBaseUrl(),
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eee3f2' },
    { media: '(prefers-color-scheme: dark)', color: '#0d191c' },
  ],
  icons: {
    icon: [
      { url: `${ICONS_PATH}/favicon.ico`, type: 'image/x-icon' },
      {
        url: `${ICONS_PATH}/favicon-16x16.png`,
        type: 'image/png',
        sizes: '16x16',
      },
      {
        url: `${ICONS_PATH}/favicon-32x32.png`,
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: `${ICONS_PATH}/favicon-96x96.png`,
        type: 'image/png',
        sizes: '96x96',
      },
      { url: `${ICONS_PATH}/android-chrome-192x192.png`, sizes: '192x192' },
      { url: `${ICONS_PATH}/android-chrome-256x256.png`, sizes: '256x256' },
      { url: `${ICONS_PATH}/android-chrome-512x512.png`, sizes: '512x512' },
    ],
    apple: `${ICONS_PATH}/apple-touch-icon.png`,
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${inconsolata.variable} ${poppins.variable} ${sourcesans.variable} ${urbanist.variable} antialiased contrast-more:subpixel-antialiased`}
    >
      <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LayoutContent>{children}</LayoutContent>
      </NextThemeProvider>
    </body>
  </html>
)

export default RootLayout

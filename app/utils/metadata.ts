import type { Metadata } from 'next'
import { getBaseUrl, getImageUrl } from '@/app/constants/baseData'

interface PageMetadataProps {
  title: string
  description: string
  path: string
}

export const createMetadata = ({
  title,
  description,
  path,
}: PageMetadataProps): Metadata => ({
  title: {
    template: `%s - ${title}`,
    default: title,
  },
  description,
  metadataBase: new URL(getBaseUrl(path)),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    images: getImageUrl(),
    title: {
      template: `%s - ${title}`,
      default: title,
    },
    url: getBaseUrl(path),
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eee3f2' },
    { media: '(prefers-color-scheme: dark)', color: '#0d191c' },
  ],
})

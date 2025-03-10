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
  title,
  description,
  metadataBase: new URL(getBaseUrl(path)),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: getImageUrl(),
    title,
    url: getBaseUrl(path),
  },
})

import type { Metadata } from 'next'
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from '@/app/components/schema/SchemaGenerator'
import { ParticleCleanupCopy } from './components/content/ParticleCleanupCopy'
import { ParticleCleanupGame } from './components/ParticleCleanupGame'
import { getBaseUrl, getImageUrl } from '@/constants/baseData'
import '@/app/styles/numbered-icons.css'

const description =
  'How quickly can you clear all the particles from the board using your cursor or finger?'

export const metadata: Metadata = {
  title: 'Particle Cleanup Game',
  description: description,
  metadataBase: new URL(`${getBaseUrl('/projects/particle-cleanup')}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    images: getImageUrl(),
    title: 'Particle Cleanup Game',
    url: `${getBaseUrl('/projects/particle-cleanup')}`,
  },
}
const schemaData: SchemaGeneratorProps['schemaData'] = {
  title: 'Particle Cleanup Game',
  description,
  urlPath: '/projects/particle-cleanup',
  publishDate: '2024-08-05T09:25:01.340Z',
  schemaType: 'WebPage',
}

export default function ParticleCleanupWrapper() {
  return (
    <>
      <SchemaGenerator schemaData={schemaData} />
      <div className="pb-16">
        <h1 className="heading-one">Particle Cleanup Game</h1>
        <div className="max-w-screen-md">
          <ParticleCleanupCopy />
          <ParticleCleanupGame />
        </div>
      </div>
    </>
  )
}

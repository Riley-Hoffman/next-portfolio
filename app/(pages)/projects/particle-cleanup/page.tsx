import type { Metadata } from 'next'
import { SchemaGenerator } from '@/app/components/schema/SchemaGenerator'
import { SchemaGeneratorProps } from '@/app/types/schema/SchemaGeneratorProps.interface'
import { ParticleCleanupCopy } from '@/app/components/particle-cleanup/content/ParticleCleanupCopy'
import { ParticleCleanupGame } from '@/app/components/particle-cleanup/ParticleCleanupGame'
import { getBaseUrl, getImageUrl } from '@/app/constants/baseData'

const DESCRIPTION =
  'How quickly can you clear all the particles from the board using your cursor or finger?'

export const metadata: Metadata = {
  title: 'Particle Cleanup Game',
  description: DESCRIPTION,
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
const SCHEMA_DATA: SchemaGeneratorProps['schemaData'] = {
  title: 'Particle Cleanup Game',
  description: DESCRIPTION,
  urlPath: '/projects/particle-cleanup',
  publishDate: '2024-08-05T09:25:01.340Z',
  schemaType: 'WebPage',
}

const ParticleCleanupWrapper = () => (
  <>
    <SchemaGenerator schemaData={SCHEMA_DATA} />
    <div className="pb-16">
      <h1 className="heading-one">Particle Cleanup Game</h1>
      <div className="max-w-screen-md">
        <ParticleCleanupCopy />
        <ParticleCleanupGame />
      </div>
    </div>
  </>
)

export default ParticleCleanupWrapper

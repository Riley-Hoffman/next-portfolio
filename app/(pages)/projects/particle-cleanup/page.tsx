import { createMetadata } from '@/app/utils/metadata'
import { SchemaFactory } from '@/app/utils/schemaFactory'
import SchemaInjector from '@/app/components/schema/SchemaInjector'
import { ParticleCleanupCopy } from '@/app/components/particle-cleanup/content/ParticleCleanupCopy'
import { ParticleCleanupGame } from '@/app/components/particle-cleanup/ParticleCleanupGame'

const DESCRIPTION =
  'How quickly can you clear all the stars from the board using your cursor or finger?'
const TITLE = 'Particle Cleanup Game'
const PATH = '/projects/particle-cleanup'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const schemaData = SchemaFactory.createWebPage({
  title: TITLE,
  description: DESCRIPTION,
  urlPath: PATH,
  publishDate: '2024-08-05T09:25:01.340Z',
})

const ParticleCleanupWrapper = () => (
  <>
    <SchemaInjector structuredData={schemaData} />
    <h1 className="heading-one">Particle Cleanup Game</h1>
    <div className="max-w-screen-md px-5 pb-16">
      <ParticleCleanupCopy />
      <ParticleCleanupGame />
    </div>
  </>
)

export default ParticleCleanupWrapper

import { createMetadata } from '@/app/utils/metadata'
import { SchemaGenerator } from '@/app/components/schema/SchemaGenerator'
import { SchemaGeneratorProps } from '@/app/types/schema/SchemaGenerator.interface'
import { ParticleCleanupCopy } from '@/app/components/particle-cleanup/content/ParticleCleanupCopy'
import { ParticleCleanupGame } from '@/app/components/particle-cleanup/ParticleCleanupGame'

const DESCRIPTION =
  'How quickly can you clear all the particles from the board using your cursor or finger?'
const TITLE = 'Particle Cleanup Game'
const PATH = '/projects/particle-cleanup'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const SCHEMA_DATA: SchemaGeneratorProps['schemaData'] = {
  title: TITLE,
  description: DESCRIPTION,
  urlPath: PATH,
  publishDate: '2024-08-05T09:25:01.340Z',
  schemaType: 'WebPage',
}

const ParticleCleanupWrapper = () => (
  <>
    <SchemaGenerator schemaData={SCHEMA_DATA} />
    <h1 className="heading-one">Particle Cleanup Game</h1>
    <div className="max-w-screen-md pb-16">
      <ParticleCleanupCopy />
      <ParticleCleanupGame />
    </div>
  </>
)

export default ParticleCleanupWrapper

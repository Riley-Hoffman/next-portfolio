import { createMetadata } from '@/app/utils/metadata'
import { SchemaFactory } from '@/app/utils/schemaFactory'
import SchemaInjector from '@/app/components/schema/SchemaInjector'
import { SkillsSection } from '@/app/components/skills/skills/SkillsSection'
import { TrainingsSection } from '@/app/components/skills/trainings/TrainingsSection'
import { getPageTitle } from '@/app/constants/baseData'
import '@/app/styles/skills.css'

const DESCRIPTION = `My skills. ${getPageTitle()}.`
const TITLE = getPageTitle('Skills')
const PATH = '/skills'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const schemaData = SchemaFactory.createWebPage({
  title: TITLE,
  description: DESCRIPTION,
  urlPath: PATH,
  publishDate: '2024-07-04T09:25:01.340Z',
})

const Skills = () => (
  <>
    <SchemaInjector structuredData={schemaData} />
    <SkillsSection />
    <TrainingsSection />
  </>
)

export default Skills

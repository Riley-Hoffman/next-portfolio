import { createMetadata } from '@/app/utils/metadata'
import { SchemaGenerator } from '@/app/components/schema/SchemaGenerator'
import { SchemaGeneratorProps } from '@/app/types/schema/SchemaGeneratorProps.interface'
import { SkillsSection } from '@/app/components/skills/skills/SkillsSection'
import { TrainingsSection } from '@/app/components/skills/trainings/TrainingsSection'
import { getPageTitle } from '@/app/constants/baseData'

const DESCRIPTION = `My skills. ${getPageTitle()}.`
const TITLE = 'Skills'
const PATH = '/skills'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const SCHEMA_DATA: SchemaGeneratorProps['schemaData'] = {
  title: TITLE,
  description: DESCRIPTION,
  urlPath: PATH,
  publishDate: '2024-07-04T09:25:01.340Z',
  schemaType: 'WebPage',
}

const Skills = () => (
  <>
    <SchemaGenerator schemaData={SCHEMA_DATA} />
    <SkillsSection />
    <TrainingsSection />
  </>
)

export default Skills

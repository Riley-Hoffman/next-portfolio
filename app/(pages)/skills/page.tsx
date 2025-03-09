import type { Metadata } from 'next'
import { SchemaGenerator } from '@/app/components/schema/SchemaGenerator'
import { SchemaGeneratorProps } from '@/app/types/schema/SchemaGeneratorProps.interface'
import { SkillsSection } from '@/app/components/skills/skills/SkillsSection'
import { TrainingsSection } from '@/app/components/skills/trainings/TrainingsSection'
import { getBaseUrl, getPageTitle, getImageUrl } from '@/app/constants/baseData'

const DESCRIPTION = `My skills. ${getPageTitle()}.`

export const metadata: Metadata = {
  title: 'Skills',
  description: DESCRIPTION,
  metadataBase: new URL(`${getBaseUrl('/skills')}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    images: getImageUrl(),
    title: 'Skills',
    url: `${getBaseUrl('/skills')}`,
  },
}
const SCHEMA_DATA: SchemaGeneratorProps['schemaData'] = {
  title: 'Skills',
  description: DESCRIPTION,
  urlPath: '/skills',
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

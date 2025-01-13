import type { Metadata } from 'next'
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from '@/app/components/schema/SchemaGenerator'
import { SkillsSection } from './components/skills/SkillsSection'
import { TrainingsSection } from './components/trainings/TrainingsSection'
import { getBaseUrl, getPageTitle, getImageUrl } from '@/constants/baseData'

const description = `My skills. ${getPageTitle()}.`

export const metadata: Metadata = {
  title: 'Skills',
  description: description,
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
const schemaData: SchemaGeneratorProps['schemaData'] = {
  title: 'Skills',
  description,
  urlPath: '/skills',
  publishDate: '2024-07-04T09:25:01.340Z',
  schemaType: 'WebPage',
}

export default function Skills() {
  return (
    <>
      <SchemaGenerator schemaData={schemaData} />
      <SkillsSection />
      <TrainingsSection />
    </>
  )
}

import type { Metadata } from 'next'
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from '@/app/components/schema/SchemaGenerator'
import { fetchFirebaseData } from '@/lib/fetchFirebaseData'
import { Project } from './components/content/ProjectContent'
import { ProjectCategories } from './components/ProjectCategories'
import { getBaseUrl, getPageTitle, getImageUrl } from '@/constants/baseData'

const description = `View past projects by ${getPageTitle()}.`

export const metadata: Metadata = {
  title: 'Projects',
  description: description,
  metadataBase: new URL(`${getBaseUrl('/projects')}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    images: getImageUrl(),
    title: 'Projects',
    url: `${getBaseUrl('/projects')}`,
  },
}
const schemaData: SchemaGeneratorProps['schemaData'] = {
  title: 'Projects',
  description,
  urlPath: '/projects',
  publishDate: '2024-07-04T09:25:01.340Z',
  schemaType: 'WebPage',
}

export default async function ProjectsPage() {
  const projects = (await fetchFirebaseData<Project[]>('/projects')).flat()
  return (
    <>
      <SchemaGenerator schemaData={schemaData} />
      <h1 className="heading-one">Projects</h1>
      <ProjectCategories projects={projects ?? []} />
    </>
  )
}

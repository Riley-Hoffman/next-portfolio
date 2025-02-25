import type { Metadata } from 'next'
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from '@/app/components/schema/SchemaGenerator'
import { fetchFirebaseData } from '@/app/utils/fetchFirebaseData'
import { ProjectCategoryRenderer } from '@/app/components/projects/project-categories/ProjectCategoryRenderer'
import { Project } from '@/app/types/projects/Project.types'
import { getBaseUrl, getPageTitle, getImageUrl } from '@/app/constants/baseData'

const DESCRIPTION = `View past projects by ${getPageTitle()}.`

export const metadata: Metadata = {
  title: 'Projects',
  description: DESCRIPTION,
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
const SCHEMA_DATA: SchemaGeneratorProps['schemaData'] = {
  title: 'Projects',
  description: DESCRIPTION,
  urlPath: '/projects',
  publishDate: '2024-07-04T09:25:01.340Z',
  schemaType: 'WebPage',
}

export default async function ProjectsPage() {
  const projects = (await fetchFirebaseData<Project[]>('/projects')).flat()
  return (
    <>
      <SchemaGenerator schemaData={SCHEMA_DATA} />
      <h1 className="heading-one">Projects</h1>
      <ProjectCategoryRenderer projects={projects ?? []} />
    </>
  )
}

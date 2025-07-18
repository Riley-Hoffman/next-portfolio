import { createMetadata } from '@/app/utils/metadata'
import { SchemaFactory } from '@/app/utils/schemaFactory'
import SchemaInjector from '@/app/components/schema/SchemaInjector'
import { fetchFirebaseData } from '@/app/utils/fetchFirebaseData'
import { ProjectCategoryRenderer } from '@/app/components/projects/project-categories/ProjectCategoryRenderer'
import { Project } from '@/app/types/projects/Project.types'
import { getPageTitle } from '@/app/constants/baseData'
import '@/app/styles/projects.css'

const DESCRIPTION = `View past projects by ${getPageTitle()}.`
const TITLE = getPageTitle('Projects')
const PATH = '/projects'

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

export default async function ProjectsPage() {
  const projects = (await fetchFirebaseData<Project[]>('/projects')).flat()
  return (
    <>
      <SchemaInjector structuredData={schemaData} />
      <h1 className="heading-one">Projects</h1>
      <ProjectCategoryRenderer projects={projects ?? []} />
    </>
  )
}

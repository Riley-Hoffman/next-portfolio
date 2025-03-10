import { createMetadata } from '@/app/utils/metadata'
import { SchemaGenerator } from '@/app/components/schema/SchemaGenerator'
import { SchemaGeneratorProps } from '@/app/types/schema/SchemaGeneratorProps.interface'
import { fetchFirebaseData } from '@/app/utils/fetchFirebaseData'
import { ProjectCategoryRenderer } from '@/app/components/projects/project-categories/ProjectCategoryRenderer'
import { Project } from '@/app/types/projects/Project.types'
import { getPageTitle } from '@/app/constants/baseData'

const DESCRIPTION = `View past projects by ${getPageTitle()}.`
const TITLE = 'Projects'
const PATH = '/projects'

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

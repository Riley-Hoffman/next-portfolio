import { ProjectCategoryList } from './ProjectCategoryList'
import { ProjectError } from '../ProjectError'
import type { Project } from '../Project.types'

export const ProjectCategoryRenderer = ({
  projects,
}: {
  projects: Project[]
}) => {
  if (!projects || projects.length === 0) {
    return <ProjectError />
  }

  const categories = Array.from(
    new Set(projects.map((proj: Project) => proj.category))
  )

  return (
    <>
      {categories.map((category, index) => (
        <ProjectCategoryList
          key={category}
          category={category}
          index={index}
          projects={projects}
        />
      ))}
    </>
  )
}

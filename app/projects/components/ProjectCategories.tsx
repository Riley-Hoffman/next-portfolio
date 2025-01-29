import type { Project } from './content/ProjectContent'
import { ProjectCategoryList } from './ProjectCategoryList'
import { ProjectError } from './ProjectError'

export interface SharedProjectProps {
  inverted?: boolean
  animation?: string
  isFirst?: boolean
}

export const ProjectCategories = ({ projects }: { projects: Project[] }) => {
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

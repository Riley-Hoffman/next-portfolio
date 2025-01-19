import type { Project } from './content/ProjectContent'
import { ProjectCategoryList } from './ProjectCategoryList'
import { ProjectError } from './ProjectError'

export const ProjectCategories = ({
  initialProjects,
}: {
  initialProjects: Project[]
}) => {
  if (!initialProjects || initialProjects.length === 0) {
    return <ProjectError />
  }

  const categories = Array.from(
    new Set(initialProjects.map((p: Project) => p.category))
  )

  return (
    <>
      {categories.map((category, index) => (
        <ProjectCategoryList
          key={category}
          category={category}
          index={index}
          projects={initialProjects}
        />
      ))}
    </>
  )
}

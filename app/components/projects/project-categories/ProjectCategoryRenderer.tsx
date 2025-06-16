import { ProjectList } from './ProjectList'
import { ProjectError } from '../ProjectError'
import type { Project } from '@/app/types/projects/Project.types'

export const ProjectCategoryRenderer = ({
  projects,
}: {
  projects: Project[]
}) => {
  if (!projects || projects.length === 0) return <ProjectError />

  const categories = Array.from(
    new Set(projects.map((proj: Project) => proj.category))
  )

  let globalIndex = 0
  return (
    <>
      {categories.map((category) => {
        const categoryProjects = projects.filter(
          (proj) => proj.category === category
        )
        const currentIndex = globalIndex
        globalIndex += categoryProjects.length
        return (
          <ProjectList
            key={category}
            category={category}
            projects={projects}
            globalIndex={currentIndex}
          />
        )
      })}
    </>
  )
}

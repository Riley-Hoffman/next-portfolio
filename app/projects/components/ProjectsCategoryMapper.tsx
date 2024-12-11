import type { Project } from "./ProjectContent"
import { ProjectCategoryList } from "./ProjectCategoryList"
import { ProjectError } from "./ProjectError"

export const ProjectsCategoryMapper = ({
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
    <div className="overflow-hidden pb-20 pt-5">
      {categories.map((category: string, idx: number) => (
        <ProjectCategoryList
          key={category}
          category={category}
          index={idx}
          projects={initialProjects}
        />
      ))}
    </div>
  )
}

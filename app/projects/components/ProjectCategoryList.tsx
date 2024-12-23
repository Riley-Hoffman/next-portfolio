import { ProjectCatHeading } from "./content/ProjectCatHeading"
import { ProjectBox } from "./ProjectListItem"
import { ProjectContent } from "./content/ProjectContent"
import { Project } from "./content/ProjectContent"

export const ProjectCategoryList = ({
  category,
  index,
  projects,
}: {
  category: string
  index: number
  projects: Project[]
}) => {
  const filteredProjects = projects.filter(
    (project) => project.category === category
  )

  return (
    <>
      <ProjectCatHeading category={category} />
      <ul
        className="max-w-screen-xl pb-5 text-base"
        aria-label={`${category} Projects`}
      >
        {filteredProjects.map((project, idx) => {
          const originalIndex =
            projects.findIndex((p) => p.title === project.title) + 1
          return (
            <ProjectBox
              key={project.title}
              inverted={originalIndex % 2 === 0 ? "inverted" : ""}
              animation={project.animation}
              isFirst={index === 0 && project === filteredProjects[0]}
            >
              <ProjectContent {...project} isFirst={index === 0 && idx === 0} />
            </ProjectBox>
          )
        })}
      </ul>
    </>
  )
}

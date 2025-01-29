import { ProjectCatHeading } from '../content/ProjectCatHeading'
import { ProjectListItem } from '../project-list-item/ProjectListItem'
import { ProjectContent } from '../content/ProjectContent'
import { Project } from '../Project.types'

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
    <section className="overflow-hidden first:pt-5 last:pb-20">
      <ProjectCatHeading category={category} />
      <ul
        className="max-w-screen-xl pb-5 text-base"
        aria-label={`${category} Projects`}
      >
        {filteredProjects.map((project, catindex) => {
          const projectNumber =
            projects.findIndex((proj) => proj.title === project.title) + 1
          const inverted = projectNumber % 2 === 0
          return (
            <ProjectListItem
              key={project.title}
              inverted={inverted}
              animation={project.animation}
              isFirst={index === 0 && project === filteredProjects[0]}
            >
              <ProjectContent
                {...project}
                inverted={inverted}
                isFirst={index === 0 && catindex === 0}
              />
            </ProjectListItem>
          )
        })}
      </ul>
    </section>
  )
}

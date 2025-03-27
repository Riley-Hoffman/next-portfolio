import { ProjectCatHeading } from '../content/ProjectCatHeading'
import { ProjectListItem } from '../ProjectListItem'
import { ProjectContent } from '../content/ProjectContent'
import { Project } from '@/app/types/projects/Project.types'

export const ProjectList = ({
  category,
  projects,
}: {
  category: string
  projects: Project[]
}) => {
  const projectsByCat = projects.filter(
    (project) => project.category === category
  )

  const projectListItems = projectsByCat.map((project, index) => {
    const projectNumber =
      projects.findIndex((proj) => proj.title === project.title) + 1
    const inverted = projectNumber % 2 === 0

    const animation =
      projectNumber > 1
        ? inverted
          ? 'motion-safe:md:left-[-200%] [&.active]:left-0'
          : 'motion-safe:md:right-[-200%] [&.active]:right-0'
        : ''

    return (
      <ProjectListItem
        key={project.title}
        inverted={inverted}
        animation={animation}
      >
        <ProjectContent
          {...project}
          inverted={inverted}
          isFirst={index === 0}
        />
      </ProjectListItem>
    )
  })

  return (
    <section className="overflow-hidden first-of-type:pt-5">
      <ProjectCatHeading category={category} />
      <ul className="max-w-screen-xl pb-5" aria-label={`${category} Projects`}>
        {projectListItems}
      </ul>
    </section>
  )
}

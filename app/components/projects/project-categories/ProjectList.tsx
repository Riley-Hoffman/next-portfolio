import { ProjectCatHeading } from '../content/ProjectCatHeading'
import { ProjectListItem } from '../ProjectListItem'
import { ProjectContent } from '../content/ProjectContent'
import { Project } from '@/app/types/projects/Project.types'
import '@/app/styles/projects/projects.css'

export const ProjectList = ({
  category,
  projects,
  globalIndex,
}: {
  category: string
  projects: Project[]
  globalIndex: number
}) => {
  const projectsByCat = projects.filter(
    (project) => project.category === category
  )

  const projectListItems = projectsByCat.map((project, index) => {
    const projectAnimates =
      projects.findIndex((proj) => proj.title === project.title) + 1 > 1

    const inverted =
      (projects.findIndex((proj) => proj.title === project.title) + 1) % 2 === 0

    const animation = projectAnimates
      ? inverted
        ? 'motion-safe:md:left-[-200%] [&.active]:left-0'
        : 'motion-safe:md:right-[-200%] [&.active]:right-0'
      : ''

    const isFirst = globalIndex + index === 0

    return (
      <ProjectListItem
        key={project.title}
        inverted={inverted}
        animation={animation}
      >
        <ProjectContent {...project} inverted={inverted} isFirst={isFirst} />
      </ProjectListItem>
    )
  })

  return (
    <section className="overflow-hidden first-of-type:pt-5">
      <ProjectCatHeading category={category} />
      <ul className="max-w-screen-xl" aria-label={`${category} Projects`}>
        {projectListItems}
      </ul>
    </section>
  )
}

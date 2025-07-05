import { ProjectCatHeading } from '../content/ProjectCatHeading'
import { ProjectListItem } from '../ProjectListItem'
import { ProjectContent } from '../content/ProjectContent'
import { Project } from '@/app/types/projects/Project.types'
import { isEven } from '@/app/utils/isEven'
import '@/app/styles/projects/projects.css'

interface ProjectListProps {
  category: string
  projects: Project[]
  globalIndex: number
}

const getAnimationClass = (projectIndex: number): string => {
  if (projectIndex === 0) return ''

  return isEven(projectIndex)
    ? 'motion-safe:md:left-[-200%] [&.active]:left-0'
    : 'motion-safe:md:right-[-200%] [&.active]:right-0'
}

const getProjectIndex = (project: Project, allProjects: Project[]): number => {
  return allProjects.findIndex((p) => p.title === project.title)
}

export const ProjectList = ({ category, projects, globalIndex }: ProjectListProps) => {
  const categoryProjects = projects.filter(
    (project) => project.category === category
  )

  const projectListItems = categoryProjects.map((project, localIndex) => {
    const projectIndex = getProjectIndex(project, projects)
    const isInverted = (projectIndex + 1) % 2 === 0
    const animation = getAnimationClass(projectIndex)
    const isFirst = globalIndex + localIndex === 0

    return (
      <ProjectListItem
        key={project.title}
        inverted={isInverted}
        animation={animation}
      >
        <ProjectContent {...project} inverted={isInverted} isFirst={isFirst} />
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

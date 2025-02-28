'use client'
import clsx from 'clsx'
import { useJsOnlyScrollAnimation } from '@/app/hooks/projects/useJsOnlyScrollAnimation'
import { SharedProjectProps } from '@/app/types/projects/Project.types'
import '@/app/styles/shared/background-accent.css'
import '@/app/styles/projects/project-list-item.css'

interface ProjectListItemProps extends SharedProjectProps {
  children: React.ReactNode
}

export const ProjectListItem = ({
  inverted,
  isFirst,
  animation,
  children,
}: ProjectListItemProps & { animation: string }) => {
  const animatedElement = useJsOnlyScrollAnimation(animation)

  return (
    <li
      className={clsx('project background-accent group gradient-border', {
        inverted: inverted,
        'mt-12': isFirst,
        'mt-0': !isFirst,
      })}
      ref={animatedElement}
    >
      {children}
    </li>
  )
}

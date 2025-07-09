'use client'
import clsx from 'clsx'
import { useJsOnlyScrollAnimation } from '@/app/hooks/projects/useJsOnlyScrollAnimation'
import { SharedProjectProps } from '@/app/types/projects/Project.types'
import '@/app/styles/shared/background-accent.css'

interface ProjectListItemProps extends SharedProjectProps {
  children: React.ReactNode
}

export const ProjectListItem = ({
  inverted,
  animation,
  children,
}: ProjectListItemProps & { animation: string }) => {
  const animatedElement = useJsOnlyScrollAnimation(animation)

  return (
    <li
      className={clsx('project background-accent gradient-border', {
        inverted: inverted,
      })}
      ref={animatedElement}
    >
      {children}
    </li>
  )
}

'use client'
import clsx from 'clsx'
import { useJsOnlyScrollAnimation } from './hooks/useJsOnlyScrollAnimation'
import '@/app/styles/background-accent.css'
import './styles/project-list-item.css'

interface ProjectListItemProps {
  inverted?: boolean
  animation?: string
  isFirst?: boolean
  children: React.ReactNode
}

export const ProjectListItem = ({
  inverted,
  animation,
  isFirst,
  children,
}: ProjectListItemProps) => {
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

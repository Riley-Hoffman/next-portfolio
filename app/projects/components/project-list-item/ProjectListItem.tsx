'use client'
import clsx from 'clsx'
import { useJsOnlyScrollAnimation } from './hooks/useJsOnlyScrollAnimation'
import '@/app/styles/background-accent.css'
import './styles/project-list-item.css'

interface ProjectListItemProps {
  inverted?: string
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
      className={clsx(
        'project background-accent group',
        {
          'transition-[left]': inverted,
          'transition-[right]': !inverted,
          'duration-1000': true,
          'mt-12': isFirst,
          'mt-0': !isFirst,
          'flex-row-reverse': inverted,
        },
        inverted
      )}
      ref={animatedElement}
    >
      {children}
    </li>
  )
}

'use client'
import clsx from 'clsx'
import { useJsOnlyTriggerOnScroll } from './hooks/useJsOnlyTriggerOnScroll'
import '@/app/styles/background-accent.css'

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
  const animatedElement = useJsOnlyTriggerOnScroll(animation)

  return (
    <li
      className={clsx(
        'ease background-accent group gradient-border relative my-28 gap-14 border-t-8 border-solid after:inset-0 after:rounded-b-[14rem] after:rounded-t-full md:flex',
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

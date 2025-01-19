'use client'
import clsx from 'clsx'
import { useScrollAnimationJsOnly } from './hooks/useScrollAnimationJsOnly'
import { BackgroundAccent } from '@/app/components/decorative/BackgroundAccent'

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
  const animatedElement = useScrollAnimationJsOnly(animation)

  return (
    <li
      className={clsx(
        'ease group gradient-border relative my-28 gap-14 border-t-8 border-solid md:flex',
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
      <BackgroundAccent classes="inset-0 rounded-t-full rounded-b-[14rem]" />
    </li>
  )
}

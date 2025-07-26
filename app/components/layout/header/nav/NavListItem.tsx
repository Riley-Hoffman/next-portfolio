import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { LinkWrapper } from '@/app/components/shared/LinkWrapper'

interface NavListItemProps {
  to?: string
  label?: string
  hide?: boolean
}

export const NavListItem = ({
  to = '',
  label = '',
  hide = false,
}: NavListItemProps) => {
  const currentPath = usePathname()
  const isActive = to && currentPath === to
  const ariaCurrent = isActive ? 'page' : undefined

  return (
    <li>
      <LinkWrapper
        className={clsx({ hidden: hide, active: isActive })}
        href={to}
        aria-current={ariaCurrent}
      >
        {label ? label : 'Resume'}
      </LinkWrapper>
    </li>
  )
}

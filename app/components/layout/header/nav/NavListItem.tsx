import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { NewTabContent } from '@/app/components/shared/NewTabContent'

interface NavListItemProps {
  to?: string
  label?: string
  hide?: boolean
  resume?: string
}

export const NavListItem = ({
  to = '',
  label = '',
  hide = false,
  resume = '',
}: NavListItemProps) => {
  const currentPath = usePathname()
  const isActive = to && currentPath === to

  return (
    <li>
      {resume ? (
        <a
          className={clsx({ hidden: hide })}
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <NewTabContent />
        </a>
      ) : (
        <Link className={clsx({ hidden: hide, active: isActive })} href={to}>
          {label}
        </Link>
      )}
    </li>
  )
}

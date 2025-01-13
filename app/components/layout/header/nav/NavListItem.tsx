import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { NewTabContent } from '@/app/components/utils/NewTabContent'

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
    <li className="block md:inline">
      {resume ? (
        <a
          className={clsx('nav-link button', { hidden: hide })}
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <NewTabContent />
        </a>
      ) : (
        <Link
          className={clsx(
            'nav-link button no-underline [&.active]:bg-accentone-300 [&.active]:text-heading hover:[&.active]:brightness-100',
            { hidden: hide, active: isActive }
          )}
          href={to}
        >
          {label}
        </Link>
      )}
    </li>
  )
}

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { NewTabContent } from '@/app/components/shared/NewTabContent'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'

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
  const linkText = (label: string) =>
    label === 'Home' || label === 'FAQ' ? `\u00A0${label}\u00A0` : label

  return (
    <li>
      {resume ? (
        <a
          className={clsx({ hidden: hide })}
          href={resume}
          {...EXTERNAL_LINK_ATTR}
        >
          Resume
          <NewTabContent />
        </a>
      ) : (
        <Link
          className={clsx({ hidden: hide, active: isActive })}
          href={to}
          aria-current={isActive ? 'page' : undefined}
        >
          {linkText(label)}
        </Link>
      )}
    </li>
  )
}

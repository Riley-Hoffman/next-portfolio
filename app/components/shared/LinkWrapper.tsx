import Link from 'next/link'
import { NewTabContent } from '@/app/components/shared/NewTabContent'
import { NewTabContentProps } from '@/app/types/new-tab-content/NewTabContent'

interface LinkWrapperProps
  extends NewTabContentProps,
  React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
  children: React.ReactNode
}

const INTERNAL_DOMAINS = ['https://rileyhoffman.com', 'http://localhost']

const isExternal = (href: string): boolean => {
  if (href.startsWith('/')) return false
  return !INTERNAL_DOMAINS.some((domain) => href.startsWith(domain))
}

export const LinkWrapper = ({
  href,
  className,
  children,
  showNewTabIcon = false,
  hideIconOnMobile = false,
  ...rest
}: LinkWrapperProps) => {
  if (isExternal(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <NewTabContent
          hideIconOnMobile={hideIconOnMobile}
          showNewTabIcon={showNewTabIcon}
        />
      </a>
    )
  }

  const normalizedHref = INTERNAL_DOMAINS.find((domain) =>
    href.startsWith(domain)
  )
    ? href.replace(/^https?:\/\/[^/]+/, '')
    : href

  return (
    <Link href={normalizedHref} className={className} {...rest}>
      {children}
    </Link>
  )
}

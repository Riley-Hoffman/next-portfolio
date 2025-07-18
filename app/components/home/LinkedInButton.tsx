import { useRef } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useHoverWiggle } from '@/app/hooks/shared/useHoverWiggle'
import { NewTabContent } from '@/app/components/shared/NewTabContent'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'

const LINKEDIN_URL = 'https://www.linkedin.com/in/riley-hoffman-014623213'

export const LinkedInButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null!)
  const { handleMouseEnterWiggle } = useHoverWiggle(buttonRef)

  return (
    <Link
      ref={buttonRef}
      className="linkedin-button button"
      href={LINKEDIN_URL}
      onMouseEnter={handleMouseEnterWiggle}
      {...EXTERNAL_LINK_ATTR}
    >
      <Icon icon="fa6-brands:linkedin-in" />
      Follow me on LinkedIn
      <NewTabContent hideIconOnMobile={true} />
    </Link>
  )
}

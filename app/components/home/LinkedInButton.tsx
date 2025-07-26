import { useRef } from 'react'
import { Icon } from '@iconify/react'
import { useHoverWiggle } from '@/app/hooks/shared/useHoverWiggle'
import { LinkWrapper } from '@/app/components/shared/LinkWrapper'

const LINKEDIN_URL = 'https://www.linkedin.com/in/riley-hoffman-014623213'

export const LinkedInButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null!)
  const { handleMouseEnterWiggle } = useHoverWiggle(buttonRef)

  return (
    <LinkWrapper
      className="linkedin-button button"
      href={LINKEDIN_URL}
      onMouseEnter={handleMouseEnterWiggle}
      showNewTabIcon={true}
      hideIconOnMobile={true}
    >
      <Icon icon="fa6-brands:linkedin-in" />
      Follow me on LinkedIn
    </LinkWrapper>
  )
}

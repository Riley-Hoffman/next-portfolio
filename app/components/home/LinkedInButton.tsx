import { useRef } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useHoverWiggle } from '@/app/hooks/shared/useHoverWiggle'
import { NewTabContent } from '@/app/components/shared/NewTabContent'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'
import '@/app/styles/home/linkedin-button.css'

export const LinkedInButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const { handleMouseEnterWiggle } = useHoverWiggle(
    buttonRef as React.RefObject<HTMLAnchorElement>
  )

  return (
    <Link
      ref={buttonRef}
      className="linkedin-button group"
      href="https://www.linkedin.com/in/riley-hoffman-014623213"
      onMouseEnter={handleMouseEnterWiggle}
      {...EXTERNAL_LINK_ATTR}
    >
      <Icon
        className="group-hover:bg-heading group-hover:text-accentone-300"
        icon="fa6-brands:linkedin-in"
      />
      Follow me on LinkedIn
      <NewTabContent hideIconOnMobile={true} />
    </Link>
  )
}

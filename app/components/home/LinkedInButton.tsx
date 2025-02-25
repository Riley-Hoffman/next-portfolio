import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useTimedEffect } from '@/app/hooks/shared/useTimedEffect'
import { NewTabContent } from '@/app/components/shared/NewTabContent'

export const LinkedInButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const { triggerEffect, cleanup } = useTimedEffect(1000)

  const applyEffect = (isCounting: boolean) => {
    buttonRef.current?.classList.toggle(
      'motion-safe:animate-wiggle',
      isCounting
    )
  }

  const handleMouseEnter = () => {
    triggerEffect(applyEffect)
  }

  useEffect(() => {
    return cleanup
  }, [cleanup])

  return (
    <Link
      ref={buttonRef}
      className="group button m-5 inline-block pr-6 text-lg"
      href="https://www.linkedin.com/in/riley-hoffman-014623213"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter} // Moved function outside
    >
      <Icon
        className="mr-6 box-content bg-accentone-300 p-2 text-5xl text-heading group-hover:bg-heading group-hover:text-accentone-300 dark:bg-[#292d11]"
        icon="fa6-brands:linkedin-in"
      />
      Follow me on LinkedIn
      <NewTabContent />
    </Link>
  )
}

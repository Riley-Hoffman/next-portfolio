import { useRef } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { useTimedEffect } from "@/hooks/useTimedEffect"
import { NewTabContent } from "@/app/components/utils/NewTabContent"

export const LinkedInButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const { triggerEffect } = useTimedEffect(1000)

  const applyEffect = (isCounting: boolean) => {
    buttonRef.current?.classList.toggle(
      "motion-safe:animate-wiggle",
      isCounting
    )
  }

  return (
    <Link
      ref={buttonRef}
      className="group button inline-block"
      href="https://www.linkedin.com/in/riley-hoffman-014623213"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => triggerEffect(applyEffect)}
    >
      <Icon
        className="box-content bg-accentone-300 p-2 text-5xl text-heading group-hover:bg-heading group-hover:text-accentone-300 dark:bg-[#292d11]"
        icon="fa6-brands:linkedin-in"
      />
      <span className="px-6">
        Follow me on LinkedIn
        <NewTabContent />
      </span>
    </Link>
  )
}

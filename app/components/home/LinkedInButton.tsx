import { useRef } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { useTimedEffect } from "../../../hooks/useTimedEffect"
import { NewTabSrText } from "../../components/NewTabSrText"

export const LinkedInButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const { triggerEffect } = useTimedEffect(1000)

  const applyEffect = (isCounting: boolean) => {
    buttonRef.current?.classList.toggle(
      "motion-safe:animate-[wiggle_1s]",
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
      <FontAwesomeIcon
        className="box-content bg-accentone-200 p-2 text-5xl text-textcolor group-hover:bg-textcolor group-hover:text-accentone-200 dark:bg-[#292d11]"
        icon={faLinkedinIn}
      />
      <span className="px-6">
        Follow me on LinkedIn
        <NewTabSrText icon={true} />
      </span>
    </Link>
  )
}

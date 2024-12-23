import Link from "next/link"
import { NewTabSrText } from "../../NewTabSrText"

interface NavListItemProps {
  to?: string
  label?: string
  hide?: boolean
  isActive: boolean
  resume?: string
}

export const NavListItem = ({
  to = "",
  label = "",
  hide = false,
  resume = "",
  isActive,
}: NavListItemProps) => {
  const hiddenClass = hide ? " hidden" : ""
  const activeClass = isActive ? " active" : ""
  return (
    <li className="block md:inline">
      {resume ? (
        <a
          className={`nav-link button ${hiddenClass}`}
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <NewTabSrText icon={true} />
        </a>
      ) : (
        <Link
          className={`nav-link button no-underline [&.active]:bg-accentone-200 [&.active]:text-textcolor hover:[&.active]:brightness-100${hiddenClass}${activeClass}`}
          href={to}
        >
          {label}
        </Link>
      )}
    </li>
  )
}

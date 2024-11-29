import Link from "next/link"
import { NewTabSrText } from "../../components/NewTabSrText"

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
  const hiddenClass = hide ? "hidden" : ""
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
          className={`nav-link button ${hiddenClass} ${isActive ? "active" : ""} [&.active]:bg-accentone-200 [&.active]:text-textcolor hover:[&.active]:brightness-100`}
          href={to}
        >
          {label}
        </Link>
      )}
    </li>
  )
}

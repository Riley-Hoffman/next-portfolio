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
  const commonClasses =
    "w-full inline-block py-3 pr-5 pl-14 tracking-wider whitespace-nowrap button md:py-2 md:px-4 md:inline-block md:w-auto hover:[&.button]:bg-pink-200 hover:brightness-90"
  const hiddenClass = hide ? "hidden" : ""
  return (
    <li className="block md:inline">
      {resume ? (
        <a
          className={`button new-tab ${commonClasses} ${hiddenClass}`}
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <NewTabSrText icon={true} />
        </a>
      ) : (
        <Link
          className={`button ${commonClasses} ${hiddenClass} ${isActive ? "active" : ""} [&.active]:bg-pink-200 [&.active]:text-zinc hover:[&.active]:brightness-100`}
          href={to}
        >
          {label}
        </Link>
      )}
    </li>
  )
}

import Link from "next/link"
import { useRoutes } from "../../../../hooks/useRoutes"
import { NewTabSrText } from "../../NewTabSrText"

const noJsMenuLinkClasses = "button p-2 py-3 md:p-4"

export const NoJsMenu = () => (
  <noscript>
    <nav className="px-4" aria-label="No JS Menu Links">
      <ul className="flex flex-wrap justify-center py-2 gap-x-0 gap-y-2 md:gap-0">
        {useRoutes("filtered").map((route) => (
          <li key={route.to}>
            <Link className={noJsMenuLinkClasses} href={route.to}>
              {route.label}
            </Link>
          </li>
        ))}
        <li>
          <a className={noJsMenuLinkClasses} href="/riley-hoffman-resume.pdf">
            Resume <NewTabSrText />
          </a>
        </li>
      </ul>
    </nav>
  </noscript>
)

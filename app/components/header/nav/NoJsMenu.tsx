import Link from "next/link"
import { NewTabSrText } from "../../NewTabSrText"
import { navLinks } from "./Nav"

export const NoJsMenu = () => (
  <noscript>
    <nav className="px-4 md:hidden" aria-label="No JS Menu Links">
      <ul className="flex flex-wrap gap-x-2 gap-y-3">
        {navLinks.map((route) => (
          <li key={route.to}>
            <Link className="button p-1" href={route.to}>
              {route.label}
            </Link>
          </li>
        ))}
        <li>
          <a className="button p-1" href="/riley-hoffman-resume.pdf">
            Resume <NewTabSrText />
          </a>
        </li>
      </ul>
    </nav>
  </noscript>
)

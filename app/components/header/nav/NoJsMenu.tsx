import Link from "next/link"
import { RouteList } from "../../RouteList"
import { NewTabSrText } from "../../NewTabSrText"

export const NoJsMenu = () => (
  <noscript>
    <nav className="px-4 md:hidden" aria-label="No JS Menu Links">
      <ul className="flex flex-wrap gap-x-2 gap-y-3">
        {RouteList.map(
          (route) =>
            route.name !== "Particle Cleanup Game" &&
            route.name !== "Accessibility" && (
              <li key={route.path}>
                <Link className="button p-1" href={route.path}>
                  {route.name}
                </Link>
              </li>
            )
        )}
        <li>
          <a className="button p-1" href="/riley-hoffman-resume.pdf">
            Resume <NewTabSrText />
          </a>
        </li>
      </ul>
    </nav>
  </noscript>
)

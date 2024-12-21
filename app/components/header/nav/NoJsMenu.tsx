import Link from "next/link"
import { NewTabSrText } from "../../NewTabSrText"
import { Route } from "../../../../hooks/getRoutes"

interface NoJsMenuProps {
  routes: Route[]
}

export const NoJsMenu = ({ routes }: NoJsMenuProps) => (
  <noscript>
    <nav
      className="sticky top-0 z-30 bg-accentone-100 px-4 md:hidden"
      aria-label="No JS Menu Links"
    >
      <ul className="flex flex-wrap gap-x-2 gap-y-3 p-4">
        {routes.map(
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

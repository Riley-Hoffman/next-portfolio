import Link from 'next/link'
import { useRoutes } from '@/hooks/useRoutes'
import { NewTabContent } from '@/app/components/utils/NewTabContent'

const noJsMenuLinkClasses = 'button p-2 py-1 md:py-2 md:px-3'

export const NoJsMenu = () => (
  <noscript>
    <nav className="no-js-menu px-4" aria-label="No JS Menu Links">
      <ul className="flex flex-wrap justify-center gap-x-0 gap-y-2 bg-heading py-2 md:gap-0">
        {useRoutes('main').map((route) => (
          <li key={route.to}>
            <Link className={noJsMenuLinkClasses} href={route.to}>
              {route.label}
            </Link>
          </li>
        ))}
        <li>
          <a className={noJsMenuLinkClasses} href="/riley-hoffman-resume.pdf">
            Resume <NewTabContent icon={false} />
          </a>
        </li>
      </ul>
    </nav>
  </noscript>
)

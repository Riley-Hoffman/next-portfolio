import Link from 'next/link'
import { useRoutes } from '@/app/hooks/shared/useRoutes'
import { NewTabContent } from '@/app/components/shared/NewTabContent'

const NO_JS_MENU_LINK_CLASSES = 'button p-2 py-1 md:py-2 md:px-3'

export const NoJsMenu = () => {
  const MAIN_ROUTES = useRoutes('main')
  return (
    <noscript>
      <nav className="no-js-menu px-4" aria-label="No JS Menu Links">
        <ul className="flex flex-wrap justify-center gap-x-0 gap-y-2 bg-heading py-2 md:gap-0">
          {MAIN_ROUTES.map(({ to, label }) => (
            <li key={to}>
              <Link className={NO_JS_MENU_LINK_CLASSES} href={to}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              className={NO_JS_MENU_LINK_CLASSES}
              href="/riley-hoffman-resume.pdf"
            >
              Resume <NewTabContent icon={false} />
            </a>
          </li>
        </ul>
      </nav>
    </noscript>
  )
}

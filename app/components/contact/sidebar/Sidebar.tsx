import { SIDEBAR_EXTERNAL_LINKS } from './constants/sidebarExternalLinks'
import { LinkWrapper } from '@/app/components/shared/LinkWrapper'
export const Sidebar = () => (
  <nav className="sidebar" aria-label="External Links">
    <h3>Links</h3>
    <ul>
      {SIDEBAR_EXTERNAL_LINKS.map(({ name, url }) => (
        <li key={name}>
          <LinkWrapper href={url} showNewTabIcon={true}>
            {name}
          </LinkWrapper>
        </li>
      ))}
    </ul>
  </nav>
)

import { SIDEBAR_EXTERNAL_LINKS } from './constants/sidebarExternalLinks'
import { LinkWrapper } from '@/app/components/shared/LinkWrapper'
export const Sidebar = () => (
  <aside className="sidebar">
    <h3>Links</h3>
    <ul aria-label="External Links">
      {SIDEBAR_EXTERNAL_LINKS.map(({ name, url }) => (
        <li key={name}>
          <LinkWrapper href={url} showNewTabIcon={true}>
            {name}
          </LinkWrapper>
        </li>
      ))}
    </ul>
  </aside>
)

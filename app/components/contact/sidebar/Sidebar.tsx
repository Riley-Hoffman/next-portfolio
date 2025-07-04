import { NewTabContent } from '@/app/components/shared/NewTabContent'
import { SIDEBAR_EXTERNAL_LINKS } from './constants/sidebarExternalLinks'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'
import '@/app/styles/contact/sidebar.css'

export const Sidebar = () => (
  <aside className="sidebar">
    <h3>Links</h3>
    <ul aria-label="External Links">
      {SIDEBAR_EXTERNAL_LINKS.map(({ name, url }) => (
        <li key={name}>
          <a href={url} {...EXTERNAL_LINK_ATTR}>
            {name} <NewTabContent />
          </a>
        </li>
      ))}
    </ul>
  </aside>
)

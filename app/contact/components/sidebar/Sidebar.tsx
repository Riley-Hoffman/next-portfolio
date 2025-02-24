import clsx from 'clsx'
import { NewTabContent } from '@/app/components/utils/NewTabContent'
import { SIDEBAR_EXTERNAL_LINKS } from './constants/sidebarExternalLinks'
import './styles/sidebar.css'

export const Sidebar = () => (
  <aside className="sidebar">
    <h3 className="mx-auto my-0 bg-heading text-accentone-200">Links</h3>
    {SIDEBAR_EXTERNAL_LINKS.map(({ name, url }, index) => (
      <a
        key={name}
        className={clsx(
          'block font-urbanist no-underline',
          index === 0 ? 'pb-2 pt-3' : 'pb-3 pt-2'
        )}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name} <NewTabContent />
      </a>
    ))}
  </aside>
)

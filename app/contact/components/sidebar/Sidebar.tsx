import clsx from 'clsx'
import { NewTabContent } from '@/app/components/utils/NewTabContent'
import { sidebarLinks } from './constants/SidebarLinks'

export const Sidebar = () => (
  <aside className="mx-auto mt-7 self-start bg-accentone-200 py-[0.1px] text-center md:sticky md:top-24 md:w-1/6 md:rounded-sm md:border-x md:border-b md:border-solid md:border-bordercolor">
    <h3 className="mx-auto my-0 bg-heading text-accentone-200">Links</h3>
    {sidebarLinks.map(({ name, url }, index) => (
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

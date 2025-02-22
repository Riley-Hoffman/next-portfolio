import { Icon } from '@iconify/react'
import { Tech } from './SiteTechStack'
import { NewTabContent } from '@/app/components/utils/NewTabContent'

export const TechItem = ({ name, logo, url, version }: Tech) => (
  <>
    <li key={name} className="relative pt-8">
      <a
        className="tech-button"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={logo} className="text-7xl" />
        <span className="mt-2 block text-lg leading-none">
          {name}
          <NewTabContent />
        </span>
        {version}
      </a>
    </li>
  </>
)

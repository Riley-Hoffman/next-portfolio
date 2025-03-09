import { Icon } from '@iconify/react'
import { Tech } from '@/app/types/home/Tech.interface'
import { NewTabContent } from '@/app/components/shared/NewTabContent'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'

export const TechItem = ({ name, logo, url, version }: Tech) => (
  <>
    <li key={name} className="relative pt-8">
      <a className="tech-button" href={url} {...EXTERNAL_LINK_ATTR}>
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

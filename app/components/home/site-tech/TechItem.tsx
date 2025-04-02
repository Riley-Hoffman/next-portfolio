import { Icon } from '@iconify/react'
import { Tech } from '@/app/types/home/Tech.interface'
import { NewTabContent } from '@/app/components/shared/NewTabContent'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'

export const TechItem = ({ name, logo, url, version }: Tech) => (
  <>
    <li key={name}>
      <a href={url} {...EXTERNAL_LINK_ATTR}>
        <Icon icon={logo} />
        <span>
          {name}
          <NewTabContent />
        </span>
        {version}
      </a>
    </li>
  </>
)

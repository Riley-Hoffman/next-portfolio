import { Icon } from '@iconify/react'
import { Tech } from '@/app/types/home/Tech.interface'
import { LinkWrapper } from '@/app/components/shared/LinkWrapper'

export const TechItem = ({ name, logo, url, version }: Tech) => (
  <>
    <li key={name}>
      <LinkWrapper href={url}>
        <Icon icon={logo} />
        <span>{name}</span>
        {version}
      </LinkWrapper>
    </li>
  </>
)

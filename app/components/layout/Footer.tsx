import Link from 'next/link'
import { Icon } from '@iconify/react'
import { getPageTitle, GITHUB_URL, VERSION } from '@/app/constants/baseData'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'
import { EmptyObject } from '@/app/types/shared/EmptyObject.type'

export const Footer = ({}: EmptyObject) => (
  <footer>
    <h2>Footer</h2>
    <p>
      {getPageTitle()} <small>(v{VERSION}) </small>
      <a
        className="group"
        href={GITHUB_URL}
        aria-label="Site repo on GitHub (Opens in a new tab)"
        {...EXTERNAL_LINK_ATTR}
      >
        <Icon className="md:group-hover:text-accenttwo-200" icon="cib:github" />
      </a>
    </p>
    <Link href="/accessibility/">Accessibility</Link>
    <p>©{new Date().getFullYear()}</p>
  </footer>
)

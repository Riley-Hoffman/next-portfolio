import { Icon } from '@iconify/react'
import { getPageTitle, GITHUB_URL, VERSION } from '@/app/constants/baseData'
import { LinkWrapper } from '@/app/components/shared/LinkWrapper'

export const Footer = () => (
  <footer>
    <h2>Footer</h2>
    <p>
      {getPageTitle()} <small>(v{VERSION}) </small>
      <LinkWrapper
        href={GITHUB_URL}
        aria-label="Site repo on GitHub (Opens in a new tab)"
      >
        <Icon icon="cib:github" />
      </LinkWrapper>
    </p>
    <LinkWrapper href="/accessibility/">Accessibility</LinkWrapper>
    <p>©{new Date().getFullYear()}</p>
  </footer>
)

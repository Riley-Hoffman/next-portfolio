import Link from 'next/link'
import { Icon } from '@iconify/react'
import { getPageTitle, githubUrl, version } from '@/constants/baseData'

export const Footer = () => (
  <footer>
    <h2>Footer</h2>
    <p>
      {getPageTitle()} <small>(v{version}) </small>
      <a
        className="group"
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Site repo on GitHub (Opens in a new tab)"
      >
        {' '}
        <Icon
          className="group-hover:text-accenttwo-200 group-focus-visible:text-accenttwo-200"
          icon="cib:github"
        />
      </a>
    </p>
    <Link href="/accessibility">Accessibility</Link>
    <p>©{new Date().getFullYear()}</p>
  </footer>
)

import Link from "next/link"
import { Icon } from "@iconify/react"
import { getPageTitle, githubUrl, version } from "@/constants/baseData"

export const Footer = () => (
  <footer className="gradient-border min-h-24 border-t border-solid bg-accentone-200 contrast-more:bg-white dark:bg-accentone-100">
    <h2 className="sr-only">Footer</h2>
    <div className="max-w-screen-xl py-7 md:flex md:items-center md:justify-between">
      <p className="font-urbanist">
        {getPageTitle()} <small>(v{version}) </small>
        <a
          className="group inline-block min-h-full no-underline md:tool-tip md:min-h-5 md:min-w-6"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Site repo on GitHub (Opens in a new tab)"
        >
          {" "}
          <Icon
            className="ml-1 text-3xl group-hover:text-accenttwo-200 group-focus-visible:text-accenttwo-200 md:text-base"
            icon="cib:github"
          />
        </a>
      </p>
      <p className="mr-auto p-0 font-medium">
        <Link className="px-3 py-1" href="/accessibility">
          Accessibility
        </Link>
      </p>
      <p>
        <span className="mr-0.5">©</span>
        {new Date().getFullYear()}
      </p>
    </div>
  </footer>
)

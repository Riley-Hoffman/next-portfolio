import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { getPageTitle, githubUrl, version } from "../../lib/constants"

export const Footer = () => {
  return (
    <footer className="gradient-border min-h-[5.563rem] border-t border-solid bg-pink-200 contrast-more:bg-white">
      <h2 className="sr-only">Footer</h2>
      <div className="max-w-screen-xl py-7 md:flex md:items-center md:justify-between">
        <p className="m-0 px-3 py-1 font-urbanist text-base">
          {getPageTitle()} <small>(v{version}) </small>
          <a
            className="group inline-block min-h-[1.875rem] min-w-[2.125rem] no-underline md:min-h-[1.25rem] md:min-w-[1.5rem]"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="(Opens in a new tab) Site repo on Github"
            aria-label="(Opens in a new tab) Site repo on Github"
          >
            {" "}
            <FontAwesomeIcon
              className="ml-1 text-3xl group-hover:text-purple-200 group-focus-visible:text-purple-200 md:text-base"
              icon={faGithub}
            />
          </a>
        </p>
        <p className="m-0 mr-auto p-0 text-base">
          <Link className="px-3 py-1" href="/accessibility">
            Accessibility
          </Link>
        </p>
        <p className="m-0 px-3 py-1 text-base">
          <span className="mr-[0.125rem]">©</span>
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

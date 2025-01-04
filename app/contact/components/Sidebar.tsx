import clsx from "clsx"
import { NewTabContent } from "@/app/components/utils/NewTabContent"
import { githubUrl, linkedInUrl } from "@/constants/baseData"

const links = [
  { name: "GitHub", url: githubUrl },
  { name: "LinkedIn", url: linkedInUrl },
]

export const Sidebar = () => (
  <aside className="mx-auto mt-7 bg-accentone-100 py-[0.1px] text-center md:sticky md:top-24 md:w-11/12 md:rounded-sm md:border-x md:border-b md:border-solid md:border-bordercolor">
    <h3 className="mx-auto my-0 bg-heading text-accentone-100">Links</h3>
    {links.map(({ name, url }, index) => (
      <a
        key={name}
        className={clsx(
          "block font-urbanist no-underline",
          index === 0 ? "pb-2 pt-3" : "pb-3 pt-2"
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

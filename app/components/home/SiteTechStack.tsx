import { useRef } from "react"
import { Icon } from "@iconify/react"
import { NewTabContent } from "@/app/components/NewTabContent"

interface Tech {
  name: string
  logo: string
  url: string
}
const technologies: Tech[] = [
  { name: "React", logo: "cib:react", url: "https://react.dev" },
  {
    name: "Next.js",
    logo: "devicon-plain:nextjs",
    url: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    logo: "cib:typescript",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Tailwind CSS",
    logo: "bxl:tailwind-css",
    url: "https://tailwindcss.com",
  },
  {
    name: "Firebase",
    logo: "bxl:firebase",
    url: "https://firebase.google.com",
  },
]

export const SiteTechStack = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  return (
    <>
      <section
        className="gradient-border border-t-2 border-solid pb-12 pt-8"
        ref={targetRef}
      >
        <div className="container mx-auto max-w-screen-xl text-center">
          <h2 className="reg-caps mb-2 font-inconsolata text-2xl">
            Technologies Used To Build This Site
          </h2>
          <ul
            className="block min-h-40 max-w-6xl sm:flex sm:flex-wrap sm:justify-center sm:gap-x-6"
            aria-label="Site tech stack."
          >
            {technologies.map((tech) => (
              <li key={tech.name} className="relative overflow-hidden pt-8">
                <a
                  className="mx-auto block min-h-[9.5rem] w-fit min-w-[13.1rem] rounded-md bg-accentone-100 p-5 no-underline duration-0 md:tool-tip before:content-none after:-z-10 hover:after:text-accentone-100 focus-visible:bg-textcolor focus-visible:text-accentone-100 md:after:h-0 md:after:w-full md:after:rounded-bl-none md:after:rounded-br-none md:after:bg-accentone-100 md:after:py-0 md:after:text-center md:after:leading-5 md:after:opacity-100 md:after:transition-[height,padding-bottom] md:after:content-['Opens_in_a_new_tab.'] md:hover:rounded-tl-none md:hover:rounded-tr-none md:hover:bg-textcolor md:hover:text-accentone-100 md:hover:after:h-[1.813rem] md:hover:after:bg-textcolor md:hover:after:py-[0.25rem] md:focus-visible:rounded-tl-none md:focus-visible:rounded-tr-none md:focus-visible:bg-textcolor md:focus-visible:outline-none motion-safe:md:after:duration-500"
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={tech.logo} className="mx-auto text-7xl" />
                  <p className="my-1 text-xl" translate="no">
                    {tech.name}
                    <NewTabContent text={false} />
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

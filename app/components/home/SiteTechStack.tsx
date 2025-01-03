import { useRef } from "react"
import { Icon } from "@iconify/react"
import { NewTabContent } from "@/app/components/utils/NewTabContent"

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
            className="block min-h-40 max-w-6xl sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5"
            aria-label="Site tech stack."
          >
            {technologies.map((tech) => (
              <li key={tech.name} className="relative overflow-hidden pt-8">
                <a
                  className="mx-auto block min-h-36 w-fit min-w-52 rounded-md bg-accentone-100 p-5 no-underline duration-0 focus-visible:bg-textcolor focus-visible:text-accentone-100 md:hover:bg-textcolor md:hover:text-accentone-100 md:focus-visible:bg-textcolor md:focus-visible:outline-none"
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={tech.logo} className="mx-auto text-7xl" />
                  <p className="my-1 text-xl">
                    {tech.name}
                    <NewTabContent />
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

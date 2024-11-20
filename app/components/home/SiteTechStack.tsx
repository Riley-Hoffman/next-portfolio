import { NewTabSrText } from "../../components/NewTabSrText"

interface Tech {
  name: string
  logo: string
  url: string
}

export const SiteTechStack = () => {
  const technologies: Tech[] = [
    { name: "React", logo: "devicon-react-original", url: "https://react.dev" },
    {
      name: "Next.js",
      logo: "devicon-nextjs-plain",
      url: "https://nextjs.org",
    },
    {
      name: "TypeScript",
      logo: "devicon-typescript-plain",
      url: "https://www.typescriptlang.org",
    },
    {
      name: "Tailwind CSS",
      logo: "devicon-tailwindcss-original",
      url: "https://tailwindcss.com",
    },
    {
      name: "Firebase",
      logo: "devicon-firebase-plain",
      url: "https://firebase.google.com",
    },
  ]
  return (
    <>
      <h2 className="reg-caps mb-2 font-inconsolata text-2xl">
        Technologies Used To Build This Site
      </h2>
      <ul
        className="grid min-h-40 max-w-6xl grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6"
        aria-label="Site tech stack."
      >
        {technologies.map((tech, index) => (
          <li
            key={tech.name}
            className={`relative overflow-hidden pt-8 sm:col-auto lg:col-auto ${
              index === technologies.length - 2 && "md:col-start-1"
            } ${index === technologies.length - 1 && "md:col-start-3"}`}
          >
            <a
              className="mx-auto block min-h-[9.5rem] w-fit min-w-[13.1rem] rounded-md bg-pink-100 p-5 no-underline shadow-[#12121c_0.25rem_0.25rem_0_0_inset_#12121c_0_0_150px_0] md:tool-tip before:left-1 before:inline-block before:h-0 before:border-0 before:pl-[0.313rem] before:font-fontawesomesolid before:text-[63%] before:font-normal before:duration-0 after:w-full after:rounded-bl-none after:rounded-br-none after:text-center after:leading-5 after:duration-0 focus-visible:bg-zinc focus-visible:text-pink-100 active:min-h-fit md:before:content-['\f08e'] md:after:content-['Opens_new_window'] md:hover:rounded-tl-none md:hover:rounded-tr-none md:hover:bg-zinc md:hover:text-pink-100 md:hover:shadow-[inset_#12121c_100vw_100vh_150px_0] md:focus-visible:rounded-tl-none md:focus-visible:rounded-tr-none md:focus-visible:bg-pink-100 md:focus-visible:shadow-[inset_#12121c_100vw_100vh_150px_0] md:focus-visible:outline-none"
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`${tech.logo} mx-auto text-7xl`}
                aria-hidden={true}
              ></i>
              <p className="my-1 text-xl" translate="no">
                {tech.name}
                <NewTabSrText />
              </p>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

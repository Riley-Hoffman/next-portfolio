import { useMemo, useEffect } from "react";
import { useTriggerOnScroll } from "../../../hooks/useTriggerOnScroll";
import { NewTabSrText } from "../../components/NewTabSrText";

interface Tech {
  name: string;
  logo: string;
  url: string;
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
  ];
  const elementsRef = useTriggerOnScroll();
  const animation = useMemo(
    () => [
      "motion-safe:md:h-[0rem]",
      "[&[data-active='true']]:h-[10rem]",
      "transition-all",
      "first:duration-150",
      "[&:nth-child(2)]:duration-300",
      "[&:nth-child(3)]:duration-500",
      "[&:nth-child(4)]:duration-700",
      "last:duration-1000",
      "ease",
    ],
    [],
  );
  useEffect(() => {
    if (elementsRef.current) {
      elementsRef.current.forEach((element: HTMLElement) => {
        animation.forEach((className) => {
          element.classList.add(className);
        });
      });
    }
  }, [animation, elementsRef]);

  return (
    <>
      <h2 className="reg-caps mb-8 font-inconsolata text-2xl">
        Technologies Used To Build This Site
      </h2>
      <ul
        className="grid min-h-40 max-w-6xl grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6"
        aria-label="Site tech stack."
      >
        {technologies.map((tech, index) => (
          <li
            key={tech.name}
            className={`relative sm:col-auto lg:col-auto ${
              index === technologies.length - 2 && "md:col-start-1"
            } ${index === technologies.length - 1 && "md:col-start-3"}`}
            ref={(el) => {
              if (el) {
                elementsRef.current.push(el);
              }
            }}
          >
            <a
              className="mx-auto block min-h-[9.5rem] w-fit min-w-[13.1rem] rounded-md bg-pink-100 p-5 no-underline shadow-[#12121c_0.25rem_0.25rem_0_0_inset_#12121c_0_0_150px_0] transition-shadow duration-200 hover:bg-zinc hover:text-pink-100 focus-visible:bg-zinc focus-visible:text-pink-100 active:min-h-fit motion-safe:md:hover:bg-pink-100 motion-safe:md:hover:shadow-[inset_#12121c_100vw_100vh_150px_0] motion-safe:md:hover:duration-1000 motion-safe:md:focus-visible:bg-pink-100 motion-safe:md:focus-visible:shadow-[inset_#12121c_100vw_100vh_150px_0] motion-safe:md:focus-visible:duration-1000"
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
  );
};

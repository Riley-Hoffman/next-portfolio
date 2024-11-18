import type { Metadata } from "next"
import "../../public/devicon.css"
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from "../components/SchemaGenerator"
import { skillsData } from "./components/skills/SkillsData"
import { SkillItem } from "./components/skills/SkillItem"
import { Carousel } from "./components/carousel/Carousel"
import { CarouselData } from "./components/carousel/CarouselData"
import { getBaseUrl, getPageTitle, getImageUrl } from "../../lib/constants"

const description = `My skills. ${getPageTitle()}.`

export const metadata: Metadata = {
  title: "Skills",
  description: description,
  metadataBase: new URL(`${getBaseUrl("/skills")}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: getImageUrl(),
    title: "Skills",
    url: `${getBaseUrl("/skills")}`,
  },
}

export default function Skills() {
  const schemaData: SchemaGeneratorProps["schemaData"] = {
    title: "Skills",
    description,
    urlPath: "/skills",
    publishDate: "2024-07-04T09:25:01.340Z",
    schemaType: "WebPage",
  }
  return (
    <>
      <SchemaGenerator schemaData={schemaData} />
      <section className="pb-16">
        <h1 className="heading-one inverted">
          Skills
        </h1>
        <div className="relative max-w-screen-xl">
          <ul
            className="skills-list mt-16 grid max-w-5xl grid-cols-2 justify-items-center gap-x-6 gap-y-16 pb-12 pt-9 sm:grid-cols-3 md:grid-cols-4"
            aria-label="Skills"
          >
            {skillsData.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </ul>
          <div className="oval absolute bottom-[3%] left-[5%] right-[5%] top-[3%] -z-10 rounded-[50%] bg-purple-100 opacity-10"></div>
        </div>
      </section>
      <section className="gradient-border border-t-2 border-solid bg-offwhite pb-16 pt-7">
        <h2 className="max-w-fit pb-5" id="trainingsLabel">
          Trainings & Certifications
        </h2>
        <Carousel slides={CarouselData} />
      </section>
    </>
  )
}

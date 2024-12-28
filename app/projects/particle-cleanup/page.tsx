import type { Metadata } from "next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLessThan } from "@fortawesome/free-solid-svg-icons"
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from "../../components/SchemaGenerator"
import { ParticleCleanup } from "./components/ParticleCleanup"
import { getBaseUrl, getImageUrl } from "../../../constants/baseData"
import "../../styles/numbered-icons.css"

const description =
  "How quickly can you clear all the particles from the board using your cursor or finger?"

export const metadata: Metadata = {
  title: "Particle Cleanup Game",
  description: description,
  metadataBase: new URL(`${getBaseUrl("/projects/particle-cleanup")}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    images: getImageUrl(),
    title: "Particle Cleanup Game",
    url: `${getBaseUrl("/projects/particle-cleanup")}`,
  },
}
const schemaData: SchemaGeneratorProps["schemaData"] = {
  title: "Particle Cleanup Game",
  description,
  urlPath: "/projects/particle-cleanup",
  publishDate: "2024-08-05T09:25:01.340Z",
  schemaType: "WebPage",
}

export default function ParticleCleanupWrapper() {
  return (
    <>
      <SchemaGenerator schemaData={schemaData} />
      <div className="pb-16">
        <h1 className="heading-one">Particle Cleanup Game</h1>
        <div className="max-w-screen-md">
          <h2 translate="no">
            <span translate="no">React</span>, TSX, SCSS
          </h2>
          <p>
            How quickly can you clear all the particles from the board using
            your cursor or finger?
          </p>
          <ol
            className="numbered-icons icon-color mb-1 pl-10 pr-5 text-xl sm:flex md:text-2xl"
            aria-label="Medal Criteria"
          >
            <li className="before:bg-[#8a7400] before:text-[#fbfdff]">
              <span className="sr-only">Gold, Less Than 15 seconds.</span>
              <span aria-hidden={true}>
                <FontAwesomeIcon icon={faLessThan} /> 15s &nbsp;&nbsp;
              </span>
            </li>
            <li className="before:bg-[#737373] before:text-[#fbfdff]">
              <span className="sr-only">Silver, 15 to 20 seconds.</span>
              <span aria-hidden={true}>15s-20s &nbsp;&nbsp;</span>
            </li>
            <li className="before:bg-[#a2652a] before:text-[#fbfdff]">
              <span className="sr-only">Bronze, 21 to 25 seconds.</span>
              <span aria-hidden={true}>21s-25s &nbsp;&nbsp;</span>
            </li>
          </ol>
          <ParticleCleanup />
        </div>
      </div>
    </>
  )
}

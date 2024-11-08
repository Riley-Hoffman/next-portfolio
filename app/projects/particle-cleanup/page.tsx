import type { Metadata } from "next";
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from "../../components/SchemaGenerator";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ParticleCleanup } from "./components/ParticleCleanup";
import { getBaseUrl, getImageUrl } from "../../../lib/constants";

const description =
  "How quickly can you clear all the particles from the board using your cursor or finger?";

export const metadata: Metadata = {
  title: "Particle Cleanup Game",
  description: description,
  metadataBase: new URL(`${getBaseUrl("/projects/particle-cleanup")}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: getImageUrl(),
    title: "Particle Cleanup Game",
    url: `${getBaseUrl("/projects/particle-cleanup")}`,
  },
};

export default function ParticleCleanupWrapper() {
  const schemaData: SchemaGeneratorProps["schemaData"] = {
    title: "Particle Cleanup Game",
    description,
    urlPath: "/projects/particle-cleanup",
    publishDate: "2024-08-05T09:25:01.340Z",
    schemaType: "WebPage",
  };
  return (
    <>
      <SchemaGenerator schemaData={schemaData} />
      <div className="pb-16">
        <h1 className="gradient-border inverted mb-7 mt-0 border-b-2 bg-[#eee2f3] px-5 py-10 text-center text-3xl leading-normal contrast-more:bg-white md:text-5xl md:leading-normal">
          Particle Cleanup Game
        </h1>
        <div className="max-w-screen-md">
          <h2 translate="no">
            <span translate="no">React</span>, TSX, SCSS
          </h2>
          <p>
            How quickly can you clear all the particles from the board using
            your cursor or finger?
          </p>
          <ol
            className="numbered-icons pl-10 pr-5 text-xl leading-normal sm:flex md:text-2xl md:leading-normal"
            aria-label="Medal Criteria"
          >
            <li className="before:bg-[#8a7400]">
              <span className="sr-only">Gold, Less Than 15 seconds.</span>
              <span aria-hidden={true}>
                <FontAwesomeIcon icon={faLessThan} /> 15s &nbsp;&nbsp;
              </span>
            </li>
            <li className="before:bg-[#737373]">
              <span className="sr-only">Silver, 15 to 20 seconds.</span>
              <span aria-hidden={true}>15s-20s &nbsp;&nbsp;</span>
            </li>
            <li className="before:bg-[#a2652a]">
              <span className="sr-only">Bronze, 21 to 25 seconds.</span>
              <span aria-hidden={true}>21s-25s &nbsp;&nbsp;</span>
            </li>
          </ol>
          <ParticleCleanup />
        </div>
      </div>
    </>
  );
}

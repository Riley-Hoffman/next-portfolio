import type { Metadata } from "next";
import "../../public/devicon.css";
import SchemaOrg from "../components/SchemaOrg";
import { SkillsData } from "./components/skills/SkillsData";
import { SkillItem } from "./components/skills/SkillItem";
import { Carousel } from "./components/carousel/Carousel";
import { CarouselData } from "./components/carousel/CarouselData";
import { WebPage, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Skills",
  description: "My skills. Riley Hoffman - Web Developer.",
  metadataBase: new URL("https://rileyhoffman.com/skills"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images:
      "https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg",
    title: "Skills",
    url: "https://rileyhoffman.com/skills/",
  },
};

export default function Skills() {
  const schema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Skills - Riley Hoffman - Web Developer",
    description: "My skills. Riley Hoffman - Web Developer.",
    image: "https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg",
    url: "https://rileyhoffman.com/skills",
    datePublished: "2024-07-04T09:25:01.340Z",
    mainEntity: {
      "@type": "Person",
      name: "Riley Hoffman",
      url: "https://rileyhoffman.com",
      jobTitle: "Web Developer",
      sameAs: [
        "https://www.linkedin.com/in/rileyhoffman",
        "https://github.com/rileyhoffman",
      ],
    },
    author: {
      "@type": "Person",
      name: "Riley Hoffman",
    },
  };
  return (
    <>
      <SchemaOrg structuredData={schema} />
      <section className="pb-16">
        <h1 className="gradient-border inverted mb-7 mt-0 border-b-2 bg-[#eee2f3] px-5 py-10 text-center text-3xl leading-normal contrast-more:bg-white md:text-5xl md:leading-normal">
          Skills
        </h1>
        <div className="relative max-w-screen-xl">
          <ul
            className="skills-list mt-16 grid max-w-5xl grid-cols-2 justify-items-center gap-x-6 gap-y-16 pb-12 pt-9 sm:grid-cols-3 md:grid-cols-4"
            aria-label="Skills"
          >
            {SkillsData.map((skill, index) => (
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
  );
}

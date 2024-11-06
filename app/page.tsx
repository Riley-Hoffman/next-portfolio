"use client";
import { useRef } from "react";
import SchemaOrg from "./components/SchemaOrg";
import { LazyLoadLink } from "./components/LazyLoadLink";
import { CoverImage } from "./components/home/CoverImage";
import { FirstFoldContent } from "./components/home/FirstFoldContent";
import { MyJourney } from "./components/home/MyJourney";
import { SiteTechStack } from "./components/home/SiteTechStack";
import { WebPage, WithContext } from "schema-dts";
import {
  getBaseUrl,
  getPageTitle,
  baseDescription,
  author,
  getImageUrl,
  githubUrl,
  linkedInUrl,
} from "../lib/constants";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const schema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: getPageTitle(),
    description: baseDescription,
    image: getImageUrl(),
    url: getBaseUrl(),
    datePublished: "2024-07-04T09:25:01.340Z",
    mainEntity: {
      "@type": "Person",
      name: author,
      url: getBaseUrl(),
      jobTitle: "Web Developer",
      sameAs: [linkedInUrl, githubUrl],
    },
    author: {
      "@type": "Person",
      name: `${author}/`,
    },
  };

  return (
    <>
      <SchemaOrg structuredData={schema} />
      <CoverImage
        width={1920}
        height={1080}
        srcImg="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/clouds3.webp"
        srcImgMobile="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/clouds2.webp"
      >
        <FirstFoldContent />
      </CoverImage>
      <MyJourney />
      <LazyLoadLink
        href="/devicon.css"
        rel="stylesheet"
        targetRef={targetRef}
      />
      <section
        className="gradient-border border-t-2 border-solid pb-12 pt-8"
        ref={targetRef}
      >
        <div className="container mx-auto max-w-screen-xl text-center">
          <SiteTechStack />
        </div>
      </section>
    </>
  );
}

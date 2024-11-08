"use client";
import { useRef } from "react";
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from "./components/SchemaGenerator";
import { LazyLoadLink } from "./components/LazyLoadLink";
import { CoverImage } from "./components/home/CoverImage";
import { FirstFoldContent } from "./components/home/FirstFoldContent";
import { MyJourney } from "./components/home/MyJourney";
import { SiteTechStack } from "./components/home/SiteTechStack";
import { baseDescription } from "../lib/constants";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const description = baseDescription;
  const schemaData: SchemaGeneratorProps["schemaData"] = {
    title: "",
    description,
    urlPath: "",
    publishDate: "2024-07-04T09:25:01.340Z",
    schemaType: "WebPage",
  };
  return (
    <>
      <SchemaGenerator schemaData={schemaData} />
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

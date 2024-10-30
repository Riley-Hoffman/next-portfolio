"use client";
import { useRef } from "react";
import SchemaOrg from "./components/SchemaOrg";
import { LazyLoadLink } from "./components/LazyLoadLink";
import { CoverImage } from "./components/home/CoverImage";
import { FirstFoldContent } from "./components/home/FirstFoldContent";
import { MyJourney } from "./components/home/MyJourney";
import { SiteTechStack } from "./components/home/SiteTechStack";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SchemaOrg
        headline="Riley Hoffman - Web Developer"
        description="I am a web developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers."
        image="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg"
        datePublished="2024-07-04T09:25:01.340Z"
      />
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

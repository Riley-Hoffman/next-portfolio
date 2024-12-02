"use client"
import Head from "next/head";
import { useRef } from "react"
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from "./components/SchemaGenerator"
import "./styles/overlay.css"
import { LazyLoadLink } from "./components/LazyLoadLink"
import { CoverImage, CoverImageProps } from "./components/home/CoverImage"
import { FirstFoldContent } from "./components/home/FirstFoldContent"
import { MyJourney } from "./components/home/MyJourney"
import { SiteTechStack } from "./components/home/SiteTechStack"
import { baseDescription } from "../lib/constants"

const description = baseDescription
const schemaData: SchemaGeneratorProps["schemaData"] = {
  title: "",
  description,
  urlPath: "",
  publishDate: "2024-07-04T09:25:01.340Z",
  schemaType: "WebPage",
}
const coverImageData: CoverImageProps["coverImageData"] = {
  width: 1920,
  height: 1080,
  highResSrc:
    "https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/clouds5.webp",
  lowResSrc:
    "https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/clouds4.webp",
  children: <FirstFoldContent />,
}

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <Head>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link href="/devicon.css" rel="stylesheet"></link>
        </noscript>
      </Head>
      <SchemaGenerator schemaData={schemaData} />
      <CoverImage coverImageData={coverImageData} />
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
  )
}

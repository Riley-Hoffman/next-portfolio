"use client"
import Head from "next/head"
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from "./components/SchemaGenerator"
import "./styles/overlay.css"
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
      <SiteTechStack />
    </>
  )
}

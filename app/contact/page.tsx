import { Metadata } from "next"
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from "@/app/components/SchemaGenerator"
import { ContactWrapper } from "./components/ContactWrapper"
import { Sidebar } from "./components/Sidebar"
import { getBaseUrl, getImageUrl } from "@/constants/baseData"
import "./components/form/styles/form.css"

const description =
  "Get in touch with web developer Riley Hoffman with the form on this page."

export const metadata: Metadata = {
  title: "Contact",
  description: description,
  metadataBase: new URL(`${getBaseUrl("/contact")}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    images: getImageUrl(),
    title: "Contact",
    url: `${getBaseUrl("/contact")}`,
  },
}

const schemaData: SchemaGeneratorProps["schemaData"] = {
  title: "Contact",
  description,
  urlPath: "/contact",
  publishDate: "2024-07-04T09:25:01.340Z",
  schemaType: "ContactPage",
}

export default function Contact() {
  return (
    <>
      <SchemaGenerator schemaData={schemaData} />
      <h1 className="heading-one">Contact Me</h1>
      <div className="max-w-5xl md:flex">
        <div className="pt-[1.875rem] md:w-5/6 md:pb-[13vh]">
          <ContactWrapper />
        </div>
        <div className="m-0 md:w-1/6">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

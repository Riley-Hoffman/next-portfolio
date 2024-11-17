import { Metadata } from "next"
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from "../components/SchemaGenerator"
import { ContactContent } from "./components/ContactContent"
import { Form } from "./components/Form"
import { Sidebar } from "./components/Sidebar"
import { getBaseUrl, getImageUrl } from "../../lib/constants"

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
    images: getImageUrl(),
    title: "Contact",
    url: `${getBaseUrl("/contact")}`,
  },
}

export default function Contact() {
  const schemaData: SchemaGeneratorProps["schemaData"] = {
    title: "Contact",
    description,
    urlPath: "/contact",
    publishDate: "2024-07-04T09:25:01.340Z",
    schemaType: "ContactPage",
  }
  return (
    <>
      <SchemaGenerator schemaData={schemaData} />
      <h1 className="inverted gradient-border mb-7 mt-0 border-b-2 bg-[#eee2f3] px-5 py-10 text-center text-3xl leading-normal contrast-more:bg-white md:text-5xl md:leading-normal">
        Contact Me
      </h1>
      <div className="max-w-5xl md:flex">
        <div className="pt-[1.875rem] md:w-5/6 md:pb-[13vh]">
          <ContactContent />
          <Form />
        </div>
        <div className="m-0 md:w-1/6">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

import { Metadata } from "next"
import { FAQPage, WithContext } from "schema-dts"
import { Accordion } from "./components/accordion/Accordion"
import {
  questions,
  answers,
} from "./components/accordion/constants/AccordionItems"
import SchemaInjector from "../components/schema/SchemaInjector"
import {
  getBaseUrl,
  getPageTitle,
  author,
  getImageUrl,
} from "@/constants/baseData"

const description = "Find the answers to my most frequently asked questions."

export const metadata: Metadata = {
  title: "FAQ",
  description: description,
  metadataBase: new URL(`${getBaseUrl("/faq")}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    images: getImageUrl(),
    title: "FAQ",
    url: `${getBaseUrl("/faq")}`,
  },
}
const faqSchemaData: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: getPageTitle("FAQ"),
  description: description,
  image: getImageUrl(),
  url: `${getBaseUrl("/faq")}`,
  datePublished: "2024-07-29T09:25:01.340Z",
  mainEntity: questions.map((question, index) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: `${answers[index].props.children}`,
    },
  })),
  author: {
    "@type": "Person",
    name: author,
  },
}

export default function Faq() {
  return (
    <>
      <SchemaInjector structuredData={faqSchemaData} />
      <h1 className="heading-one">Frequently Asked Questions</h1>
      <div className="max-w-screen-md pb-[13vh] pt-7">
        <Accordion
          items={questions.map((question, index) => ({
            question,
            answer: answers[index],
          }))}
          label="Frequently Asked Questions"
        />
      </div>
    </>
  )
}

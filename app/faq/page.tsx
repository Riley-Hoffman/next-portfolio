import { Metadata } from "next";
import SchemaOrg from "../components/SchemaOrg";
import { Accordion } from "./components/Accordion";
import { questions, answers } from "./components/AccordionItems";
import { FAQPage, WithContext } from "schema-dts";
import {
  getBaseUrl,
  getPageTitle,
  getName,
  getImageUrl,
} from "../../lib/constants";

const description = "Find the answers to my most frequently asked questions.";

export const metadata: Metadata = {
  title: "FAQ",
  description: description,
  metadataBase: new URL(`${getBaseUrl()}/faq`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: getImageUrl(),
    title: "FAQ",
    url: `${getBaseUrl()}/faq`,
  },
};

export default function Faq() {
  const schema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: getPageTitle("FAQ - "),
    description: description,
    image: getImageUrl(),
    url: `${getBaseUrl()}/faq`,
    datePublished: "2024-07-04T09:25:01.340Z",
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
      name: getName(),
    },
  };
  return (
    <>
      <SchemaOrg structuredData={schema} />
      <h1 className="gradient-border inverted mb-7 mt-0 border-b-2 bg-[#eee2f3] px-5 py-10 text-center text-3xl leading-normal contrast-more:bg-white md:text-5xl md:leading-normal">
        Frequently Asked Questions
      </h1>
      <div className="max-w-screen-md p-[1.875rem_0_13vh]">
        <Accordion
          items={questions.map((question, index) => ({
            question,
            answer: answers[index],
          }))}
          label="Frequently Asked Questions"
        />
      </div>
    </>
  );
}

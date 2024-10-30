import { Metadata } from "next";
import SchemaOrg from "../components/SchemaOrg";
import { Accordion } from "./components/Accordion";
import { questions, answers } from "./components/AccordionItems";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find the answers to my most frequently asked questions.",
  metadataBase: new URL("https://rileyhoffman.com/faq"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images:
      "https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg",
    title: "FAQ",
    url: "https://rileyhoffman.com/faq/",
  },
};

export default function Faq() {
  return (
    <>
      <SchemaOrg
        headline="FAQ - Riley Hoffman - Web Developer"
        description="Find the answers to my most frequently asked questions."
        image="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg"
        datePublished="2024-07-04T09:25:01.340Z"
      />
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

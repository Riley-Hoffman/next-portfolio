import { Metadata } from "next";
import SchemaOrg from "../components/SchemaOrg";
import { Form } from "./components/Form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Web Developer Riley Hoffman with the form on this page.",
  metadataBase: new URL("https://rileyhoffman.com/contact"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images:
      "https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg",
    title: "Contact",
    url: "https://rileyhoffman.com/contact/",
  },
};

export default function Contact() {
  return (
    <>
      <SchemaOrg
        headline="Contact - Riley Hoffman - Web Developer"
        description="Contact Web Developer Riley Hoffman with the form on this page."
        image="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg"
        datePublished="2024-07-04T09:25:01.340Z"
      />
      <h1 className="gradient-border inverted mb-7 mt-0 border-b-2 bg-[#eee2f3] px-5 py-10 text-center text-3xl leading-normal contrast-more:bg-white md:text-5xl md:leading-normal">
        Contact Me
      </h1>
      <div className="max-w-2xl p-[1.875rem_0_13vh]">
        <div className="border-purple mb-10 max-w-[calc(100%-1.563rem)] rounded-t-md bg-zinc py-[0.1px] text-pink-200 shadow-[#e5d4ed_0.188rem_0.125rem_0_0]">
          <h2 className="mb-1 inline-block w-80 overflow-hidden whitespace-nowrap border-r-2 border-solid border-purple-200 font-medium tracking-widest motion-safe:animate-typetext">
            Write me a message...
          </h2>
          <p className="text-[1.375rem]">
            I&apos;d love to know your ideas, questions, or information.
          </p>
          <h3 className="mb-0 font-inconsolata uppercase tracking-widest">
            Reports:
          </h3>
          <p className="mt-0 text-base">
            Did you find a bug or accessibility issue while browsing this site?{" "}
            <br />
            Your report is appreciated!
          </p>
        </div>
        <Form />
      </div>
    </>
  );
}

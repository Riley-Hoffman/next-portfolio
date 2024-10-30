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
      <div className="max-w-screen-md p-[1.875rem_0_13vh]">
        <Form />
      </div>
    </>
  );
}

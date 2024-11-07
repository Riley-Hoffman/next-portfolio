import type { Metadata } from "next";
import Link from "next/link";
import { SchemaGenerator } from "../components/SchemaGenerator";
import {
  getBaseUrl,
  getImageUrl,
} from "../../lib/constants";

const description = "As a dedicated web developer, I am committed to creating an accessible and inclusive website experience for all users.";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    description,
  metadataBase: new URL(`${getBaseUrl('/accessibility')}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: getImageUrl(),
    title: "Accessibility",
    url: `${getBaseUrl('/accessibility')}`,
  },
};

export default function Accessibility() {
  return (
    <>
      <SchemaGenerator title="Accessibility" description={description} urlPath="/conaccessibilitytact" publishDate="2024-08-07T09:25:01.340Z" schemaType="WebPage" />
      <h1 className="gradient-border inverted mb-7 mt-0 border-b-2 bg-[#eee2f3] px-5 py-10 text-center text-3xl leading-normal contrast-more:bg-white md:text-5xl md:leading-normal">
        Accessibility
      </h1>
      <div className="max-w-screen-md p-[1.875rem_0_13vh]">
        <h2>My Commitment</h2>
        <p>
          As a dedicated web developer, I am committed to creating an accessible
          and inclusive website experience for all users. I continuously strive
          to improve the user experience by adhering to and exceeding the
          accessibility standards outlined by the Web Content Accessibility
          Guidelines (WCAG).
        </p>
        <h2>Third-Party Content</h2>
        <p>
          While I prioritize accessibility when selecting tools and content, I
          may link to content from third-party developers. Please note that I do
          not control or assume responsibility for the content, features, or
          applications provided by these third parties.
        </p>
        <h2>Contact Me</h2>
        <p>
          Your feedback is invaluable in helping me enhance the accessibility of
          my website. If you encounter any difficulties accessing any part of
          the site, please feel free to{" "}
          <Link href="/contact">reach out to me</Link>.
        </p>
      </div>
    </>
  );
}

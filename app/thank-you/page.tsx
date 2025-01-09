import type { Metadata } from "next"
import { getBaseUrl, getImageUrl } from "@/constants/baseData"

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Riley Hoffman - Web Developer.",
  metadataBase: new URL(`${getBaseUrl("/thank-you")}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: getImageUrl(),
    title: "Thank You",
    url: `${getBaseUrl("/thank-you")}`,
  },
}

export default function ThankYou() {
  return (
    <>
      <div className="pb-16">
        <h1 className="heading-one">Thank You</h1>
        <p className="max-w-screen-xl pb-[20vh] pt-[15vh] text-center text-5xl">
          Thank you for contacting me.{" "}
          <span className="mt-10 block text-4xl">
            I will get back to you as soon as possible.
          </span>
        </p>
      </div>
    </>
  )
}

import type { Metadata } from "next"
import { getBaseUrl, getImageUrl } from "../../lib/constants"

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
      <section className="pb-16">
        <h1 className="inverted gradient-border mb-7 mt-0 border-b-2 bg-[#eee2f3] px-5 py-10 text-center text-3xl leading-normal contrast-more:bg-white md:text-5xl md:leading-normal">
          Thank You
        </h1>
        <div className="max-w-screen-xl p-[15vh_0_20vh] text-center">
          <p className="text-5xl">
            Thank you for contacting me.{" "}
            <span className="mt-10 block text-4xl">
              I will get back to you as soon as possible.
            </span>
          </p>
        </div>
      </section>
    </>
  )
}

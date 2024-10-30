import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Riley Hoffman - Web Developer.",
  robots: "noindex",
  metadataBase: new URL("https://rileyhoffman.com/thank-you"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images:
      "https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/thumbnail.jpg",
    title: "Thank You",
    url: "https://rileyhoffman.com/thank-you/",
  },
};

export default function ThankYou() {
  return (
    <>
      <section className="pb-16">
        <h1 className="gradient-border inverted mb-7 mt-0 border-b-2 bg-[#eee2f3] px-5 py-10 text-center text-3xl leading-normal contrast-more:bg-white md:text-5xl md:leading-normal">
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
  );
}

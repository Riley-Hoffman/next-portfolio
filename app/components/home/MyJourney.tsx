import { useRef } from "react"
import Image from "next/image"
import { LinkedInButton } from "./LinkedInButton"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useScrollHandler } from "@/hooks/useScrollHandler"

export const MyJourney = () => {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)
  const scrollRef = useRef<number>(0)

  useScrollHandler(() => {
    if (typeof window !== "undefined") {
      scrollRef.current = window.scrollY
    }
    if (sectionRef.current && !prefersReducedMotion) {
      sectionRef.current.style.filter = `hue-rotate(${scrollRef.current / 2.7}deg)`
    }
  })

  return (
    <section
      ref={sectionRef}
      className="bg-diamonds pb-10 pt-16 motion-reduce:hue-rotate-0 contrast-more:bg-none dark:bg-diamondsdark"
    >
      <div className="max-w-screen-xl md:flex md:items-center">
        <figure itemScope itemType="https://schema.org/ImageObject">
          <Image
            className="size-96 max-w-full rounded-3xl object-cover drop-shadow-[0_0_0.063rem_#877ADB] dark:drop-shadow-[0_0_0.063rem_#788524]"
            src="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/headshot.webp"
            width={384}
            height={452}
            alt="Riley with a flower behind his ear. Shot in black and white."
            priority={false}
            itemProp="contentUrl"
          />
          <figcaption className="sr-only" itemProp="creditText">
            Photo by Kristen Mommertz
          </figcaption>
        </figure>
        <div className="m-6 border-2 border-[#d6d2ee] bg-[whitesmoke] py-6 contrast-more:bg-white dark:border-[#292d11] dark:bg-siteblack md:w-2/3 lg:px-[8%]">
          <h2>My Journey</h2>
          <p>
            My career journey began in customer service, tech support, and
            various non-profit organizations. Although these roles were
            valuable, I was eager to find a path that would truly ignite my
            passion and offer more engaging skills. This pursuit led me to web
            development through one of these non-profits.
          </p>
          <p>
            Captivated by the potential for creativity and constant learning, I
            completed Web Development Bootcamp at Juno College of Technology in
            2021.
          </p>
          <p>
            I have professional experience as a web developer, building and
            maintaining dynamic, user-friendly websites. I’m now excited to
            bring my skills and passion to new opportunities, eager to
            contribute to innovative projects and grow further in the field.
          </p>
          <p>
            I believe that by prioritizing accessibility in our work as web
            developers we make our contributions to the online world more
            meaningful.
          </p>
          <LinkedInButton />
        </div>
      </div>
    </section>
  )
}

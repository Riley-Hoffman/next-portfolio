import { useRef } from "react";
import Image from "next/image";
import { LinkedInButton } from "./LinkedInButton";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { useScrollHandler } from "../../../hooks/useScrollHandler";

export const MyJourney = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<number>(0);

  useScrollHandler(() => {
    scrollRef.current = window.scrollY;
    if (sectionRef.current && !prefersReducedMotion) {
      sectionRef.current.style.filter = `hue-rotate(${scrollRef.current / 2.7}deg)`;
    }
  });

  return (
    <section
      ref={sectionRef}
      className="scroll-color motion-reduce:scroll-color:hue-rotate-0 bg-diamonds pb-10 pt-16 contrast-more:bg-none"
      style={{ filter: `hue-rotate(0deg)` }}
    >
      <div className="max-w-screen-xl">
        <div className="items-center md:flex">
          <div className="min-h-96 drop-shadow-[0_0_0.063rem_#877ADB] md:w-1/3">
            <Image
              className="size-96 max-w-full rounded-3xl object-cover"
              src="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/headshot.webp"
              width={384}
              height={452}
              alt="Riley with a flower behind his ear. Shot in black and white."
              priority={false}
            />
          </div>
          <div className="m-6 border-2 border-[#d6d2ee] bg-[whitesmoke] py-6 contrast-more:bg-white md:w-2/3 lg:px-24">
            <h2>My Journey</h2>
            <p>
              My career journey began in customer service, tech support, and
              various non-profit organizations. Although these roles were
              valuable, I was eager to find a path that would truly ignite my
              passion and offer more engaging skills. This pursuit led me to web
              development through one of these non-profits.
            </p>
            <p>
              Captivated by the potential for creativity and continous growth, I
              completed Web Development Bootcamp at Juno College of Technology
              in 2021.
            </p>
            <p>
              I believe that by prioritizing accessibility in our work as web
              developers we make our contributions to the online world more
              meaningful.
            </p>
            <p className="mt-10">
              <LinkedInButton />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useRef } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { LinkedInButton } from '../LinkedInButton'
import { SM, LG } from '@/app/constants/breakpoints'
import { headshotBlurData } from '@/app/constants/blurDataUrls'

const LazyHueRotateOnScroll = dynamic(
  () => import('./dynamic-imports/LazyHueRotateOnScroll')
)

export const MyJourney = () => {
  const hueElRef = useRef<HTMLElement>(null!)
  const LIGHT_BORDER = 'border-[#d6d2ee]'
  const DARK_BORDER = 'dark:border-[#292d11]'

  return (
    <section ref={hueElRef} className="my-journey">
      <figure itemScope itemType="https://schema.org/ImageObject">
        <Image
          className={`max-w-full ${LIGHT_BORDER} ${DARK_BORDER}`}
          src="https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/headshot2025.webp"
          width={382}
          height={384}
          alt="A black and white photo of Riley Hoffman in a black tshirt."
          sizes={`(max-width: ${SM}px) 100vw, (max-width: ${LG}px) 50vw, 382px`}
          blurDataURL={headshotBlurData}
          quality={93}
          placeholder="blur"
          itemProp="contentUrl"
        />
      </figure>
      <div className={`${LIGHT_BORDER} ${DARK_BORDER}`}>
        <h2>My Journey</h2>
        <p>
          My career journey began in customer service, tech support, and various
          non-profit organizations. Although these roles were valuable, I was
          eager to find a path that would truly ignite my passion and offer more
          engaging skills. This pursuit led me to web development through one of
          these non-profits.
        </p>
        <p>
          Captivated by the potential for creativity and constant learning, I
          completed Web Development Bootcamp at Juno College of Technology in
          2021.
        </p>
        <p>
          I have professional experience as a web developer, building and
          maintaining dynamic, user-friendly websites. I’m now excited to bring
          my skills and passion to new opportunities, eager to contribute to
          innovative projects and grow further in the field.
        </p>
        <p>
          I believe that by prioritizing accessibility in our work as web
          developers we make our contributions to the online world more
          meaningful.
        </p>
        <LinkedInButton />
      </div>
      <LazyHueRotateOnScroll hueElRef={hueElRef} />
    </section>
  )
}

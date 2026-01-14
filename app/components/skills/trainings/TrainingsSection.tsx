import { Suspense } from 'react'
import { Carousel } from './carousel/Carousel'
import { SLIDE_DATA } from '@/app/constants/carousel/slideData'
import { NOSCRIPT_LINKS } from './constants/noscriptLinks'
import { LinkWrapper } from '@/app/components/shared/LinkWrapper'

export const TrainingsSection = () => (
  <section className="gradient-border overflow-hidden border-t-2 bg-accentone-100 pb-16 pt-7">
    <h2 className="max-w-fit pb-5">Trainings & Certifications</h2>
    <Suspense fallback={<div className="h-72 animate-pulse bg-gray-200" aria-busy="true" />}>
      <Carousel slides={SLIDE_DATA} />
    </Suspense>
    <noscript>
      <style>
        {`
          h2 + div {
            display: none;
          }
        `}
      </style>
      <div className="max-w-md rounded bg-white p-4 shadow">
        <p className="mb-2">
          JavaScript is disabled. You can view my certificates and trainings on
          these platforms:
        </p>
        <ul className="list-inside list-disc">
          {NOSCRIPT_LINKS.map((link) => (
            <li key={link.url}>
              <LinkWrapper href={link.url} showNewTabIcon={true}>
                {link.name}
              </LinkWrapper>
            </li>
          ))}
        </ul>
      </div>
    </noscript>
  </section>
)

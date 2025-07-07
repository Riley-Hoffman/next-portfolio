import { Carousel } from './carousel/Carousel'
import { SLIDE_DATA } from '@/app/constants/carousel/slideData'
import { NOSCRIPT_LINKS } from './constants/noscriptLinks'
import { EXTERNAL_LINK_ATTR } from '@/app/constants/externalLinkAttr'

export const TrainingsSection = () => (
  <section className="gradient-border border-t-2 bg-accentone-100 pb-16 pt-7 overflow-hidden">
    <h2 className="max-w-fit pb-5">Trainings & Certifications</h2>
    <Carousel slides={SLIDE_DATA} />
    <noscript>
      <style>
        {`
          h2 + div {
            display: none;
          }
        `}
      </style>
      <div className="p-4 bg-whitesmoke rounded shadow max-w-md">
        <p className="mb-2">JavaScript is disabled. You can view my certificates and trainings on these platforms:</p>
        <ul className="list-disc list-inside">
          {NOSCRIPT_LINKS.map(link => (
            <li key={link.url}>
              <a href={link.url} {...EXTERNAL_LINK_ATTR}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </noscript>
  </section>
)

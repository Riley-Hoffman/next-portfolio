import { Carousel } from './carousel/Carousel'
import { SLIDE_DATA } from '@/app/constants/carousel/slideData'

export const TrainingsSection = () => (
  <section className="gradient-border border-t-2 bg-accentone-100 pb-16 pt-7">
    <h2 className="max-w-fit pb-5" id="trainingsLabel">
      Trainings & Certifications
    </h2>
    <Carousel slides={SLIDE_DATA} />
  </section>
)

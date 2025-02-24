import { Carousel } from './carousel/Carousel'
import { CAROUSEL_DATA } from './carousel/carouselData'

export const TrainingsSection = () => (
  <section className="gradient-border border-t-2 border-solid bg-accentone-100 pb-16 pt-7">
    <h2 className="max-w-fit pb-5" id="trainingsLabel">
      Trainings & Certifications
    </h2>
    <Carousel slides={CAROUSEL_DATA} />
  </section>
)

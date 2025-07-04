import { CAROUSEL_BUTTONS_CONFIG } from '@/app/constants/carousel/carouselButtonsConfig'
import { useCarouselButtonVisibility } from '@/app/hooks/carousel/useCarouselButtonVisibility'

export const CarouselButtons = () => {
  const buttonsRef = useCarouselButtonVisibility()

  return CAROUSEL_BUTTONS_CONFIG.map(({ label, classes, icon }, index) => (
    <button
      key={label}
      ref={(el) => {
        buttonsRef.current[index] = el
      }}
      aria-label={label}
      className={`carousel-button hidden ${classes}`}
    >
      {icon}
    </button>
  ))
}

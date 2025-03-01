import { Icon } from '@iconify/react'
import { CAROUSEL_BUTTONS_CONFIG } from './constants/carouselButtonsConfig'
import { useCarouselButtonVisibility } from '@/app/hooks/carousel/useCarouselButtonVisibility'

export const CarouselButtons = () => {
  const buttonsRef = useCarouselButtonVisibility()

  return CAROUSEL_BUTTONS_CONFIG.map(({ label, className, icon }, index) => (
    <button
      key={label}
      ref={(el) => {
        buttonsRef.current[index] = el
      }}
      aria-label={label}
      className={`carousel-button hidden ${className}`}
    >
      <Icon icon={icon} />
    </button>
  ))
}

import { Icon } from '@iconify/react'
import { CAROUSEL_BUTTONS_CONFIG } from './constants/carouselButtonsConfig'
import { useCarouselButtonVisibility } from '@/app/hooks/carousel/useCarouselButtonVisibility'

export const CarouselButtons = () => {
  const buttonsRef = useCarouselButtonVisibility()

  return CAROUSEL_BUTTONS_CONFIG.map((config, index) => (
    <button
      key={config.label}
      ref={(el) => {
        buttonsRef.current[index] = el
      }}
      aria-label={config.label}
      className={`carousel-button hidden ${config.className}`}
    >
      <Icon icon={config.icon} />
    </button>
  ))
}

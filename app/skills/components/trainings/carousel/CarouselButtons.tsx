import { Icon } from '@iconify/react'
import { carouselButtonsConfig } from './constants/carouselButtonsConfig'
import { useCarouselButtonVisibility } from './hooks/useCarouselButtonVisibility'

export const CarouselButtons = () => {
  const buttonsRef = useCarouselButtonVisibility()

  return carouselButtonsConfig.map((config, index) => (
    <button
      key={index}
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

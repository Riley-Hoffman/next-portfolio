import { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import { carouselButtonsConfig } from './constants/carouselButtonsConfig'

export const CarouselButtons = () => {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    buttonsRef.current.forEach((button) => {
      if (button) {
        button.classList.remove('hidden')
      }
    })
  }, [])

  return carouselButtonsConfig.map((config, index) => (
    <button
      key={index}
      ref={(el) => {
        buttonsRef.current[index] = el
      }}
      aria-label={config.label}
      className={config.className}
    >
      {' '}
      <Icon icon={config.icon} />{' '}
    </button>
  ))
}

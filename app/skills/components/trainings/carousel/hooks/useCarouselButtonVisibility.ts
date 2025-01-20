import { useEffect, useRef } from 'react'

export const useCarouselButtonVisibility = () => {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    buttonsRef.current.forEach((button) => {
      if (button) {
        button.classList.remove('hidden')
      }
    })
  }, [])

  return buttonsRef
}

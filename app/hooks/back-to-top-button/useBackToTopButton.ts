import { useState } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'
import { useScroll } from '../shared/useScroll'

export const useBackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const onScrollHandler = (scrollY: number = 0) => {
    setVisible(scrollY > window.innerHeight / 2)
  }

  useScroll(onScrollHandler)

  const scrollToTop = () => {
    if (isBrowser()) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { visible, scrollToTop }
}

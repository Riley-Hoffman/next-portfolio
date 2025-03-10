import { useState } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'
import { useScrollHandler } from '../shared/useScrollHandler'

export const useBackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const handleScroll = () => {
    setVisible(window.scrollY > window.innerHeight / 2)
  }

  useScrollHandler(handleScroll)

  const scrollToTop = () => {
    if (isBrowser()) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { visible, scrollToTop }
}

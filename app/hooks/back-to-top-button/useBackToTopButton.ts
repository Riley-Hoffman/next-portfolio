import { useState, useCallback } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'
import { useScroll } from '../shared/useScroll'

export const useBackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const handleOnScroll = useCallback((scrollY: number = 0) => {
    const shouldBeVisible = scrollY > window.innerHeight / 2
    setVisible(shouldBeVisible)
  }, [])

  useScroll(handleOnScroll)

  const scrollToTop = () => {
    if (isBrowser()) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { visible, scrollToTop }
}

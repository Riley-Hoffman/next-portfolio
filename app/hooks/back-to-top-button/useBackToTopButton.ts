import { useState, useCallback } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'
import { useScroll } from '../shared/useScroll'

export const useBackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const handleOnScroll = useCallback((scrollY: number = 0) => {
    const shouldBeVisible = scrollY > window.innerHeight / 2
    setVisible((prevVisible) => {
      return prevVisible !== shouldBeVisible ? shouldBeVisible : prevVisible
    })
  }, [])

  useScroll(handleOnScroll)

  const scrollToPosition = (
    top: number,
    behavior: ScrollBehavior = 'smooth'
  ) => {
    if (isBrowser()) window.scrollTo({ top, behavior })
  }

  const scrollToTop = () => scrollToPosition(0)

  return { visible, scrollToTop }
}

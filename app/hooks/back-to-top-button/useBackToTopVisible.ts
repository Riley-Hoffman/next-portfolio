import { useState, useCallback } from 'react'
import { useScroll } from '../shared/useScroll'

export const useBackToTopVisible = () => {
  const [visible, setVisible] = useState(false)

  const handleOnScroll = useCallback((scrollY: number = 0) => {
    const shouldBeVisible = scrollY > window.innerHeight / 2
    setVisible(shouldBeVisible)
  }, [])

  useScroll(handleOnScroll)

  return visible
}

import { useState, useEffect } from 'react'
import { isBrowser } from '@/lib/isBrowser'

export const useBackToTopButton = (threshold: number) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (isBrowser()) {
      const handleScroll = () => {
        if (window.scrollY > threshold) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  const scrollToTop = () => {
    if (isBrowser()) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return { visible, scrollToTop }
}

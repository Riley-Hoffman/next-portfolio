import { useState, useEffect } from 'react'
import { isBrowser } from '@/app/utils/isBrowser'
import { useDebounce } from '../shared/useDebounce'

export const useBackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const handleScroll = () => {
    setVisible(window.scrollY > window.innerHeight / 2)
  }

  const debouncedHandleScroll = useDebounce(handleScroll, 100)

  useEffect(() => {
    if (!isBrowser()) return

    window.addEventListener('scroll', debouncedHandleScroll)
    return () => window.removeEventListener('scroll', debouncedHandleScroll)
  }, [debouncedHandleScroll])

  const scrollToTop = () => {
    if (isBrowser()) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { visible, scrollToTop }
}

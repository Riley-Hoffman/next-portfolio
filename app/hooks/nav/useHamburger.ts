import { useState, useRef, useCallback, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { HamburgerProps } from '@/app/types/nav/HamburgerProps.interface'
import { useDebounce } from '../shared/useDebounce'
import { MD } from '@/app/constants/breakpoints'

export const useHamburger = ({ expanded }: HamburgerProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement | null>(null)
  const location = usePathname()

  useEffect(() => {
    hamburgerRef.current?.setAttribute('aria-expanded', isExpanded.toString())
  }, [isExpanded])

  const toggleMenu = useCallback(() => {
    setIsExpanded((prevState) => !prevState)
  }, [])

  const handleResize = useCallback(() => {
    if (window.innerWidth > MD && isExpanded) {
      setIsExpanded(false)
    }
  }, [isExpanded])

  const debouncedHandleResize = useDebounce(handleResize, 300)

  useEffect(() => {
    expanded?.(isExpanded)
    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize)
  }, [isExpanded, expanded, debouncedHandleResize])

  useEffect(() => {
    setIsExpanded(false)
  }, [location])

  return { isExpanded, toggleMenu, hamburgerRef }
}

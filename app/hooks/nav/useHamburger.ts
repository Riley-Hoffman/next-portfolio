import { useState, useRef, useCallback, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { HamburgerProps } from '@/app/components/layout/header/nav/hamburger/Hamburger'

export const useHamburger = ({ expanded }: HamburgerProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement | null>(null)
  const location = usePathname()

  const updateAttributes = useCallback((newIsExpanded: boolean) => {
    hamburgerRef.current?.setAttribute(
      'aria-expanded',
      newIsExpanded.toString()
    )
  }, [])

  const toggleMenu = useCallback(() => {
    setIsExpanded((prevState) => {
      const newIsExpanded = !prevState
      updateAttributes(newIsExpanded)
      return newIsExpanded
    })
  }, [updateAttributes])

  const handleResize = useCallback(() => {
    if (window.innerWidth > 700 && isExpanded) {
      setIsExpanded(false)
      updateAttributes(false)
    }
  }, [isExpanded, updateAttributes])

  useEffect(() => {
    expanded?.(isExpanded)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isExpanded, expanded, handleResize])

  useEffect(() => {
    setIsExpanded(false)
    updateAttributes(false)
  }, [location, updateAttributes])

  return { isExpanded, toggleMenu, hamburgerRef }
}

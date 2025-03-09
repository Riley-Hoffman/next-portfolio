import { useState, useRef, useCallback, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { HamburgerProps } from '@/app/types/nav/HamburgerProps.interface'
import { useDebounce } from '../shared/useDebounce'
import { MD } from '@/app/constants/breakpoints'

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
    if (window.innerWidth > MD && isExpanded) {
      setIsExpanded(false)
      updateAttributes(false)
    }
  }, [isExpanded, updateAttributes])

  const debouncedHandleResize = useDebounce(handleResize, 300)

  useEffect(() => {
    expanded?.(isExpanded)
    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize)
  }, [isExpanded, expanded, debouncedHandleResize])

  useEffect(() => {
    setIsExpanded(false)
    updateAttributes(false)
  }, [location, updateAttributes])

  return { isExpanded, toggleMenu, hamburgerRef }
}

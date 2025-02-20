import { useEffect, useState, useRef, useCallback } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

export const useLinkVisibility = (isExpanded: boolean, timeout: number) => {
  const [hide, setHide] = useState<boolean>(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const handleHideShowLinks = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    if (window.innerWidth <= 700 && !isExpanded) {
      timeoutId.current = setTimeout(() => {
        setHide(true)
      }, timeout)
    } else {
      setHide(false)
    }
  }, [isExpanded, timeout])

  const debouncedHandleHideShowLinks = useDebounce(handleHideShowLinks, 100)

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleHideShowLinks)
    handleHideShowLinks()

    return () => {
      window.removeEventListener('resize', debouncedHandleHideShowLinks)
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
      }
    }
  }, [debouncedHandleHideShowLinks, handleHideShowLinks])

  return hide
}

import { useEffect, useState, useRef, useCallback } from 'react'
import { useDebounce } from '../shared/useDebounce'
import { MD } from '@/app/constants/breakpoints'

export const useLinkVisibility = (isExpanded: boolean, timeout: number) => {
  const [hide, setHide] = useState(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const setHideWithTimeout = useCallback(
    (shouldSet: boolean) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
        timeoutId.current = null
      }
      if (shouldSet && !hide) {
        timeoutId.current = setTimeout(() => setHide(true), timeout)
      } else if (!shouldSet && hide) {
        setHide(false)
      }
    },
    [timeout, hide]
  )

  const handleHideShowLinks = useCallback(() => {
    setHideWithTimeout(window.innerWidth <= MD && !isExpanded)
  }, [isExpanded, setHideWithTimeout])

  const debouncedHandleHideShowLinks = useDebounce(handleHideShowLinks, 100)

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleHideShowLinks)
    handleHideShowLinks()

    return () => {
      window.removeEventListener('resize', debouncedHandleHideShowLinks)
    }
  }, [debouncedHandleHideShowLinks, handleHideShowLinks])

  return hide
}

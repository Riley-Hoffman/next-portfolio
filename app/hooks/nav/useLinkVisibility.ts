import { useEffect, useState, useRef, useCallback } from 'react'
import { useDebounce } from '../shared/useDebounce'

export const useLinkVisibility = (isExpanded: boolean, timeout: number) => {
  const [hide, setHide] = useState<boolean>(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const manageTimeout = useCallback(
    (shouldSet: boolean) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
        timeoutId.current = null
      }
      if (shouldSet) {
        timeoutId.current = setTimeout(() => {
          setHide(true)
        }, timeout)
      } else {
        setHide(false)
      }
    },
    [timeout]
  )

  const handleHideShowLinks = useCallback(() => {
    if (window.innerWidth <= 700 && !isExpanded) {
      manageTimeout(true)
    } else {
      manageTimeout(false)
    }
  }, [isExpanded, manageTimeout])

  const debouncedHandleHideShowLinks = useDebounce(handleHideShowLinks, 100)

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleHideShowLinks)
    handleHideShowLinks()

    return () => {
      window.removeEventListener('resize', debouncedHandleHideShowLinks)
      manageTimeout(false)
    }
  }, [debouncedHandleHideShowLinks, handleHideShowLinks, manageTimeout])

  return hide
}

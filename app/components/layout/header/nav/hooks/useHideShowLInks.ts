import { useEffect, useState } from 'react'

export const useHideShowLinks = (isExpanded: boolean, timeout: number) => {
  const [hide, setHide] = useState<boolean>(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const handleHideShowLinks = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      if (window.innerWidth <= 700 && !isExpanded) {
        timeoutId = setTimeout(() => {
          setHide(true)
        }, timeout)
      } else {
        setHide(false)
      }
    }

    window.addEventListener('resize', handleHideShowLinks)
    handleHideShowLinks()

    return () => {
      window.removeEventListener('resize', handleHideShowLinks)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isExpanded, timeout])

  return hide
}

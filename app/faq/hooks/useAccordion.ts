import { useState, useRef, useEffect, useCallback } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { pxToRem } from '@/lib/pxToRem'

export const useAccordion = (itemsLength: number) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const accOpen = useCallback(
    (index: number) => openIndex === index,
    [openIndex]
  )

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>(
    Array(itemsLength).fill(null)
  )
  const contentRefs = useRef<(HTMLDivElement | null)[]>(
    Array(itemsLength).fill(null)
  )

  const handleAccordionClick = useDebounce(
    useCallback((index: number) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
    }, []),
    500
  )

  useEffect(() => {
    buttonRefs.current.forEach((button, index) => {
      if (!button) return
      button.classList.toggle('init', !accOpen(index))
    })

    contentRefs.current.forEach((content, index) => {
      if (!content) return
      if (accOpen(index)) {
        content.style.maxHeight = `${pxToRem(content.scrollHeight) + 2.75}rem`
      } else {
        content.style.maxHeight = '0rem'
      }
    })

    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex]?.focus()
    }
  }, [accOpen, openIndex])

  return {
    accOpen,
    handleAccordionClick,
    buttonRefs,
    contentRefs,
    openIndex,
  }
}

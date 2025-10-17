import { useState, useRef, useEffect, useCallback } from 'react'
import { pxToRem } from '@/app/utils/pxToRem'

const createRefs = <T extends HTMLElement>(
  length: number
): React.RefObject<T | null>[] => {
  return Array.from({ length }, () => useRef<T>(null))
}

export const useAccordion = (itemsLength: number) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const accOpen = useCallback(
    (index: number) => openIndex === index,
    [openIndex]
  )

  const buttonRefs = createRefs<HTMLButtonElement>(itemsLength)
  const contentRefs = createRefs<HTMLDivElement>(itemsLength)

  const handleAccClick = useCallback((index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }, [])

  useEffect(() => {
    buttonRefs.forEach((buttonRef, index) => {
      const button = buttonRef.current
      if (!button) return
      setTimeout(() => {
        button.classList.toggle('init', !accOpen(index))
      }, 300)
    })

    contentRefs.forEach((contentRef, index) => {
      const content = contentRef.current
      if (!content) return
      if (accOpen(index)) {
        content.style.maxHeight = `${pxToRem(content.scrollHeight) + 2.75}rem`
      } else {
        content.style.maxHeight = '0rem'
      }
    })
  }, [accOpen, buttonRefs, contentRefs, openIndex])

  return {
    accOpen,
    handleAccClick,
    buttonRefs,
    contentRefs,
    openIndex,
  }
}

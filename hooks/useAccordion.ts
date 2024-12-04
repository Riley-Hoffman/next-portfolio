import { useState, useRef, useEffect, useCallback } from "react"
import { pxToRem } from "../lib/pxToRem"

export const useAccordion = (itemsLength: number) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>(Array(itemsLength).fill(null))
  const contentRefs = useRef<(HTMLDivElement | null)[]>(Array(itemsLength).fill(null))

  const handleAccordionClick = useCallback(
    (index: number) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
    },
    []
  )

  useEffect(() => {
    buttonRefs.current.forEach((button, index) => {
      if (!button) return
      const isOpen = openIndex === index
      setTimeout(() => {
        button.classList.toggle("init", !isOpen)
      }, 500)
    })

    contentRefs.current.forEach((content, index) => {
      if (!content) return
      if (openIndex === index) {
        content.style.maxHeight = `${pxToRem(content.scrollHeight) + 2.75}rem`
      } else {
        content.style.maxHeight = "0rem"
      }
    })

    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex]?.focus()
    }
  }, [openIndex])

  return {
    openIndex,
    handleAccordionClick,
    buttonRefs,
    contentRefs,
  }
}

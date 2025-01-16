'use client'
import { useState } from 'react'
import { useScrollHandler } from '@/hooks/useScrollHandler'
import { Icon } from '@iconify/react'

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useScrollHandler(() => {
    if (window.scrollY > window.innerHeight / 2) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return visible ? (
    <button
      onClick={scrollToTop}
      className="button fixed bottom-5 right-5 z-20 rounded-md border-2 border-accentone-300 px-2 py-2 md:tool-tip hover:border-heading focus-visible:border-heading"
      aria-label="Back to Top"
    >
      <Icon className="text-2xl" icon="fluent:chevron-circle-up-32-filled" />
    </button>
  ) : null
}

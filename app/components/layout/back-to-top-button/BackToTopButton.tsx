'use client'
import { Icon } from '@iconify/react'
import { useBackToTopButton } from './hooks/useBackToTopButton'

export const BackToTopButton = () => {
  const { visible, scrollToTop } = useBackToTopButton(window.innerHeight / 2)

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

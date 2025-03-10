'use client'
import { Icon } from '@iconify/react'
import { useBackToTopButton } from '@/app/hooks/back-to-top-button/useBackToTopButton'

export const BackToTopButton = () => {
  const { visible, scrollToTop } = useBackToTopButton()

  return visible ? (
    <button
      onClick={scrollToTop}
      className="back-to-top"
      aria-label="Back to Top"
    >
      <Icon className="text-2xl" icon="fluent:chevron-circle-up-32-filled" />
    </button>
  ) : null
}

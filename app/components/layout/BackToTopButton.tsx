'use client'
import { Icon } from '@iconify/react'
import { useBackToTopVisible } from '@/app/hooks/back-to-top-button/useBackToTopVisible'
import { scrollToTop } from '@/app/utils/scrollToTop'

export const BackToTopButton = () =>
  useBackToTopVisible() ? (
    <button
      onClick={scrollToTop}
      className="back-to-top"
      aria-label="Back to Top"
    >
      <Icon className="text-2xl" icon="fluent:chevron-circle-up-32-filled" />
    </button>
  ) : null

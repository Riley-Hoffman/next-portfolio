"use client"
import { useState, useEffect } from "react"
import { Icon } from "@iconify/react"

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return visible ? (
    <button
      onClick={scrollToTop}
      className="button fixed bottom-5 right-5 z-20 rounded-md border-2 border-accentone-200 px-2 py-2 shadow-[0_0.128px_1rem_-0.56rem_black] md:tool-tip hover:border-textcolor focus-visible:border-textcolor"
      aria-label="Back to Top"
    >
      <Icon className="text-2xl" icon="fluent:chevron-circle-up-32-filled" />
    </button>
  ) : null
}

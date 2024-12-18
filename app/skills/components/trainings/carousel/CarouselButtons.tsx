import { useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export const CarouselButtons = () => {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    buttonsRef.current.forEach((button) => {
      if (button) {
        button.classList.remove("hidden")
      }
    })
  }, [])

  const commonClasses =
    "absolute top-1/2 z-10 hidden -translate-y-1/2 transform rounded-full bg-accentone-100 px-4 py-1 transition-shadow active:shadow-none"

  return (
    <>
      <button
        ref={(el) => {
          buttonsRef.current[0] = el
        }}
        aria-label="Previous slide"
        className={`prev-btn ${commonClasses} left-4 shadow-[#12121c_0.125rem_0.188rem_0_0] dark:shadow-[#edede3_0.125rem_0.188rem_0_0]`}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        ref={(el) => {
          buttonsRef.current[1] = el
        }}
        aria-label="Next slide"
        className={`next-btn ${commonClasses} right-4 shadow-[#12121c_-0.125rem_0.188rem_0_0] dark:shadow-[#edede3_-0.125rem_0.188rem_0_0]`}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </>
  )
}

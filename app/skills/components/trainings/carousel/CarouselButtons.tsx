import { useEffect, useRef } from "react"
import { Icon } from "@iconify/react"

export const CarouselButtons = () => {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    buttonsRef.current.forEach((button) => {
      if (button) {
        button.classList.remove("hidden")
      }
    })
  }, [])

  return (
    <>
      <button
        ref={(el) => {
          buttonsRef.current[0] = el
        }}
        aria-label="Previous slide"
        className={`prev-btn left-4 hidden shadow-[#12121c_0.125rem_0.188rem_0_0] dark:shadow-[#edede3_0.125rem_0.188rem_0_0]`}
      >
        <Icon icon="raphael:arrowleft" />
      </button>
      <button
        ref={(el) => {
          buttonsRef.current[1] = el
        }}
        aria-label="Next slide"
        className={`next-btn right-4 hidden shadow-[#12121c_-0.125rem_0.188rem_0_0] dark:shadow-[#edede3_-0.125rem_0.188rem_0_0]`}
      >
        <Icon icon="raphael:arrowright" />
      </button>
    </>
  )
}

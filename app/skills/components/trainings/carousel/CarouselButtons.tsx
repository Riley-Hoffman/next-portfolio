import { useEffect, useRef } from "react"
import { Icon } from "@iconify/react"

const buttonsConfig = [
  {
    label: "Previous slide",
    className:
      "prev-btn left-4 hidden shadow-[#12121c_0.125rem_0.188rem_0_0] dark:shadow-[#edede3_0.125rem_0.188rem_0_0]",
    icon: "raphael:arrowleft",
  },
  {
    label: "Next slide",
    className:
      "next-btn right-4 hidden shadow-[#12121c_-0.125rem_0.188rem_0_0] dark:shadow-[#edede3_-0.125rem_0.188rem_0_0]",
    icon: "raphael:arrowright",
  },
]

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
      {buttonsConfig.map((config, index) => (
        <button
          key={index}
          ref={(el) => {
            buttonsRef.current[index] = el
          }}
          aria-label={config.label}
          className={config.className}
        >
          <Icon icon={config.icon} />
        </button>
      ))}
    </>
  )
}

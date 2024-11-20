"use client"
import { useAccordion } from "../../../hooks/useAccordion"
import { useRef } from "react"
import "./styles/accordion.css"

type AccordionItem = {
  question: string
  answer: React.ReactElement
}

type AccordionProps = {
  items: AccordionItem[]
  label: string
}

export const Accordion = ({ items, label }: AccordionProps) => {
  const { openIndex, handleAccordionClick, buttonRefs, contentRefs } =
    useAccordion(items.length)

  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  const handleDebouncedClick = (index: number) => {
    if (debounceRef.current) return

    handleAccordionClick(index)

    debounceRef.current = setTimeout(() => {
      debounceRef.current = null
    }, 500)
  }

  return (
    <ul
      className="mb-12 max-w-[90%] rounded-lg leading-loose shadow-[#12121c_0.25rem_0.25rem_0_0]"
      aria-label={label}
    >
      {items.map((item, index) => (
        <li className="group" key={index}>
          <button
            ref={(el) => {
              buttonRefs.current[index] = el
            }}
            className="accordion group peer w-full border-b border-solid border-[#e1d7ee] bg-pink-100 px-5 py-6 text-left text-lg font-medium leading-9 text-[#2d2b34] transition-all duration-500 ease-in-out group-first:rounded-t-lg group-last:rounded-b-lg group-last:border-b-0 aria-expanded:border-b-0"
            onClick={() => handleDebouncedClick(index)}
            aria-expanded={openIndex === index ? true : false}
          >
            <div className="plus-minus mb-[0.063rem] mr-5 box-content rounded-[50%] bg-zinc p-3 text-xs text-pink-200 transition-all duration-200 ease-in-out group-hover:bg-purple-100 group-hover:text-zinc group-focus-visible:bg-purple-100 group-focus-visible:text-zinc group-aria-expanded:bg-purple-100 group-aria-expanded:text-zinc"></div>
            {item.question}
          </button>
          <div
            className={`overflow-hidden px-5 transition-all duration-500 ease-in-out ${openIndex === index ? "py-[0.125rem]" : "peer-[.init]:hidden"}`}
            tabIndex={-1}
            ref={(el) => {
              contentRefs.current[index] = el
            }}
          >
            {item.answer}
          </div>
        </li>
      ))}
    </ul>
  )
}

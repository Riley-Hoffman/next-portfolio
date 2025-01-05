"use client"
import clsx from "clsx"
import { useAccordion } from "../hooks/useAccordion"
import { useDebounce } from "@/hooks/useDebounce"
import { AccordionItem } from "./AccordionItems"
import "./styles/accordion.css"

type AccordionProps = {
  items: AccordionItem[]
  label: string
}

export const Accordion = ({ items, label }: AccordionProps) => {
  const { accOpen, handleAccordionClick, buttonRefs, contentRefs } =
    useAccordion(items.length)

  const handleDebouncedClick = useDebounce(handleAccordionClick, 500)

  return (
    <ul
      className="mb-12 max-w-[90%] rounded-lg leading-loose shadow-[#12121c_0.25rem_0.25rem_0_0] dark:shadow-[#edede3_0.25rem_0.25rem_0_0]"
      aria-label={label}
    >
      {items.map((item, index) => (
        <li className="group" key={index}>
          <button
            ref={(el) => {
              if (el) {
                buttonRefs.current[index] = el
              }
            }}
            className="accordion group peer w-full border-b border-solid border-[#e1d7ee] bg-accentone-100 px-5 py-6 text-left text-xl font-medium leading-9 duration-500 ease-in-out group-first:rounded-t-lg group-last:rounded-b-lg group-last:border-b-0 aria-expanded:border-b-0 dark:border-[#1e2811] dark:text-[#d2d4cb]"
            onClick={() => handleDebouncedClick(index)}
            aria-expanded={accOpen(index)}
          >
            <div className="plus-minus mb-[0.063rem] mr-5 box-content rounded-full bg-heading p-3 text-xs text-accentone-200 duration-200 ease-in-out group-hover:bg-accenttwo-100 group-hover:text-heading group-focus-visible:bg-accenttwo-100 group-focus-visible:text-heading group-aria-expanded:bg-accenttwo-100 group-aria-expanded:text-heading"></div>
            {item.question}
          </button>
          <div
            className={clsx("overflow-hidden px-5 duration-500 ease-in-out", {
              "py-0.5": accOpen(index),
              "peer-[.init]:hidden": !accOpen(index),
            })}
            tabIndex={-1}
            ref={(el) => {
              if (el) {
                contentRefs.current[index] = el
              }
            }}
          >
            {item.answer}
          </div>
        </li>
      ))}
    </ul>
  )
}

"use client"
import { useAccordion } from "../../hooks/useAccordion"
import { AccordionItem } from "./constants/AccordionItems"
import { AccordionQuestion } from "./content/AccordionQuestion"
import { AccordionAnswer } from "./content/AccordionAnswer"
import "./styles/accordion.css"

type AccordionProps = {
  items: AccordionItem[]
  label: string
}

export const Accordion = ({ items, label }: AccordionProps) => {
  const { accOpen, handleAccordionClick, buttonRefs, contentRefs } =
    useAccordion(items.length)

  return (
    <ul
      className="mb-12 max-w-[90%] rounded-lg leading-loose shadow-[#12121c_0.25rem_0.25rem_0_0] dark:shadow-[#edede3_0.25rem_0.25rem_0_0]"
      aria-label={label}
    >
      {items.map((item, index) => {
        const isOpen = accOpen(index)
        return (
          <li className="group" key={index}>
            <AccordionQuestion
              data={{
                question: item.question,
                isOpen,
                onClick: () => handleAccordionClick(index),
                buttonRef: (el) => {
                  buttonRefs.current[index] = el
                },
              }}
            />
            <AccordionAnswer
              data={{
                answer: item.answer,
                isOpen,
                contentRef: (el) => {
                  contentRefs.current[index] = el
                },
              }}
            />
          </li>
        )
      })}
    </ul>
  )
}

'use client'
import { useAccordion } from '../../hooks/useAccordion'
import { AccordionItem } from './constants/AccordionItems'
import { AccordionQuestion } from './content/AccordionQuestion'
import { AccordionAnswer } from './content/AccordionAnswer'
import { useDebounce } from '@/hooks/useDebounce'
import './styles/accordion.css'

type AccordionProps = {
  items: AccordionItem[]
  label: string
}

export const Accordion = ({ items, label }: AccordionProps) => {
  const { accOpen, handleAccordionClick, buttonRefs, contentRefs } =
    useAccordion(items.length)

  const debouncedHandleAccordionClick = useDebounce((index: number) => {
    handleAccordionClick(index)
  }, 500)

  return (
    <ul
      className="mb-[calc(13vh+3rem)] mt-14 max-w-prose rounded-lg py-px leading-loose shadow-[0.25rem_0.25rem_0_0] shadow-heading dark:shadow-gradientthree"
      aria-label={label}
    >
      {items.map((item, index) => {
        const isOpen = accOpen(index)
        return (
          <li className="group" key={item.question}>
            <AccordionQuestion
              data={{
                question: item.question,
                isOpen,
                onClick: () => debouncedHandleAccordionClick(index),
                buttonRef: (el) => {
                  buttonRefs[index].current = el
                },
              }}
            />
            <AccordionAnswer
              data={{
                answer: item.answer,
                isOpen,
                contentRef: (el) => {
                  contentRefs[index].current = el
                },
              }}
            />
          </li>
        )
      })}
    </ul>
  )
}

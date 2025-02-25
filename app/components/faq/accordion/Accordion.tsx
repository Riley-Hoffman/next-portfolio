'use client'
import { useAccordion } from '@/app/hooks/faq/accordion/useAccordion'
import { AccItem } from './constants/AccItems'
import { AccQuestion } from './content/AccQuestion'
import { AccAnswer } from './content/AccAnswer'
import { useDebounce } from '@/app/hooks/shared/useDebounce'
import '@/app/styles/faq/accordion.css'

interface AccProps {
  items: AccItem[]
  label: string
}

export const Accordion = ({ items, label }: AccProps) => {
  const { accOpen, handleAccClick, buttonRefs, contentRefs } = useAccordion(
    items.length
  )

  const debouncedHandleAccClick = useDebounce((index: number) => {
    handleAccClick(index)
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
            <AccQuestion
              data={{
                question: item.question,
                isOpen,
                onAccClick: () => debouncedHandleAccClick(index),
                buttonRef: (el) => {
                  buttonRefs[index].current = el
                },
              }}
            />
            <AccAnswer
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

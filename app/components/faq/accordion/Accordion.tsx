'use client'
import { useAccordion } from '@/app/hooks/faq/accordion/useAccordion'
import { FaqItem } from '@/app/types/faq/FaqItem.interface'
import { AccQuestion } from './content/AccQuestion'
import { AccAnswer } from './content/AccAnswer'
import { useDebounce } from '@/app/hooks/shared/useDebounce'
import '@/app/styles/faq/accordion.css'

interface AccProps {
  accItems: FaqItem[]
  label: string
}

export const Accordion = ({ accItems, label }: AccProps) => {
  const { accOpen, handleAccClick, buttonRefs, contentRefs } = useAccordion(
    accItems.length
  )

  const debouncedHandleAccClick = useDebounce((index: number) => {
    handleAccClick(index)
  }, 200)

  return (
    <ul
      className="mb-28 mt-24 max-w-prose rounded-lg py-px leading-loose shadow-[0.25rem_0.25rem_0_0] shadow-gradientone"
      aria-label={label}
    >
      {accItems.map(({ question, answer }, index) => {
        const isOpen = accOpen(index)
        const questionId = `question-${index}`
        const answerId = `answer-${index}`

        return (
          <li className="group" key={question}>
            <AccQuestion
              data={{
                question,
                isOpen,
                onAccClick: () => debouncedHandleAccClick(index),
                buttonRef: (el) => {
                  buttonRefs[index].current = el
                },
                questionId,
                answerId,
              }}
            />
            <AccAnswer
              data={{
                answer,
                isOpen,
                contentRef: (el) => {
                  contentRefs[index].current = el
                },
                answerId,
                questionId,
              }}
            />
          </li>
        )
      })}
    </ul>
  )
}

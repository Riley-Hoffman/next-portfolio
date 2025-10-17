'use client'
import { useAccordion } from '@/app/hooks/faq/accordion/useAccordion'
import { FaqItem } from '@/app/types/faq/FaqItem.interface'
import { AccQuestion } from './content/AccQuestion'
import { AccAnswer } from './content/AccAnswer'
import { useDebounce } from '@/app/hooks/shared/useDebounce'

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
    <ul className="max-w-prose" aria-label={label}>
      {accItems.map(({ question, answer }, index) => {
        const isOpen = accOpen(index)
        const answerId = `answer-${index}`

        return (
          <li key={question} aria-live="polite">
            <AccQuestion
              data={{
                question,
                isOpen,
                onAccClick: () => debouncedHandleAccClick(index),
                buttonRef: (el) => {
                  buttonRefs[index].current = el
                },
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
              }}
            />
          </li>
        )
      })}
    </ul>
  )
}

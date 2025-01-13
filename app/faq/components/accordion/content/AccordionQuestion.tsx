import { AccordionIcon } from './AccordionIcon'

type AccordionQuestionProps = {
  data: {
    question: string
    isOpen: boolean
    onClick: () => void
    buttonRef: React.Ref<HTMLButtonElement>
  }
}

export const AccordionQuestion = ({ data }: AccordionQuestionProps) => {
  const { question, isOpen, onClick, buttonRef } = data
  return (
    <button
      ref={buttonRef}
      className="group peer w-full border-b border-solid border-[#e1d7ee] bg-accentone-200 px-5 py-6 text-left text-xl font-medium leading-9 duration-500 ease-in-out group-first:rounded-t-lg group-last:rounded-b-lg group-last:border-b-0 aria-expanded:border-b-0 dark:border-[#1e2811] dark:text-[#d2d4cb]"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <AccordionIcon />
      {question}
    </button>
  )
}

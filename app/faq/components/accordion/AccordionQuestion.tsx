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
      className="accordion group peer w-full border-b border-solid border-[#e1d7ee] bg-accentone-100 px-5 py-6 text-left text-xl font-medium leading-9 duration-500 ease-in-out group-first:rounded-t-lg group-last:rounded-b-lg group-last:border-b-0 aria-expanded:border-b-0 dark:border-[#1e2811] dark:text-[#d2d4cb]"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <div className="plus-minus mb-[0.063rem] mr-5 box-content rounded-full bg-heading p-3 text-xs text-accentone-200 duration-200 ease-in-out group-hover:bg-accenttwo-100 group-hover:text-heading group-focus-visible:bg-accenttwo-100 group-focus-visible:text-heading group-aria-expanded:bg-accenttwo-100 group-aria-expanded:text-heading"></div>
      {question}
    </button>
  )
}

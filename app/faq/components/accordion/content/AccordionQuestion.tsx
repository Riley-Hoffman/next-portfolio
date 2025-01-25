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
      className="acc-button"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <div className="plus-minus"></div>
      {question}
    </button>
  )
}

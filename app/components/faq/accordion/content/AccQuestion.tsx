type AccQuestionProps = {
  data: {
    question: string
    isOpen: boolean
    onAccClick: () => void
    buttonRef: React.Ref<HTMLButtonElement>
    answerId: string
  }
}

export const AccQuestion = ({ data }: AccQuestionProps) => {
  const { question, isOpen, onAccClick, buttonRef, answerId } = data
  return (
    <button
      ref={buttonRef}
      className="acc-button group peer"
      onClick={onAccClick}
      aria-expanded={isOpen}
      aria-controls={answerId}
    >
      <div className="plus-minus"></div>
      {question}
    </button>
  )
}

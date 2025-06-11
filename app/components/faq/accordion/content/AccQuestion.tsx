type AccQuestionProps = {
  data: {
    question: string
    isOpen: boolean
    onAccClick: () => void
    buttonRef: React.Ref<HTMLButtonElement>
    questionId: string
    answerId: string
  }
}

export const AccQuestion = ({ data }: AccQuestionProps) => {
  const { question, isOpen, onAccClick, buttonRef, questionId, answerId } = data
  return (
    <button
      ref={buttonRef}
      className="acc-button"
      onClick={onAccClick}
      aria-expanded={isOpen}
      aria-controls={answerId}
      id={questionId}
    >
      <div className="plus-minus"></div>
      {question}
    </button>
  )
}

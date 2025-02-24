type AccQuestionProps = {
  data: {
    question: string
    isOpen: boolean
    onAccClick: () => void
    buttonRef: React.Ref<HTMLButtonElement>
  }
}

export const AccQuestion = ({ data }: AccQuestionProps) => {
  const { question, isOpen, onAccClick, buttonRef } = data
  return (
    <button
      ref={buttonRef}
      className="acc-button"
      onClick={onAccClick}
      aria-expanded={isOpen}
    >
      <div className="plus-minus"></div>
      {question}
    </button>
  )
}

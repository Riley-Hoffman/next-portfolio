import clsx from 'clsx'

type AccAnswerProps = {
  data: {
    answer: React.ReactNode
    isOpen: boolean
    contentRef: React.Ref<HTMLDivElement>
  }
}

const getAnswerClasses = (isOpen: boolean) =>
  clsx('acc-answer', {
    'my-0 peer-[.init]:hidden': !isOpen,
  })

export const AccAnswer = ({ data }: AccAnswerProps) => {
  const { answer, isOpen, contentRef } = data

  return (
    <div className={getAnswerClasses(isOpen)} tabIndex={-1} ref={contentRef}>
      {answer}
    </div>
  )
}

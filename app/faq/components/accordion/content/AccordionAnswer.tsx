import clsx from 'clsx'

type AccordionAnswerProps = {
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

export const AccordionAnswer = ({ data }: AccordionAnswerProps) => {
  const { answer, isOpen, contentRef } = data
  return (
    <p className={getAnswerClasses(isOpen)} tabIndex={-1} ref={contentRef}>
      {answer}
    </p>
  )
}

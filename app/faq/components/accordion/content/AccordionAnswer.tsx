import clsx from 'clsx'

type AccordionAnswerProps = {
  data: {
    answer: React.ReactNode
    isOpen: boolean
    contentRef: React.Ref<HTMLDivElement>
  }
}

export const AccordionAnswer = ({ data }: AccordionAnswerProps) => {
  const { answer, isOpen, contentRef } = data
  return (
    <p
      className={clsx('overflow-hidden px-10 duration-500 ease-in-out', {
        'my-0 peer-[.init]:hidden': !isOpen,
      })}
      tabIndex={-1}
      ref={contentRef}
    >
      {answer}
    </p>
  )
}

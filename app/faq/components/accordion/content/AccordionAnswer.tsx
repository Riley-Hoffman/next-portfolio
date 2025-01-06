import clsx from "clsx"

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
    <div
      className={clsx("overflow-hidden px-5 duration-500 ease-in-out", {
        "py-0.5": isOpen,
        "peer-[.init]:hidden": !isOpen,
      })}
      tabIndex={-1}
      ref={contentRef}
    >
      {answer}
    </div>
  )
}

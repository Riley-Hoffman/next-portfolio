import { useEffect } from 'react'
import clsx from 'clsx'
import { useReady } from '@/app/hooks/shared/useReady'

type AccAnswerProps = {
  data: {
    answer: React.ReactNode
    isOpen: boolean
    contentRef: React.Ref<HTMLDivElement>
    answerId: string
    questionId: string
  }
}

const getAnswerClasses = (isOpen: boolean) =>
  clsx('acc-answer', {
    'my-0 peer-[.init]:hidden': !isOpen,
  })

export const AccAnswer = ({ data }: AccAnswerProps) => {
  const { answer, isOpen, contentRef, answerId, questionId } = data
  const [isReady, onReady] = useReady()
  useEffect(() => {
    onReady()
  }, [onReady])

  return (
    <>
      <div
        className={clsx(getAnswerClasses(isOpen), {
          hidden: !isReady,
        })}
        tabIndex={-1}
        ref={contentRef}
        id={answerId}
        role="region"
        aria-labelledby={questionId}
      >
        {answer}
      </div>
      <noscript>{answer}</noscript>
    </>
  )
}

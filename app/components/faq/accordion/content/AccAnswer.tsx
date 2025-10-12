import { useEffect } from 'react'
import clsx from 'clsx'
import { useReady } from '@/app/hooks/shared/useReady'

type AccAnswerProps = {
  data: {
    answer: React.ReactNode
    isOpen: boolean
    contentRef: React.Ref<HTMLDivElement>
    answerId: string
  }
}

const getAnswerClasses = (isOpen: boolean) =>
  clsx('acc-answer', {
    'peer-[.init]:hidden': !isOpen,
  })

export const AccAnswer = ({ data }: AccAnswerProps) => {
  const { answer, isOpen, contentRef, answerId } = data
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
        aria-roledescription="Answer"
      >
        {answer}
      </div>
      <noscript>{answer}</noscript>
    </>
  )
}

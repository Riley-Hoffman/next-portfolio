import { Icon } from '@iconify/react'

interface CompletionMessageProps {
  ref?: React.Ref<HTMLParagraphElement>
  medalDetails: { text: string; color: string } | null
  time: number | null
}

export const CompletionMessage = ({
  ref,
  medalDetails,
  time,
}: CompletionMessageProps) => (
  <div
    className="completion-message border-1 absolute inset-0 z-10 size-full bg-white text-center"
    id="completionMessage"
    ref={ref}
    tabIndex={-1}
  >
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <p className="text-2xl">All clean!</p>
      <p aria-live="polite">
        Time taken:{' '}
        <span className="font-semibold" aria-live="polite">
          {time} seconds
        </span>
      </p>
      <p className="font-semibold uppercase" aria-live="polite">
        {medalDetails && (
          <span className="text-xl md:text-2xl" aria-live="polite">
            {medalDetails.text} <br />
            <Icon
              className="mt-2 block animate-twirl text-6xl"
              icon="fa6-solid:medal"
              color={medalDetails.color}
            />
          </span>
        )}
      </p>
    </div>
  </div>
)

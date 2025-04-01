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
    className="completion-message"
    id="completionMessage"
    ref={ref}
    tabIndex={-1}
  >
    <div>
      <p className="text-2xl">All clean!</p>
      <p aria-live="polite">
        Time taken:
        <span className="block text-xl md:ml-2 md:inline" aria-live="polite">
          {time} seconds
        </span>
      </p>
      <p className="uppercase" aria-live="polite">
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

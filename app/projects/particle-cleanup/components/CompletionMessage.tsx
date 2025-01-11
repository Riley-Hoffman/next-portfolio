import { Icon } from "@iconify/react"

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
  <div className="border-1 absolute inset-0 size-full">
    <p
      id="completionMessage"
      ref={ref}
      className="absolute z-10 m-0 flex size-full flex-col items-center justify-center bg-white p-0 text-center font-source-sans text-2xl dark:text-accentone-200"
      tabIndex={-1}
    >
      All clean!{" "}
      <small aria-live="polite">
        Time taken:{" "}
        <span className="font-semibold" aria-live="polite">
          {time} seconds
        </span>
      </small>
      <span className="font-semibold uppercase" aria-live="polite">
        {medalDetails && (
          <span className="text-xl md:text-2xl" aria-live="polite">
            {medalDetails.text} <br />
            <Icon
              className="mx-auto mt-2 block animate-twirl text-6xl"
              icon="fa6-solid:medal"
              color={medalDetails.color}
            />
          </span>
        )}
      </span>
    </p>
  </div>
)

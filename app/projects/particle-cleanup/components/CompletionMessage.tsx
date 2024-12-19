import { faMedal } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface CompletionMessageProps {
  medalDetails: { text: string; color: string } | null
  time: number | null
}

export const CompletionMessage = ({
  medalDetails,
  time,
}: CompletionMessageProps) => (
  <div className="border-1 absolute inset-0 size-full border-solid border-accentone-200">
    <p
      id="completionMessage"
      className="completion-message absolute z-10 m-0 flex size-full flex-col items-center justify-center bg-white p-0 text-center font-source-sans text-2xl dark:text-accentone-100"
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
            <FontAwesomeIcon
              className="mx-auto mt-2 block animate-[twirl.4s_infinite] text-6xl"
              icon={faMedal}
              color={medalDetails.color}
            />
          </span>
        )}
      </span>
    </p>
  </div>
)

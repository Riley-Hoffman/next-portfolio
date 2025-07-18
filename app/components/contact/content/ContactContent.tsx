import { ErrorList } from './ErrorList'

export const ContactContent = ({ errors }: { errors: string[] }) => (
  <div className="contact-content">
    {!errors.length ? (
      <>
        <h2 className="motion-safe:animate-typetext">Write me a message...</h2>
        <p>I would love to read your ideas, questions, or information!</p>
        <h3>Reports:</h3>
        <p>
          Did you find a bug or accessibility issue while browsing this site?
          <span>Your report is appreciated.</span>
        </p>
      </>
    ) : (
      <ErrorList errors={errors} />
    )}
  </div>
)

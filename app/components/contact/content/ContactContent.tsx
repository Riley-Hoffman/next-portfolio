import { ErrorList } from './ErrorList'
import '@/app/styles/contact/contact-content.css'
import '@/app/styles/shared/typetext.css'

export const ContactContent = ({ errors }: { errors: string[] }) => (
  <div className="contact-content">
    {!errors.length ? (
      <>
        <h2 className="mb-1 w-80 motion-safe:animate-typetext">
          Write me a message...
        </h2>
        <p className="text-xl">
          I would love to read your ideas, questions, or information!
        </p>
        <h3 className="mb-0 font-inconsolata uppercase tracking-widest">
          Reports:
        </h3>
        <p className="mt-0 text-base leading-7">
          Did you find a bug or accessibility issue while browsing this site?
          <span className="block">Your report is appreciated.</span>
        </p>
      </>
    ) : (
      <ErrorList errors={errors} />
    )}
  </div>
)

import { ErrorList } from './ErrorList'
import '@/app/styles/contact/contact-content.css'

export const ContactContent = ({ errors }: { errors: string[] }) => (
  <div className="contact-content border-accenttwo -[0.188rem_0.125rem_0_0] mb-10 min-h-72 max-w-[calc(100%-1.563rem)] rounded-t-md bg-heading shadow shadow-accentone-300 dark:shadow-accentone-200 sm:min-h-64">
    {!errors.length ? (
      <>
        <h2 className="mb-1 inline-block w-80 whitespace-nowrap font-medium tracking-widest motion-safe:animate-typetext">
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

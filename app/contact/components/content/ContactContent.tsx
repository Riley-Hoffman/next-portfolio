import '@/app/styles/numbered-icons.css'
import './styles/contact-content.css'

interface ContactContentProps {
  errors: string[]
}

export const ContactContent = ({ errors }: ContactContentProps) => (
  <div className="contact-content border-accenttwo -[0.188rem_0.125rem_0_0] mb-10 min-h-72 max-w-[calc(100%-1.563rem)] rounded-t-md bg-heading shadow shadow-accentone-300 dark:shadow-accentone-200 sm:min-h-64">
    {errors.length === 0 && (
      <>
        <h2 className="mb-1 inline-block w-80 whitespace-nowrap font-medium tracking-widest motion-safe:animate-typetext">
          Write me a message...
        </h2>
        <p className="text-xl">
          I&apos;d love to know your ideas, questions, or information.
        </p>
        <h3 className="mb-0 font-inconsolata uppercase tracking-widest">
          Reports:
        </h3>
        <p className="mt-0 text-base">
          Did you find a bug or accessibility issue while browsing this site?
          <span className="block">Your report is appreciated!</span>
        </p>
      </>
    )}
    {errors.length > 0 && (
      <>
        <div className="flex items-center pl-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-alert-circle"
            width="40"
            height="40"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
          <h2 className="pl-2">Error processing form</h2>
        </div>
        <ol className="numbered-icons pb-6 pl-16 pr-5 text-xl">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ol>
      </>
    )}
  </div>
)

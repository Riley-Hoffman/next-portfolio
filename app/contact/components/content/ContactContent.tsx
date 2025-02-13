import { Icon } from '@iconify/react'
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
          <Icon
            icon="bi:exclamation-circle-fill"
            className="ml-5 mr-px size-9"
          />
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

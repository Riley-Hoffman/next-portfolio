import { Icon } from '@iconify/react'
import '@/app/styles/numbered-icons.css'

export const ErrorList = ({ errors }: { errors: string[] }) => (
  <>
    <div className="flex items-center pl-5">
      <Icon icon="bi:exclamation-circle-fill" className="ml-5 mr-px size-9" />
      <h2 className="pl-2">Error processing form</h2>
    </div>
    <ol className="numbered-icons pb-6 pl-16 pr-5 text-xl">
      {errors.map((error) => (
        <li key={error} className="before:text-heading">
          {error}
        </li>
      ))}
    </ol>
  </>
)

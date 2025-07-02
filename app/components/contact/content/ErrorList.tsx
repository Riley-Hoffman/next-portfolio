import { Icon } from '@iconify/react'
import '@/app/styles/shared/custom-list.css'

export const ErrorList = ({ errors }: { errors: string[] }) => (
  <div className="pl-10">
    <Icon icon="bi:exclamation-circle-fill" className="mr-px size-9" />
    <h2 className="inline-block pl-2 align-middle">Error processing form</h2>
    <ol className="custom-counter custom-bullet space-y-6 px-5 text-xl">
      {errors.map((error) => (
        <li key={error} className="before:text-heading">
          {error}
        </li>
      ))}
    </ol>
  </div>
)

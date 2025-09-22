import { Icon } from '@iconify/react'
import type { NamedError } from '@/app/types/contact/NamedError.interface'

export const ErrorList = ({ errors }: { errors: NamedError[] }) => (
  <div className="pl-3 md:pl-10">
    <Icon icon="bi:exclamation-circle-fill" className="mr-px size-9" />
    <h2 className="inline-block pl-2 align-middle">Error processing form</h2>
    <ol className="error-list">
      {errors.map(({ name, message }) => (
        <li key={`${name}-${message}`}>
          <span id={`${name}-error`}>Error: {message}</span>
        </li>
      ))}
    </ol>
  </div>
)

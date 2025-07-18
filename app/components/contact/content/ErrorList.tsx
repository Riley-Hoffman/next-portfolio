import { Icon } from '@iconify/react'

export const ErrorList = ({ errors }: { errors: string[] }) => (
  <div className="pl-3 md:pl-10">
    <Icon icon="bi:exclamation-circle-fill" className="mr-px size-9" />
    <h2 className="inline-block pl-2 align-middle">Error processing form</h2>
    <ol className="error-list">
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ol>
  </div>
)

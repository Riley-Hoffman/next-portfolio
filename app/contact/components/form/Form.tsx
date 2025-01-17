import { Legend } from './Legend'
import { FormField } from './FormField'
import { SubmitButton } from './SubmitButton'
import { useContactForm } from '../../hooks/useContactForm'

export interface FormData {
  name: string
  email: string
  message: string
}

interface FormProps {
  onErrors: (errors: string[]) => void
}

export const Form = ({ onErrors }: FormProps) => {
  const {
    formState: { name, email, message },
    handleChange,
    handleFormSubmit,
  } = useContactForm({
    initialFormState: {
      name: '',
      email: '',
      message: '',
    },
    onErrors,
  })
  return (
    <form className="px-5 pb-10 pt-5" onSubmit={handleFormSubmit}>
      <fieldset className="pb-5">
        <Legend />
        <div className="pb-6 md:flex md:items-center md:justify-between md:gap-5">
          <FormField
            classes="mb-6 md:mb-0"
            type="text"
            value={name}
            handleChange={handleChange}
            name="name"
            placeholder="Enter your name.."
          />
          <FormField
            type="email"
            value={email}
            handleChange={handleChange}
            name="email"
            placeholder="Enter your email.."
          />
        </div>
        <FormField
          type="textarea"
          value={message}
          handleChange={handleChange}
          name="message"
          placeholder="Enter your message.."
        />
      </fieldset>
      <SubmitButton handleSubmission={handleFormSubmit} />
    </form>
  )
}

import { Legend } from './Legend'
import { FormField } from './FormField'
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
    handleSubmission,
  } = useContactForm({
    initialFormState: {
      name: '',
      email: '',
      message: '',
    },
    onErrors,
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const isValid = form.reportValidity()
    if (!isValid) {
      handleSubmission()
      return
    }
    await handleFormSubmit(e)
  }
  return (
    <form className="px-5 pb-10 pt-5" noValidate onSubmit={onSubmit}>
      <fieldset className="pb-5">
        <Legend />
        <FormField
          classes="lg:mb-0 lg:mr-[5%]"
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
        <FormField
          type="textarea"
          value={message}
          handleChange={handleChange}
          name="message"
          placeholder="Enter your message.."
        />
      </fieldset>
      <button type="submit" className="button p-3">
        Submit
      </button>
    </form>
  )
}

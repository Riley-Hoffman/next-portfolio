import { Legend } from './Legend'
import { FormField } from './FormField'
import { useContactForm } from '../../hooks/useContactForm'
import './styles/form.css'

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
    <form className="px-5 pb-10 pt-5" noValidate onSubmit={handleFormSubmit}>
      <fieldset className="pb-5">
        <Legend />
        <FormField
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

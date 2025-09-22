import { FormField } from './FormField'
import { useContactForm } from '@/app/hooks/contact/useContactForm'
import type { NamedError } from '@/app/types/contact/NamedError.interface'

interface FormProps {
  onErrors: (errors: NamedError[]) => void
}

export const Form = ({ onErrors }: FormProps) => {
  const { formState, errors, handleChange, handleSubmit } = useContactForm({
    initialFormState: {
      name: '',
      email: '',
      message: '',
    },
    onErrors,
  })

  const fields: Array<{
    type: 'text' | 'email' | 'textarea'
    name: keyof typeof formState
    placeholder: string
  }> = [
    { type: 'text', name: 'name', placeholder: 'Enter your name..' },
    { type: 'email', name: 'email', placeholder: 'Enter your email..' },
    { type: 'textarea', name: 'message', placeholder: 'Enter your message..' },
  ]

  return (
    <form className="p-5 pb-10" noValidate onSubmit={handleSubmit}>
      <fieldset className="pb-5">
        <legend className="sr-only">Contact Info and Message</legend>
        {fields.map(({ type, name, placeholder }) => (
          <FormField
            key={name}
            type={type}
            name={name}
            value={formState[name]}
            handleChange={handleChange}
            placeholder={placeholder}
            error={errors[name]}
          />
        ))}
      </fieldset>
      <button type="submit" className="button p-3">
        Submit
      </button>
    </form>
  )
}

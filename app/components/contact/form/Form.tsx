import { Legend } from './Legend'
import { FormField } from './FormField'
import { useContactForm } from '@/app/hooks/contact/useContactForm'
import '@/app/styles/contact/form.css'

interface FormProps {
  onErrors: (errors: string[]) => void
}

export const Form = ({ onErrors }: FormProps) => {
  const { formState, handleChange, handleFormSubmit } = useContactForm({
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
    <form className="px-5 pb-10 pt-5" noValidate onSubmit={handleFormSubmit}>
      <fieldset className="pb-5">
        <Legend />
        {fields.map(({ type, name, placeholder }) => (
          <FormField
            key={name}
            type={type}
            name={name}
            value={formState[name]}
            handleChange={handleChange}
            placeholder={placeholder}
          />
        ))}
      </fieldset>
      <button type="submit" className="button p-3">
        Submit
      </button>
    </form>
  )
}

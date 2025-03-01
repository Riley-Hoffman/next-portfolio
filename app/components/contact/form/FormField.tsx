import clsx from 'clsx'
import { FormValue } from '@/app/types/contact/FormValue.interface'

interface FormFieldProps {
  type: 'text' | 'email' | 'textarea'
  value: string
  handleChange: (
    field: keyof FormValue
  ) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  name: keyof FormValue
  placeholder: string
}

export const FormField = ({
  type,
  value,
  handleChange,
  name,
  placeholder,
}: FormFieldProps) => {
  const fieldAttributes = {
    id: name as string,
    name: name as string,
    placeholder,
    required: true,
    value,
    onChange: handleChange(name),
    className: 'form-field',
  }

  const isTextarea = type === 'textarea'

  return (
    <>
      <label
        className={clsx('mb-2 block text-xl capitalize', {
          'lg:inline': !isTextarea,
        })}
        htmlFor={name as string}
      >
        {name as string}:
      </label>
      {isTextarea ? (
        <textarea {...fieldAttributes} spellCheck rows={8} />
      ) : (
        <input {...fieldAttributes} type={type} enterKeyHint="next" />
      )}
    </>
  )
}

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
  const formFieldProps = {
    id: name as string,
    name: name as string,
    placeholder,
    required: true,
    value,
    onChange: handleChange(name),
    className: 'form-field',
  }

  return (
    <>
      <label
        className={clsx('mb-2 block text-xl capitalize', {
          'lg:inline': type !== 'textarea',
        })}
        htmlFor={name as string}
      >
        {name as string}:
      </label>
      {type !== 'textarea' ? (
        <input {...formFieldProps} type={type} enterKeyHint="next" />
      ) : (
        <textarea {...formFieldProps} spellCheck rows={8} />
      )}
    </>
  )
}

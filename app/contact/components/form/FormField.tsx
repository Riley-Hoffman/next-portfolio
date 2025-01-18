import clsx from 'clsx'
import { FormData } from './Form'

interface FormFieldProps {
  type: 'text' | 'email' | 'textarea'
  value: string
  handleChange: (
    field: keyof FormData
  ) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  name: keyof FormData
  placeholder: string
  classes?: string
}

export const FormField = ({
  type,
  value,
  handleChange,
  name,
  placeholder,
  classes,
}: FormFieldProps) => {
  const commonProps = {
    className: clsx('form-field', classes),
    id: name as string,
    name: name as string,
    placeholder,
    required: true,
    value,
    onChange: handleChange(name),
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
        <input
          {...commonProps}
          type={type}
          enterKeyHint="next"
        />
      ) : (
        <textarea
          {...commonProps}
          spellCheck={true}
          rows={8}
        />
      )}
    </>
  )
}

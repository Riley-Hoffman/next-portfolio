import clsx from 'clsx'
import { memo } from 'react'
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
  error?: string
  'aria-describedby'?: string
}

export const FormField = memo(
  ({
    type,
    value,
    handleChange,
    name,
    placeholder,
    error,
    'aria-describedby': ariaDescribedby,
  }: FormFieldProps) => {
    const errorId = `${name}-error`
    const fieldAttributes = {
      id: name as string,
      name: name as string,
      placeholder,
      required: true,
      value,
      onChange: handleChange(name),
      className: 'form-field',
      'aria-invalid': error ? true : false,
      'aria-describedby': error ? errorId : ariaDescribedby,
    }

    const isTextarea = type === 'textarea'

    return (
      <>
        <label
          className={clsx('mb-2 block text-xl capitalize', {
            'lg:inline': !isTextarea,
          })}
          htmlFor={name}
        >
          {name}:
        </label>
        {isTextarea ? (
          <textarea {...fieldAttributes} spellCheck rows={8} />
        ) : (
          <input {...fieldAttributes} type={type} enterKeyHint="next" />
        )}
      </>
    )
  }
)

FormField.displayName = 'FormField'

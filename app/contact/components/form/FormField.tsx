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
}: FormFieldProps) => (
  <>
    <label
      className="mb-2 inline-block min-w-14 text-xl capitalize"
      htmlFor={name as string}
    >
      {name as string}:
    </label>
    {type === 'textarea' ? (
      <textarea
        className={clsx('form-field inverted', classes)}
        id={name as string}
        name={name as string}
        placeholder={placeholder}
        required={true}
        value={value}
        spellCheck={true}
        rows={8}
        onChange={handleChange(name)}
      />
    ) : (
      <input
        className={clsx('form-field', classes)}
        id={name as string}
        name={name as string}
        placeholder={placeholder}
        type={type}
        enterKeyHint="next"
        required={true}
        value={value}
        onChange={handleChange(name)}
      />
    )}
  </>
)

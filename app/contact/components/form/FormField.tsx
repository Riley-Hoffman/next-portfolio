import { FormData } from "./Form"

interface FormFieldProps {
  type: "text" | "email" | "textarea"
  value: string
  handleChange: (
    field: keyof FormData
  ) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  name: keyof FormData
  placeholder: string
  required?: boolean
}

export const FormField = ({
  type,
  value,
  handleChange,
  name,
  placeholder,
  required = true,
}: FormFieldProps) => (
  <>
    <label
      className="mb-2 inline-block min-w-14 text-xl capitalize"
      htmlFor={name as string}
    >
      {name as string}:
    </label>
    {type === "textarea" ? (
      <textarea
        className="form-field inverted"
        id={name as string}
        name={name as string}
        placeholder={placeholder}
        required={required}
        value={value}
        spellCheck={true}
        rows={8}
        onChange={handleChange(name)}
      />
    ) : (
      <input
        className="form-field"
        id={name as string}
        name={name as string}
        placeholder={placeholder}
        type={type}
        enterKeyHint="next"
        required={required}
        value={value}
        onChange={handleChange(name)}
      />
    )}
  </>
)

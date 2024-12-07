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
}: FormFieldProps) => {
  const commonClasses =
    // caret color
    "gradient-border w-full border-2 bg-[#f8f3f9] p-2 font-source-sans text-lg caret-[#12121c] focus-visible:m-[2px] focus-visible:w-[calc(100%-4px)] focus-visible:border-0 contrast-more:bg-white dark:text-[#12121c]"
  return (
    <>
      <label
        className="mb-2 inline-block min-w-14 text-xl capitalize"
        htmlFor={name as string}
      >
        {name as string}:
      </label>
      {type === "textarea" ? (
        <textarea
          className={`inverted ${commonClasses}`}
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
          className={commonClasses}
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
}

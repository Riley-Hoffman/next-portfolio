import { FormState } from './Form';

interface FormFieldProps {
  type: 'text' | 'email' | 'textarea';
  value: string;
  handleChange: (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: keyof FormState;
  placeholder: string;
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  type,
  value,
  handleChange,
  name,
  placeholder,
  required = true,
}) => {
  return (
    <>
      <label className="inline-block text-xl capitalize mb-2" htmlFor={name as string}>{name as string}:</label>
      {type === 'textarea' ? (
        <textarea className="w-full p-2 border-2 bg-[#f8f3f9] rounded-sm font-source-sans text-lg gradient-border contrast-more:bg-white" id={name as string} name={name as string} placeholder={placeholder} required={required} value={value} spellCheck="true" rows={8} onChange={handleChange(name)} />
      ) : (
        <input className="w-full p-2 border-2 bg-[#f8f3f9] rounded-sm font-source-sans text-lg gradient-border contrast-more:bg-white" id={name as string} name={name as string} placeholder={placeholder} type={type} enterKeyHint="next" required={required} value={value} onChange={handleChange(name)} />
      )}
    </>
  );
};

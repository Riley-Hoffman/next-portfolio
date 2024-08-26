import { FormState } from './Form';

interface NameInputProps {
    name: string;
    handleChange: (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
export const NameInput: React.FC<NameInputProps> = ({ name, handleChange }) => {
  return (
    <input className="w-full p-2 border-2 bg-[#f8f3f9] rounded-sm font-source-sans text-lg gradient-border contrast-more:bg-white" enterKeyHint="next" id="name" name="name" placeholder="Your name.." type="text" required value={name} onChange={handleChange('name')} />
  )
}

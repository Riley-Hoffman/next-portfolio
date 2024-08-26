import { FormState } from './Form';

interface EmailInputProps {
    email: string;
    handleChange: (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
export const EmailInput: React.FC<EmailInputProps> = ({ email, handleChange }) => {
  return (
    <input className="w-full p-2 border-2 bg-[#f8f3f9] rounded-sm font-source-sans text-lg gradient-border contrast-more:bg-white" enterKeyHint="next" id="email" name="email" placeholder="Your email.." type="email" required value={email} onChange={handleChange('email')} />
  )
}

import { FormState } from './Form';

interface MessageTextareaProps {
    message: string;
    handleChange: (field: keyof FormState) => (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  }
export const MessageTextarea: React.FC<MessageTextareaProps> = ({ message, handleChange }) => {
  return (
    <textarea className="w-full p-2 border-2 bg-[#f8f3f9] rounded-sm font-source-sans text-lg gradient-border contrast-more:bg-white" id="message" name="message" placeholder="Write me a message.." spellCheck={true} rows={8} required value={message} onChange={handleChange('message')} ></textarea>
  )
}

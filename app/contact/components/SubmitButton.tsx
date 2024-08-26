interface NameInputProps {
    handleSubmitClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
export const SubmitButton: React.FC<NameInputProps> = ({ handleSubmitClick }) => {
  return (
    <button type="submit" className="p-3 button" onClick={handleSubmitClick}>Submit</button>
  )
}

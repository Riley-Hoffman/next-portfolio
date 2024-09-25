interface InputProps {
    handleSubmitClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SubmitButton = ({ handleSubmitClick }: InputProps) => (
  <button type="submit" className="p-3 button" onClick={handleSubmitClick}>Submit</button>
)


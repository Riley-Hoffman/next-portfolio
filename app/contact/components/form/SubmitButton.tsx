interface InputProps {
  handleSubmitClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const SubmitButton = ({ handleSubmitClick }: InputProps) => (
  <button type="submit" className="button p-3" onClick={handleSubmitClick}>
    Submit
  </button>
)

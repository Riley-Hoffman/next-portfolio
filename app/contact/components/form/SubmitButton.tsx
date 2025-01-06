interface InputProps {
  handleSubmission: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const SubmitButton = ({ handleSubmission }: InputProps) => (
  <button type="submit" className="button p-3" onClick={handleSubmission}>
    Submit
  </button>
)
